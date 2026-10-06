#!/usr/bin/env python3
"""Sound design for a composition.

Synthesises every animation sound effect from the cue list the composition exports
(`node scripts/render.mjs <comp> --cues cues.json`) and mixes them into one track.

    python3 scripts/sound.py <cues.json> <out.m4a>

Needs numpy and ffmpeg. Everything is seeded, so the same cues always give the same audio.
"""
import json
import subprocess
import sys
from pathlib import Path

import numpy as np

SR = 48000
TARGET_LUFS = -17.0


# --------------------------------------------------------------------------- helpers

def db(x):
    return 10 ** (x / 20)


def secs(n):
    return np.arange(n) / SR


def noise(n, seed):
    return np.random.default_rng(seed).standard_normal(n)


def norm(x):
    peak = np.max(np.abs(x))
    return x / peak if peak > 0 else x


def fade(x, fin=0.002, fout=0.01):
    n = len(x)
    a, b = min(int(fin * SR), n), min(int(fout * SR), n)
    if a:
        x[:a] *= np.sin(np.linspace(0, np.pi / 2, a)) ** 2
    if b:
        x[n - b:] *= np.cos(np.linspace(0, np.pi / 2, b)) ** 2
    return x


def svf(x, fc, q=0.707, mode="bp"):
    """Time-varying TPT state-variable filter; `fc` is a scalar or one cutoff per sample."""
    fc = np.broadcast_to(np.asarray(fc, float), x.shape)
    g = np.tan(np.pi * np.clip(fc, 20, SR * 0.45) / SR)
    k = 1.0 / q
    a1 = 1 / (1 + g * (g + k))
    a2, a3 = g * a1, g * g * a1
    v1s, v2s = np.empty_like(x), np.empty_like(x)
    ic1 = ic2 = 0.0
    for i in range(len(x)):
        v3 = x[i] - ic2
        v1 = a1[i] * ic1 + a2[i] * v3
        v2 = ic2 + a2[i] * ic1 + a3[i] * v3
        ic1, ic2 = 2 * v1 - ic1, 2 * v2 - ic2
        v1s[i], v2s[i] = v1, v2
    if mode == "bp":
        return v1s * k  # unity gain at the centre frequency
    if mode == "lp":
        return v2s
    return x - k * v1s - v2s


def sweep(f0, f1, n, curve=1.0):
    """Geometric frequency sweep from f0 to f1 over n samples."""
    p = np.linspace(0, 1, n) ** curve
    return f0 * (f1 / f0) ** p


def osc(freq, n=None):
    """Sine oscillator; `freq` is a scalar (needs n) or one frequency per sample."""
    if np.isscalar(freq):
        return np.sin(2 * np.pi * freq * secs(n))
    return np.sin(2 * np.pi * np.cumsum(freq) / SR)


def biquad_mag(kind, f0, freqs, q=0.707, gain_db=0.0):
    """Magnitude response of an RBJ biquad, evaluated at `freqs` (used for zero-phase FFT EQ)."""
    A = 10 ** (gain_db / 40)
    w0 = 2 * np.pi * f0 / SR
    al = np.sin(w0) / (2 * q)
    c = np.cos(w0)
    if kind == "hp":
        b = [(1 + c) / 2, -(1 + c), (1 + c) / 2]; a = [1 + al, -2 * c, 1 - al]
    elif kind == "lp":
        b = [(1 - c) / 2, 1 - c, (1 - c) / 2]; a = [1 + al, -2 * c, 1 - al]
    elif kind == "peak":
        b = [1 + al * A, -2 * c, 1 - al * A]; a = [1 + al / A, -2 * c, 1 - al / A]
    elif kind == "lowshelf":
        s = 2 * np.sqrt(A) * al
        b = [A * ((A + 1) - (A - 1) * c + s), 2 * A * ((A - 1) - (A + 1) * c), A * ((A + 1) - (A - 1) * c - s)]
        a = [(A + 1) + (A - 1) * c + s, -2 * ((A - 1) + (A + 1) * c), (A + 1) + (A - 1) * c - s]
    elif kind == "highshelf":
        s = 2 * np.sqrt(A) * al
        b = [A * ((A + 1) + (A - 1) * c + s), -2 * A * ((A - 1) + (A + 1) * c), A * ((A + 1) + (A - 1) * c - s)]
        a = [(A + 1) - (A - 1) * c + s, 2 * ((A - 1) - (A + 1) * c), (A + 1) - (A - 1) * c - s]
    else:
        raise ValueError(kind)
    z = np.exp(-1j * 2 * np.pi * freqs / SR)
    return np.abs((b[0] + b[1] * z + b[2] * z * z) / (a[0] + a[1] * z + a[2] * z * z))


def eq(x, bands):
    """Zero-phase EQ: multiply the spectrum by the product of the bands' magnitude responses."""
    n = len(x)
    size = 1 << int(np.ceil(np.log2(n + 1)))
    freqs = np.fft.rfftfreq(size, 1 / SR)
    mag = np.ones_like(freqs)
    for band in bands:
        mag *= biquad_mag(band[0], band[1], freqs, *band[2:])
    return np.fft.irfft(np.fft.rfft(x, size) * mag, size)[:n]


def convolve(x, ir):
    size = 1 << int(np.ceil(np.log2(len(x) + len(ir))))
    return np.fft.irfft(np.fft.rfft(x, size) * np.fft.rfft(ir, size), size)[: len(x)]


def room_ir(decay, seed, predelay=0.015, length=None):
    """Stereo noise-based reverb impulse (RT60 ≈ 6.9 × decay), darker as it decays."""
    length = length or decay * 8
    n = int(length * SR)
    t = secs(n)
    out = []
    for ch in range(2):
        nz = noise(n, seed + ch)
        bright, dark = eq(nz, [("lp", 7000)]), eq(nz, [("lp", 1800)])
        mix = np.exp(-t / (decay * 1.5))
        ir = (bright * mix + dark * (1 - mix)) * np.exp(-t / decay)
        ir = np.concatenate([np.zeros(int(predelay * SR)), ir])
        out.append(ir / np.sqrt(np.sum(ir ** 2)))
    return out


def pan_gains(p):
    a = (np.clip(p, -1, 1) + 1) * np.pi / 4
    return np.cos(a), np.sin(a)


# --------------------------------------------------------------------------- sound effects
# Every generator returns a mono buffer (peak-normalised by the mixer) starting at the cue time.

def fx_whoosh(c, seed):
    dur, peak, size = c.get("dur", 0.5), c.get("peak", 0.6), c.get("size", 1.0)
    n = int(dur * SR)
    p = np.linspace(0, 1, n)
    env = np.where(p < peak, (p / peak) ** 2.2, np.exp(-(p - peak) / max(1 - peak, 0.05) * 3.2))
    lo, hi = 260 / size, 2600 / size ** 0.4
    fc = np.where(p < peak, lo * (hi / lo) ** (p / peak), hi * (lo * 1.6 / hi) ** ((p - peak) / max(1 - peak, 0.05)))
    nz = noise(n, seed)
    body = svf(nz, fc, 0.9) + 0.6 * svf(nz, fc * 0.45, 0.7, "lp")
    tail = np.zeros(int(0.25 * SR))
    return fade(np.concatenate([body * env, tail]), 0.01, 0.02)


def fx_swish(c, seed):
    n = int(0.24 * SR)
    p = np.linspace(0, 1, n)
    env = np.where(p < 0.4, (p / 0.4) ** 2, np.exp(-(p - 0.4) * 9))
    fc = np.where(p < 0.4, 1400 * (5200 / 1400) ** (p / 0.4), 5200 * (2200 / 5200) ** ((p - 0.4) / 0.6))
    return fade(svf(noise(n, seed), fc, 1.1) * env, 0.004, 0.02)


def fx_swell(c, seed):
    """Reversed-reverb style swell that lands when a keyword settles."""
    n = int(0.6 * SR)
    p = np.linspace(0, 1, n)
    env = p ** 3
    fc = 700 * (4200 / 700) ** p
    x = svf(noise(n, seed), fc, 1.4) * env + 0.25 * osc(sweep(420, 840, n)) * env
    return fade(x, 0.01, 0.04)


def fx_riser(c, seed):
    dur = c.get("dur", 0.7)
    n = int(dur * SR)
    p = np.linspace(0, 1, n)
    env = p ** 2.5
    x = svf(noise(n, seed), sweep(300, 6000, n, 1.3), 1.2) * env
    x += 0.18 * osc(sweep(180, 720, n, 1.4)) * env
    return fade(x, 0.02, 0.01)


def fx_impact(c, seed):
    size = c.get("size", 1.0)
    n = int(1.4 * SR)
    t = secs(n)
    sub = osc(45 + 65 * np.exp(-t / 0.04)) * np.exp(-t / (0.32 * size))
    thud = svf(noise(n, seed), 380, 0.8, "lp") * np.exp(-t / 0.06) * 0.9
    click = svf(noise(n, seed + 1), 2500, 0.7, "hp") * np.exp(-t / 0.004) * 0.6
    x = np.tanh(1.6 * (sub + thud + click)) / np.tanh(1.6)
    return fade(x, 0.0005, 0.05)


def fx_thump(c, seed):
    n = int(0.4 * SR)
    t = secs(n)
    x = osc(55 + 40 * np.exp(-t / 0.03)) * np.exp(-t / 0.11)
    x += svf(noise(n, seed), 260, 0.8, "lp") * np.exp(-t / 0.035) * 0.8
    return fade(x, 0.0005, 0.03)


def fx_pop(c, seed):
    f = c.get("freq", 600)
    n = int(0.35 * SR)
    t = secs(n)
    x = osc(f * (1 + 0.9 * np.exp(-t / 0.012))) * np.exp(-t / 0.065)
    x += 0.25 * osc(2 * f * (1 + 0.9 * np.exp(-t / 0.012))) * np.exp(-t / 0.03)
    x += 0.3 * svf(noise(n, seed), 3000, 1.0) * np.exp(-t / 0.003)
    return fade(x, 0.0015, 0.02)


def fx_tick(c, seed):
    n = int(0.07 * SR)
    t = secs(n)
    x = osc(2600, n) * np.exp(-t / 0.008) + 0.5 * svf(noise(n, seed), 4500, 0.7, "hp") * np.exp(-t / 0.003)
    return fade(x, 0.0005, 0.01)


def fx_click(c, seed):
    n = int(0.12 * SR)
    t = secs(n)
    x = osc(3200, n) * np.exp(-t / 0.006) + 0.35 * osc(700, n) * np.exp(-t / 0.015)
    x += 0.4 * svf(noise(n, seed), 5000, 0.7, "hp") * np.exp(-t / 0.002)
    d = int(0.028 * SR)
    x[d:] += 0.7 * osc(2100, n - d) * np.exp(-t[: n - d] / 0.01)
    return fade(x, 0.0005, 0.01)


def fx_ping(c, seed):
    f = c.get("freq", 880)
    n = int(1.8 * SR)
    t = secs(n)
    fm = f * (1 + 0.003 * np.sin(2 * np.pi * 5 * t))
    x = (osc(fm) + 0.2 * osc(2 * fm) + 0.08 * osc(3 * fm)) * np.exp(-t / 0.45)
    return fade(x, 0.004, 0.1)


def fx_zip(c, seed):
    dur = c.get("dur", 0.42)
    n = int(dur * SR)
    p = np.linspace(0, 1, n)
    env = p ** 1.5
    x = svf(noise(n, seed), sweep(900, 5500, n), 2.0) * env + 0.2 * osc(sweep(500, 1500, n)) * env
    return fade(x, 0.005, 0.03)


def fx_draw(c, seed):
    dur = c.get("dur", 1.0)
    n = int(dur * SR)
    t = secs(n)
    grain = np.abs(svf(noise(n, seed + 7), 22, 0.7, "lp"))
    grain = 0.4 + grain / (grain.max() + 1e-9)
    x = svf(noise(n, seed), 2200, 1.5) * grain + 0.1 * osc(sweep(300, 600, n))
    env = np.minimum(1, t / 0.08) * np.minimum(1, (dur - t) / 0.3)
    return fade(x * env, 0.01, 0.02)


def bell(f, n, partials, amps, taus):
    t = secs(n)
    return sum(a * osc(f * r, n) * np.exp(-t / tau) for r, a, tau in zip(partials, amps, taus))


def fx_chime(c, seed):
    notes = c.get("notes", [1047, 1568])
    n = int(1.6 * SR)
    x = np.zeros(n)
    for i, f in enumerate(notes):
        d = int(i * 0.09 * SR)
        x[d:] += bell(f, n - d, [1, 2.0, 3.01, 4.2], [1, 0.35, 0.15, 0.08], [0.6, 0.35, 0.2, 0.12])
    return fade(x, 0.002, 0.1)


def fx_coin(c, seed):
    n = int(1.6 * SR)
    t = secs(n)
    ratios, amps, taus = [1, 2.76, 5.40, 8.93, 13.34], [1, 0.6, 0.4, 0.25, 0.15], [0.9, 0.5, 0.3, 0.2, 0.12]
    x = bell(1750, n, ratios, amps, taus)
    d = int(0.075 * SR)
    x[d:] += 0.35 * bell(1790, n - d, ratios, amps, taus)
    x += 0.4 * svf(noise(n, seed), 6000, 0.7, "hp") * np.exp(-t / 0.004)
    return fade(x, 0.0005, 0.1)


def fx_scroll(c, seed):
    """Ratchet ticks whose rate follows the scroll speed (power2.inOut), plus a soft whirr."""
    dur = c.get("dur", 1.5)
    n = int(dur * SR)
    p = np.linspace(0, 1, n)
    pos = np.where(p < 0.5, 2 * p * p, 1 - (-2 * p + 2) ** 2 / 2)
    speed = np.gradient(pos)
    speed /= speed.max()
    x = np.zeros(n)
    steps = np.nonzero(np.diff(np.floor(pos * 12)))[0]
    tick = osc(1800, int(0.03 * SR)) * np.exp(-secs(int(0.03 * SR)) / 0.004)
    for s in steps:
        e = min(n, s + len(tick))
        x[s:e] += 0.6 * tick[: e - s]
    return fade(x, 0.01, 0.03)


def fx_shimmer(c, seed):
    dur = c.get("dur", 1.2)
    n = int((dur + 0.3) * SR)
    rng = np.random.default_rng(seed)
    x = np.zeros(n)
    for _ in range(int(40 * dur)):
        start = rng.uniform(0, 0.7) ** 1.6 * dur
        f, tau = rng.uniform(3000, 9000), rng.uniform(0.04, 0.14)
        m = int(0.4 * SR)
        s = int(start * SR)
        e = min(n, s + m)
        g = (1 - start / dur) * rng.uniform(0.3, 1)
        x[s:e] += g * (osc(f, m) * np.exp(-secs(m) / tau))[: e - s]
    return fade(x, 0.002, 0.1)


def fx_sting(c, seed):
    """Warm, low-passed A major add9 pad that closes the film."""
    dur = c.get("dur", 3.8)
    n = int(dur * SR)
    t = secs(n)
    x = np.zeros(n)
    for f in [110.0, 164.81, 220.0, 277.18, 329.63, 493.88]:
        for det in (-0.003, 0.003):
            for h in range(1, 9):
                x += (0.55 ** (h - 1)) / h * np.sin(2 * np.pi * f * (1 + det) * h * t + h * det * 400)
    x = eq(x, [("lp", 1500, 0.6), ("hp", 90)])
    env = np.minimum(1, t / 0.9) ** 2 * np.minimum(1, (dur - t) / 1.4) * (1 + 0.08 * np.sin(2 * np.pi * 0.25 * t))
    return fade(x * env, 0.01, 0.05)


FX = {
    # type: (generator, base gain dB, reverb send)
    "whoosh": (fx_whoosh, -12, 0.2), "swish": (fx_swish, -15, 0.15), "swell": (fx_swell, -21, 0.3),
    "riser": (fx_riser, -16, 0.25), "impact": (fx_impact, -13, 0.25), "thump": (fx_thump, -11, 0.1),
    "pop": (fx_pop, -16, 0.15), "tick": (fx_tick, -18, 0.1), "click": (fx_click, -17, 0.1),
    "ping": (fx_ping, -19, 0.6), "zip": (fx_zip, -17, 0.15), "draw": (fx_draw, -27, 0.1),
    "chime": (fx_chime, -18, 0.5), "coin": (fx_coin, -17, 0.4), "scroll": (fx_scroll, -20, 0.1),
    "shimmer": (fx_shimmer, -21, 0.7), "sting": (fx_sting, -17, 0.4),
}


# --------------------------------------------------------------------------- loudness (BS.1770)

def lufs(stereo):
    k = [("highshelf", 1681.97, 0.7072, 4.0), ("hp", 38.13, 0.5003)]
    chans = [eq(ch, k) for ch in stereo]
    block, hop = int(0.4 * SR), int(0.1 * SR)
    powers = np.array([sum(np.mean(ch[i:i + block] ** 2) for ch in chans)
                       for i in range(0, len(chans[0]) - block, hop)])
    loud = -0.691 + 10 * np.log10(powers + 1e-12)
    gated = powers[loud > -70]
    rel = -0.691 + 10 * np.log10(np.mean(gated)) - 10
    gated = powers[(loud > -70) & (loud > rel)]
    return -0.691 + 10 * np.log10(np.mean(gated))


def encode(stereo, path):
    pcm = np.ascontiguousarray(stereo.T.astype(np.float32)).tobytes()
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "f32le", "-ar", str(SR), "-ac", "2", "-i", "-",
                    "-af", "alimiter=limit=0.79:attack=3:release=60:level=disabled",
                    "-c:a", "aac", "-b:a", "256k", str(path)], input=pcm, check=True)


# --------------------------------------------------------------------------- main

def main():
    cues_path, out_path = sys.argv[1], Path(sys.argv[2])
    data = json.loads(Path(cues_path).read_text())
    n = int(data["duration"] * SR)
    dry, send = np.zeros((2, n + SR * 4)), np.zeros((2, n + SR * 4))

    for i, c in enumerate(data["cues"]):
        gen, base, rev = FX[c["type"]]
        x = norm(gen(c, seed=1000 + i)) * db(base + c.get("gain", 0))
        gl, gr = pan_gains(c.get("pan", 0))
        s = int(c["t"] * SR)
        e = s + len(x)
        dry[0, s:e] += gl * x
        dry[1, s:e] += gr * x
        send[0, s:e] += gl * x * rev
        send[1, s:e] += gr * x * rev

    ir_l, ir_r = room_ir(0.22, 42)
    mix = (dry + np.stack([convolve(send[0], ir_l), convolve(send[1], ir_r)]) * db(-4))[:, :n]
    out_path.parent.mkdir(parents=True, exist_ok=True)
    encode(mix * db(TARGET_LUFS - lufs(mix)), out_path)
    print(f"{len(data['cues'])} effects → {out_path}")


if __name__ == "__main__":
    main()

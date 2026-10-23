"""Synthèse des bruitages de l'épisode 01 (100 % procéduraux → libres de droits, CC0).

Écrit public/sfx/*.mp3 et src/sfx.json (liste des déclenchements à la frame près).
Les temps sont repris des constantes des scènes (src/constants.ts + scenes/*.tsx).
"""
import json, os, subprocess, wave
import numpy as np

SR = 44100
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'sfx')
os.makedirs(OUT, exist_ok=True)
rng = np.random.default_rng(7)


def t(d):
    return np.arange(int(SR * d)) / SR


def env(n, a=0.005, d=0.3):
    x = np.arange(n) / SR
    return np.minimum(1, x / max(a, 1e-4)) * np.exp(-x / d)


def lp(x, fc):
    """Passe-bas 1 pôle (fc scalaire ou tableau)."""
    fc = np.broadcast_to(np.asarray(fc, dtype=float), x.shape)
    a = np.exp(-2 * np.pi * fc / SR)
    y = np.zeros_like(x)
    acc = 0.0
    for i in range(len(x)):
        acc = (1 - a[i]) * x[i] + a[i] * acc
        y[i] = acc
    return y


def hp(x, fc):
    return x - lp(x, fc)


def bp(x, lo, hi):
    return lp(hp(x, lo), hi)


def noise(d):
    return rng.standard_normal(int(SR * d))


def tone(f, d, ph=0):
    return np.sin(2 * np.pi * np.cumsum(np.broadcast_to(f, (int(SR * d),)) / SR) + ph)


def reverb(x, wet=0.35, size=1.0):
    y = np.concatenate([x, np.zeros(int(SR * 1.2 * size))])
    out = y.copy()
    for dl, g in [(0.029, 0.5), (0.037, 0.45), (0.041, 0.42), (0.053, 0.38), (0.071, 0.3), (0.097, 0.25)]:
        k = int(SR * dl * size)
        tmp = np.zeros_like(y)
        for rep in range(1, 8):
            if k * rep < len(y):
                tmp[k * rep:] += y[:len(y) - k * rep] * (g ** rep)
        out += tmp * wet
    return lp(out, 6000)


def bell(freqs, d, decay, amp=None):
    x = np.zeros(int(SR * d))
    for i, f in enumerate(freqs):
        x += (amp[i] if amp else 1 / (i + 1)) * tone(f, d) * env(len(x), 0.001, decay / (1 + i * 0.4))
    return x


def mixat(base, x, at):
    i = int(at * SR)
    if i + len(x) > len(base):
        base = np.concatenate([base, np.zeros(i + len(x) - len(base))])
    base[i:i + len(x)] += x
    return base


def save(name, x, peak=0.9):
    x = x / (np.max(np.abs(x)) + 1e-9) * peak
    fade = min(len(x), int(SR * 0.01))
    x[-fade:] *= np.linspace(1, 0, fade)
    wav = os.path.join(OUT, name + '.wav')
    with wave.open(wav, 'w') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
        w.writeframes((x * 32767).astype(np.int16).tobytes())
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', wav, '-codec:a', 'libmp3lame', '-q:a', '2', os.path.join(OUT, name + '.mp3')], check=True)
    os.remove(wav)


# ---------------------------------------------------------------- sons
def boom():
    d = 3.0
    f = 52 * np.exp(-t(d) * 0.6) + 26
    x = tone(f, d) * env(int(SR * d), 0.004, 0.9)
    x += lp(noise(d), 120) * env(int(SR * d), 0.002, 0.25) * 3
    return reverb(x, 0.3, 1.4)


def whoosh(d=0.7, lo=300, hi=3000):
    n = noise(d)
    k = np.sin(np.pi * np.linspace(0, 1, len(n))) ** 2
    fc = lo + (hi - lo) * k
    return lp(hp(n, 150), fc) * k


def shimmer(d=1.6):
    x = np.zeros(int(SR * d))
    for i in range(14):
        f = rng.uniform(1800, 6500)
        st = rng.uniform(0, d * 0.5)
        part = tone(f * (1 + 0.15 * t(d - st)), d - st) * env(int(SR * (d - st)), 0.05, 0.4) * rng.uniform(0.3, 1)
        x = mixat(x, part, st)
    x *= np.linspace(0.6, 1, len(x)) ** 0.5
    return reverb(x, 0.5)


def tap():
    return hp(noise(0.04), 2500) * env(int(SR * 0.04), 0.0005, 0.006) + 0.4 * tone(1800, 0.04) * env(int(SR * 0.04), 0.0005, 0.01)


def swipe():
    n = hp(noise(0.14), 1500)
    k = np.sin(np.pi * np.linspace(0, 1, len(n)))
    return lp(n, 1500 + 5000 * k) * k * 0.6 + np.pad(tap() * 0.6, (0, len(n) - len(tap())))


def tick():
    return 0.7 * tone(2400, 0.03) * env(int(SR * 0.03), 0.0003, 0.004) + hp(noise(0.03), 3000) * env(int(SR * 0.03), 0.0003, 0.003)


def tock():
    return 0.7 * tone(1700, 0.03) * env(int(SR * 0.03), 0.0003, 0.005) + hp(noise(0.03), 2000) * env(int(SR * 0.03), 0.0003, 0.003)


def pen(d=1.0):
    n = bp(noise(d), 2500, 7000)
    am = np.abs(np.sin(2 * np.pi * 7 * t(d) + 2 * np.sin(2 * np.pi * 1.3 * t(d)))) ** 2
    am *= (lp(rng.standard_normal(len(n)), 20) * 8 + 1).clip(0.2, 2)
    return n * am * 0.5


def page():
    d = 0.45
    n = bp(noise(d), 1200, 6000)
    crk = (rng.random(len(n)) > 0.997) * rng.uniform(0.5, 2, len(n))
    crk = lp(crk, 4000) * 6
    k = np.sin(np.pi * np.linspace(0, 1, len(n))) ** 1.5
    return (n * 0.5 + crk * bp(noise(d), 2000, 8000)) * k


def yawn():
    d = 1.5
    f0 = 210 - 90 * t(d) / d
    ph = np.cumsum(f0 / SR)
    saw = 2 * (ph % 1) - 1
    voiced = bp(saw, 400, 1100) * 0.35
    breath = bp(noise(d), 500, 2500) * 0.6
    k = np.sin(np.pi * np.linspace(0, 1, int(SR * d))) ** 1.2
    return lp((voiced + breath) * k, 2500)


def keys():
    d = 0.9
    x = np.zeros(int(SR * d))
    for i in range(9):
        st = rng.uniform(0, 0.75)
        f = rng.uniform(2800, 4200)
        x = mixat(x, bell([f, f * 1.51, f * 2.13], 0.15, 0.05) * rng.uniform(0.4, 1), st)
    return x


def beep():
    d = 0.32
    x = np.zeros(int(SR * d))
    b = tone(2200, 0.07) * env(int(SR * 0.07), 0.002, 0.2)
    x = mixat(x, b, 0.0)
    x = mixat(x, b, 0.13)
    return x


def shutter():
    d = 0.18
    c = hp(noise(0.012), 1500) * env(int(SR * 0.012), 0.0002, 0.003)
    x = np.zeros(int(SR * d))
    x = mixat(x, c, 0)
    x = mixat(x, c * 0.8, 0.07)
    return x + lp(noise(d), 800) * env(int(SR * d), 0.001, 0.05) * 0.2


def impact():
    d = 1.6
    x = tone(55 * np.exp(-t(d) * 2) + 35, d) * env(int(SR * d), 0.001, 0.35) * 1.4
    x += lp(noise(d), 1800) * env(int(SR * d), 0.0005, 0.08) * 1.2
    x += bell([420, 690, 1130, 1720], d, 0.35) * 0.35  # tôle de carrosserie
    return reverb(x, 0.25)


def coin_glass():
    d = 0.7
    x = bell([2650, 3980, 5450, 7100], d, 0.22, [1, 0.7, 0.5, 0.3])
    x = mixat(x, bell([3300, 5200], 0.2, 0.04) * 0.5, 0.06)
    return x * 0.8


def brick():
    d = 0.35
    x = tone(170 * np.exp(-t(d) * 4) + 90, d) * env(int(SR * d), 0.001, 0.06)
    x += bp(noise(d), 300, 2500) * env(int(SR * d), 0.001, 0.04) * 0.8
    return x


def trowel():
    return bell([3600, 5300, 7900], 0.3, 0.06) * 0.7


def rumble(d=0.9):
    n = lp(noise(d), 90) * 6
    k = np.linspace(0, 1, len(n)) ** 1.5
    return n * k + 0.3 * tone(40 + 6 * np.sin(2 * np.pi * 8 * t(d)), d) * k


def collapse():
    d = 2.2
    x = rumble(d) * np.exp(-t(d) * 1.2) * 1.5
    for i in range(26):
        st = rng.uniform(0, 1.1) ** 1.3
        x = mixat(x, brick() * rng.uniform(0.4, 1), st)
    x += lp(noise(d), 3000) * env(int(SR * d), 0.01, 0.4) * 0.5
    return reverb(x, 0.25)


def thud():
    d = 0.6
    x = tone(75 * np.exp(-t(d) * 3) + 45, d) * env(int(SR * d), 0.001, 0.12) * 1.5
    x += lp(noise(d), 700) * env(int(SR * d), 0.001, 0.05)
    return x


def breath(d=2.0, n=2):
    x = np.zeros(int(SR * d))
    for i in range(n):
        seg = bp(noise(0.8), 300, 1800) * np.sin(np.pi * np.linspace(0, 1, int(SR * 0.8))) ** 2
        x = mixat(x, seg * (0.8 if i % 2 else 1), i * 0.95)
    return x


def alarm(d=1.75):
    x = np.zeros(int(SR * d))
    sq = np.sign(tone(2900, 0.07)) * env(int(SR * 0.07), 0.001, 1) * 0.6
    for g in range(int(d / 0.5) + 1):
        for k in range(4):
            st = g * 0.5 + k * 0.09
            if st + 0.07 < d:
                x = mixat(x, lp(sq, 7000), st)
    vib = tone(140, d) * (np.sin(2 * np.pi * 22 * t(d)) > 0) * 0.25
    return x + lp(vib, 600)


def click():
    return hp(noise(0.03), 800) * env(int(SR * 0.03), 0.0003, 0.006) + 0.5 * tone(900, 0.03) * env(int(SR * 0.03), 0.0003, 0.008)


def grunt():
    d = 0.45
    f0 = 120 - 30 * t(d) / d
    saw = 2 * ((np.cumsum(f0 / SR)) % 1) - 1
    k = np.sin(np.pi * np.linspace(0, 1, int(SR * d))) ** 0.8
    return lp(bp(saw, 150, 700) * k + bp(noise(d), 200, 900) * k * 0.3, 900)


def step():
    d = 0.12
    return tone(110 * np.exp(-t(d) * 10) + 60, d) * env(int(SR * d), 0.001, 0.025) + bp(noise(d), 1500, 6000) * env(int(SR * d), 0.001, 0.02) * 0.35


def puff():
    d = 0.3
    return bp(noise(d), 600, 3000) * np.sin(np.pi * np.linspace(0, 1, int(SR * d))) ** 3 * 0.6


def wind(d=9.5):
    n = noise(d)
    m = lp(rng.standard_normal(len(n)), 0.6) * 30 + 1
    x = lp(hp(n, 120), 500 + 250 * np.clip(m, 0, 3)) * np.clip(m, 0.4, 2)
    x *= np.minimum(1, t(d) / 0.8) * np.minimum(1, (d - t(d)) / 1.0)
    return x


def buzz():
    d = 0.6
    sq = np.sign(tone(98, d))
    return lp(sq, 900) * env(int(SR * d), 0.005, 0.5) * (np.arange(int(SR * d)) < SR * 0.45)


def thump_mat():
    d = 0.35
    return tone(90 * np.exp(-t(d) * 6) + 60, d) * env(int(SR * d), 0.001, 0.05) * 1.2 + bp(noise(d), 200, 1200) * env(int(SR * d), 0.001, 0.03)


def counter(d=6.4, f_from=4.0, f_to=16.0):
    x = np.zeros(int(SR * d))
    tt = 0.0
    while tt < d - 0.05:
        x = mixat(x, tick() * 0.6, tt)
        rate = f_from + (f_to - f_from) * min(1, tt / (d * 0.6))
        if tt > d * 0.75:
            rate = f_to - (f_to - f_from) * (tt - d * 0.75) / (d * 0.25)
        tt += 1 / rate
    return x


def chime():
    return reverb(bell([1046.5, 1568, 2093, 2637], 2.0, 0.8, [1, 0.6, 0.5, 0.3]), 0.4)


def creak():
    d = 1.1
    f0 = 260 + 80 * np.sin(2 * np.pi * 1.7 * t(d)) + 40 * lp(rng.standard_normal(int(SR * d)), 8) * 20
    saw = 2 * ((np.cumsum(f0 / SR)) % 1) - 1
    gr = (rng.random(int(SR * d)) > 0.995) * 1.0
    k = np.sin(np.pi * np.linspace(0, 1, int(SR * d)))
    return lp(bp(saw, 300, 2200) * k * 0.6 + lp(gr, 2000) * 4 * k, 3000)


def warm_shimmer():
    d = 3.2
    x = shimmer(d) * 0.6
    pad = sum(tone(f, d) for f in [261.6, 329.6, 392, 523.3]) * np.minimum(1, t(d) / 1.5) * np.minimum(1, (d - t(d)) / 1.0) * 0.12
    return x[: len(pad)] + pad if len(x) >= len(pad) else np.pad(x, (0, len(pad) - len(x))) + pad


def scroll_echo():
    return reverb(swipe(), 0.9, 2.2)


SOUNDS = {
    'boom': boom, 'whoosh': lambda: whoosh(0.7), 'whoosh-soft': lambda: whoosh(0.5, 200, 1800) * 0.6, 'shimmer': shimmer,
    'phone-tap': tap, 'phone-swipe': swipe, 'clock-tick': tick, 'clock-tock': tock, 'pen-scratch': pen, 'page-turn': page,
    'yawn': yawn, 'keys-jingle': keys, 'car-unlock-beep': beep, 'camera-shutter': shutter, 'stamp-fall': lambda: whoosh(0.35, 400, 4000),
    'stamp-impact': impact, 'coin-glass': coin_glass, 'brick-place': brick, 'trowel-tap': trowel, 'rumble': rumble,
    'brick-collapse': collapse, 'body-thud': thud, 'heavy-breath': breath, 'alarm': alarm, 'snooze-click': click, 'grunt': grunt,
    'footstep': step, 'breath-puff': puff, 'wind': wind, 'error-buzz': buzz, 'label-thump': thump_mat, 'counter-ticks': counter,
    'chime': chime, 'construction-creak': creak, 'warm-shimmer': warm_shimmer, 'scroll-echo': scroll_echo, 'wind-high': lambda: wind(9.2),
}

# ---------------------------------------------------------------- calage (frames, 30 fps)
S = {'hook': 0, 'age20': 90, 'age22': 330, 'age24': 570, 'age26': 840, 'age28': 1110, 'age30': 1380, 'fin': 1650}
TRANS = 8
cues = []


def cue(frame, name, vol):
    cues.append({'frame': int(round(frame)), 'file': name + '.mp3', 'vol': vol})


# accroche
cue(0, 'boom', 0.6)
cue(28, 'whoosh-soft', 0.4)
cue(42, 'shimmer', 0.45)
# transitions : glissement latéral
for k in ['age20', 'age22', 'age24', 'age26', 'age28', 'age30', 'fin']:
    cue(S[k] - TRANS - 2, 'whoosh', 0.35)

# 20 ans
a = S['age20']
for i in range(0, 240, 22):
    cue(a + i + 5, 'phone-swipe', 0.3)
for i in range(0, 240, 30):
    cue(a + i, 'clock-tick', 0.25)
    cue(a + i + 15, 'clock-tock', 0.22)
cue(a + 2, 'pen-scratch', 0.35)
cue(a + 32, 'pen-scratch', 0.35)
cue(a + 70, 'page-turn', 0.45)
cue(a + 94, 'pen-scratch', 0.3)
cue(a + 212, 'pen-scratch', 0.3)
cue(a + 148, 'yawn', 0.4)

# 22 ans
a = S['age22']
cue(a + 4, 'keys-jingle', 0.4)
cue(a + 40, 'keys-jingle', 0.35)
cue(a + 62, 'car-unlock-beep', 0.45)
cue(a + 120, 'camera-shutter', 0.5)
cue(a + 148, 'stamp-fall', 0.45)
cue(a + 160, 'stamp-impact', 0.6)
for t0 in [24, 50, 76, 102, 128, 154, 180]:
    cue(a + t0 + 11, 'coin-glass', 0.45)

# 24 ans
a = S['age24']
for t0 in [14, 36, 58, 80, 102]:
    cue(a + t0 - 2, 'brick-place', 0.45)
    cue(a + t0 + 2, 'trowel-tap', 0.35)
    cue(a + t0 + 5, 'trowel-tap', 0.3)
cue(a + 110, 'rumble', 0.5)
cue(a + 130, 'brick-collapse', 0.6)
cue(a + 146, 'body-thud', 0.55)
cue(a + 188, 'heavy-breath', 0.45)
cue(a + 258, 'brick-place', 0.6)

# 26 ans
a = S['age26']
for r0, r1 in [(0, 52), (86, 136), (170, 220)]:
    cue(a + r0, 'alarm', 0.4)
    cue(a + r1, 'snooze-click', 0.5)
    cue(a + r1 + 3, 'grunt', 0.35)
for i in range(0, 270, 19):
    cue(a + i + 4, 'breath-puff', 0.22)
k = 0.0
while k < 270:
    if not (138 <= k <= 166):
        cue(a + k, 'footstep', 0.28)
    k += 9.5
cue(a + 164, 'body-thud', 0.25)
cue(a, 'wind', 0.2)

# 28 ans
a = S['age28']
cue(a + 6, 'error-buzz', 0.35)
for t0 in [70, 125, 180]:
    cue(a + t0, 'label-thump', 0.5)
cue(a + 30, 'counter-ticks', 0.3)
cue(a + 220, 'chime', 0.45)
cue(a + 40, 'construction-creak', 0.3)
cue(a + 130, 'construction-creak', 0.25)

# 30 ans
a = S['age30']
for i in range(40, 300, 22):
    if a + i - 40 < S['fin'] - 10:
        cue(a + i - 40 + 5, 'scroll-echo', 0.22)
cue(a, 'wind-high', 0.22)
cue(a + 140, 'warm-shimmer', 0.45)

# fin : boom sur la question puis silence
cue(S['fin'] + 78, 'boom', 0.6)

if __name__ == '__main__':
    used = sorted({c['file'][:-4] for c in cues})
    for name in used:
        save(name, SOUNDS[name]())
        print('ok', name)
    cues.sort(key=lambda c: c['frame'])
    with open(os.path.join(os.path.dirname(__file__), '..', 'src', 'sfx.json'), 'w') as fh:
        json.dump(cues, fh, indent=1)
    print(len(cues), 'déclenchements')

// Partition originale de l'épisode « Le Ballon Perdu ».
// Musique sans paroles qui raconte l'histoire : joyeuse, mystérieuse, rapide et amusante,
// héroïque (mais drôle), puis chaleureuse. Chaque événement est calé sur l'image (secondes).

const NOTE = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
export function midi(n) {
  const m = /^([A-G])([#b]?)(-?\d)$/.exec(n);
  if (!m) throw new Error('note invalide ' + n);
  return 12 * (+m[3] + 1) + NOTE[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
}
// "E5:.5 G5:.5 C6:1 r:1 C5+E5:2" -> [[beat, [midi...], durée], ...]
export function mel(str) {
  const out = [];
  let b = 0;
  for (const tok of str.trim().split(/\s+/)) {
    const [n, d] = tok.split(':');
    const dur = d ? parseFloat(d) : 1;
    if (n !== 'r') out.push([b, n.split('+').map(midi), dur]);
    b += dur;
  }
  return out;
}
const CH = { '': [0, 4, 7], m: [0, 3, 7], 7: [0, 4, 7, 10], maj7: [0, 4, 7, 11], m7: [0, 3, 7, 10], sus4: [0, 5, 7], add9: [0, 4, 7, 14], dim: [0, 3, 6], 6: [0, 4, 7, 9], m6: [0, 3, 7, 9] };
export function chord(name) {
  const m = /^([A-G][#b]?)(.*)$/.exec(name);
  const root = (NOTE[m[1][0]] + (m[1][1] === '#' ? 1 : m[1][1] === 'b' ? -1 : 0) + 12) % 12;
  return { root, ints: CH[m[2]] };
}
// accord en position serrée au-dessus de `low`
export function voicing(name, low, n = 3) {
  const c = chord(name);
  const pcs = c.ints.map((i) => (c.root + i) % 12);
  const out = [];
  for (let p = low; out.length < n && p < low + 24; p++) if (pcs.includes(p % 12)) out.push(p);
  return out;
}
export function bassOf(name, low) {
  const c = chord(name);
  let p = low;
  while (p % 12 !== c.root) p++;
  return p;
}

export function createScore() {
  const notes = [];
  const add = (inst, t, p, d, v = 0.7, o = {}) => notes.push({ inst, t, p, d, v, ...o });
  const play = (inst, t0, bpm, str, v = 0.7, o = {}) => {
    const k = 60 / bpm;
    for (const [b, ps, d] of mel(str)) for (const p of ps) add(inst, t0 + b * k, p + (o.tr || 0), d * k * (o.leg ?? 0.95), v * (o.acc && b % 2 === 0 ? 1.1 : 1), o);
  };
  // basse + contretemps (pizzicati), un accord par demi-mesure
  const oompah = (t0, bpm, chords, { v = 0.6, bassInst = 'pizzicato_strings', chordInst = 'pizzicato_strings', low = 40, chLow = 55, beats = 2 } = {}) => {
    const k = 60 / bpm;
    chords.forEach((c, i) => {
      const t = t0 + i * beats * k;
      add(bassInst, t, bassOf(c, low), k * 0.9, v);
      for (const p of voicing(c, chLow)) add(chordInst, t + k, p, k * 0.5, v * 0.6);
      if (beats === 4) {
        add(bassInst, t + 2 * k, bassOf(c, low) + 7 > low + 14 ? bassOf(c, low) - 5 : bassOf(c, low) + 7, k * 0.9, v * 0.85);
        for (const p of voicing(c, chLow)) add(chordInst, t + 3 * k, p, k * 0.5, v * 0.55);
      }
    });
  };
  const pad = (t0, bpm, chords, beatsPer = 4, { inst = 'string_ensemble_1', v = 0.4, low = 52, n = 4 } = {}) => {
    const k = 60 / bpm;
    chords.forEach((c, i) => {
      for (const p of voicing(c, low, n)) add(inst, t0 + i * beatsPer * k, p, beatsPer * k * 1.02, v);
      add(inst, t0 + i * beatsPer * k, bassOf(c, 36), beatsPer * k * 1.02, v * 0.8);
    });
  };
  const arp = (inst, t0, step, chords, perChord, { v = 0.5, low = 60, up = true, n = 4 } = {}) => {
    let t = t0;
    for (const c of chords) {
      const ps = voicing(c, low, n);
      const seq = up ? ps.concat(ps.map((p) => p + 12)) : ps.concat(ps.map((p) => p + 12)).reverse();
      for (let i = 0; i < perChord; i++) { add(inst, t, seq[i % seq.length], step * 3, v); t += step; }
    }
  };
  const gliss = (inst, t0, dur, from, to, { v = 0.5, scale = [0, 2, 4, 5, 7, 9, 11] } = {}) => {
    const ps = [];
    const lo = Math.min(from, to), hi = Math.max(from, to);
    for (let p = lo; p <= hi; p++) if (scale.includes(p % 12)) ps.push(p);
    if (from > to) ps.reverse();
    ps.forEach((p, i) => add(inst, t0 + (i / ps.length) * dur, p, 1.2, v * (0.7 + 0.3 * i / ps.length)));
  };
  const roll = (inst, p, t0, t1, v0, v1, rate = 14) => {
    for (let t = t0; t < t1; t += 1 / rate) add(inst, t, p, 0.2, v0 + (v1 - v0) * ((t - t0) / (t1 - t0)));
  };
  const perc = (p, times, v = 0.5) => times.forEach((t) => add('percussion', t, p, 0.5, v));
  const every = (t0, t1, step) => { const a = []; for (let t = t0; t < t1 - 1e-6; t += step) a.push(t); return a; };
  const hit = (t, { v = 0.9, root = 'C' } = {}) => {
    for (const p of voicing(root, 55, 3)) add('brass_section', t, p, 0.9, v);
    for (const p of voicing(root, 67, 3)) add('string_ensemble_1', t, p, 0.9, v * 0.8);
    add('timpani', t, bassOf(root, 36), 1.2, v);
    perc(49, [t], v * 0.7);
  };

  // =============== THÈME PRINCIPAL (do majeur, 8 mesures) ===============
  const THEME = [
    'E5:.5 G5:.5 C6:1 B5:.5 A5:.5 G5:1',
    'A5:.5 F5:.5 A5:1 G5:.5 E5:.5 C5:1',
    'D5:.5 E5:.5 F5:.5 G5:.5 A5:.5 G5:.5 F5:.5 E5:.5',
    'D5:1 G4:.5 A4:.5 B4:.5 D5:.5 G5:1',
    'E5:.5 G5:.5 C6:1 B5:.5 A5:.5 G5:1',
    'A5:.5 C6:.5 B5:.5 A5:.5 G5:.5 E5:.5 C5:1',
    'F5:.5 E5:.5 D5:.5 C5:.5 D5:1 B4:1',
    'C5:2 r:2',
  ];
  const THEME_CH = [['C', 'C'], ['F', 'C'], ['Dm', 'G'], ['G7', 'G7'], ['C', 'C'], ['F', 'Am'], ['Dm', 'G7'], ['C', 'C']];

  // ---------- 0:00 – 0:22 Introduction joyeuse (120 bpm) ----------
  {
    const bpm = 120, k = 0.5, t0 = 0.5;
    gliss('orchestral_harp', 0.0, 0.45, 48, 84, { v: 0.45 });
    add('celesta', 0.15, 84, 1, 0.35); add('celesta', 0.3, 88, 1, 0.3);
    for (let b = 0; b < 6; b++) {
      const tb = t0 + b * 4 * k;
      const lite = b >= 4 ? 0.75 : 1;
      play('xylophone', tb, bpm, THEME[b], 0.55 * lite);
      play('flute', tb, bpm, THEME[b], 0.42 * lite, { tr: 0, leg: 0.9 });
      oompah(tb, bpm, THEME_CH[b], { v: 0.55 * lite });
      perc(70, every(tb, tb + 2, k / 2), 0.22 * lite);
      if (b < 4) perc(76, [tb + k, tb + 3 * k], 0.3);
    }
    // Leo fait une passe à Bibou : petite montée
    play('flute', 12.45, 160, 'C5:.5 E5:.5 G5:.5 C6:1', 0.45);
    // Bibou saute... rate tout... tombe sur le dos
    gliss('xylophone', 13.2, 0.35, 67, 91, { v: 0.5 });
    add('bassoon', 13.95, midi('C3'), 0.25, 0.85);
    add('bassoon', 14.18, midi('G2'), 0.55, 0.75);
    add('timpani', 13.95, midi('C2'), 1.5, 0.5);
    // il se balance sur le dos (tic-tac)
    for (let i = 0; i < 5; i++) add('pizzicato_strings', 14.6 + i * 0.5, i % 2 ? midi('G4') : midi('C5'), 0.3, 0.32);
    add('clarinet', 14.6, midi('G4'), 1.9, 0.25);
    // POP ! il se relève l'air de rien
    gliss('xylophone', 17.25, 0.12, 72, 96, { v: 0.5 });
    add('woodblock', 17.37, midi('E5'), 0.2, 0.55);
    play('pizzicato_strings', 17.6, 140, 'G4:.5 C5:.5', 0.45);
    play('clarinet', 17.85, 140, 'E5:.5 D5:.5 C5:1', 0.32);
    // Maya rit : le thème repart, plus pétillant
    play('glockenspiel', 18.5, bpm, THEME[0], 0.38);
    play('xylophone', 18.5, bpm, THEME[0], 0.45);
    oompah(18.5, bpm, THEME_CH[0], { v: 0.5 });
    perc(70, every(18.5, 20.5, 0.25), 0.2);
    // Leo prend son élan : roulement et montée
    roll('percussion', 38, 20.6, 22.5, 0.12, 0.6, 16);
    roll('timpani', midi('G2'), 21.2, 22.5, 0.15, 0.55, 12);
    ['G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F#4', 'G4'].forEach((n, i) => add('string_ensemble_1', 20.6 + i * 0.24, midi(n), 0.3, 0.32 + i * 0.03));
    hit(22.55, { v: 0.75, root: 'C' });
    gliss('orchestral_harp', 22.55, 0.8, 60, 96, { v: 0.5 });
  }

  // ---------- 0:22 – 0:44 Mystère : le ballon s'envole ----------
  {
    // cordes suspendues et harpe qui monte avec le ballon
    pad(23.0, 60, ['Am', 'Fmaj7'], 2, { v: 0.32, low: 64 });
    arp('orchestral_harp', 23.1, 0.22, ['Am', 'Fmaj7'], 9, { v: 0.4, low: 57 });
    [93, 91, 88, 96].forEach((p, i) => add('celesta', 23.6 + i * 0.85, p, 1.2, 0.3));
    // le sourire de Leo fond : ligne qui descend
    pad(27.0, 60, ['C', 'Em'], 1.75, { v: 0.28, low: 60 });
    play('clarinet', 27.2, 60, 'G5:.75 F5:.5 E5:.5 D5:.5 C#5:.5 C5:.75', 0.4);
    add('bassoon', 29.2, midi('A2'), 0.9, 0.55);
    add('bassoon', 29.6, midi('G#2'), 0.9, 0.45);
    // ils se regardent... « oh oh »
    add('pizzicato_strings', 30.65, midi('E4'), 0.3, 0.45);
    add('pizzicato_strings', 30.95, midi('E4'), 0.3, 0.45);
    add('muted_trumpet', 31.5, midi('Bb4'), 0.35, 0.55);
    add('muted_trumpet', 31.85, midi('A4'), 0.6, 0.5);
    add('trombone', 31.5, midi('Bb2'), 0.35, 0.45);
    add('trombone', 31.85, midi('A2'), 0.8, 0.45);
    // le vent l'emporte
    pad(32.5, 60, ['Dm', 'Bb'], 1.5, { v: 0.3, inst: 'tremolo_strings', low: 62 });
    gliss('flute', 32.7, 1.2, 74, 93, { v: 0.32, scale: [0, 2, 3, 5, 7, 9, 10] });
    gliss('orchestral_harp', 34.0, 1.0, 86, 62, { v: 0.4, scale: [0, 2, 3, 5, 7, 9, 10] });
    // Bibou court après le ballon : petit ostinato pressé
    const os = 'A4:.5 C5:.5 E5:.5 C5:.5 A4:.5 C5:.5 E5:.5 C5:.5';
    for (let i = 0; i < 3; i++) {
      play('pizzicato_strings', 35.5 + i * 0.9, 267, os, 0.45);
      play('xylophone', 35.5 + i * 0.9, 267, i < 2 ? os : 'A5:.5 C6:.5 E6:.5 A6:.5', 0.3);
    }
    add('bassoon', 35.5, midi('A2'), 0.8, 0.4); add('bassoon', 36.4, midi('G2'), 0.8, 0.4); add('bassoon', 37.3, midi('F2'), 0.8, 0.4);
    // plus de ballon...
    [84, 81, 77].forEach((p, i) => add('celesta', 38.7 + i * 0.45, p, 1.5, 0.35));
    add('string_ensemble_1', 40.3, midi('E3'), 3.6, 0.18);
    add('string_ensemble_1', 40.3, midi('A3'), 3.6, 0.15);
    // Leo se décide : appel de cor
    play('french_horn', 44.3, 150, 'G3:.5 C4:.5 E4:.5 G4:1.5', 0.6);
    add('timpani', 44.3, midi('C2'), 1, 0.5);
    roll('percussion', 38, 45.0, 46.0, 0.15, 0.55, 16);
  }

  // ---------- 0:46 – 1:15 La poursuite (150 bpm, sol majeur) ----------
  {
    const bpm = 150, k = 0.4;
    const CHASE = [
      'D5:.5 G5:.5 B5:.5 G5:.5 D5:.5 G5:.5 B5:.5 D6:.5',
      'C6:.5 A5:.5 F#5:.5 A5:.5 D5:.5 F#5:.5 A5:.5 C6:.5',
      'B5:.5 G5:.5 E5:.5 G5:.5 C6:.5 A5:.5 E5:.5 A5:.5',
      'D6:.5 B5:.5 G5:.5 B5:.5 A5:1 D5:1',
    ];
    const CHASE_CH = [['G', 'G'], ['D7', 'D7'], ['Em', 'C'], ['G', 'D7']];
    const chaseBars = (t0, bars, v = 1, from = 0) => {
      for (let i = 0; i < bars; i++) {
        const b = (i + from) % 4, tb = t0 + i * 4 * k;
        play('clarinet', tb, bpm, CHASE[b], 0.42 * v);
        play('xylophone', tb, bpm, CHASE[b], 0.4 * v);
        oompah(tb, bpm, CHASE_CH[b], { v: 0.55 * v, low: 38 });
        perc(38, [tb + k, tb + 3 * k], 0.25 * v);
        perc(42, every(tb, tb + 4 * k, k / 2), 0.15 * v);
        perc(76, [tb, tb + 2 * k], 0.22 * v);
      }
    };
    chaseBars(46.0, 2.5);
    // Bibou essaie de voler : musique suspendue
    for (let i = 0; i < 3; i++) add('pizzicato_strings', 50.05 + i * 0.18, midi('D5') + i * 2, 0.2, 0.35);
    roll('flute', midi('A5'), 50.6, 51.55, 0.15, 0.4, 18);
    gliss('violin', 50.6, 0.95, 74, 86, { v: 0.25 });
    add('tuba', 51.62, midi('D2'), 0.4, 0.75);
    add('pizzicato_strings', 51.62, midi('D3'), 0.3, 0.5);
    roll('flute', midi('C6'), 52.3, 53.35, 0.15, 0.5, 20);
    gliss('violin', 52.3, 1.0, 76, 91, { v: 0.3 });
    add('tuba', 53.42, midi('Eb2'), 0.3, 0.8);
    add('tuba', 53.75, midi('D2'), 0.3, 0.7);
    add('tuba', 54.05, midi('C#2'), 0.7, 0.65);
    // l'idée !
    add('glockenspiel', 54.3, midi('B6'), 1, 0.5);
    add('glockenspiel', 54.42, midi('D7'), 1, 0.45);
    // il roule comme une boule
    gliss('xylophone', 55.0, 0.6, 67, 91, { v: 0.5 });
    gliss('xylophone', 55.6, 0.6, 91, 67, { v: 0.45 });
    chaseBars(55.0, 1.5, 1.05, 0);
    gliss('xylophone', 56.6, 0.9, 67, 98, { v: 0.5 });
    // BONK contre le rocher
    add('timpani', 57.68, midi('G2'), 0.8, 0.6);
    perc(55, [57.68], 0.4);
    [93, 91, 93, 89].forEach((p, i) => add('glockenspiel', 57.9 + i * 0.22, p - 12, 0.4, 0.22));
    // Leo escalade le rocher : petits pas qui montent
    ['G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F#4', 'G4'].forEach((n, i) => {
      add('pizzicato_strings', 58.25 + i * 0.15, midi(n), 0.2, 0.42);
      add('bassoon', 58.25 + i * 0.15, midi(n) - 12, 0.14, 0.3);
    });
    // il scrute l'horizon
    pad(59.6, 60, ['G', 'Cmaj7'], 1, { v: 0.25, low: 60 });
    play('flute', 59.7, 100, 'D6:1 B5:.5 G5:.5 A5:1', 0.32);
    arp('orchestral_harp', 60.0, 0.18, ['Em', 'C'], 8, { v: 0.3, low: 64 });
    // rien... « wah-wah »
    ['G3', 'F#3', 'F3', 'E3'].forEach((n, i) => add('trombone', 62.6 + i * 0.38, midi(n), i === 3 ? 0.9 : 0.34, 0.5));
    add('muted_trumpet', 62.6, midi('G4'), 0.34, 0.3); add('muted_trumpet', 63.36, midi('F4'), 0.34, 0.3);
    // Maya montre au loin
    gliss('orchestral_harp', 64.7, 0.6, 67, 91, { v: 0.4, scale: [0, 2, 4, 6, 7, 9, 11] });
    pad(64.9, 60, ['D'], 1.6, { v: 0.25, low: 62 });
    // le ballon apparaît là-bas !
    add('glockenspiel', 67.15, midi('D7'), 1.5, 0.6);
    add('glockenspiel', 67.15, midi('A6'), 1.5, 0.5);
    for (const p of voicing('D', 62, 3)) add('brass_section', 67.15, p, 0.5, 0.55);
    perc(81, [67.15], 0.5);
    pad(67.3, 60, ['D', 'D7'], 0.9, { v: 0.3, low: 62 });
    // Leo saute du rocher
    gliss('flute', 70.25, 0.5, 74, 93, { v: 0.4 });
    add('pizzicato_strings', 70.85, midi('G2'), 0.3, 0.6);
    add('timpani', 70.85, midi('G2'), 0.6, 0.4);
    // en route vers la forêt !
    chaseBars(71.4, 2, 1.1, 0);
    play('clarinet', 74.6, bpm, 'D5:.5 G5:.5', 0.4);
    play('xylophone', 74.6, bpm, 'D6:.5 G6:.5', 0.4);
    add('pizzicato_strings', 75.0, midi('G2'), 0.5, 0.6);
  }

  // ---------- 1:15 – 1:21 La clairière magique ----------
  {
    gliss('orchestral_harp', 75.0, 1.2, 55, 91, { v: 0.5, scale: [0, 2, 4, 6, 7, 9, 11] });
    pad(75.2, 60, ['Gmaj7', 'Em', 'Cmaj7', 'D'], 1.5, { v: 0.33, low: 59 });
    play('celesta', 75.8, 80, 'B5:1 D6:.5 F#6:.5 E6:1 D6:.5 B5:.5 C6:1 E6:1 D6:1.5', 0.4);
    play('flute', 76.6, 80, 'r:1 B5:1 G5:1 A5:2 F#5:1', 0.25);
    // « le voilà ! »
    add('glockenspiel', 79.55, midi('B6'), 1, 0.45);
    add('glockenspiel', 79.7, midi('G6'), 1, 0.35);
    pad(79.6, 60, ['G'], 1.8, { v: 0.3, low: 62 });
  }

  // ---------- 1:21 – 1:36 Leo grimpe, la branche craque, il redescend ----------
  {
    // en courant vers l'arbre
    play('pizzicato_strings', 81.6, 160, 'G4:.5 B4:.5 D5:.5 G5:.5', 0.4);
    // escalade : une note par prise
    const climb = ['G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F#4', 'G4', 'A4', 'B4'];
    climb.forEach((n, i) => {
      const t = 82.65 + i * 0.22;
      add('pizzicato_strings', t, midi(n), 0.2, 0.4);
      if (i % 2 === 0) add('bassoon', t, midi(n) - 12, 0.2, 0.35);
    });
    add('clarinet', 84.9, midi('C5'), 0.9, 0.35);
    add('clarinet', 85.3, midi('D5'), 1.0, 0.38);
    // craquement : suspense
    add('tremolo_strings', 86.35, midi('F#5'), 0.75, 0.2);
    add('tremolo_strings', 86.35, midi('C5'), 0.75, 0.2);
    for (const p of voicing('Cdim', 60, 3)) add('pizzicato_strings', 87.1, p, 0.2, 0.6);
    perc(55, [87.1], 0.3);
    // Leo figé : trémolo aigu et battements de cœur
    add('tremolo_strings', 88.55, midi('B5'), 1.95, 0.24);
    add('tremolo_strings', 88.55, midi('C6'), 1.95, 0.2);
    [88.7, 89.25, 89.8].forEach((t) => { add('timpani', t, midi('C2'), 0.4, 0.35); add('timpani', t + 0.16, midi('C2'), 0.4, 0.22); });
    add('bassoon', 89.4, midi('F2'), 0.5, 0.45);
    // Maya s'inquiète
    play('oboe', 90.6, 90, 'E5:1 D5:.5 C5:.5 D5:2', 0.4);
    pad(90.6, 60, ['Am', 'Dm'], 1.2, { v: 0.25, low: 57 });
    // il redescend
    ['B4', 'A4', 'G4', 'F#4', 'E4', 'D4', 'C4', 'B3', 'A3', 'G3'].forEach((n, i) => add('pizzicato_strings', 93.25 + i * 0.13, midi(n), 0.15, 0.4));
    gliss('xylophone', 93.3, 1.25, 84, 60, { v: 0.3 });
    add('pizzicato_strings', 94.6, midi('G2'), 0.3, 0.55);
    // petit sourire gêné
    play('bassoon', 95.1, 120, 'D3:.5 G2:1', 0.45);
    play('clarinet', 95.1, 120, 'B4:.5 G4:1', 0.3);
  }

  // ---------- 1:36 – 1:44 Bibou le héros... raté ----------
  {
    // il gonfle son torse : fanfare pompeuse
    roll('timpani', midi('C2'), 96.3, 96.9, 0.1, 0.45, 14);
    gliss('string_ensemble_1', 96.4, 0.5, 60, 72, { v: 0.35 });
    play('trumpet', 96.95, 140, 'G4:.5 C5:.5 E5:.5 G5:1.5', 0.55);
    play('trombone', 96.95, 140, 'C3:.5 E3:.5 G3:.5 C4:1.5', 0.45);
    perc(49, [97.85], 0.35);
    add('timpani', 97.85, midi('C2'), 0.8, 0.55);
    // regards sceptiques
    add('bassoon', 98.0, midi('E3'), 0.3, 0.45);
    add('bassoon', 98.3, midi('Eb3'), 0.5, 0.45);
    // élan : roulement qui accélère
    roll('percussion', 38, 99.0, 100.6, 0.1, 0.6, 18);
    ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'].forEach((n, i) => add('string_ensemble_1', 99.0 + i * 0.2, midi(n), 0.25, 0.3));
    // envol, frôle le ballon... et rate
    gliss('flute', 100.6, 1.2, 72, 96, { v: 0.45 });
    play('trumpet', 100.7, 150, 'C5:.5 E5:.5 G5:1', 0.45);
    add('trombone', 101.85, midi('Bb3'), 0.25, 0.55);
    add('trombone', 102.05, midi('A3'), 0.25, 0.5);
    add('trombone', 102.25, midi('Ab3'), 0.25, 0.5);
    add('trombone', 102.45, midi('G3'), 0.3, 0.5);
    gliss('xylophone', 102.0, 0.7, 96, 60, { v: 0.4 });
    // dans le buisson
    add('tuba', 102.75, midi('C2'), 0.6, 0.8);
    add('timpani', 102.75, midi('C2'), 1, 0.5);
    perc(57, [102.75], 0.3);
    // deux yeux dans les feuilles
    add('celesta', 105.2, midi('E6'), 0.6, 0.35);
    add('celesta', 105.55, midi('E6'), 0.6, 0.35);
    add('celesta', 105.95, midi('G6'), 0.8, 0.3);
    // Maya sourit
    play('flute', 106.6, 96, 'G5:.5 E5:.5 F5:.5 D5:.5 E5:1', 0.32);
    arp('orchestral_harp', 106.6, 0.2, ['C', 'F'], 5, { v: 0.32, low: 60 });
  }

  // ---------- 1:48 – 2:04 L'idée ----------
  {
    // tic-tac de la réflexion
    for (let i = 0; i < 12; i++) add('woodblock', 108.6 + i * 0.25, i % 2 ? midi('E5') : midi('A5'), 0.1, 0.25);
    play('bassoon', 108.6, 120, 'C3:.5 E3:.5 G3:.5 E3:.5 F3:.5 A3:.5 G3:1', 0.42);
    // TING ! l'idée de Maya
    add('glockenspiel', 111.95, midi('E7'), 1.2, 0.6);
    add('glockenspiel', 112.05, midi('C7'), 1.2, 0.45);
    gliss('orchestral_harp', 111.95, 0.7, 60, 96, { v: 0.45 });
    pad(112.1, 60, ['C', 'F'], 0.7, { v: 0.3, low: 60 });
    // Leo comprend
    add('pizzicato_strings', 114.2, midi('A4'), 0.2, 0.35);
    add('pizzicato_strings', 114.6, midi('B4'), 0.2, 0.35);
    play('xylophone', 115.05, 160, 'C5:.5 E5:.5 G5:.5 C6:1', 0.45);
    // le plan se met en place : petite marche
    const bpm = 120, k = 0.5, t0 = 116.0;
    const MARCH = ['C5:.5 r:.5 G4:.5 r:.5 C5:.5 D5:.5 E5:1', 'F5:.5 r:.5 D5:.5 r:.5 B4:.5 C5:.5 D5:1', 'E5:.5 r:.5 C5:.5 r:.5 A4:.5 B4:.5 C5:.5 D5:.5', 'E5:.5 F5:.5 G5:1 G5:1 r:1'];
    const MCH = [['C', 'C'], ['G', 'G7'], ['Am', 'F'], ['C', 'G']];
    for (let b = 0; b < 4; b++) {
      const tb = t0 + b * 4 * k;
      play('clarinet', tb, bpm, MARCH[b], 0.4);
      play('pizzicato_strings', tb, bpm, MARCH[b], 0.35, { tr: -12 });
      oompah(tb, bpm, MCH[b], { v: 0.45 });
      perc(38, [tb + k, tb + 3 * k], 0.18);
    }
    // regards complices, Bibou prêt
    add('french_horn', 121.4, midi('G3'), 0.6, 0.4);
    add('french_horn', 121.75, midi('C4'), 0.8, 0.45);
    play('piccolo', 122.45, 160, 'G6:.5 C7:1', 0.35);
    // suspense avant le saut
    roll('percussion', 38, 123.5, 124.7, 0.1, 0.65, 18);
    roll('timpani', midi('G2'), 123.6, 124.7, 0.15, 0.6, 14);
    ['G3', 'G#3', 'A3', 'A#3', 'B3'].forEach((n, i) => add('string_ensemble_1', 123.55 + i * 0.22, midi(n), 0.24, 0.3 + i * 0.05));
  }

  // ---------- 2:04 – 2:13 L'envol héroïque (grandiose... et drôle) ----------
  {
    hit(124.75, { v: 0.85, root: 'C' });
    gliss('orchestral_harp', 124.8, 1.0, 48, 96, { v: 0.5 });
    // montée au ralenti
    add('tremolo_strings', 124.9, midi('C4'), 3.7, 0.3);
    add('tremolo_strings', 124.9, midi('G4'), 3.7, 0.3);
    add('tremolo_strings', 124.9, midi('E5'), 3.7, 0.28);
    ['C3', 'E3', 'G3', 'C4'].forEach((n, i) => {
      add('french_horn', 125.0 + i * 0.9, midi(n) + 12, 0.85, 0.5 + i * 0.06);
      add('trombone', 125.0 + i * 0.9, midi(n), 0.85, 0.4 + i * 0.05);
    });
    roll('timpani', midi('G2'), 127.4, 128.55, 0.15, 0.75, 16);
    perc(57, [128.6], 0.6);
    // il attrape le ballon : le thème principal en grand
    const t0 = 128.6, bpm = 60;
    play('trumpet', t0, bpm * 2, THEME[0].replace(/:([\d.]+)/g, (m, d) => ':' + d * 2), 0.6, { leg: 0.98 });
    play('french_horn', t0, bpm * 2, THEME[0].replace(/:([\d.]+)/g, (m, d) => ':' + d * 2), 0.55, { tr: -12, leg: 0.98 });
    play('string_ensemble_1', t0, bpm * 2, THEME[0].replace(/:([\d.]+)/g, (m, d) => ':' + d * 2), 0.45, { leg: 1.0 });
    pad(t0, 120, ['C', 'C', 'F', 'C'], 2, { v: 0.4, low: 52, inst: 'brass_section' });
    pad(t0, 120, ['C', 'C', 'F', 'C'], 2, { v: 0.35, low: 60 });
    add('timpani', t0, midi('C2'), 1, 0.7); add('timpani', t0 + 2, midi('C2'), 1, 0.55);
    gliss('glockenspiel', t0 + 0.05, 0.6, 72, 96, { v: 0.35 });
    gliss('orchestral_harp', 130.0, 0.8, 60, 96, { v: 0.45 });
    perc(81, [130.05, 130.6, 131.15], 0.3);
    // coupure sèche : il regarde en bas...
    add('string_ensemble_1', 132.55, midi('C6'), 0.35, 0.35);
    add('bassoon', 133.2, midi('E2'), 0.5, 0.5);
    add('tremolo_strings', 133.6, midi('F#6'), 1.8, 0.1);
  }

  // ---------- 2:15 – 2:23 La descente ----------
  {
    const bpm = 132, k = 60 / bpm;
    const W = ['E6:1 D6:1 C6:1', 'B5:1 A5:1 G#5:1', 'A5:1 G5:1 F5:1', 'E5:1 D5:1 C5:1', 'B4:1 C5:1 D5:1', 'E5:1.5 r:1.5'];
    const WCH = ['Am', 'E7', 'Am', 'Am', 'E7', 'E7'];
    for (let b = 0; b < 6; b++) {
      const tb = 135.6 + b * 3 * k;
      play('flute', tb, bpm, W[b], 0.4);
      play('bassoon', tb, bpm, W[b], 0.3, { tr: -24 });
      add('pizzicato_strings', tb, bassOf(WCH[b], 40), k, 0.5);
      for (const p of voicing(WCH[b], 57)) { add('pizzicato_strings', tb + k, p, k * 0.4, 0.3); add('pizzicato_strings', tb + 2 * k, p, k * 0.4, 0.28); }
    }
    // les enfants courent dessous (accélération)
    for (let i = 0; i < 10; i++) add('xylophone', 139.6 + i * 0.2, i % 2 ? midi('E5') : midi('A5'), 0.15, 0.3);
    // bousculade
    add('tuba', 141.65, midi('E2'), 0.25, 0.6);
    add('woodblock', 141.65, midi('A4'), 0.1, 0.4);
    // dernier moment : montée et... FLUMP
    roll('timpani', midi('A2'), 142.6, 143.2, 0.1, 0.5, 16);
    add('timpani', 143.25, midi('A1'), 1.2, 0.6);
    for (const p of voicing('Am', 45, 3)) add('pizzicato_strings', 143.25, p, 0.3, 0.55);
  }

  // ---------- 2:24 – 2:38 Silence, puis rires et câlin (fa majeur) ----------
  {
    // le ballon sort de l'herbe
    ['C6', 'E6', 'G6'].forEach((n, i) => add('glockenspiel', 146.2 + i * 0.5, midi(n), 0.8, 0.3));
    add('glockenspiel', 147.05, midi('C7'), 1, 0.4);
    // les têtes surgissent... fou rire
    add('pizzicato_strings', 148.5, midi('F4'), 0.2, 0.45);
    add('pizzicato_strings', 148.75, midi('A4'), 0.2, 0.45);
    const giggle = 'C6:.5 A5:.5 C6:.5 A5:.5 F5:.5 A5:.5 C6:1';
    play('xylophone', 149.1, 150, giggle, 0.38);
    play('pizzicato_strings', 149.1, 150, giggle, 0.32, { tr: -12 });
    play('glockenspiel', 150.25, 150, 'F6:.5 A6:.5 C7:1', 0.28);
    // Bibou fier : cor
    play('french_horn', 151.2, 96, 'F3:.5 A3:.5 C4:1 F4:1.5', 0.5);
    pad(151.2, 96, ['F', 'Bb'], 2, { v: 0.3, low: 57 });
    play('flute', 152.9, 120, 'A5:.5 C6:.5 F6:1', 0.35);
    // le câlin : thème principal tendre, en fa
    const bpm = 96, k = 60 / bpm, t0 = 154.4;
    const WARM = [THEME[0], THEME[1], 'D5:.5 E5:.5 F5:.5 G5:.5 A5:2'];
    const WCH = [['F', 'F'], ['Bb', 'F'], ['Gm', 'C']];
    for (let b = 0; b < 3; b++) {
      const tb = t0 + b * 4 * k;
      play('flute', tb, bpm, WARM[b], 0.4, { tr: 5 - 12 + 12 });
      play('violin', tb, bpm, WARM[b], 0.32, { tr: 5 - 12 });
      pad(tb, bpm, WCH[b], 2, { v: 0.32, low: 53 });
      arp('orchestral_harp', tb, k / 2, WCH[b], 8, { v: 0.32, low: 53 });
    }
    add('celesta', 155.25, midi('F6'), 1.2, 0.3);
    add('celesta', 156.4, midi('A6'), 1.2, 0.25);
  }

  // ---------- 2:38 – 2:50 Reprise au village (do majeur) ----------
  {
    const bpm = 120, k = 0.5, t0 = 158.5;
    for (let b = 0; b < 3; b++) {
      const tb = t0 + b * 4 * k;
      play('flute', tb, bpm, THEME[b], 0.42);
      play('xylophone', tb, bpm, THEME[b], 0.4);
      play('violin', tb, bpm, THEME[b], 0.22, { tr: -12 });
      oompah(tb, bpm, THEME_CH[b], { v: 0.5 });
      pad(tb, bpm, THEME_CH[b], 2, { v: 0.2, low: 55 });
      perc(70, every(tb, tb + 2, 0.25), 0.18);
    }
    // bar 4 : Leo « prêt ? »
    play('clarinet', 164.5, bpm, 'D5:1 G4:.5 A4:.5', 0.38);
    oompah(164.5, bpm, ['G7'], { v: 0.4 });
    // Bibou se prépare : roulement
    roll('percussion', 38, 165.0, 167.1, 0.08, 0.55, 18);
    roll('timpani', midi('G2'), 166.2, 167.1, 0.1, 0.5, 14);
    // le lancer, le saut, il l'attrape !
    gliss('flute', 167.15, 0.7, 72, 91, { v: 0.4 });
    for (const p of voicing('C', 60, 3)) add('brass_section', 167.9, p, 0.45, 0.6);
    add('glockenspiel', 167.9, midi('C7'), 1, 0.45);
    add('timpani', 167.9, midi('C2'), 0.6, 0.5);
    // ... et il lui échappe : ça monte, ça monte
    gliss('piccolo', 168.45, 1.0, 79, 103, { v: 0.35 });
    gliss('xylophone', 168.45, 0.9, 72, 103, { v: 0.35 });
    add('string_ensemble_1', 168.6, midi('G5'), 0.8, 0.2);
  }

  // ---------- 2:50 – 2:57 Silence gêné ----------
  {
    // petit regard caméra
    add('clarinet', 175.35, midi('G4'), 0.3, 0.32);
    add('clarinet', 175.7, midi('E4'), 0.6, 0.3);
    add('pizzicato_strings', 175.35, midi('G3'), 0.2, 0.3);
    add('pizzicato_strings', 175.7, midi('C3'), 0.2, 0.3);
  }

  // ---------- 2:57 – 3:07 POC ! et final joyeux ----------
  {
    add('woodblock', POC, midi('C5'), 0.2, 0.6);
    add('xylophone', POC + 0.02, midi('C6'), 0.4, 0.4);
    add('bassoon', POC + 0.3, midi('G2'), 0.25, 0.5);
    add('bassoon', POC + 0.55, midi('C2'), 0.5, 0.5);
    // rires et thème final, tout l'orchestre
    const bpm = 120, k = 0.5, t0 = 178.9;
    for (let b = 4; b < 8; b++) {
      const tb = t0 + (b - 4) * 4 * k;
      play('flute', tb, bpm, THEME[b], 0.45);
      play('xylophone', tb, bpm, THEME[b], 0.42);
      play('violin', tb, bpm, THEME[b], 0.3, { tr: -12 });
      play('french_horn', tb, bpm, THEME[b], 0.25, { tr: -12 });
      oompah(tb, bpm, THEME_CH[b], { v: 0.55 });
      pad(tb, bpm, THEME_CH[b], 2, { v: 0.25, low: 55 });
      perc(70, every(tb, tb + 2, 0.25), 0.2);
      perc(76, [tb + k, tb + 3 * k], 0.25);
    }
    // accord final
    const tf = 184.9;
    for (const p of voicing('C', 48, 3)) add('brass_section', tf, p, 2.2, 0.5);
    for (const p of voicing('C', 60, 4)) add('string_ensemble_1', tf, p, 2.3, 0.42);
    add('string_ensemble_1', tf, midi('C3'), 2.3, 0.4);
    add('timpani', tf, midi('C2'), 2, 0.55);
    gliss('orchestral_harp', tf, 1.0, 48, 96, { v: 0.45 });
    add('glockenspiel', tf + 1.0, midi('C7'), 1.5, 0.35);
    add('glockenspiel', tf + 1.15, midi('G6'), 1.5, 0.3);
    perc(81, [tf + 1.0], 0.3);
  }

  return notes;
}

const POC = 177.62;

// réglages de mixage par instrument : gain, panoramique, relâchement
export const INSTR = {
  pizzicato_strings: { g: 0.9, pan: -0.2, rel: 0.12, perc: true },
  xylophone: { g: 0.62, pan: 0.25, perc: true },
  marimba: { g: 0.6, pan: 0.2, perc: true },
  glockenspiel: { g: 0.42, pan: 0.3, perc: true },
  celesta: { g: 0.5, pan: 0.35, perc: true },
  orchestral_harp: { g: 0.55, pan: -0.35, perc: true },
  woodblock: { g: 0.45, pan: 0.1, perc: true },
  timpani: { g: 0.75, pan: 0, perc: true },
  percussion: { g: 0.55, pan: 0.05, perc: true },
  flute: { g: 0.6, pan: 0.18, rel: 0.12 },
  piccolo: { g: 0.45, pan: 0.2, rel: 0.1 },
  clarinet: { g: 0.6, pan: -0.12, rel: 0.12 },
  oboe: { g: 0.55, pan: 0.05, rel: 0.12 },
  bassoon: { g: 0.75, pan: 0.12, rel: 0.12 },
  violin: { g: 0.5, pan: -0.3, rel: 0.25 },
  string_ensemble_1: { g: 0.5, pan: 0, rel: 0.35 },
  tremolo_strings: { g: 0.45, pan: 0, rel: 0.3 },
  french_horn: { g: 0.6, pan: -0.25, rel: 0.2 },
  trumpet: { g: 0.5, pan: 0.22, rel: 0.12 },
  muted_trumpet: { g: 0.5, pan: 0.15, rel: 0.1 },
  trombone: { g: 0.6, pan: -0.15, rel: 0.15 },
  brass_section: { g: 0.5, pan: 0, rel: 0.2 },
  tuba: { g: 0.8, pan: 0.05, rel: 0.12 },
};

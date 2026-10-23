import {useF} from '../lib/frame';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {loadFont} from '@remotion/fonts';
import {staticFile} from 'remotion';
import {C, H, HALF, SAFE} from '../constants';
import {clamp, ease, prog} from '../lib/anim';

// Montserrat (variable 300–700), embarquée localement
export const FONT = 'Montserrat';
loadFont({family: FONT, url: staticFile('fonts/montserrat-latin.woff2'), weight: '300 700', format: 'woff2', unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'});
loadFont({family: FONT, url: staticFile('fonts/montserrat-latin-ext.woff2'), weight: '300 700', format: 'woff2', unicodeRange: 'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF'});

export type Word = {t: string; at: number; color?: string};

// Texte cinétique : mot par mot, montée + flou → net, tracking qui s'ouvre
export const KText: React.FC<{
  words: Word[];
  x: number;
  y: number;
  w: number;
  size: number;
  weight?: number;
  color?: string;
  align?: 'left' | 'center' | 'right';
  glow?: string;
  out?: number; // frame de sortie
  lineHeight?: number;
  track?: number;
}> = ({words, x, y, w, size, weight = 500, color = C.text, align = 'center', glow, out, lineHeight = 1.15, track = 0.12}) => {
  const f = useF();
  const o = out !== undefined ? 1 - prog(f, out, out + 10) : 1;
  if (o <= 0) return null;
  return (
    <div
      style={{
        position: 'absolute', left: x, top: y, width: w, textAlign: align,
        fontFamily: FONT, fontWeight: weight, fontSize: size, lineHeight, color,
        textTransform: 'uppercase', opacity: o,
        transform: out !== undefined ? `translateY(${-prog(f, out, out + 10) * 20}px)` : undefined,
      }}
    >
      {words.map((wd, i) => {
        const p = ease.out(clamp((f - wd.at) / 12));
        const sp = ease.out(clamp((f - wd.at) / 30));
        if (wd.t === '\n') return <br key={i} />;
        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: p,
              transform: `translateY(${(1 - p) * 26}px)`,
              filter: p < 1 ? `blur(${(1 - p) * 8}px)` : undefined,
              letterSpacing: `${0.03 + sp * (track - 0.03)}em`,
              color: wd.color ?? color,
              textShadow: glow ? `0 0 18px ${glow}, 0 0 42px ${glow}` : '0 2px 18px rgba(0,0,0,0.6)',
              marginRight: '0.28em',
            }}
          >
            {wd.t}
          </span>
        );
      })}
    </div>
  );
};

// Révélation lettre par lettre avec tracking ouvert (labels)
export const Spell: React.FC<{text: string; at: number; x: number; y: number; w: number; size: number; color?: string; per?: number; weight?: number; glow?: string; out?: number}> = ({
  text, at, x, y, w, size, color = C.text, per = 1.6, weight = 400, glow, out,
}) => {
  const f = useF();
  const o = out !== undefined ? 1 - prog(f, out, out + 10) : 1;
  const sp = ease.out(clamp((f - at) / 40));
  return (
    <div style={{position: 'absolute', left: x, top: y, width: w, textAlign: 'center', fontFamily: FONT, fontWeight: weight, fontSize: size, color, letterSpacing: `${0.1 + sp * 0.22}em`, opacity: o, whiteSpace: 'nowrap', textShadow: glow ? `0 0 14px ${glow}` : undefined}}>
      {text.split('').map((ch, i) => {
        const p = ease.out(clamp((f - at - i * per) / 8));
        return (
          <span key={i} style={{opacity: p, display: 'inline-block', transform: `translateY(${(1 - p) * 10}px)`, minWidth: ch === ' ' ? '0.3em' : undefined}}>
            {ch}
          </span>
        );
      })}
    </div>
  );
};

// Bloc statistique : grand chiffre + libellé
export const Stat: React.FC<{big: string; label: string; at: number; x: number; y: number; w: number; color: string; glow?: string; out?: number; bigSize?: number; pulse?: number}> = ({
  big, label, at, x, y, w, color, glow, out, bigSize = 92, pulse = 0,
}) => {
  const f = useF();
  const p = ease.back(clamp((f - at) / 14));
  const o = (out !== undefined ? 1 - prog(f, out, out + 10) : 1) * clamp((f - at) / 8);
  if (o <= 0) return null;
  return (
    <div style={{position: 'absolute', left: x, top: y, width: w, textAlign: 'center', fontFamily: FONT, color, opacity: o}}>
      <div style={{fontSize: bigSize, fontWeight: 600, letterSpacing: '0.04em', transform: `scale(${(0.7 + p * 0.3) * (1 + pulse)})`, textShadow: glow ? `0 0 22px ${glow}, 0 0 60px ${glow}` : '0 4px 24px rgba(0,0,0,0.7)', lineHeight: 1}}>
        {big}
      </div>
      <div style={{fontSize: 27, fontWeight: 500, letterSpacing: `${0.08 + ease.out(clamp((f - at - 4) / 30)) * 0.12}em`, marginTop: 12, opacity: clamp((f - at - 4) / 10)}}>{label}</div>
    </div>
  );
};

// Ligne de séparation lumineuse qui ondule
export const Divider: React.FC<{o?: number}> = ({o = 1}) => {
  const f = useF();
  const pts = new Array(25).fill(0).map((_, i) => {
    const y = (i / 24) * H;
    const x = HALF + Math.sin(f / 18 + i * 0.7) * 1.6 + Math.sin(f / 31 + i * 0.3) * 1.2;
    return `${x},${y}`;
  });
  return (
    <AbsoluteFill style={{opacity: o}}>
      <svg width="100%" height="100%">
        <defs>
          <linearGradient id="divG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#fff" stopOpacity="0.22" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points={pts.join(' ')} fill="none" stroke="url(#divG)" strokeWidth={6} filter="url(#blur4)" />
        <polyline points={pts.join(' ')} fill="none" stroke="url(#divG)" strokeWidth={1.2} />
      </svg>
    </AbsoluteFill>
  );
};

// Compteur d'âge mécanique (chiffres qui roulent, flou de mouvement)
export const AgeCounter: React.FC<{value: number; speed: number; o: number}> = ({value, speed, o}) => {
  const tens = value / 10;
  const ones = value % 10;
  const digit = (v: number, key: string) => {
    const blur = Math.min(6, Math.abs(speed) * 2.5);
    return (
      <div key={key} style={{height: 84, width: 54, overflow: 'hidden', position: 'relative'}}>
        <div style={{position: 'absolute', top: -((v % 10) * 84), filter: blur > 0.3 ? `blur(${blur}px)` : undefined}}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((d, i) => (
            <div key={i} style={{height: 84, lineHeight: '84px', textAlign: 'center'}}>{d}</div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div style={{position: 'absolute', top: SAFE.top + 18, left: 0, width: 1080, display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: FONT, color: C.text, opacity: o}}>
      <div style={{fontSize: 22, letterSpacing: '0.4em', fontWeight: 400, opacity: 0.7, marginBottom: 2, paddingLeft: '0.4em'}}>ÂGE</div>
      <div style={{display: 'flex', alignItems: 'center', padding: '0 22px', fontSize: 76, fontWeight: 600, background: 'rgba(10,10,15,0.65)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, boxShadow: '0 10px 40px rgba(0,0,0,0.6)'}}>
        {digit(Math.floor(tens) + (tens % 1 > 0.9 ? (tens % 1 - 0.9) * 10 : 0), 't')}
        {digit(ones, 'o')}
        <div style={{fontSize: 26, fontWeight: 500, letterSpacing: '0.2em', marginLeft: 12, opacity: 0.8}}>ANS</div>
      </div>
    </div>
  );
};

export const Bubble: React.FC<{text: string; at: number; x: number; y: number; out?: number}> = ({text, at, x, y, out}) => {
  const f = useF();
  const p = ease.back(clamp((f - at) / 10));
  const o = (out !== undefined ? 1 - prog(f, out, out + 8) : 1) * clamp((f - at) / 5);
  if (o <= 0) return null;
  const wob = Math.sin(f / 4) * 2;
  return (
    <div style={{position: 'absolute', left: x, top: y, transform: `scale(${p}) rotate(${-4 + wob}deg)`, transformOrigin: '20% 100%', opacity: o, fontFamily: FONT}}>
      <div style={{background: '#F5F5F5', color: '#111', padding: '14px 26px', borderRadius: 30, fontWeight: 700, fontSize: 38, letterSpacing: '0.08em', boxShadow: '0 8px 30px rgba(0,0,0,0.6)'}}>{text}</div>
      <div style={{width: 0, height: 0, borderLeft: '14px solid transparent', borderRight: '14px solid transparent', borderTop: '22px solid #F5F5F5', marginLeft: 40}} />
    </div>
  );
};

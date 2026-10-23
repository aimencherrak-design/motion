import React from 'react';
import {C} from '../constants';

// Définitions SVG partagées (filtres, dégradés). Rendu une seule fois, invisible.
export const Defs: React.FC = () => (
  <svg width={0} height={0} style={{position: 'absolute'}}>
    <defs>
      <filter id="glow3" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b1" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="b2" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="b3" />
        <feComponentTransfer in="b1" result="c1"><feFuncA type="linear" slope="0.9" /></feComponentTransfer>
        <feComponentTransfer in="b2" result="c2"><feFuncA type="linear" slope="0.45" /></feComponentTransfer>
        <feComponentTransfer in="b3" result="c3"><feFuncA type="linear" slope="0.15" /></feComponentTransfer>
        <feMerge>
          <feMergeNode in="c3" />
          <feMergeNode in="c2" />
          <feMergeNode in="c1" />
        </feMerge>
      </filter>
      <filter id="glowSoft" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="glowText" x="-30%" y="-80%" width="160%" height="260%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      {[2, 4, 8, 14, 24, 40].map((s) => (
        <filter key={s} id={`blur${s}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={s} />
        </filter>
      ))}
      <radialGradient id="headGold" cx="0.38" cy="0.32" r="0.75">
        <stop offset="0" stopColor="#FBE9A6" />
        <stop offset="0.45" stopColor={C.gold} />
        <stop offset="1" stopColor="#9C7A1C" />
      </radialGradient>
      <radialGradient id="headGray" cx="0.38" cy="0.32" r="0.75">
        <stop offset="0" stopColor="#8E8E8E" />
        <stop offset="0.5" stopColor={C.gray} />
        <stop offset="1" stopColor="#474747" />
      </radialGradient>
      <radialGradient id="blueLit" cx="0.85" cy="0.7" r="0.8">
        <stop offset="0" stopColor="#7FA8FF" stopOpacity="0.85" />
        <stop offset="0.6" stopColor={C.phone} stopOpacity="0.25" />
        <stop offset="1" stopColor={C.phone} stopOpacity="0" />
      </radialGradient>
      <linearGradient id="phoneCone" x1="0" y1="1" x2="0.4" y2="0">
        <stop offset="0" stopColor="#8DB4FF" stopOpacity="0.9" />
        <stop offset="1" stopColor={C.phone} stopOpacity="0" />
      </linearGradient>
      <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#E9F0FF" stopOpacity="0" />
        <stop offset="0.25" stopColor="#E9F0FF" stopOpacity="0.12" />
        <stop offset="1" stopColor="#E9F0FF" stopOpacity="0.26" />
      </linearGradient>
      <linearGradient id="beamGold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFE7A0" stopOpacity="0" />
        <stop offset="0.25" stopColor="#FFE7A0" stopOpacity="0.14" />
        <stop offset="1" stopColor="#FFE7A0" stopOpacity="0.32" />
      </linearGradient>
      <linearGradient id="lampCone" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FFD58A" stopOpacity="0.75" />
        <stop offset="1" stopColor="#F3B65A" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="floodCone" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#E8EEFF" stopOpacity="0.5" />
        <stop offset="1" stopColor="#E8EEFF" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="wallNight" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#0B1222" />
        <stop offset="1" stopColor={C.night1} />
      </linearGradient>
      <linearGradient id="floorGloss" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#131A2A" />
        <stop offset="0.35" stopColor="#0C0F18" />
        <stop offset="1" stopColor={C.bg} />
      </linearGradient>
      <linearGradient id="woodTop" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#3B4E6E" />
        <stop offset="1" stopColor="#1B2A44" />
      </linearGradient>
      <linearGradient id="couchBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#24375A" />
        <stop offset="1" stopColor="#111B30" />
      </linearGradient>
      <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#3C5786" />
        <stop offset="0.45" stopColor="#1B2A44" />
        <stop offset="1" stopColor="#0B1222" />
      </linearGradient>
      <linearGradient id="reflFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity="0.5" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <radialGradient id="pool" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#DCE6FF" stopOpacity="0.35" />
        <stop offset="1" stopColor="#DCE6FF" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="poolGold" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#FFD873" stopOpacity="0.45" />
        <stop offset="1" stopColor="#FFD873" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="poolBlue" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor={C.phone} stopOpacity="0.45" />
        <stop offset="1" stopColor={C.phone} stopOpacity="0" />
      </radialGradient>
      <radialGradient id="poolAmber" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#F7C46C" stopOpacity="0.5" />
        <stop offset="1" stopColor="#F7C46C" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="shadow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#000" stopOpacity="0.85" />
        <stop offset="1" stopColor="#000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#FFF4C8" stopOpacity="1" />
        <stop offset="0.15" stopColor="#FFD873" stopOpacity="0.9" />
        <stop offset="0.5" stopColor="#E8A23A" stopOpacity="0.35" />
        <stop offset="1" stopColor="#E8A23A" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

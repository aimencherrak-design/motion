import { Episode } from './engine.js';

// Point d'entrée navigateur : lecteur temps réel (avec la bande-son) ou mode rendu image par image.
window.MeliMelo = {
  create(canvas, w, h, opts) {
    const ep = new Episode(canvas, w, h, opts);
    window.__ep = ep;
    return ep;
  },
  async grab(canvas, type = 'image/jpeg', q = 0.93) {
    const b = await new Promise((r) => canvas.toBlob(r, type, q));
    const a = new Uint8Array(await b.arrayBuffer());
    let s = '';
    for (let i = 0; i < a.length; i += 32768) s += String.fromCharCode.apply(null, a.subarray(i, i + 32768));
    return btoa(s);
  },
};
window.ready = true;

// Coupe le blanc de tête de chaque réplique (public/voice/<scène>.mp3) et les place
// à voiceAt secondes dans leur scène (script.json) → public/voice.mp3. Sans réseau.
import {execFileSync} from 'node:child_process';
import {readFileSync, writeFileSync} from 'node:fs';

const script = JSON.parse(readFileSync('script.json', 'utf8'));
const parts = script.scenes.map((sc) => {
  const file = `public/voice/${sc.id}.trim.wav`;
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-i', `public/voice/${sc.id}.mp3`, '-af', 'silenceremove=start_periods=1:start_threshold=-45dB', file]);
  const dur = Number(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file]).toString());
  const at = sc.voiceAt ?? 0.25;
  const room = (sc.to - sc.from) / script.fps - at;
  console.log(`${sc.id}: ${dur.toFixed(2)} s à +${at} s (place : ${room.toFixed(2)} s)${dur > room ? '  ⚠ déborde' : ''}`);
  return {file, start: sc.from / script.fps + at};
});
const inputs = parts.flatMap((p) => ['-i', p.file]);
const filters = parts.map((p, i) => `[${i}]adelay=${Math.round(p.start * 1000)}|${Math.round(p.start * 1000)}[a${i}]`).join(';');
const mix = parts.map((_, i) => `[a${i}]`).join('') + `amix=inputs=${parts.length}:normalize=0,apad,atrim=0:${script.duration_s}`;
execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...inputs, '-filter_complex', `${filters};${mix}`, '-ac', '1', '-b:a', '192k', 'public/voice.mp3']);
execFileSync('sh', ['-c', 'rm -f public/voice/*.trim.wav']);
writeFileSync('src/voice.json', JSON.stringify({enabled: true}, null, 1));
console.log('→ public/voice.mp3');

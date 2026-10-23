"""Timings mot à mot de la voix off (faster-whisper, local et gratuit).

pip install faster-whisper
python3 scripts/align.py  →  public/voice-timings.json  [{"word", "start", "end", "frame"}]
"""
import json
from faster_whisper import WhisperModel

model = WhisperModel('small', device='cpu', compute_type='int8')
segments, _ = model.transcribe('public/voice.mp3', language='fr', word_timestamps=True)
words = [
    {'word': w.word.strip(), 'start': round(w.start, 3), 'end': round(w.end, 3), 'frame': round(w.start * 30)}
    for s in segments for w in s.words
]
with open('public/voice-timings.json', 'w') as fh:
    json.dump(words, fh, ensure_ascii=False, indent=1)
print(len(words), 'mots →', 'public/voice-timings.json')

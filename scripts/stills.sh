#!/bin/bash
# usage: scripts/stills.sh name frame1 frame2 ... → out/<name>.png (planche contact)
name=$1; shift; files=()
for fr in "$@"; do npx remotion still Episode01 out/_s$fr.png --frame=$fr --log=error >/dev/null 2>&1 || { echo "fail $fr"; npx remotion still Episode01 out/_s$fr.png --frame=$fr 2>&1 | tail -15; exit 1; }; files+=(-i out/_s$fr.png); done
n=$#
ffmpeg -loglevel error -y "${files[@]}" -filter_complex "hstack=inputs=$n,scale=$((n*540)):-1" out/$name.png 2>/dev/null || cp out/_s$1.png out/$name.png

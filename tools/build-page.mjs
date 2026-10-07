// Construit index.html (page autonome) à partir de web/player.html (fragment publié comme artefact).
import fs from 'fs';
const body = fs.readFileSync('web/player.html', 'utf8');
const head = body.slice(0, body.indexOf('</style>') + 8);
const rest = body.slice(body.indexOf('</style>') + 8);
fs.writeFileSync('index.html', `<!doctype html>\n<html lang="fr">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n${head}\n<style>body{margin:0}[hidden]{display:none!important}</style>\n</head>\n<body>${rest}\n</body>\n</html>\n`);
console.log('index.html prêt');

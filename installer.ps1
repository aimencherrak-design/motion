# Installation / mise a jour d'Apporteur sur Windows.
# A lancer depuis PowerShell avec la commande indiquee dans le README :
#   irm https://raw.githubusercontent.com/aimencherrak-design/motion/refs/heads/claude/sharp-meitner-gyryxo/installer.ps1 | iex
#
# Ce que fait ce script :
#  1. verifie que Node.js est installe (et propose de l'installer sinon) ;
#  2. telecharge la derniere version de l'outil depuis GitHub ;
#  3. l'installe dans C:\Users\<toi>\Apporteur (tes donnees, elles, restent dans Apporteur-Donnees) ;
#  4. cree l'icone "Apporteur" sur le Bureau, puis lance l'outil.

$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"   # telechargement beaucoup plus rapide

$Branche = "claude/sharp-meitner-gyryxo"
$UrlZip = "https://github.com/aimencherrak-design/motion/archive/refs/heads/$Branche.zip"
$Dossier = Join-Path $HOME "Apporteur"

function Etape($texte) { Write-Host ""; Write-Host "  > $texte" -ForegroundColor Yellow }

Write-Host ""
Write-Host "  =============================================" -ForegroundColor DarkYellow
Write-Host "     Apporteur - installation / mise a jour" -ForegroundColor White
Write-Host "  =============================================" -ForegroundColor DarkYellow

# 1. Node.js
Etape "Verification de Node.js"
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "    Node.js n'est pas installe. Installation automatique en cours..."
  if (Get-Command winget -ErrorAction SilentlyContinue) {
    winget install -e --id OpenJS.NodeJS.LTS --accept-source-agreements --accept-package-agreements
    Write-Host ""
    Write-Host "    Node.js est installe. FERME cette fenetre, ouvre un nouveau PowerShell" -ForegroundColor Green
    Write-Host "    et colle de nouveau la commande d'installation." -ForegroundColor Green
  } else {
    Write-Host "    Installe Node.js (version LTS) depuis la page qui va s'ouvrir, puis relance la commande." -ForegroundColor Red
    Start-Process "https://nodejs.org/fr/download"
  }
  return
}
Write-Host "    Node.js $(node --version) est present."

# 2. Arreter l'outil s'il tourne (sinon ses fichiers sont verrouilles)
$enCours = Get-NetTCPConnection -LocalPort 3210 -State Listen -ErrorAction SilentlyContinue
if ($enCours) {
  Etape "Arret de l'outil en cours d'utilisation"
  $enCours | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }
  Start-Sleep -Seconds 2
}

# 3. Telechargement
Etape "Telechargement de la derniere version"
$Temp = Join-Path $env:TEMP ("apporteur-" + [guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Path $Temp | Out-Null
$Zip = Join-Path $Temp "apporteur.zip"
Invoke-WebRequest -Uri $UrlZip -OutFile $Zip -UseBasicParsing
Expand-Archive -Path $Zip -DestinationPath $Temp -Force
$Source = Get-ChildItem -Path $Temp -Directory | Select-Object -First 1

# 4. Installation (les composants deja installes sont conserves pour aller plus vite)
Etape "Installation dans $Dossier"
New-Item -ItemType Directory -Path $Dossier -Force | Out-Null
robocopy $Source.FullName $Dossier /MIR /XD node_modules .next /NFL /NDL /NJH /NJS /NP | Out-Null
if ($LASTEXITCODE -ge 8) { throw "La copie des fichiers a echoue (code $LASTEXITCODE)." }
Remove-Item -Path $Temp -Recurse -Force -ErrorAction SilentlyContinue

# 5. Icone sur le Bureau
Etape "Creation de l'icone Apporteur sur le Bureau"
$Bureau = [Environment]::GetFolderPath("Desktop")
$Shell = New-Object -ComObject WScript.Shell
$Raccourci = $Shell.CreateShortcut((Join-Path $Bureau "Apporteur.lnk"))
$Raccourci.TargetPath = Join-Path $Dossier "Lancer.bat"
$Raccourci.WorkingDirectory = $Dossier
$Raccourci.IconLocation = (Join-Path $Dossier "public\apporteur.ico") + ",0"
$Raccourci.Description = "Apporteur - outil prive d'apporteur d'affaires"
$Raccourci.Save()

# 6. Lancement
Etape "Lancement de l'outil"
Write-Host "    La premiere fois, la preparation prend 2 a 4 minutes dans la fenetre noire."
Write-Host "    Ensuite, double-clique simplement sur l'icone Apporteur de ton Bureau."
Start-Process -FilePath (Join-Path $Dossier "Lancer.bat") -WorkingDirectory $Dossier
Write-Host ""
Write-Host "  Termine. Tu peux fermer cette fenetre bleue." -ForegroundColor Green
Write-Host ""

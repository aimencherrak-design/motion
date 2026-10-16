@echo off
chcp 65001 >nul
title Apporteur
cd /d "%~dp0"

rem --- 1. Node.js est-il installe ? ---
where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo  Node.js n'est pas encore installe sur ce PC.
  echo  La page de telechargement va s'ouvrir : installe la version "LTS",
  echo  puis double-clique de nouveau sur Lancer.bat.
  echo.
  start "" https://nodejs.org/fr/download
  pause
  exit /b 1
)

rem --- 2. L'outil tourne-t-il deja ? On ouvre simplement le navigateur. ---
netstat -ano | findstr /r /c:"127.0.0.1:3210 .*LISTENING" >nul
if not errorlevel 1 (
  start "" http://localhost:3210
  exit /b 0
)

rem --- 3. Installation / preparation si c'est une nouvelle version ---
set /p VERSION=<version.txt
set CONSTRUITE=
if exist .next\version-construite.txt set /p CONSTRUITE=<.next\version-construite.txt
if not exist node_modules goto installer
if not "%VERSION%"=="%CONSTRUITE%" goto installer
goto demarrer

:installer
echo.
echo  Installation de la version %VERSION% (1 a 3 minutes la premiere fois)...
echo.
call npm install --no-audit --no-fund
if errorlevel 1 goto erreur
echo.
echo  Preparation de l'outil (environ 1 minute)...
echo.
call npm run build
if errorlevel 1 goto erreur
> .next\version-construite.txt echo %VERSION%

:demarrer
cls
echo.
echo   ======================================================
echo     Apporteur est demarre :  http://localhost:3210
echo.
echo     Laisse cette fenetre ouverte (tu peux la reduire).
echo     Pour arreter l'outil : ferme cette fenetre.
echo   ======================================================
echo.
start "" cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:3210"
call npm run start
goto :eof

:erreur
echo.
echo  Une erreur est survenue.
echo  Fais une capture de cette fenetre et envoie-la a Claude.
echo.
pause
exit /b 1

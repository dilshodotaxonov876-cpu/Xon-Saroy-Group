@echo off
title XON SAROY Server
chcp 65001 >nul

set "TARGET_DIR=C:\Users\delux\Documents\xon saroy group"
if exist "%~dp0server.ps1" (
    set "TARGET_DIR=%~dp0"
)

echo ===================================================
echo   XON SAROY Katalog Saytini Ishga Tushirish
echo ===================================================
echo.

powershell -ExecutionPolicy Bypass -NoProfile -Command "$dir = '%TARGET_DIR%'.TrimEnd('\'); $ps1 = Join-Path $dir 'server.ps1'; if (-not (Get-NetTCPConnection -LocalPort 8080 -ErrorAction SilentlyContinue)) { Start-Process powershell -ArgumentList ('-WindowStyle Hidden -ExecutionPolicy Bypass -NoProfile -File \"\"{0}\"\"' -f $ps1) -WorkingDirectory $dir; Start-Sleep -Seconds 1; }"

start http://localhost:8080/#production

echo Sayt brauzeringizda ochildi: http://localhost:8080/#production
echo.
timeout /t 2 /nobreak >nul
exit

@echo off
title WINQubit Application Server
echo ===================================================
echo   Starting WINQubit (Women Led Innovation)
echo ===================================================
echo.
cd /d "%~dp0"

echo Opening browser...
start http://localhost:3000

echo Starting Next.js development server...
npm run dev
pause

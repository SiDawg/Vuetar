@echo off

REM Check if an argument is provided
IF "%~1"=="" (
    echo Please provide a commit message
    exit /b 1
)

echo Adding Files ======
git add .

echo.
echo Comit =============
git commit -m "%~1"

echo.
echo Push ==============
git push origin main

echo.
echo Done ==============
exit /b 0
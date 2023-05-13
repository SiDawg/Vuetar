@echo off

REM Check if an argument is provided
IF "%~1"=="" (
    echo Error: Please provide a commit message as an argument.
    exit /b 1
)

REM Execute Git commands
git add .
git commit -m "%~1"
git push origin main

REM Exit the batch file
exit /b 0
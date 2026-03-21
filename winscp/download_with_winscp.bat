@echo off
REM WinSCPのインストールパス設定
set WINSCP_DIR=D:\Program Files (x86)\WinSCP

REM WinSCP.comはコンソール(CUI)用
REM セッションログを残す場合は、/log="logs\winscp.log" を付ける
"%WINSCP_DIR%\WinSCP.com" /script="download_script.txt"

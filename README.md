# Debugging experimetns with VS code + Debugger for Chrome

To debug experiments in VS code with Google Chrome, configure 'launch.json' file.
"file": is set to the folder you have open in VS code. Add file name to the ${workspaceFolder} to launch

{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Debug RS Exp",
            "file": "${workspaceFolder}/index.html" /
        }
    ]
}

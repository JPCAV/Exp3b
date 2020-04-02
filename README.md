# To debug experiments in VS code with Google Chrome, configure 'launch.json' file.
E.g.


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
            "file": "${workspaceFolder}/index.html" // This is the folder you opened in VS code. Add file name to this to launch
        }
    ]
}

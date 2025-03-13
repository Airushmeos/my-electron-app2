const { app, BrowserWindow, Menu, shell } = require("electron");

let ftpWindow, appWindow, ladenWindow; // Variablen für Fenster

function createWindowapp() {
    if (appWindow) {
        appWindow.focus();
        return;
    }

    appWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true }
    });

//    robloxWindow.loadFile("index3.html");
    appWindow.loadURL("https://myfirstwebsite.lima-city.at/app");

    appWindow.on("closed", () => {
        appWindow = null;
    });
}

function createWindowftp() {
    if (ftpWindow) {
        ftpWindow.focus();
        return;
    }

    ftpWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true }
    });

//    robloxWindow.loadFile("index3.html");
    ftpWindow.loadURL("https://myfirstwebsite.lima-city.at/ftp");

    ftpWindow.on("closed", () => {
        ftpWindow = null;
    });
}

// 📌 **Menüleiste definieren**
const menuTemplate = [
    {
        label: "Datei",
        submenu: [{ role: "quit", label: "Beenden" }]
    },
    {
        label: "Hilfe",
        submenu: [
            {
                label: "Website besuchen",
                click: () => shell.openExternal("https://myfirstwebsite.lima-city.at")
            }
        ]
    },
    {
        label: "Seiten",
        submenu: [
            { label: "App", click: createWindowapp },
            { label: "FTP", click: createWindowftp },
        //    { label: "Laden", click: createWindowladen }
        ]
    }
];

// 🚀 **App starten**
app.whenReady().then(() => {
    createWindowftp();
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
});

// 🔄 **Fenster bei MacOS wiederherstellen**
app.on("activate", () => {
    if (!emailWindow) createWindowftp();
});

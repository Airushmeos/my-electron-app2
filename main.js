const { app, BrowserWindow, Menu, shell } = require("electron");

let ftpWindow, appWindow, streamWindow, streamHtmlWindow, kiWindow; // Variablen für Fenster

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

    ftpWindow.loadURL("https://myfirstwebsite.lima-city.at/ftp");

    ftpWindow.on("closed", () => {
        ftpWindow = null;
    });
}

function createWindowStream() {
    if (streamWindow) {
        streamWindow.focus();
        return;
    }

    streamWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true }
    });

    streamWindow.loadURL("https://myfirstwebsite.lima-city.at/stream");

    streamWindow.on("closed", () => {
        streamWindow = null;
    });
}

function createWindowStreamHtml() {
    if (streamHtmlWindow) {
        streamHtmlWindow.focus();
        return;
    }

    streamHtmlWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true }
    });

    streamHtmlWindow.loadURL("https://myfirstwebsite.lima-city.at/stream/stream.html");

    streamHtmlWindow.on("closed", () => {
        streamHtmlWindow = null;
    });
}

function createWindowKI() {
    if (kiWindow) {
        kiWindow.focus();
        return;
    }

    kiWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true }
    });

    kiWindow.loadURL("https://myfirstwebsite.lima-city.at/KI/");

    kiWindow.on("closed", () => {
        kiWindow = null;
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
            { label: "Stream", click: createWindowStream },
            { label: "Stream HTML", click: createWindowStreamHtml },
            { label: "KI", click: createWindowKI }
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
    if (!ftpWindow) createWindowftp();
});

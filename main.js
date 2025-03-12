const { app, BrowserWindow, Menu, shell } = require("electron");

let robloxWindow, emailWindow, ladenWindow; // Variablen für Fenster

function createWindowapp() {
    if (robloxWindow) {
        robloxWindow.focus();
        return;
    }

    robloxWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true }
    });

//    robloxWindow.loadFile("index3.html");
    robloxWindow.loadURL("https://myfirstwebsite.lima-city.at/app");

    robloxWindow.on("closed", () => {
        robloxWindow = null;
    });
}

function createWindowftp() {
    if (robloxWindow) {
        robloxWindow.focus();
        return;
    }

    robloxWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true }
    });

//    robloxWindow.loadFile("index3.html");
    robloxWindow.loadURL("https://myfirstwebsite.lima-city.at/app");

    robloxWindow.on("closed", () => {
        robloxWindow = null;
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
    createWindowemail();
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
});

// 🔄 **Fenster bei MacOS wiederherstellen**
app.on("activate", () => {
    if (!emailWindow) createWindowemail();
});

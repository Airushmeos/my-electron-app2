const { app, BrowserWindow, Menu, shell } = require("electron");

let robloxWindow, emailWindow, ladenWindow; // Variablen für Fenster

function createWindowroblox() {
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
    robloxWindow.loadURL("https://myfirstwebsite.lima-city.at/roblox/sehen.html");

    robloxWindow.on("closed", () => {
        robloxWindow = null;
    });
}

function createWindowemail() {
    if (emailWindow) {
        emailWindow.focus();
        return;
    }

    emailWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true }
    });

    emailWindow.loadURL("https://myfirstwebsite.lima-city.at/senden");

    emailWindow.on("closed", () => {
        emailWindow = null;
    });
}

function createWindowladen() {
    if (ladenWindow) {
        ladenWindow.focus();
        return;
    }

    ladenWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true }
    });

    ladenWindow.loadURL("https://myfirstwebsite.lima-city.at/laden");

    ladenWindow.on("closed", () => {
        ladenWindow = null;
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
            { label: "Roblox", click: createWindowroblox },
            { label: "E-Mail", click: createWindowemail },
            { label: "Laden", click: createWindowladen }
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

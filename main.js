const { app, BrowserWindow, Menu, shell, Notification, Tray } = require("electron");
const path = require("path");

let ftpWindow, appWindow, streamWindow, kiWindow, emailWindow, massagerWindow;
let tray = null;

function createWindow(url, refVar, title) {
    if (refVar && !refVar.isDestroyed()) {
        refVar.focus();
        return;
    }

    const newWin = new BrowserWindow({
        width: 800,
        height: 600,
        title: title,
        webPreferences: { nodeIntegration: true },
    });

    newWin.loadURL(url);

    newWin.on("closed", () => {
        refVar = null;
    });

    return newWin;
}

function createWindowapp() {
    appWindow = createWindow("https://myfirstwebsite.lima-city.at/app", appWindow, "App");
}

function createWindowftp() {
    ftpWindow = createWindow("https://myfirstwebsite.lima-city.at/ftp", ftpWindow, "FTP");
}

function createWindowStream() {
    streamWindow = createWindow("https://myfirstwebsite.lima-city.at/stream", streamWindow, "Stream");
}

function createWindowKI() {
    kiWindow = createWindow("https://myfirstwebsite.lima-city.at/KI/%C3%B6ffentlich.html", kiWindow, "KI");
}

function createWindowemail() {
    emailWindow = createWindow("https://myfirstwebsite.lima-city.at/email/", emailWindow, "E-Mail");
}

function createWindowmassager() {
    massagerWindow = createWindow("https://myfirstwebsite.lima-city.at/chat/", massagerWindow, "Chat");
}

// 🧠 Mitteilung senden
function sendNotification() {
    new Notification({
        title: "Meine App2",
        body: "Läuft weiterhin im Hintergrund!",
    }).show();
}

// 🍔 Menü
const menuTemplate = [
    {
        label: "Datei",
        submenu: [{ role: "quit", label: "Beenden" }],
    },
    {
        label: "Hilfe",
        submenu: [
            {
                label: "Website besuchen",
                click: () => shell.openExternal("https://myfirstwebsite.lima-city.at"),
            },
        ],
    },
    {
        label: "Seiten",
        submenu: [
            { label: "App", click: createWindowapp },
            { label: "FTP", click: createWindowftp },
            { label: "Stream", click: createWindowStream },
            { label: "KI", click: createWindowKI },
            { label: "E-Mail", click: createWindowemail },
            { label: "Chat", click: createWindowmassager },
        ],
    },
];

app.whenReady().then(() => {
    createWindowftp();
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));

    // 🎯 Tray aktivieren
    tray = new Tray(path.join(__dirname, "icon.png")); // PNG oder ICO verwenden
    tray.setToolTip("Meine App2");
    tray.setContextMenu(
        Menu.buildFromTemplate([
            { label: "Öffne App", click: createWindowftp },
            { label: "Beenden", click: () => app.quit() },
        ])
    );

    // 📣 Alle 5 Minuten Notification senden
    setInterval(() => {
        sendNotification();
    }, 1 * 60 * 1000); // 5 Minuten
});

// 🧼 App beenden verhindern, wenn Fenster geschlossen wird
app.on("window-all-closed", (e) => {
    // Kein Quit bei Windows oder Linux
    e.preventDefault();
});

// 🔁 MacOS
app.on("activate", () => {
    if (!ftpWindow) createWindowftp();
});

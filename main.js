const { app, BrowserWindow } = require("electron");
const dialog = require('electron').dialog;
const ipc_main = require('electron').ipcMain;
const path = require("path");

let win;

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("dist/index.html")
    .then(() => { win.show(); });

  return win;
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipc_main.handle('open_dialog', async (_, options) => {
  return await dialog.showOpenDialog(win, options)
    .then((result) => { if (result) { return result; } })
    .catch((error) => { console.error('Show open dialog error: ' + error); });
})
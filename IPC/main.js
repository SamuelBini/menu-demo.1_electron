const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const ipc = electron.ipcMain
const dialog = electron.dialog


let win;

function createWindow () {

  win = new BrowserWindow()

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));


  win.on('closed', () => {
    win = null
  });
}


ipc.on("async-message", function (event) {
  event.sender.send("async-reply", "Le processus principal a ouvert la boite de dialogue d'erreur")

})

ipc.on("sync-message", function (event) {
  event.returnValue = "Ceci est un reponse synchrone"
})


app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

/*
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
*/

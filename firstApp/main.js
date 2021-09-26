const electron = require("electron")
const { app, BrowserWindow } = electron
const path = require('path')
const url = require('url')


app.on('ready', () => {
    win = new BrowserWindow({ width: 800, height: 600 })
    //  win.loadURL(`file://${__dirname}/index.html`)

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
})


exports.openWindow = (filename) => {
    let win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL(`file://${__dirname}/` + filename + `.html`)
}
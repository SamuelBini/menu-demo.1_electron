const electron = require("electron")
const {app, BrowserWindow} = electron

app.on('ready', () => {
    let win = new BrowserWindow({ width: 800, height : 600, backgroundColor:"#37474f", title: "Gestion de moyennes"})

    win.loadURL(`file://${__dirname}/views/index.html`)
    
    //  win.webContents.openDevTools();
})


exports.openWindow = (filename) => {

    let win = new BrowserWindow({ width : 800, height : 600})

    win.loadURL(`file://${__dirname}/` + filename + `.html`)

}
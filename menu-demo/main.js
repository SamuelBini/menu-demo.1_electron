console.log("Processus principal...")

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const Menu = electron.Menu


let win;

function createWindow() {

	win = new BrowserWindow();

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	win.once('ready-to-show', () => {
		win.show();
	});


	win.on('closed', () => {
		win = null
	});
}

app.on('ready', function () {
	createWindow()

	const template = [
		{
			label: "Edit",
			submenu: [
				{ role: "undo" },
				{ role: "redo" },
				{ type: "separator" },
				{ role: "cut" },
				{ role: "copy" },
				{ role: "paste" },
				{ role: "pasteandmatchstyle" },
				{ role: "delete" },
				{ role: "selectall" },
			]
		},
		{
			label: 'demo',
			submenu: [
				{
					label: "submenu1",
					submenu: [
						{
							label: "subsubmenu1",
							click: function () {
								console.log("Vous avez cliqué sur le sous-sous-menu 1")
							}
						},
						{
							label: "subsubmenu2",
							click: function () {
								console.log("Vous avez cliqué sur le sous-sous-menu 2")
							}
						}
					]
				},
				{
					type: 'separator'
				},
				{
					label: "submenu2"
				}
			]
		},
		{
			label: "Help",
			click: function () {
				electron.shell.openExternal("http://electron.atom.io")
			}
		}
	]

	const menu = Menu.buildFromTemplate(template)

	Menu.setApplicationMenu(menu)
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});

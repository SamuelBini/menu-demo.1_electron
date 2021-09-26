console.log("Processus principal...")

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const Menu = electron.Menu
const MenuItem = electron.MenuItem
const globalShortcut = electron.globalShortcut


let win;

function createWindow() {

	win = new BrowserWindow()

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
			submenu: [
				{
					label: "A propos d'electron",
					click: function () {
						electron.shell.openExternal("http://electron.atom.io")
					},
					//accelerator: "CmdOrCtrl + Shift + H"
				}
			]

		}
	]

	const menu = Menu.buildFromTemplate(template)

	Menu.setApplicationMenu(menu)


	const ctxMenu = new Menu()
	ctxMenu.append(new MenuItem({
		label: 'Hello',
		click: function () {
			console.log("Clic sur l'option hello")
		}
	}))

	ctxMenu.append(new MenuItem({
		label: 'World',
		click: function () {
			console.log("Clic sur l'option World")
		}
	}))

	ctxMenu.append(new MenuItem({
		role: "selectall"
	}))


	win.webContents.on('context-menu', function (e, params) {
		ctxMenu.popup(win, params.x, params.y)
	}) 


	globalShortcut.register("CmdOrCtrl + Shift + H", function () {
		win.show()
	})

});


app.on("will-quit", function () {
	globalShortcut.unregisterAll()
})


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

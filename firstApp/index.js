console.log("La vie est beau");

const remote = require("electron").remote
const main = remote.require('./main.js')

var button = document.createElement('button')

button.textContent = 'Open Window'

button.addEventListener("click", () => {
    main.openWindows("pageTwo")
}, false)

document.body.appendChild(button)
const openBtn = document.getElementById("openBtn")
const shell = require("electron").shell

openBtn.addEventListener("click", function (event) {
    //  shell.showItemInFolder("/home//samuel//Bureau//coucou.txt")
    shell.openItem("/home//onyx//Bureau//watchman")
})
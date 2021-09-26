var mongojs = require("mongojs")
var db = mongojs('127.0.0.1/database', ["admin"])

var loginForm = document.getElementById("loginForm")
var password = document.getElementById("password")


loginForm.addEventListener('submit', (e) => {
    
    e.preventDefault()

    db.admin.find({login: document.getElementById("login").value }, function (err, docs) {
        if (password.value == docs[0].password) {
            window.location = "../views/updatePage.html"
        }
    })

})


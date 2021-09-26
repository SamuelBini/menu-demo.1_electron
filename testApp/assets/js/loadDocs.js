
var mongojs = require("mongojs")
var db = mongojs("127.0.0.1/database", ["students"])


var tableContent = document.getElementById("tableContent")

db.students.find({}, function (err, docs) {
    for (const doc of docs) {
        var row = document.createElement("tr")

        Object.keys(doc).map((val, index) => {
            if (index != 0) {
                var new_node = document.createElement("td")
                new_node.innerHTML = doc[`${val}`]
                row.appendChild(new_node)    
            }
        })

        tableContent.appendChild(row)
    }
})


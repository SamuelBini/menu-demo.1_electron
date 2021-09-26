var mongojs = require("mongojs");
var db = mongojs('127.0.0.1/database', ["students"]);



(function () {

    var tableContent = document.getElementById("tableContent")

    var row = tableContent.getElementsByTagName("tr")[0]


    db.students.find({}, function (err, docs) {
        for (const doc of docs) {

            var new_row = row.cloneNode(deep = true)

            for (const child of new_row.childNodes ) {
                console.log( child )
            }

            row.parentElement.removeChild(row)

            Object.keys(doc).map((val, index) => {
                if (index != 0) {
                    var new_cell = document.createElement("td")
                    var new_input = document.createElement("input")

                    new_input.type = "text"
                    new_input.className = "validate"

                    if (val.indexOf("moyenne") != -1) {
                        new_input = document.createTextNode(doc[`${val}`])
                    } else {
                        new_input.setAttribute("value", doc[`${val}`])
                    }

                    if (val.indexOf("note") != -1) {
                        new_input.className += " note"
                        new_input.setAttribute("data-order", val.substring(val.indexOf("note_") + 5))
                    }
                    else {
                        new_input.className += " " + val
                    }


                    new_cell.appendChild(new_input)
                    new_row.appendChild(new_cell)

                }
            })

            tableContent.appendChild(document.createElement("td").appendChild(new_row))

            console.log(tableContent);

        }
    })

})();



function ajoutLigne(elt) {

    if (elt.getAttribute("data-last") === "1") {
        new_row = elt.cloneNode(deep = true)
        elt.setAttribute("data-last", 0)
        elt.parentElement.appendChild(new_row)
    }

}


function calculMoyenne(elt) {

    elt = elt.parentElement.parentElement.getElementsByClassName("moyenne")[0]

    notes = elt.parentElement.getElementsByClassName("note")

    var nbre_notes = 0
    var sum_notes = 0


    for (const note of notes) {
        console.log(note.value)
        if (note.value !== "") {
            nbre_notes += 1
            sum_notes += parseFloat(note.value)
        }
    }

    if (nbre_notes != 0) {
        elt.innerText = sum_notes / nbre_notes
    }

}



function validation() {

    var rows = document.getElementById("tableContent").getElementsByTagName("tr")


    for (let i = 0; i < rows.length - 1; i++) {

        const row = rows[i];

        var liste = Object();

        liste.nom = row.getElementsByClassName("nom")[0].value
        liste.prenoms = row.getElementsByClassName("prenoms")[0].value

        notes = row.getElementsByClassName("note")

        for (const note of notes) {
            let n;
            let i = note.getAttribute("data-order")

            if (note.value !== "") {
                n = parseFloat(note.value)
            }
            else {
                n = ""
            }

            liste[`note_${i}`] = n
        }

        liste.moyenne = row.getElementsByClassName("moyenne")[0].innerText

        db.students.insert(liste)

        window.location = "index.html"

    }

}

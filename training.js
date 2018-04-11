function toggleRed(element) {
    if (element.classList.contains('red')) {
        element.classList.remove('red')
    } else {
        element.classList.add('red')
    }
}


function createTable() {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    app.appendChild(table);
    table.appendChild(tbody);


    for (var i = 0; i < 5; i++) {
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        for (var j = 0; j < 5; j++) {
            var td = document.createElement('td');
            tr.appendChild(td)
        }
    }
    return table;
}
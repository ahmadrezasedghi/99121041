function start() {
    var array1 = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    
    var array2 = [
        [1, 2],
        [3],
        [4, 5, 6]
    ];
    
    outputArray("Values in array1 by row", array1, document.getElementById("output1"));
    outputArray("Values in array2 by row", array2, document.getElementById("output2"));
}

function outputArray(heading, theArray, output) {
    var results = "<h3>" + heading + "</h3>";

    for (var row = 0; row < theArray.length; ++row) {
        results += "<ol>";
        for (var column = 0; column < theArray[row].length; ++column) {
            results += "<li>" + theArray[row][column] + "</li>";
        }
        results += "</ol>";
    }

    output.innerHTML = results;
}

window.addEventListener("load", start, false);

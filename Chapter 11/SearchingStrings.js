var letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklm";

function buttonPressed() 
{
    var inputField = document.getElementById("inputField");
    var searchString = inputField.value;

    document.getElementById("results").innerHTML =
        "<p>First occurrence is located at index " + 
        letters.indexOf(searchString) + "</p>" + 
        "<p>Last occurrence is located at index " + 
        letters.lastIndexOf(searchString) + "</p>" + 
        "<p>First occurrence from index 12 is located at index " +
        letters.indexOf(searchString, 12) + "</p>" + 
        "<p>Last occurrence from index 12 is located at index " +
        letters.lastIndexOf(searchString, 12) + "</p>";
}

function start() 
{
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", buttonPressed, false);
}

window.addEventListener("load", start, false);

function start() {
  var n1 = [];
  var n2 = [];

  var length = 5;
  
  for (var i = 0; i < length; ++i) {
    n1[i] = i * 2;
  }

  for (i = 0; i < 5; ++i) {
    n2[i] = i * 3;
  }

  outputArray("Array n1:", n1, document.getElementById("output1"));
  outputArray("Array n2:", n2, document.getElementById("output2"));
}

function outputArray(heading, theArray, output) {
  var content = "<h2>" + heading + "</h2><table>" +
    "<thead><th>Index</th><th>Value</th></thead><tbody>";

  var length = theArray.length;

  for (var i = 0; i < length; ++i) {
    content += "<tr><td>" + i + "</td><td>" + theArray[i] + "</td></tr>";
  }

  content += "</tbody></table>";
  output.innerHTML = content;
}

window.addEventListener("load", start, false);

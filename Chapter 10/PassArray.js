// Fig. 10.14: PassArray.js 
// Passing arrays and individual array elements to functions. 

function start() {
    var a = [ 1, 2, 3, 4, 5 ];
    
    // Passing entire array
    outputArray( "Original array: ", a, document.getElementById( "originalArray" ) );
    
    // Modifying the array
    modifyArray( a );
    outputArray( "Modified array: ", a, document.getElementById( "modifiedArray" ) );

    // Passing individual array element
    document.getElementById( "originalElement" ).innerHTML =
        "a[3] before modifyElement: " + a[3];

    // Modifying individual array element
    modifyElement( a[3] );
    document.getElementById( "modifiedElement" ).innerHTML =
        "a[3] after modifyElement: " + a[3];
} // end function start()

// Outputs heading followed by the contents of "theArray"
function outputArray( heading, theArray, output ) {
    var content = "<h3>" + heading + "</h3><p>" + theArray.join( " " ) + "</p>";
    output.innerHTML = content;
} // end function outputArray

// Function that modifies the elements of an array
function modifyArray( theArray ) {
    for ( var j in theArray ) { 
        theArray[ j ] *= 2; 
    } // end for 
} // end function modifyArray

// Function that modifies the value passed 
function modifyElement( e ) {
    e *= 2; // scales element e only for the duration of the function
    document.getElementById( "inModifyElement" ).innerHTML = 
        "Value in modifyElement: " + e;
} // end function modifyElement 

window.addEventListener( "load", start, false );

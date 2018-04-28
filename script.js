//Hoisting
/*
calculateAge(1999);
function calculateAge(year) {
    console.log(2018 - year);
}
*/

//Scoping
var a = 'Hello';
first();

function first() {
    var b = "Hi";
    second();

    function second() {
        var c = "Bye";
        //third();
        console.log(a);
    }
}

function third(){
    var d = "Capt";
    console.log(c);
}

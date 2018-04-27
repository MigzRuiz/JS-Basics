// LECTURE 1: VARIABLES - DATA TYPES
/*
//STRING - text
var name = "John";
var lastName = "Smith";

//NUMBER - floats
var age = 26;

//BOOLEAN - true or false
var fullAge = true;

//UNDEFINED - no value
//NULL - non-existent

console.log(name);
console.log(lastName);
console.log(age);
console.log(fullAge);
*/

// LECTURE 2: VARIABLES 2
var name = "John";
var age = 26;
console.log(name+age);  // John26 - string
//This is called coercion, JS changes the data type on the fly.

var job, isMarried;
console.log(job); //Undefined
job = "Teacher";
isMarried = false;

console.log(name + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

age = "thirty six"; 
job = "driver";

console.log(name + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

var lastName = prompt("What is the last name?");
console.log(lastName);

//alert(lastname);

// LECTURE 3 - OPERATORS
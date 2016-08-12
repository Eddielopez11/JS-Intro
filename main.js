/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: value is undefined, basically to nothing


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: givenName is set to (Tim)


givenName = "JD";
// Q: What is `givenName` set to right now?
// A: givenName is now set to (JD)


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: greeting is set to (Hello, how are you?)


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: math is set to the equations answer which is (40) because its 50 - 10

math = high - "5";
// Q: What is `math` set to?
// A: math is now set to (45) which would be an error in python because that would
// be a string, but Javascript doesnt care, or more like it assumes that
// you actually want the number 50 subtracted by the number 5 and not of a string.


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;

// Answers Below:
var age = today - born;
age
// age would then take today and subtract born, then give you the result (hopefully lol)

// Store some information following in variables.
var yourName;
var instructorName;

// Update the variables above so the expression reads correctly.
// Answers Below:
var yourName = "Eddie";
var instructorName = "Jason";

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;

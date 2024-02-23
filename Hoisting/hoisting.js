// Variable hoisting using var
console.log(x); // undefined
var x = 5;
 
// Function hoisting
Hello(); 
function Hello() {
  console.log("Hello!");
}

//function expression hoisting
addition(2,3); //Error
var addition = function(x,y) {
  console.log(x + y);
};

// Variable hoisting using let
console.log(y);
let y = "Numetry";  //reference error

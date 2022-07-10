// first class function

/* 
what is an Anonymous Function?
==>A function without a name is anonymous function.

What are firstClass function?
==> 

function Statement vs Function Expression vs Function Declaration?
==>
*/
/*
a() // hello;
b() // TypeError : b is not a function
// function statement also known as function declaration;
function a() {
  confirm.log("hello");
} // this method is function statement;

// function Expresstion
var b = function () {
  console.log("expression function");
};

//function statement vs function expresstion
//diffrence is hoisting
*/

/*
// Anonymous Function
function(){

} // function statement requres a name;
// these are used where function are used as values
*/

/*
// Named Function Expression
var b = function abc() {
  console.log(abc);
};

//abc(); // ReferenceError: abc is not defined
console.log(b); // Function: abc
*/

/*
// Diffrence b/w parametrs and Arguments
function x(parameter1, parameter2) {
  /// these are parametes
  console.log("abc");
}

x(argument1, argument2); // these are arguments
*/


//First Class functions or first class Citizens - ability to use like value
// ability to use functions as value and asign it to variable and can be passed into anothe function or
// can be returned out from another function this ability altogether known as first class function.

// Arrow Functions
//Closures
// closure means a funtion which is bind together with its Lexical Environment
// or function along with its laxical scope forms a closure.

/**
 * Uses of Closures
 
 -Module Design Pattern
 Currying
 Functions like once ===> functions runs only once second time it will not works
 memoize ===> 
 maintaing state in async world ===>
 setTimeouts ===>
 Iterators ===>
 and many mores ...
 */

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x(); // 7
/*
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  var a = 100;
  return y;
}
var z = x();
//console.log(z); // function: y
// after many line of code also
z();
*/

function m() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    var a = 100;
    y();
  }
  x();
}
m();
/*
var c = 10;
function z() {
  console.log(c);
  var c = 10;
}
z(); // undefined

var a = 10;
function sayHi() {
  console.log(a);
}
sayHi(); // 10
*/

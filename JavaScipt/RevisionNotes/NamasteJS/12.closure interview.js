// what is closure?
// a function along wiht it's outer environment together form a function;

// give example for closure

// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// outer()(); // 10

// function outer() {
//   function inner() {
//     console.log(a);
//   }
//   let a = 10;
//   return inner;
// }
// outer()(); // 10

// function outer(b) {
//   function inner() {
//     console.log(a, b);
//   }
//   let a = 10;
//   return inner;
// }
// outer("hello")(); // 10 hello

function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10; //if this a is missing then line 47 will print 100 hello 20;
    return inner;
  }
  return outer;
}
//outest()("hello")(); // 10 hello 20

var a = 100;
outest()("hello")(); // 10 hello 20

/**
 * Few advantages of closures
 *
 * data hiding and incapsulation: other function or code will not have acess to those variables.
 */

function Counter() {
  var count = 0;

  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

/**
 * disAdvantage
 *
 * over consumption of memory because every time closures form memory; no garbage collector until code completes;
 */

// garbage collector is freez up the unutized memory;

//relation b/w closyre and garbage collector;

//these are related for ex:

function a() {
  var x = 0; // due to closure x will not remove from memory
  function b() {
    console.log(x);
  }
}
var y = a();

// smatly collect garbage
function a() {
    var x = 0, z = 10; // due to closure x will not remove from memory, z is garbage collected, 
    function b() {
      console.log(x);
    }
  }
  var y = a();
// smarly collector manages z will no longer in the memory.


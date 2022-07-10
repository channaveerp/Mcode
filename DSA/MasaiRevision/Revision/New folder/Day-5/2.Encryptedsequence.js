//https://oj.masaischool.com/contest/1691/problem/2

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];
  for (let i = 0, line = 1; i < test; i++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(N, arr);

    console.log(encriptedSequence(arr));
  }
}

function encriptedSequence(arr) {
  let ans = [];
  for (let i = 0; i < arr.length / 2; i++) {
    ans.push(arr[i]);
    ans.push(arr[arr.length - 1 - i]);
  }
  if (arr.length % 2 == 1) {
    ans = ans.slice(0, -1);
    return ans.join(" ");
  } else {
    return ans.join(" ");
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  3
  5
  1 3 5 4 2
  6
  1 3 5 6 4 2
  15
  14 11 7 5 16 2 15 12 8 6 9 10 17 3 13
`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}


// Dear Mangesh,


// Your hearing with the Masai Disciplinary Committee is scheduled on Thursday, 19th August at 1:00 PM. Please join the zoom link below to attend the same.


// https://zoom.us/j/92881168544?pwd=N3RjZ0d5R0hBWVIrSUtGR25ZUER1QT09

// Regards,
// Masai Disciplinary Committee


// what is java script?
// JavaScript is always synchronous and single-threaded. If you're executing a JavaScript block of code on a page then no other JavaScript on that page will currently be executed. JavaScript is only asynchronous in the sense that it can make, for example, Ajax calls.
//===============================

// What is Promise in JavaScript and how it works?
// Image result for what is promise in javascript with example
// A promise is an object which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states:
// Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
// Rejected: onRejected() will be called (e.g., reject() was called)
// Pending: not yet fulfilled or rejected.
//===============================

//when we use promise?
// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code
//===============================

// what is callback hell?
// Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous operations one after the other. By nesting callbacks in such a way, we easily end up with error-prone, hard to read, and hard to maintain code. Soln: Best code practice to handle it.
//===============================

//what is hoisting?
// JavaScript Hoisting refers to the process whereby the compiler allocates memory for variable and function declarations prior to execution of the code.

//Variables defined with let and const are hoisted to the top of the block, but not initialized.
//Declarations that are made using var are initialized with a default value of undefined.

// x = 5; // Assign 5 to x
// var x; // Declare x
// output = 5;

// var x; // Declare x
// x = 5; // Assign 5 to x
//output = 5
//===============================

// what is ternary operator?
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.
//===============================

// what is spread operator?
//The spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements. The spread operator is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability
//===============================

// What is closure?
// Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.
/*
//Now, as per the definition above, InnerFunction() can access outerVariable even if it will be executed separately. Consider the following example.
function OuterFunction() {

    var outerVariable = 100;

    function InnerFunction() {
        alert(outerVariable);
    }

    return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc(); // 100
*/

//When to use Closure?
// In the example, increment(), decrement() and value() becomes public function because they are included in the return object, whereas changeBy() function becomes private function because it is not returned and only used internally by increment() and decrement().

/*var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

alert(counter.value()); // 0
counter.increment();
counter.increment();
alert(counter.value()); // 2
counter.decrement();
alert(counter.value()); // 1*/
//===============================

//what is react/
//React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
//===============================

// what is redux?
//Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture.

// flux is an application architechture for react utilising a unidirectional data flow.
//three major parts : dispatcher, the store, and views.
//===============================

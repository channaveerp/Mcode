// var name = x || "name";
// //console.log(name);
// var x = "Masai";

// y = 10;
// //console.log(y);

// const sum = (x, y) => {
//   x = x && 5;
//   y = y || 5;
//   return x + y;
// };
//console.log(sum(20, 5));
/*
("use strict");

function name() {
  var name = "masai";
  console.log(this.name);
}

function greet() {
  console.log("hello");
}

var arr = [{ name: "Nrupl" }, { name: "Nman" }, { name: "alb" }];

for (var i = 0; i < arr.length; i++) {
  setTimeout(name.call(arr[i], 0));
  setTimeout(greet(), 0);
}
*/
/*
var str = "masai";
var { length } = str;
console.log(length);
*/
//console.log(typeof []);
////

//function alpha(a = 100){...}
/*
let fname = "masai";
let lnaem = "school";

const person = { fname, lnaem };

console.log(person);
*/
/*
const arr = ["a", "b", "c"];

arr[0] = "z";
console.log(arr);
*/
/*
printName("ab");

var printName = function (name) {
  console.log("hello", name);
};
*/
/*
name = "mm nm";

var name;

console.log(name);
*/
/*
const prod = (x) => {
  x = x + 5;
  return (inner) => x * inner;
};

console.log(prod(5)(10));
*/
/*
function getYear() {
  var year = new Date().getFullYear();

  return year;
}

getYear();
console.log(year);
*/
/*
const isAuth

console.log(isAuth)
*/
/*
const sum = (x, y) => x + y;
function sum(x, y) {
  x + y;
}
console.log(sum);
*/

function runProgram(input) {
  input = +input.trim();
  let count = 0;
  const arr = [];
  for (let i = 1; i <= input; i++) {
    arr.push(i);
  }
  function goodPermutations(index) {
    if (index == arr.length) {
      count++;
    }
    for (let i = index; i < arr.length; i++) {
      swap(arr, i, index);
      if ((index + 1) % arr[index] === 0 || arr[index] % (index + 1) === 0) {
        goodPermutations(index + 1);
      }
      swap(arr, i, index);
    }
  }
  goodPermutations(0);
  console.log(count);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

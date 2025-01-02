# Functions

```js
function welcome() {
  console.log("Hi");
}
welcome(); // 'Hi'

const welcome1 = function welcome() {
  console.log("Hi");
};
welcome(); // 'Hi'

// no need to give the name
(function () {
  console.log("self invoke func");
})(); // "self invoke func"

function add(num1, num2) {
  return num1 + num2;
}

function callBackFunc(func, num1, num2) {
  const sum = func(num1, num2);
  return sum;
}

const output = callBackFunc(add, 10, 20);
console.log(output); // 30
```

### Nested Functions

- A closure is an expression (most commonly,
  a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).
- Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function.

```js
function outer() {
  const val = 10;
  function inner() {
    console.log("val is ", val);
  }
  return inner;
}

outer()();
```

### Questions

#### Question 1

```js
console.log(squre); // Reference Error, It is hoisted but it is in temporial dead zone
console.log(squre(5)); // Reference Error, It is not hoisted
const square = function (n) {
  return n * n;
};
```

```js
console.log(squre); // undefined, It is hoisted but it is in temporial dead zone
console.log(squre(5)); // Reference Error, It is not hoisted means here function is not hoisted.
var square = function (n) {
  return n * n;
};
```

#### Question 2

```js
function test(theObject) {
  theObject.make = "Toyota";
}

const car_details = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log("car details.make 1", car_details.make); // car details.make 1 Honda
test(car_details); // Passed by ref so that value is getting updated
console.log("car details.make 2", car_details.make); // car details.make 2 Toyota
```

#### Question 3

```js
var num1 = 20,
  num2 = 3,
  name = "Chamakh";
function getScore() {
  var num1 = 2,
    num2 = 3;
  function add() {
    return name + " scored " + (num1 + num2);
  }
  return add();
}
console.log(getScore()); // Chamakh scored 5
```

#### Question 4

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
const a = addSquares(2, 3);
const b = addSquares(3, 4);
const c = addSquares(4, 5);
console.log(a, b, c); // 13 25 41
```

#### Question 5

```js
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z); // 6
    }
    C(3);
  }
  B(2);
}
A(1);
```

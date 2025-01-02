# Hoisting

- JavaScript Hoisting refers to the process whereby the compiler allocates memory for variable and function declarations prior to execution of the code.

- Variables defined with let and const are hoisted to the top of the block, but not initialized.
- Declarations that are made using var are initialized with a default value of undefined.

Ref

- https://www.freecodecamp.org/news/what-is-hoisting-in-javascript-3/
- https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

### Note

var vs let vs const
scope
variable shadowing
Declaration
Declaration without initialization

```js
var a;
let b;
const c; // declaration must be initialized
```

Reinitialization - var and let can be reinitialized and const can't

```js
x = 5; // Assign 5 to x
var x; // Declare x
output = 5;

var x; // Declare x
x = 5; // Assign 5 to x
output = 5;

var a = 1;
var b = "abc";
var c;

console.log(b && c);
```

- Interview questions on hoisting

#### Explain the scope of temporal dead zone

```js
// TDZ start
const func = () => console.log(letVar); // 3
// TDS
let letVar = 3; // TDS will end
func();
```

```js
func(); // reference error: connot access func
// arrow functions are not hoisted
const func = () => console.log(letVar); // 3
let letVar = 3;
```

```js
const func = () => console.log(letVar); // 3
func();
// RfError: Cannot acces letVar before initialization
let letVar = 3;
```

#### Why var hoisting is present in JavaScript

- https://stackoverflow.com/questions/15005098/why-does-javascript-hoist-variables

- It was error in rush, later they have not fixed it.

#### How hoisting works in JS if it interpreted(line by line)

- it is written in diffeerent language c++, due to that compiler capability it happens.

### Question 1

```js
function test() {
  var x;
  var x;
  console.log("X is " + x); // undefined

  var x = 10;
  var x;
  console.log("X is " + x); // 10

  var x = 10;
  var x = 40;
  console.log("X is " + x); // 40

  // let x = 10;
  // let x = 40;
  // console.log("X is " + x); // SyntaxError: Identifier 'x' has already been declared
}
test();
```

### Quetion 2

```js
function varTest() {
  var x = 1;
  {
    var x = 2;
    console.log(x); //2
  }
  console.log(x); //2
}
// varTest();

function letTest() {
  let x = 1;
  {
    let x = 2;
    console.log(x); //2
  }
  console.log(x); //1
}
letTest();
```

### Question 3

```js
function do_something() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}

do_something();
```

### Question 4

```js
var rate = 10;
function getRate() {
  if (rate === undefined) {
    var rate = 6;
    return rate;
  } else {
    return 10;
  }
}
// whenever local and global scopes gets conflict then local scope gets priority
console.log("Rate is ", getRate()); // 6

var rat = 10;
function getRate1() {
  if (rat === undefined) {
    var rate = 6;
    return rate;
  } else {
    return 10;
  }
}
console.log("Rate is ", getRate1()); // 10
```

- check: Why self invoking setTimeout method don't wait for time, it triggers suddenly.

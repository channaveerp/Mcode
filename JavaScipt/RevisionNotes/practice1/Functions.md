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

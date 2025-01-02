# Function Currying

"Currying is a process in functional programming in which we can
transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument"

```js
function add(x) {
  return function (y) {
    return x + y;
  };
}

var output = add(5);
console.log(output(10)); // 15
// or
var output1 = add(5)(10);
console.log(output1); // 15
```

Best Maths example

```js
const f = (x) => x + x; // 100 + 100
const g = (y) => y * y; // 10 * 10 = 100

console.log(f(g(10))); // 200
```

closure calling such functions multiple time with currying property we can call it once.

```js
function add(x) {
  // without closure
  if (arguments.length > 1) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  } else {
    // with closure
    return function (y) {
      return x + y;
    };
  }
}

console.log(add(10)(20)); // 30
console.log(add(10, 20)); // 30
```

- Sum of N

```js
function sum(x) {
  return function (y) {
    return y ? sum(x + y) : x;
  };
}

console.log(sum(5)(6)(7)(8)(9)());
```

# Pure Functions

- Those functions that are deterministic in nature

function areaOfRectangle(length, width) {
return length \* width;
}

console.log(areaOfRectangle(10, 20));
console.log(areaOfRectangle(10, 20));

- Those functions that are non-deterministic in nature
  function test(length, width) {
  const temp = Math.floor(Math.random() _ 10);
  return length _ width \* temp;
  }

console.log(test(10, 20));
console.log(test(10, 20));

### Question 1

```js
console.log("Hello");
```

console.log is a function.

```js
let output = console.log("Hello");
console.log("output"); // undefined
// for any value it always returns undefined
```

- console.log is `PURE` function.

### Question 2 - Not a pure function

```js
function areaOfReactangle(length, breadth) {
  console.log("Area is ", length * breadth); // Side effect
  return length * breadth;
}
areaOfReactangle(2, 4);
```

- `console.log` is invoking function inside the `areaOfReactangle` so that we can not call it pure function. If we remove the console.log then it will be a pure function.

### Question 3

```js
// this is the pure function
const words = ["spray", "destruction"];
const result = words.filter((word) => word.length > 6);
// not causing any side Effect here
console.log(result); // ["destruction"]

// this is not a pure function
function test() {
  const words = ["spray", "destruction"];
  const result = words.filter((word) => word.length > 6);
  // now causing any side Effect here by calling func inside a func
  console.log(result); // ["destruction"]
}
```

### Question 4 - Why pure functions are essential

- Pure functions are deterministic
- these functions will not change so these are useful in long run of the project.
- Memoisation,

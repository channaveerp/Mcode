# Memosation

_An optimization technique used primarily to speed up computer programs by storing the result of expensive function calss and returning the cached result when the same input occurs again_

Example

```js
let cache = {};
// function add(num) {
//   return num + 10;
// }
function add(num) {
  if (cache[num]) {
    console.log("Cached process");
    return cache[num];
  } else {
    console.log("Reguler process");
    cache[num] = num + 10;
    return cache[num];
  }
}
console.log(add(20)); // 30
console.log(add(20));
console.log(add(20));
console.log(add(20));
```

### Fibonnacci

```js
// function fibonnacci(num, cache = {}) {
//   if (num === 0) return 0;
//   if (num === 1 || num === 2) return 1;
//   return fibonnacci(num - 2) + fibonnacci(num - 1);
// }

// function fibonacci(num) {
//   if (num === 0) return 0;
//   if (num === 1 || num === 2) return 1;

//   let prev2 = 0; // F(0)
//   let prev1 = 1; // F(1)
//   let current = 0;

//   for (let i = 2; i <= num; i++) {
//     current = prev1 + prev2; // F(n) = F(n-1) + F(n-2)
//     prev2 = prev1;
//     prev1 = current;
//   }

//   return current;
// }

function fibonnacci(num, cache = {}) {
  if (cache[num]) return cache[num];
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;
  return (cache[num] = fibonnacci(num - 2) + fibonnacci(num - 1));
}

console.log(fibonnacci(10));
```

Write for factorial too....

```js

```

#### Write a function to memoise functions with varying arguments

```js
function getUniqueId(fn, args) {
  let uniqueId = [];
  uniqueId = uniqueId.concat(fn.name, args);
  // [add, 10, 20] -> add1020
  console.log(uniqueId.join("|"));
  return uniqueId.join("|");
}
function memoise(fn) {
  let cache = {};
  return function (...args) {
    let uniqueId = getUniqueId(fn, args);
    if (cache[uniqueId]) {
      console.log("from cache");
      return cache[uniqueId];
    } else {
      cache[uniqueId] = fn(...args);
      console.log("not from cache");
      return cache[uniqueId];
    }
  };
}

let memoiseAdd = memoise(add);

console.log(memoiseAdd(10, 20));
console.log(memoiseAdd(10, 20));
```

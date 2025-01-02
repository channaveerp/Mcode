### What is MAP?

_In JavaScript, the map() method is a built-in array method that creates a new array by applying a function to each element of the original array. The original array remains unchanged._

- Example

```js
const num = [1, 2, 3, 4];

const mulBy3 = num.map((num, ind, arr) => {
  return num * 3 + ind;
});
console.log(mulBy3); // [ 3, 7, 11, 15 ]
```

Polyfill

```js
Array.prototype.myMap = function (cb) {
  let temp = [];
  // here this referes to the parent array, or the array we pass to it.
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const num = [1, 2, 3, 4];
const mulBy3 = num.myMap((num, ind, arr) => {
  return num * 3 + ind;
});
console.log(mulBy3); // [ 3, 7, 11, 15 ]
```

### What is Filter?

_The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array._

Example

```js
const num = [1, 2, 3, 4];

const moreThanTwo = num.filter((num) => {
  return num > 2;
});
console.log(moreThanTwo); // [ 3, 4 ]
```

```js
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};

const num = [1, 2, 3, 4];

const moreThanTwo = num.myFilter((num) => {
  return num > 2;
});
console.log(moreThanTwo); // [ 3, 4 ]
```

### What is Reduce?

_The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array. It accepts a function executed on all the items of the specified array in the left-to-right sequence. The returned single value is stored in the accumulator. Thus, array reduce JavaScript is a non-mutating method. This means that instead of changing the actual value variable, it will hold the computed value in the accumulator without changing the original value variable._

Ref: https://www.simplilearn.com/tutorials/javascript-tutorial/array-reduce-javascript#:~:text=The%20array%20reduce%20in%20JavaScript,is%20stored%20in%20the%20accumulator.

Example

```js
const num = [1, 2, 3, 4];

const sum = num.reduce((acc, curr, ind, arr) => {
  return acc + curr;
}, 0);
console.log(sum); // 10
```

```js
Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const num = [1, 2, 3, 4];

const sum = num.myReduce((acc, curr, ind, arr) => {
  return acc + curr;
}, 0);
console.log(sum); // 10
```

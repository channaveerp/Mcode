### map vs forEach

```js
const arr = [2, 5, 3, 4, 7];

const mapRes = arr.map((ar) => ar + 2);
// after map we can keep chaining methods arr.map((ar) => ar + 2).filter() so on
const forEachRes = arr.forEach((ar, i) => (arr[i] = ar + 3));
// here forEach updates the maon array

console.log(mapRes, forEachRes, arr); //[ 4, 7, 5, 6, 9 ] undefined [ 5, 8, 6, 7, 10 ]
```

```js
function example1() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  }
}
example1(); // 3,3,3 each call with 1 sec delay 0-1-2
```

```js
function example2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(
      (function () {
        console.log(i);
      })(),
      1000 * i
    );
  }
}
example2(); // 0, 1, 2 calls immidiately
```

```js
function example3() {
  for (var i = 0; i < 3; i++) {
    setTimeout(
      (function (k) {
        return function () {
          console.log(k);
        };
      })(i),
      1000 * i
    );
  }
}
example3(); // 0, 1, 2 1 sec delay each 0-1-2 sec
```

### Question 1

```js
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3
```

### Question 2

```js
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data retrieved" };
      resolve(data);
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = data.message.toUpperCase();
      resolve(processedData);
    }, 500);
  });
}

fetchData("https://api.example.com/data")
  .then(processData)
  .then((processedData) => console.log(processedData)) //DATA RETRIEVED
  .catch((error) => console.error(error));
```

### Question 3

```js
console.log(greet("John")); // Hello John

function greet(name) {
  return `Hello, ${name}!`;
}
sayHi(); // cannot access sayHi before initialization
const sayHi = function () {
  console.log("Hi there!");
};
```

### Question 4

```js
function mystery(x) {
  if (typeof x === "number") {
    return x.toString();
  } else if (typeof x === "string") {
    return parseInt(x);
  } else {
    return "unknown";
  }
}
console.log(mystery("22")); // 22
console.log(mystery(true)); // unknown
console.log(mystery([1, 2, 3])); // unknown
console.log(mystery(null)); // unknown
```

### Question 5

```js
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
    console.log(count);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // count is 0, 3
```

### Question 6

```js
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test(); // undefined, 2
```

### Question 7

```js
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
var name = "test";
const greet = person.greet;
greet(); // Hello, my name is undefined
const greet1 = person.greet.bind(person);
greet1(); // Hello, my name is Alice
```

### Question 8

```js
let x = 1;

function func() {
  // let x;
  // console.log(x); // undefined
  console.log(x);
  let x = 2; // ReferenceError: Cannot access 'x' before initialization
}

func();
```

### Question 9

```js
// const { a: x, b: y } = { a: 1, b: 2, c: 3 };
// console.log(x, y); // 1, 2

const { a: x = 10, b: y = 20, c: z = 30 } = { a: 1, b: undefined, d: 4 };
console.log(x, y, z); // 1,20,30
```

### Question 10

```js
// order
async function asyncFunc() {
  return await Promise.resolve("Hello"); // 2
}

asyncFunc().then((result) => console.log(result));
console.log("World"); // 1
```

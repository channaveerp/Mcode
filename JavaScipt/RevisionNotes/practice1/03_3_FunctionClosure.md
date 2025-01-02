### Counter Delimma

```js
function test() {
  let count = 0;
  function add() {
    count = count + 1;
    return count; //  Incrementing the count
  }
  return add;
}

const output = test();

console.log(output()); // 1
console.log(output()); // 2
console.log(output()); // 3
```

```js
function test() {
  let count = 0;
  function add() {
    return count + 1; // // Just returning count + 1 without modifying count
  }
  return add;
}

const output = test();

console.log(output()); // 1
console.log(output()); // 1
console.log(output()); // 1
```

## Question 1

```js
// it is just because of laxical scope
function init() {
  var name = "Mangesh";
  function displayName() {
    console.log("Name is ", name);
  }
  displayName();
}

init(); // Name is Mangesh
```

## Question 2

```js
// it is because of closure
function func() {
  var name = "Mangesh";
  function displayName() {
    console.log("Name is ", name);
  }
  return displayName;
}

var newFunc = func();
newFunc(); // Name is Mangesh
```

#### Read this to know more about laxical and closure diff

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

## Question 3

```js
function makeAdder(x = 5) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

## Question 4

```js
(function testA(a) {
  return (function testB(b) {
    console.log(a); // 0
  })(1);
})(0);
```

## Question 5

```js
function test() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // 3, 3, 3
    }, 1000);
  }
}
```

```js
function test() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // 0, 1, 2
    }, 1000);
  }
}
```

```js
function test() {
  for (var i = 0; i < 3; i++) {
    function test2(j) {
      setTimeout(function log() {
        console.log(j); // 0,1,2
      }, 1000);
    }
    test2(i);
  }
}

test();
```

## Question

```js
function outside() {
  var x = 5;
  function inside(x) {
    console.log(x * 2); // 20
    return x * 2;
  }
  return inside;
}

outside()(10);
```

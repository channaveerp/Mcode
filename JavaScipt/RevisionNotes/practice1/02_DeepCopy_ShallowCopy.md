# DEEP COPY V/S SHALLOW COPY

### Deep copy

A deep copy means that all of the values of the new variable are copied and disconnected from the original variables.

### Shallow Copy

A shallow copy means that certain (sub-)values are still connected to the original variables.

```js
let x = 10;
console.log("Value of X ", x); // 10
let y = x;
y = 20;
console.log("Value of X ", y); // 20
```

Primitive types:
NUmber
String
Boolean

- these are 3 types we can create the deep copy using these.

```js
let arr1 = [1, 2, 3, 4];
console.log(arr1); // [ 1, 2, 3, 4]
let arr2 = arr1;
arr2.push(5);
console.log(arr2); // [ 1, 2, 3, 4, 5 ]
console.log(arr1); // [ 1, 2, 3, 4, 5 ]
arr1.push(6);
console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]
```

### Question 1 Make this deep copy

```js
function question1() {
  const arr1 = [1, 2, 3, 4];
  const arr2 = arr1;
  arr2.push(10);
  console.log("Arr2 is ", arr2); // Arr2 is  [ 1, 2, 3, 4, 10 ]
  console.log("Arr1 is ", arr1); // Arr1 is  [ 1, 2, 3, 4, 10 ]
}

// now it is a deep copy
function question1() {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [...arr1]; // with spred operator
  arr2.push(10);
  console.log("Arr2 is ", arr2); // Arr2 is  [ 1, 2, 3, 4, 10 ]
  console.log("Arr1 is ", arr1); // Arr1 is  [ 1, 2, 3, 4 ]
}
```

### Question 2 Make this deep copy

```js
function question2() {
  const user1 = {
    name: "abc",
    age: 20,
  };
  // const user2 = user1;
  // const user2 = { ...user1 }; // spred operator is successor of the Object.assign
  const user2 = Object.assign({}, user1);
  user2.name = "def";
  console.log(user2); //{ name: 'def', age: 20 }
  console.log(user1); // { name: 'abc', age: 20 }
}
question2();
```

### Question 3 nested object

```js
function question3() {
  const user1 = {
    name: "abc",
    age: 20,
    location: {
      city: "BDR",
      state: "KA",
    },
  };
  // const user2 = user1;
  // const user2 = { ...user1 }; // spred operator is successor of the Object.assign
  // const user2 = Object.assign({}, user1);
  // - Here for nested level spead operator and Object.assign will not works.
  const user2 = JSON.parse(JSON.stringify(user1));
  user2.name = "def";
  user2.location.city = "BLR";
  console.log(user2); //{ name: 'def', age: 20, location: { city: 'BLR', state: 'KA' } }
  console.log(user1); //{ name: 'def', age: 20, location: { city: 'BLR', state: 'KA' } }
}
question3();
```

### Question 4 when to not use JSON

```js
function question4() {
  const testObject1 = {
    sampleDate: new Date(), // do not use JSON method with Date, it converts value in to the string
  };
  const testObject2 = JSON.parse(JSON.stringify(testObject1));
  console.log(testObject1); //{ sampleDate: 2024-07-25T19:38:44.791Z }
  console.log(testObject2); //{ sampleDate: '2024-07-25T19:38:44.791Z' }
}
question4();

// Question 5
function question5() {
  // if obj have key with function or undefined then do not use JSON methods
  const testObject1 = {
    sampleFunction: console.log,
    sampleUndefined: undefined,
  };
  const testObject2 = JSON.parse(JSON.stringify(testObject1));
  console.log(testObject1);
  console.log(testObject2);
}
// question5();

// Question 6
function question6() {
  const testObject1 = {
    sampleFunction: question5,
    sampleInfinity: -Infinity,
    sampleNaN: NaN,
  };
  const testObject2 = JSON.parse(JSON.stringify(testObject1));
  console.log(testObject1);
  // {
  //   sampleFunction: [Function: question5],
  //   sampleInfinity: -Infinity,
  //   sampleNaN: NaN
  // }
  console.log(testObject2); // { sampleInfinity: null, sampleNaN: null }
}
question6();
```

- read it: https://www.freecodecamp.org/news/json-stringify-method-explained/

### question 5 How to deep copy json unsafe values

1. Copy all the values one after another
2. Recursive copying all the values one after another
3. Using libraries like loadash

### Question 6 Why Objects and arrays are shallow copied and primitive types are deep copied

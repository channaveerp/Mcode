# Promises

JavaScript is signle threaded programming language, so to hanlde asynchronus behavior we required Promise.

A Promise is an object representing the eventual completion or failure of an asynchronous operation

- Pending - Initial state, neighter fulfilled nor Rejected.
- Fullfilled - meaning that the operation was completed successfully.
- Rejected - meaning that the operation is failed.

### Example - 1

```js
// const promise1 = Promise.resolve("Promise is resolved");
const promise1 = Promise.reject("Promise is rejected");

promise1
  .then((data) => console.log("Promise Success", data))
  .catch((error) => console.log("Promise Failed", error));
```

### Example - 2

```js
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("The Promise is resolved");
    reject("The Promise is rejected");
  }, 2000);
});

promise2
  .then((data) => console.log("Promise Success", data))
  .catch((error) => console.log("Promise Failed", error));
```

### Question 1

Order of logs

```js
console.log("BEfore Promise Starts"); // 1
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolved"); //4
  }, 0);
});
console.log("After Promise Start"); // 2

promise.then((data) => console.log(data)).catch((error) => console.log(error));

console.log("After Promise ends"); //3
```

### What is promise chaining

After completing one promise we call another promise

```js
console.log("BEfore Promise Starts");
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 4000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 2000);
});
console.log("After Promise Start");

promise1
  .then((data) => {
    console.log("Promise 1", data);
    promise2
      .then((data) => {
        console.log("Promise 2", data);
        promise3
          .then((data) => {
            console.log("Promise 3", data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
console.log("After Promise ends");
```

Here it is difficult to handle nested promises. We use some best approches
to improve redability we use async and await here

```js
function one() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 4000);
  });

  return promise1;
}

function two() {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 3000);
  });
  return promise2;
}

function three() {
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 2000);
  });
  return promise3;
}

// calling promises sequncially
async function test() {
  //if using loader then
  let loader = true;
  try {
    const res1 = await one();
    const res2 = await two();
    const res3 = await three();
    const output = res1 + res2 + res3;
    console.log("Respinse is " + output);
  } catch (error) {
    console.log("Error is " + error);
  } finally {
    loader = false;
  }
}

// here promises will resolve in parellel way
async function test1() {
  //if using loader then
  let loader = true;
  try {
    const output = await Promise.all([one(), two(), three()]);
    console.log("Respinse is " + output);
  } catch (error) {
    console.log("Error is " + error);
  } finally {
    loader = false;
  }
}

test(); // 6
test()1; // 6
```

### Read - allSettled, any, race

### Async and await does not block the main thread in JS

```js
async function testPromise1() {
  return Promise.resolve(1);
}
async function testPromise2() {
  return Promise.resolve(2);
}
async function testPromise3() {
  return Promise.resolve(3);
}
// function test() {
//   console.log("Before Async Await"); //2
//   testPromise1().then((num1) => {
//     testPromise2().then((num2) => {
//       testPromise3().then((num3) => {
//         console.log(num1 + num2 + num3); // 4
//         console.log("After Async Await"); // 5
//       });
//     });
//   });
// }
// above can be written with async await as below
async function test() {
  console.log("Before Async Await"); //2
  const num1 = await testPromise1();
  const num2 = await testPromise2();
  const num3 = await testPromise3();
  console.log(num1 + num2 + num3); // 4
  console.log("After Async Await"); // 5
}
console.log("Before calling test"); // 1
test();
console.log("After calling test"); // 3
```

## Read more about Asyn and Await

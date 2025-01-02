# JavaScript Advanced Interview Questions with Detailed Examples

This document contains detailed explanations and examples for advanced JavaScript questions commonly asked in interviews.

---

## 1. Implement Debounce

Debouncing is a technique to ensure that a function is executed only after a specified period of inactivity.

```javascript
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example Usage
const handleResize = debounce(() => console.log("Resized!"), 500);
window.addEventListener("resize", handleResize);
```

---

## 2. Implement Throttle

Throttling ensures that a function is executed at most once in a specified time interval.

```javascript
function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Example Usage
const handleScroll = throttle(() => console.log("Scrolled!"), 200);
window.addEventListener("scroll", handleScroll);
```

---

## 3. Implement Currying

Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument.

```javascript
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, [...args, ...nextArgs]);
      };
    }
  };
}

// Example Usage
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // Output: 6
```

---

## 4. Implement Currying with Placeholders

Using placeholders allows partial application of arguments.

```javascript
function curryWithPlaceholders(func) {
  const _ = Symbol("placeholder");

  return function curried(...args) {
    if (args.length >= func.length && !args.includes(_)) {
      return func.apply(this, args);
    } else {
      return function (...nextArgs) {
        const combinedArgs = args
          .map((arg) => (arg === _ && nextArgs.length ? nextArgs.shift() : arg))
          .concat(nextArgs);
        return curried.apply(this, combinedArgs);
      };
    }
  };
}

// Example Usage
function multiply(a, b, c) {
  return a * b * c;
}

const _ = Symbol("placeholder");
const curriedMultiply = curryWithPlaceholders(multiply);
console.log(curriedMultiply(_, 2)(3, _)(4)); // Output: 24
```

---

## 5. Implement Deep Flatten (Version 1)

Deep flatten an array using recursion.

```javascript
function deepFlatten(array) {
  return array.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val);
  }, []);
}

// Example Usage
console.log(deepFlatten([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
```

---

## 6. Implement Deep Flatten (Version 2)

Using stack for iterative deep flattening.

```javascript
function deepFlattenIterative(array) {
  const stack = [...array];
  const result = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  return result.reverse();
}

// Example Usage
console.log(deepFlattenIterative([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
```

---

## 7. Implement Deep Flatten (Version 3)

Using `JSON.stringify` and `JSON.parse` for quick deep flattening.

```javascript
function deepFlattenJSON(array) {
  return JSON.parse(`[${JSON.stringify(array).replace(/\[|\]/g, "")}]`);
}

// Example Usage
console.log(deepFlattenJSON([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
```

---

## 8. Implement Deep Flatten (Version 4)

Using a generator function.

```javascript
function* deepFlattenGenerator(array) {
  for (const item of array) {
    if (Array.isArray(item)) {
      yield* deepFlattenGenerator(item);
    } else {
      yield item;
    }
  }
}

function deepFlattenUsingGenerator(array) {
  return [...deepFlattenGenerator(array)];
}

// Example Usage
console.log(deepFlattenUsingGenerator([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
```

---

## 9. Implement a Pipe Method

The `pipe` method chains multiple functions from left to right.

```javascript
function pipe(...functions) {
  return function (value) {
    return functions.reduce((acc, func) => func(acc), value);
  };
}

// Example Usage
const add = (x) => x + 1;
const double = (x) => x * 2;
const subtract = (x) => x - 3;
const pipeline = pipe(add, double, subtract);

console.log(pipeline(5)); // Output: 9
```

---

## 10. Implement Auto-Retry Promises

Retry a promise a specified number of times with a delay.

```javascript
function autoRetry(promiseFunc, retries, delay) {
  return new Promise((resolve, reject) => {
    const attempt = (n) => {
      promiseFunc()
        .then(resolve)
        .catch((err) => {
          if (n > 0) {
            setTimeout(() => attempt(n - 1), delay);
          } else {
            reject(err);
          }
        });
    };
    attempt(retries);
  });
}

// Example Usage
const flakyPromise = () =>
  Math.random() > 0.5 ? Promise.resolve("Success") : Promise.reject("Failure");

autoRetry(flakyPromise, 3, 1000).then(console.log).catch(console.error);
```

---

## 11. Negative Indexing in Arrays (Using Proxies)

Negative indexing allows you to access elements from the end of an array using negative indices, similar to Python.

```javascript
const negativeIndexArray = (arr) => {
  return new Proxy(arr, {
    get(target, prop) {
      if (typeof prop === "string" && !isNaN(prop)) {
        const index = Number(prop);
        return target[index < 0 ? target.length + index : index];
      }
      return target[prop];
    },
  });
};

const arr = negativeIndexArray([1, 2, 3, 4, 5]);
console.log(arr[-1]); // 5
console.log(arr[-2]); // 4
console.log(arr[0]); // 1
```

## 12. Implement `Promise.all`

`Promise.all` resolves when all promises are fulfilled or rejects when one of them fails.

```javascript
const customPromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

customPromiseAll([p1, p2, p3]).then(console.log); // [1, 2, 3]
```

## 13. Implement `Promise.allSettled`

`Promise.allSettled` resolves with an array of objects describing the outcomes of the promises.

```javascript
const customPromiseAllSettled = (promises) => {
  return new Promise((resolve) => {
    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

const p1 = Promise.resolve(1);
const p2 = Promise.reject("Error");
const p3 = Promise.resolve(3);

customPromiseAllSettled([p1, p2, p3]).then(console.log);
```

## 14. Implement `Promise.any`

`Promise.any` resolves with the first fulfilled promise or rejects if all promises fail.

```javascript
const customPromiseAny = (promises) => {
  return new Promise((resolve, reject) => {
    let rejectedCount = 0;
    const errors = [];

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((err) => {
          errors[index] = err;
          rejectedCount++;
          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};

const p1 = Promise.reject("Error 1");
const p2 = Promise.resolve(2);
const p3 = Promise.reject("Error 3");

customPromiseAny([p1, p2, p3]).then(console.log).catch(console.error);
```

## 15. Implement `Promise.race`

`Promise.race` resolves or rejects as soon as one promise settles.

```javascript
const customPromiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

const p1 = new Promise((res) => setTimeout(res, 100, "First"));
const p2 = new Promise((res) => setTimeout(res, 50, "Second"));

customPromiseRace([p1, p2]).then(console.log); // "Second"
```

## 16. Implement `Promise.finally`

`Promise.finally` allows running cleanup code irrespective of promise outcome.

```javascript
Promise.prototype.customFinally = function (callback) {
  return this.then(
    (value) => Promise.resolve(callback()).then(() => value),
    (error) =>
      Promise.resolve(callback()).then(() => {
        throw error;
      })
  );
};

Promise.resolve("Success")
  .customFinally(() => console.log("Cleanup"))
  .then(console.log);
```

---

## 17. Implement Custom JS Promises

A custom implementation of JavaScript Promises includes handling states (`pending`, `fulfilled`, and `rejected`) and providing methods like `then`, `catch`, and `finally`.

```javascript
class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.callbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.callbacks.forEach((callback) => callback.onFulfilled(value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = reason;
        this.callbacks.forEach((callback) => callback.onRejected(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleCallback = () => {
        try {
          if (this.state === "fulfilled") {
            const result = onFulfilled(this.value);
            resolve(result);
          } else if (this.state === "rejected") {
            const result = onRejected(this.value);
            reject(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === "pending") {
        this.callbacks.push({
          onFulfilled: handleCallback,
          onRejected: handleCallback,
        });
      } else {
        handleCallback();
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(
      (value) => {
        onFinally();
        return value;
      },
      (reason) => {
        onFinally();
        throw reason;
      }
    );
  }
}

// Example usage:
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});

promise
  .then((result) => {
    console.log(result);
    return "Next Success";
  })
  .then((nextResult) => console.log(nextResult))
  .catch((error) => console.error(error));
```

## 18. Implement Custom Deep Equal

Custom `deepEqual` compares two objects or arrays for structural and value equality.

```javascript
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// Example usage:
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
```

## 19. Throttling Promises by Batching

Throttling promises involves processing them in batches to limit concurrency.

```javascript
function throttlePromises(tasks, batchSize) {
  const results = [];

  return new Promise((resolve, reject) => {
    let index = 0;

    function executeBatch() {
      const batch = tasks.slice(index, index + batchSize);
      index += batchSize;

      Promise.all(batch.map((task) => task()))
        .then((res) => {
          results.push(...res);
          if (index < tasks.length) {
            executeBatch();
          } else {
            resolve(results);
          }
        })
        .catch(reject);
    }

    executeBatch();
  });
}

// Example usage:
const tasks = [
  () => Promise.resolve(1),
  () => Promise.resolve(2),
  () => Promise.resolve(3),
  () => Promise.resolve(4),
];

throttlePromises(tasks, 2).then(console.log); // [1, 2, 3, 4]
```

---

## 20. Implement Custom Object.assign

A custom implementation of `Object.assign` copies properties from one or more source objects to a target object.

```javascript
function customAssign(target, ...sources) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  target = Object(target);

  for (const source of sources) {
    if (source != null) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
  }

  return target;
}

// Example usage:
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
const result = customAssign(target, source1, source2);
console.log(result); // { a: 1, b: 2, c: 3 }
```

## 21. Implement Custom JSON.stringify

Custom `JSON.stringify` converts a JavaScript object to a JSON string.

```javascript
function customStringify(value) {
  if (value === null) return "null";
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "number" || typeof value === "boolean")
    return String(value);

  if (Array.isArray(value)) {
    const arrayContent = value.map((item) => customStringify(item)).join(",");
    return `[${arrayContent}]`;
  }

  if (typeof value === "object") {
    const objectContent = Object.keys(value)
      .map((key) => `"${key}":${customStringify(value[key])}`)
      .join(",");
    return `{${objectContent}}`;
  }

  return undefined;
}

// Example usage:
const obj = { a: 1, b: "text", c: [1, 2, 3] };
console.log(customStringify(obj)); // {"a":1,"b":"text","c":[1,2,3]}
```

## 22. Implement Custom JSON.parse

Custom `JSON.parse` converts a JSON string to a JavaScript object.

```javascript
function customParse(json) {
  return eval(`(${json})`);
}

// Example usage:
const jsonString = '{"a":1,"b":"text","c":[1,2,3]}';
const obj = customParse(jsonString);
console.log(obj); // { a: 1, b: "text", c: [1, 2, 3] }
```

## 23. Implement Custom typeof Operator

A custom `typeof` function replicates JavaScript's `typeof` operator.

```javascript
function customTypeof(value) {
  if (value === null) return "object";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

// Example usage:
console.log(customTypeof(null)); // "object"
console.log(customTypeof([])); // "array"
console.log(customTypeof(42)); // "number"
```

## 24. Implement Custom lodash\_.get()

Custom `_.get` retrieves a value from an object by a given path.

```javascript
function customGet(obj, path, defaultValue) {
  const keys = path.split(".");
  let result = obj;

  for (const key of keys) {
    if (result && key in result) {
      result = result[key];
    } else {
      return defaultValue;
    }
  }

  return result;
}

// Example usage:
const obj = { a: { b: { c: 42 } } };
console.log(customGet(obj, "a.b.c")); // 42
console.log(customGet(obj, "a.b.x", "default")); // "default"
```

## 25. Implement Custom lodash\_.set()

Custom `_.set` sets a value in an object by a given path.

```javascript
function customSet(obj, path, value) {
  const keys = path.split(".");
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current)) {
      current[key] = {};
    }
    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
  return obj;
}

// Example usage:
const obj = {};
customSet(obj, "a.b.c", 42);
console.log(obj); // { a: { b: { c: 42 } } }
```

## 26. Implement Custom lodash\_.omit()

Custom `_.omit` creates a new object excluding specified keys.

```javascript
function customOmit(obj, keysToOmit) {
  const result = {};

  for (const key in obj) {
    if (!keysToOmit.includes(key)) {
      result[key] = obj[key];
    }
  }

  return result;
}

// Example usage:
const obj = { a: 1, b: 2, c: 3 };
console.log(customOmit(obj, ["b", "c"])); // { a: 1 }
```

---

## 27. Implement Custom StringTokenizer

Custom `StringTokenizer` splits a string into tokens based on a given delimiter.

```javascript
class StringTokenizer {
  constructor(str, delimiter = " ") {
    this.tokens = str.split(delimiter);
    this.index = 0;
  }

  hasMoreTokens() {
    return this.index < this.tokens.length;
  }

  nextToken() {
    return this.hasMoreTokens() ? this.tokens[this.index++] : null;
  }
}

// Example usage:
const tokenizer = new StringTokenizer(
  "Hello world, welcome to JavaScript",
  " "
);
while (tokenizer.hasMoreTokens()) {
  console.log(tokenizer.nextToken());
}
```

## 28. Implement Custom setTimeout

Custom `setTimeout` using `setInterval`.

```javascript
function customSetTimeout(callback, delay, ...args) {
  const timerId = setInterval(() => {
    clearInterval(timerId);
    callback(...args);
  }, delay);
  return timerId;
}

// Example usage:
customSetTimeout(() => console.log("Executed after 1 second"), 1000);
```

## 29. Implement Custom setInterval

Custom `setInterval` using recursion.

```javascript
function customSetInterval(callback, delay, ...args) {
  let timerId;

  function intervalFunc() {
    timerId = setTimeout(() => {
      callback(...args);
      intervalFunc();
    }, delay);
  }

  intervalFunc();
  return {
    clear: () => clearTimeout(timerId),
  };
}

// Example usage:
const interval = customSetInterval(
  () => console.log("Repeating every 1 second"),
  1000
);
setTimeout(() => interval.clear(), 5000); // Stops after 5 seconds
```

## 30. Implement Custom ClearallTimers

Custom `clearAllTimers` clears all active timers.

```javascript
const timers = new Set();

function customSetTimeout(callback, delay, ...args) {
  const id = setTimeout(() => {
    timers.delete(id);
    callback(...args);
  }, delay);
  timers.add(id);
  return id;
}

function customClearTimeout(id) {
  clearTimeout(id);
  timers.delete(id);
}

function clearAllTimers() {
  for (const id of timers) {
    clearTimeout(id);
    timers.delete(id);
  }
}

// Example usage:
const id1 = customSetTimeout(() => console.log("Timer 1"), 1000);
const id2 = customSetTimeout(() => console.log("Timer 2"), 2000);
clearAllTimers(); // Clears all timers
```

## 31. Implement Custom Event Emitter

Custom `EventEmitter` provides an event-based communication system.

```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(...args));
    }
  }

  off(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((l) => l !== listener);
    }
  }
}

// Example usage:
const emitter = new EventEmitter();
const listener = (msg) => console.log(msg);
emitter.on("greet", listener);
emitter.emit("greet", "Hello, World!");
emitter.off("greet", listener);
```

## 32. Implement Browser History

Custom browser history mimics navigation with `push`, `back`, and `forward`.

```javascript
class BrowserHistory {
  constructor() {
    this.history = [];
    this.currentIndex = -1;
  }

  push(url) {
    this.history = this.history.slice(0, this.currentIndex + 1);
    this.history.push(url);
    this.currentIndex++;
  }

  back() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    return this.current();
  }

  forward() {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
    }
    return this.current();
  }

  current() {
    return this.history[this.currentIndex] || null;
  }
}

// Example usage:
const history = new BrowserHistory();
history.push("page1");
history.push("page2");
console.log(history.back()); // "page1"
console.log(history.forward()); // "page2"
```

## 33. Implement Custom lodash_chunk()

Custom `_.chunk` splits an array into chunks of a specified size.

```javascript
function customChunk(array, size) {
  const chunks = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
}

// Example usage:
console.log(customChunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
```

---

## 34. Implement Custom Deep Clone

Deep clone an object to create a full copy including nested properties.

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const clone = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

// Example usage:
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
console.log(copy); // { a: 1, b: { c: 2 } }
console.log(copy.b === original.b); // false
```

---

## 35. Promisify the Async Callbacks

Promisify a callback-based function for cleaner asynchronous code.

```javascript
function promisify(callbackBasedFn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      callbackBasedFn(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

// Example usage:
function asyncAdd(a, b, callback) {
  setTimeout(() => {
    if (typeof a !== "number" || typeof b !== "number") {
      callback(new Error("Invalid inputs"));
    } else {
      callback(null, a + b);
    }
  }, 1000);
}

const addPromise = promisify(asyncAdd);
addPromise(2, 3).then(console.log).catch(console.error); // Output: 5
```

## 36. Implement 'N' Async Tasks in Series

Run `N` asynchronous tasks sequentially.

```javascript
function runInSeries(tasks) {
  return tasks.reduce((promise, task) => {
    return promise.then((results) =>
      task().then((result) => [...results, result])
    );
  }, Promise.resolve([]));
}

// Example usage:
const tasks = [
  () => Promise.resolve(1),
  () => Promise.resolve(2),
  () => new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
];

runInSeries(tasks).then(console.log); // [1, 2, 3]
```

## 37. Implement 'N' Async Tasks in Parallel

Run `N` asynchronous tasks concurrently.

```javascript
function runInParallel(tasks) {
  return Promise.all(tasks.map((task) => task()));
}

// Example usage:
const tasks = [
  () => Promise.resolve(1),
  () => new Promise((resolve) => setTimeout(() => resolve(2), 500)),
  () => Promise.resolve(3),
];

runInParallel(tasks).then(console.log); // [1, 2, 3]
```

---

### Question 38: Implement 'N' Async Tasks in Race

**Explanation:**
The `Promise.race` method accepts an iterable of promises and resolves or rejects as soon as one of the promises in the iterable resolves or rejects. Implementing "N async tasks in race" involves running N asynchronous tasks concurrently and returning the first one to settle (either resolve or reject).

```javascript
function raceAsyncTasks(tasks) {
  return Promise.race(tasks.map((task) => task()));
}

// Example usage
const asyncTask1 = () =>
  new Promise((res) => setTimeout(() => res("Task 1 completed"), 1000));
const asyncTask2 = () =>
  new Promise((res) => setTimeout(() => res("Task 2 completed"), 500));
const asyncTask3 = () =>
  new Promise((res) => setTimeout(() => res("Task 3 completed"), 1500));

raceAsyncTasks([asyncTask1, asyncTask2, asyncTask3])
  .then((result) => console.log(result)) // "Task 2 completed"
  .catch((err) => console.error(err));
```

### Question 39: Implement Custom `Object.is()` Method

**Explanation:**
The `Object.is` method determines whether two values are the same. It differs from `===` in its treatment of `-0` and `NaN`.

```javascript
function customObjectIs(value1, value2) {
  if (value1 === value2) {
    return value1 !== 0 || 1 / value1 === 1 / value2; // Handle +0 and -0
  }
  return value1 !== value1 && value2 !== value2; // Handle NaN
}

// Example usage
console.log(customObjectIs(0, -0)); // false
console.log(customObjectIs(NaN, NaN)); // true
console.log(customObjectIs("a", "a")); // true
console.log(customObjectIs(1, 2)); // false
```

### Question 40: Implement Custom `lodash.partial()`

**Explanation:**
`_.partial` creates a function that can have some of its arguments preset.

```javascript
function partial(func, ...presetArgs) {
  return function (...args) {
    return func(...presetArgs, ...args);
  };
}

// Example usage
function add(a, b, c) {
  return a + b + c;
}

const add5And = partial(add, 5);
console.log(add5And(3, 2)); // 10
```

### Question 41: Implement Custom `lodash.once()`

**Explanation:**
`_.once` ensures a function is executed only once.

```javascript
function once(func) {
  let result;
  let executed = false;

  return function (...args) {
    if (!executed) {
      result = func.apply(this, args);
      executed = true;
    }
    return result;
  };
}

// Example usage
const initialize = once(() => console.log("Initialized!"));
initialize(); // "Initialized!"
initialize(); // No output
```

### Question 42: Implement Custom `trim()` Operation

**Explanation:**
The `trim()` method removes whitespace from both ends of a string.

```javascript
function customTrim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

// Example usage
console.log(customTrim("   Hello World!   ")); // "Hello World!"
```

### Question 43: Implement Custom `reduce()` Method

**Explanation:**
The `reduce` method executes a reducer function on each element of the array.

```javascript
Array.prototype.customReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// Example usage
const nums = [1, 2, 3, 4];
const sum = nums.customReduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

### Question 44: Implement Custom `lodash.memoize()`

**Explanation:**
`_.memoize` caches the result of function calls based on its arguments.

```javascript
function memoize(func) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, func.apply(this, args));
    }
    return cache.get(key);
  };
}

// Example usage
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // 3
console.log(memoizedAdd(1, 2)); // 3 (cached)
```

---

## Question 45: Implement `memoizeLast` Method

### Explanation:

The `memoizeLast` function is a custom memoization utility that caches the result of the most recent function call. It helps optimize expensive computations by avoiding redundant calculations for repeated inputs.

### Implementation:

```javascript
function memoizeLast(fn) {
  let lastArgs = null;
  let lastResult = null;

  return function (...args) {
    if (
      lastArgs &&
      args.length === lastArgs.length &&
      args.every((arg, index) => arg === lastArgs[index])
    ) {
      return lastResult;
    }
    lastArgs = args;
    lastResult = fn(...args);
    return lastResult;
  };
}

// Example Usage
const add = (a, b) => a + b;
const memoizedAdd = memoizeLast(add);
console.log(memoizedAdd(1, 2)); // 3 (calculated)
console.log(memoizedAdd(1, 2)); // 3 (cached)
console.log(memoizedAdd(2, 3)); // 5 (calculated)
```

---

## Question 46: Implement Custom `call` Method

### Explanation:

The `call` method allows invoking a function with a specified `this` context and arguments.

### Implementation:

```javascript
Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  const uniqueFn = Symbol("fn");
  context[uniqueFn] = this;
  const result = context[uniqueFn](...args);
  delete context[uniqueFn];
  return result;
};

// Example Usage
function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

console.log(greet.myCall(null, "Hello", "Alice")); // Hello, Alice!
```

---

## Question 47: Implement Custom `apply` Method

### Explanation:

The `apply` method is similar to `call` but takes arguments as an array.

### Implementation:

```javascript
Function.prototype.myApply = function (context, args) {
  context = context || globalThis;
  const uniqueFn = Symbol("fn");
  context[uniqueFn] = this;
  const result = context[uniqueFn](...args);
  delete context[uniqueFn];
  return result;
};

// Example Usage
function multiply(a, b) {
  return a * b;
}

console.log(multiply.myApply(null, [2, 3])); // 6
```

---

## Question 48: Implement Custom `bind` Method

### Explanation:

The `bind` method creates a new function that, when called, has its `this` keyword set to the specified value, with a given sequence of arguments.

### Implementation:

```javascript
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

// Example Usage
function subtract(a, b) {
  return a - b;
}

const boundSubtract = subtract.myBind(null, 5);
console.log(boundSubtract(3)); // 2
```

---

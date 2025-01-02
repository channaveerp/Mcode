# JavaScript Advanced Interview Questions with Detailed Examples

This document contains detailed explanations and examples for advanced JavaScript questions commonly asked in interviews.

---

Input/Output questions - https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions

### 1. Build a Custom Promise from Scratch

**Explanation:** Promises in JavaScript handle asynchronous operations. They have three states: `pending`, `fulfilled`, and `rejected`. Here's how to build one:

```javascript
class CustomPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === "fulfilled") {
      onFulfilled(this.value);
    } else if (this.state === "rejected") {
      onRejected(this.reason);
    } else {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
  }
}

// Example Usage
const promise = new CustomPromise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});

promise.then(
  (value) => console.log(value),
  (error) => console.error(error)
);
```

---

### 2. Create Your Own `Promise.all` Implementation

**Explanation:** `Promise.all` resolves when all promises resolve, or rejects if any promise rejects.

```javascript
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
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
}

// Example Usage
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

promiseAll([promise1, promise2, promise3])
  .then(console.log)
  .catch(console.error);
```

---

### 3. Design a `Promise.any` That Resolves to the First Fulfilled Promise

**Explanation:** `Promise.any` resolves when the first promise is fulfilled, and rejects if all promises are rejected.

```javascript
function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    let rejections = [];
    let rejectionCount = 0;

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          rejections.push(error);
          rejectionCount++;
          if (rejectionCount === promises.length) {
            reject(
              new AggregateError(rejections, "All promises were rejected")
            );
          }
        });
    });
  });
}

// Example Usage
const promiseA = Promise.reject("Error A");
const promiseB = Promise.resolve("Success B");
const promiseC = Promise.resolve("Success C");

promiseAny([promiseA, promiseB, promiseC])
  .then(console.log)
  .catch(console.error);
```

---

### 4. Develop a `Promise.race` to Resolve Based on the Fastest Result

**Explanation:** `Promise.race` resolves or rejects as soon as any promise settles.

```javascript
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}

// Example Usage
const fast = new Promise((resolve) => setTimeout(() => resolve("Fast!"), 100));
const slow = new Promise((resolve) => setTimeout(() => resolve("Slow!"), 200));

promiseRace([fast, slow]).then(console.log).catch(console.error);
```

---

### 5. Implement `Promise.allSettled` to Handle Multiple Results—Fulfilled or Rejected

**Explanation:** `Promise.allSettled` waits for all promises to settle and returns their results.

```javascript
function promiseAllSettled(promises) {
  return new Promise((resolve) => {
    let results = [];
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
}

// Example Usage
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject("Error");

promiseAllSettled([promise1, promise2]).then(console.log);
```

---

### 6. Add a `finally` Method for Promises That Always Runs, Regardless of Outcome

**Explanation:** The `finally` method runs a callback after a promise is settled, regardless of its outcome.

```javascript
Promise.prototype.finally = function (callback) {
  return this.then(
    (value) => Promise.resolve(callback()).then(() => value),
    (reason) =>
      Promise.resolve(callback()).then(() => {
        throw reason;
      })
  );
};

// Example Usage
Promise.resolve("Success")
  .finally(() => console.log("Cleanup"))
  .then(console.log);

Promise.reject("Error")
  .finally(() => console.log("Cleanup"))
  .catch(console.error);
```

---

### 7. Convert Traditional Callback-Based Functions into Promises (`promisify`)

**Explanation:** `promisify` converts functions that use callbacks into promise-based functions.

```javascript
function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

// Example Usage
const fs = require("fs");
const readFile = promisify(fs.readFile);

readFile("example.txt", "utf8").then(console.log).catch(console.error);
```

---

### 8. Implement Custom Methods for `Promise.resolve()` and `Promise.reject()`

**Explanation:** These methods create promises that resolve or reject immediately.

```javascript
Promise.customResolve = function (value) {
  return new Promise((resolve) => resolve(value));
};

Promise.customReject = function (reason) {
  return new Promise((_, reject) => reject(reason));
};

// Example Usage
Promise.customResolve("Resolved!").then(console.log);
Promise.customReject("Rejected!").catch(console.error);
```

---

### 9. Execute N Async Tasks in Series—One After Another

**Explanation:** Running tasks in series ensures each completes before the next starts.

```javascript
function runSeries(tasks) {
  return tasks.reduce((promise, task) => {
    return promise.then((results) =>
      task().then((result) => [...results, result])
    );
  }, Promise.resolve([]));
}

// Example Usage
const tasks = [
  () => Promise.resolve(1),
  () => Promise.resolve(2),
  () => Promise.resolve(3),
];

runSeries(tasks).then(console.log);
```

---

### 10. Handle N Async Tasks in Parallel and Collect Results

**Explanation:** Execute tasks concurrently and wait for all to complete.

```javascript
function runParallel(tasks) {
  return Promise.all(tasks.map((task) => task()));
}

// Example Usage
const tasks = [
  () => Promise.resolve(1),
  () => Promise.resolve(2),
  () => Promise.resolve(3),
];

runParallel(tasks).then(console.log);
```

---

### 11. Process N Async Tasks in a Race to Pick the Fastest One

**Explanation:** The fastest task determines the outcome.

```javascript
function runRace(tasks) {
  return Promise.race(tasks.map((task) => task()));
}

// Example Usage
const tasks = [
  () => new Promise((resolve) => setTimeout(() => resolve("Task 1"), 200)),
  () => new Promise((resolve) => setTimeout(() => resolve("Task 2"), 100)),
];

runRace(tasks).then(console.log);
```

---

### 12. Recreate `setTimeout()` from Scratch

**Explanation:** Use `setTimeout` under the hood to mimic its behavior.

```javascript
function customSetTimeout(callback, delay) {
  const start = Date.now();
  const loop = () => {
    if (Date.now() - start >= delay) {
      callback();
    } else {
      requestAnimationFrame(loop);
    }
  };
  loop();
}

// Example Usage
customSetTimeout(() => console.log("Hello after 1 second"), 1000);
```

---

### 13. Rebuild `setInterval()` for Periodic Execution

**Explanation:** Mimic `setInterval` using `setTimeout` for recursive calls.

```javascript
function customSetInterval(callback, delay) {
  let timer;

  const loop = () => {
    timer = setTimeout(() => {
      callback();
      loop();
    }, delay);
  };

  loop();

  return () => clearTimeout(timer);
}

// Example Usage
const stopInterval = customSetInterval(
  () => console.log("Interval tick"),
  1000
);
setTimeout(stopInterval, 5000); // Stop after 5 seconds
```

---

### 14. Design a `clearAllTimers` Function to Cancel All Timeouts and Intervals

**Explanation:** Maintain a list of timers to cancel them collectively.

```javascript
const timerIds = new Set();

function customSetTimeout(callback, delay) {
  const id = setTimeout(() => {
    callback();
    timerIds.delete(id);
  }, delay);
  timerIds.add(id);
  return id;
}

function customSetInterval(callback, delay) {
  const id = setInterval(callback, delay);
  timerIds.add(id);
  return id;
}

function clearAllTimers() {
  timerIds.forEach((id) => clearTimeout(id) || clearInterval(id));
  timerIds.clear();
}

// Example Usage
customSetTimeout(() => console.log("Timeout executed"), 1000);
customSetInterval(() => console.log("Interval tick"), 1000);
setTimeout(clearAllTimers, 5000); // Clear all after 5 seconds
```

---

### 15. Add Auto-Retry Logic for Failed API Calls with Exponential Backoff

**Explanation:** Retry failed API calls with delays increasing exponentially.

```javascript
function fetchWithRetry(url, options, retries = 3, backoff = 1000) {
  return new Promise((resolve, reject) => {
    const attempt = (retryCount) => {
      fetch(url, options)
        .then(resolve)
        .catch((error) => {
          if (retryCount === 0) {
            reject(error);
          } else {
            setTimeout(() => attempt(retryCount - 1), backoff);
            backoff *= 2;
          }
        });
    };
    attempt(retries);
  });
}

// Example Usage
fetchWithRetry("https://api.example.com/data", {}, 3, 1000)
  .then((response) => response.json())
  .then(console.log)
  .catch(console.error);
```

---

### 16. Create a Debounce Function to Limit How Often a Task Is Executed

**Explanation:** Debouncing ensures a function is executed only after a specified delay.

```javascript
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example Usage
const debouncedLog = debounce(() => console.log("Debounced!"), 1000);
debouncedLog();
debouncedLog(); // Only this call will log after 1 second
```

---

### 17. Implement Throttling to Control the Frequency of Function Calls

**Explanation:** Throttling ensures a function is executed at most once in a specified interval.

```javascript
function throttle(func, interval) {
  let lastExecuted = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastExecuted >= interval) {
      lastExecuted = now;
      func.apply(this, args);
    }
  };
}

// Example Usage
const throttledLog = throttle(() => console.log("Throttled!"), 1000);
setInterval(throttledLog, 200); // Logs every second
```

---

### 17. Implement Throttling to Control the Frequency of Function Calls

**Explanation:** Throttling ensures a function is executed at most once in a specified interval.

```javascript
function throttle(func, interval) {
  let lastExecuted = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastExecuted >= interval) {
      lastExecuted = now;
      func.apply(this, args);
    }
  };
}

// Example Usage
const throttledLog = throttle(() => console.log("Throttled!"), 1000);
setInterval(throttledLog, 200); // Logs every second
```

---

### 18. Group API Calls in Batches to Reduce Server Load

**Explanation:** Combine multiple API requests into a single batch.

```javascript
function batchRequests(requests, batchSize) {
  let results = [];

  const executeBatch = (batch) => {
    return Promise.all(batch.map((request) => request())).then((res) =>
      results.push(...res)
    );
  };

  const batches = [];
  for (let i = 0; i < requests.length; i += batchSize) {
    batches.push(requests.slice(i, i + batchSize));
  }

  return batches
    .reduce((promise, batch) => {
      return promise.then(() => executeBatch(batch));
    }, Promise.resolve())
    .then(() => results);
}

// Example Usage
const requests = [
  () => Promise.resolve(1),
  () => Promise.resolve(2),
  () => Promise.resolve(3),
  () => Promise.resolve(4),
];

batchRequests(requests, 2).then(console.log); // [1, 2, 3, 4]
```

---

### 19. Build a Cache System to Memoize Identical API Calls for Better Performance

**Explanation:** Cache results of API calls to avoid redundant network requests.

```javascript
function createCache() {
  const cache = new Map();

  return async function cachedFetch(url, options) {
    const key = `${url}_${JSON.stringify(options)}`;
    if (cache.has(key)) {
      return cache.get(key);
    }

    const response = await fetch(url, options);
    const data = await response.json();
    cache.set(key, data);
    return data;
  };
}

// Example Usage
const cachedFetch = createCache();
cachedFetch("https://api.example.com/data").then(console.log);
```

---

### 20. Develop a Promise Chaining System to Handle Dependent Tasks Seamlessly

**Explanation:** Chain promises to execute dependent tasks in order.

```javascript
function promiseChaining(tasks) {
  return tasks.reduce((promise, task) => {
    return promise.then(task);
  }, Promise.resolve());
}

// Example Usage
const tasks = [
  () => Promise.resolve("Task 1 completed"),
  () => Promise.resolve("Task 2 completed"),
  () => Promise.resolve("Task 3 completed"),
];

promiseChaining(tasks).then(console.log); // Logs results in order
```

---

### 21. Write a Timeout-Safe Promise to Reject Automatically if It Takes Too Long

**Explanation:** Add a timeout to a promise to reject if it takes too long.

```javascript
function timeoutSafePromise(promise, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Promise timed out"));
    }, timeout);

    promise
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });
}

// Example Usage
const slowPromise = new Promise((resolve) =>
  setTimeout(() => resolve("Done!"), 5000)
);

timeoutSafePromise(slowPromise, 2000).catch(console.error); // Promise timed out
```

---

### 22. Implement a Retry Mechanism with a Maximum Attempt Limit

**Explanation:** Retry a task a limited number of times upon failure.

```javascript
function retryWithLimit(task, maxAttempts) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const attempt = () => {
      task()
        .then(resolve)
        .catch((error) => {
          attempts++;
          if (attempts < maxAttempts) {
            attempt();
          } else {
            reject(error);
          }
        });
    };

    attempt();
  });
}

// Example Usage
const failingTask = () => Promise.reject("Task failed");

retryWithLimit(failingTask, 3).catch(console.error); // Task failed after 3 attempts
```

---

### 23. Create a Cancelable Promise to Terminate Unwanted Async Tasks

**Explanation:** Provide a way to cancel an ongoing promise.

```javascript
function cancelablePromise(task) {
  let cancel;

  const promise = new Promise((resolve, reject) => {
    cancel = () => reject(new Error("Promise canceled"));
    task(resolve, reject);
  });

  return { promise, cancel };
}

// Example Usage
const { promise, cancel } = cancelablePromise((resolve) => {
  setTimeout(() => resolve("Done!"), 5000);
});

setTimeout(cancel, 2000);
promise.catch(console.error); // Promise canceled
```

---

### 24. Build an Event Emitter to Handle Custom Events in an Asynchronous Flow

**Explanation:** Create an event-driven architecture with `on`, `emit`, and `off` methods.

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

// Example Usage
const emitter = new EventEmitter();
const log = (message) => console.log(message);
emitter.on("event", log);
emitter.emit("event", "Hello!"); // Logs: Hello!
emitter.off("event", log);
```

---

### 25. Simulate Async Polling to Continuously Check Server Updates

**Explanation:** Poll a server repeatedly until a condition is met.

```javascript
function asyncPolling(task, interval, stopCondition) {
  const poll = async (resolve, reject) => {
    try {
      const result = await task();
      if (stopCondition(result)) {
        resolve(result);
      } else {
        setTimeout(() => poll(resolve, reject), interval);
      }
    } catch (error) {
      reject(error);
    }
  };

  return new Promise(poll);
}

// Example Usage
const serverTask = () => Promise.resolve(Math.random());
const condition = (result) => result > 0.8;

asyncPolling(serverTask, 1000, condition).then(console.log); // Logs result > 0.8
```

---

### 26. Design a Rate Limiter to Handle High-Frequency API Requests

**Explanation:** Limit the number of requests within a time window.

```javascript
class RateLimiter {
  constructor(limit, interval) {
    this.limit = limit;
    this.interval = interval;
    this.tokens = limit;
    setInterval(() => {
      this.tokens = this.limit;
    }, interval);
  }

  async acquire() {
    while (this.tokens <= 0) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    this.tokens--;
  }
}

// Example Usage
const limiter = new RateLimiter(5, 1000);

const limitedTask = async () => {
  await limiter.acquire();
  console.log("Task executed at", Date.now());
};

setInterval(limitedTask, 200); // Tasks are limited to 5 per second
```

---

### 27. Implement a Job Scheduler That Runs Async Tasks at Specified Intervals

**Explanation:** Schedule tasks to run periodically.

```javascript
class JobScheduler {
  constructor() {
    this.jobs = [];
  }

  addJob(task, interval) {
    const id = setInterval(task, interval);
    this.jobs.push(id);
    return id;
  }

  cancelJob(id) {
    clearInterval(id);
    this.jobs = this.jobs.filter((job) => job !== id);
  }

  clearAll() {
    this.jobs.forEach((id) => clearInterval(id));
    this.jobs = [];
  }
}

// Example Usage
const scheduler = new JobScheduler();
scheduler.addJob(() => console.log("Job executed"), 1000);
setTimeout(() => scheduler.clearAll(), 5000); // Stop all jobs after 5 seconds
```

---

### 28. Develop a Parallel Execution Pool to Limit Concurrency in Async Tasks

**Explanation:** Limit the number of tasks running concurrently.

```javascript
function parallelPool(tasks, poolLimit) {
  let activeTasks = 0;
  const queue = [...tasks];
  const results = [];

  return new Promise((resolve, reject) => {
    const next = () => {
      if (!queue.length && activeTasks === 0) {
        resolve(results);
        return;
      }

      while (activeTasks < poolLimit && queue.length) {
        const task = queue.shift();
        const index = results.length;
        results.push(null);
        activeTasks++;

        task()
          .then((result) => {
            results[index] = result;
          })
          .catch(reject)
          .finally(() => {
            activeTasks--;
            next();
          });
      }
    };

    next();
  });
}

// Example Usage
const tasks = [
  () => new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  () => new Promise((resolve) => setTimeout(() => resolve(2), 500)),
  () => new Promise((resolve) => setTimeout(() => resolve(3), 800)),
];

parallelPool(tasks, 2).then(console.log); // Executes with a max concurrency of 2
```

---

### 29. Create a Lazy Loader for Async Data Fetching

**Explanation:** Delay data fetching until it's explicitly needed.

```javascript
class LazyLoader {
  constructor(fetchFunction) {
    this.fetchFunction = fetchFunction;
    this.data = null;
    this.loaded = false;
  }

  async load() {
    if (!this.loaded) {
      this.data = await this.fetchFunction();
      this.loaded = true;
    }
    return this.data;
  }
}

// Example Usage
const lazyLoader = new LazyLoader(() =>
  fetch("https://api.example.com/data").then((res) => res.json())
);

// Data is fetched only when load() is called
lazyLoader.load().then(console.log);
```

---

### 30. Build an Async Pipeline to Process Tasks in Stages with Dependencies

**Explanation:** Execute tasks in a pipeline, where each stage depends on the output of the previous stage.

```javascript
function asyncPipeline(stages) {
  return (initialInput) => {
    return stages.reduce((promise, stage) => {
      return promise.then(stage);
    }, Promise.resolve(initialInput));
  };
}

// Example Usage
const pipeline = asyncPipeline([
  (input) => Promise.resolve(input + 1),
  (input) => Promise.resolve(input * 2),
  (input) => Promise.resolve(input - 3),
]);

pipeline(5).then(console.log); // Output: 9
```

---

#### 31. Explain the Event Loop and Task Queue in JavaScript

**Explanation:** The event loop is a mechanism that allows JavaScript to handle asynchronous tasks. It works with the call stack, task queue, and microtask queue. Tasks are executed in the following priority order:

1. Execute synchronous code on the call stack.
2. Process tasks in the microtask queue (e.g., `Promises`).
3. Process tasks in the macrotask queue (e.g., `setTimeout`, `setInterval`).

```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise")); // Microtask

console.log("End");

// Output: Start -> End -> Promise -> Timeout
```

---

#### 32. Implement a Custom Observable for Reactive Programming

**Explanation:** An Observable is a pattern that allows you to create streams of data that can be subscribed to and manipulated.

```javascript
class Observable {
  constructor(subscribeFunction) {
    this.subscribeFunction = subscribeFunction;
  }

  subscribe(observer) {
    return this.subscribeFunction(observer);
  }
}

// Example Usage
const observable = new Observable((observer) => {
  let count = 0;
  const interval = setInterval(() => {
    observer.next(count++);
    if (count > 5) {
      clearInterval(interval);
      observer.complete();
    }
  }, 1000);

  return () => clearInterval(interval); // Cleanup function
});

const subscription = observable.subscribe({
  next: (val) => console.log(val),
  complete: () => console.log("Done"),
});
```

---

#### 33. Explain WeakMap and WeakSet and Their Use Cases

**Explanation:**

- `WeakMap` is a collection of key-value pairs where keys are objects and values can be any data type. Keys are weakly referenced, meaning they can be garbage-collected.
- `WeakSet` is a collection of objects, also weakly referenced.

**Use Cases:**

- `WeakMap` is useful for private data storage in classes.
- `WeakSet` is ideal for tracking objects without preventing garbage collection.

```javascript
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, "value");
console.log(weakMap.get(obj)); // Output: value

const weakSet = new WeakSet();
weakSet.add(obj);
console.log(weakSet.has(obj)); // Output: true
```

---

#### 34. Write a Function to Deep Clone an Object

**Explanation:** Create a utility to deep copy nested objects and arrays.

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

// Example Usage
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
console.log(copy); // Output: { a: 1, b: { c: 2 } }
```

---

#### 35. Design a Custom Hook in React for Managing Async Operations

**Explanation:** Build a React Hook to simplify handling loading states and errors in asynchronous tasks.

```javascript
import { useState, useEffect } from "react";

function useAsync(asyncFunction, dependencies = []) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    asyncFunction()
      .then((result) => {
        if (isMounted) {
          setData(result);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) setError(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, dependencies);

  return { loading, error, data };
}

// Example Usage
function App() {
  const { loading, error, data } = useAsync(
    () => fetch("/api/data").then((res) => res.json()),
    []
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Data: {JSON.stringify(data)}</div>;
}
```

---

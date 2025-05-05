Prepare here: https://devtools.tech/lists/all
Namaste JS:- https://alok722.github.io/namaste-javascript-notes/dist/lectures.html;
code - https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions

# Table of Contents

# JavaScript Interview Topics

## 🧠 Core Concepts

- [What is a Callback function?](#what-is-a-callback-function)
- [What are Promises?](#what-are-promises)
- [What is async/await and How does it work?](#what-is-asyncawait-and-how-does-it-work)
- [What is Hoisting?](#what-is-hoisting)
- [What is Scope?](#what-is-scope)
- [What are Closures?](#what-are-closures)
- [What does "use strict" do?](#what-does-use-strict-do)
- [What is the value of `this` in JavaScript?](#what-is-the-value-of-this-in-javascript)
- [What is ECMAScript?](#what-is-ecmascript)
- [What is AJAX?](#what-is-ajax)

## 🧩 Operators and Types

- [What's the difference between `undefined` and `null`?](#whats-the-difference-between-undefined-and-null)
- [What does the `&&` operator do?](#what-does-the--operator-do)
- [What does the `||` operator do?](#what-does-the--operator-do-1)
- [Is using the `+` or unary plus operator the fastest way to convert a string to a number?](#is-using-the--or-unary-plus-operator-the-fastest-way-to-convert-a-string-to-a-number)
- [What's the difference between `==` and `===`?](#whats-the-difference-between--and-)
- [What does the `!!` operator do?](#what-does-the--operator-do)
- [What are the falsy values in JavaScript?](#what-are-the-falsy-values-in-javascript)
- [How to check if a value is falsy?](#how-to-check-if-a-value-is-falsy)
- [What's the difference between Spread operator and Rest operator?](#whats-the-difference-between-spread-operator-and-rest-operator)
- [What are Default Parameters?](#what-are-default-parameters)
- [What are Wrapper Objects?](#what-are-wrapper-objects)
- [What is the difference between Implicit and Explicit Coercion?](#what-is-the-difference-between-implicit-and-explicit-coercion)
- [What is NaN? and How to check if a value is NaN?](#what-is-nan-and-how-to-check-if-a-value-is-nan)
- [How to check if a value is an Array?](#how-to-check-if-a-value-is-an-array)
- [How to check if a number is even without using the % or modulo operator?](#how-to-check-if-a-number-is-even-without-using-the--or-modulo-operator)
- [How to check if a certain property exists in an object?](#how-to-check-if-a-certain-property-exists-in-an-object)

## 🌐 DOM and Events

- [What is the DOM?](#what-is-the-dom)
- [What is Event Propagation?](#what-is-event-propagation)
- [What is Event Delegation?](#what-is-event-delegation)
- [What is Event Bubbling?](#what-is-event-bubbling)
- [What is Event Capturing?](#what-is-event-capturing)
- [What's the difference between `event.preventDefault()` and `event.stopPropagation()` methods?](#whats-the-difference-between-eventpreventdefault-and-eventstoppropagation-methods)
- [How to know if the `event.preventDefault()` method was used in an element?](#how-to-know-if-the-eventpreventdefault-method-was-used-in-an-element)
- [What is `event.target`?](#what-is-eventtarget)
- [What is `event.currentTarget`?](#what-is-eventcurrenttarget)

## 🔧 Functions

- [What is an IIFE, what is the use of it?](#what-is-an-iife-what-is-the-use-of-it)
- [What is the use of Function.prototype.apply method?](#what-is-the-use-of-functionprototypeapply-method)
- [What is the use of Function.prototype.call method?](#what-is-the-use-of-functionprototypecall-method)
- [What's the difference between Function.prototype.apply and Function.prototype.call?](#whats-the-difference-between-functionprototypeapply-and-functionprototypecall)
- [What is the usage of Function.prototype.bind?](#what-is-the-usage-of-functionprototypebind)
- [What is the arguments object?](#what-is-the-arguments-object)
- [Why does `b` in this code become a global variable when you call this function?](#why-does-b-in-this-code-become-a-global-variable-when-you-call-this-function)

## 🧪 Functional Programming

- [What is Functional Programming and what are the features of JavaScript that makes it a candidate as a functional language?](#what-is-functional-programming-and-what-are-the-features-of-javascript-that-makes-it-a-candidate-as-a-functional-language)
- [What are Higher Order Functions?](#what-are-higher-order-functions)
- [Why are functions called First-class Objects?](#why-are-functions-called-first-class-objects)
- [Implement the Array.prototype.map method by hand.](#implement-the-arrayprototypemap-method-by-hand)
- [Implement the Array.prototype.filter method by hand.](#implement-the-arrayprototypefilter-method-by-hand)
- [Implement the Array.prototype.reduce method by hand.](#implement-the-arrayprototypereduce-method-by-hand)

## 🏗️ Objects and Prototypes

- [What is the prototype of an object?](#what-is-the-prototype-of-an-object)
- [How to create an object without a prototype?](#how-to-create-an-object-without-a-prototype)
- [Why does it return false when comparing two similar objects in JavaScript?](#why-does-it-return-false-when-comparing-two-similar-objects-in-javascript)
- [What are the ways of making objects in JavaScript?](#what-are-the-ways-of-making-objects-in-javascript)
- [What's the difference between Object.seal and Object.freeze methods?](#whats-the-difference-between-objectseal-and-objectfreeze-methods)

## 📦 ES6+ Features

- [What are the new features in ES6 or ECMAScript 2015 till 2025?](#what-are-the-new-features-in-es6-or-ecmascript-2015-till-2025)
- [What's the difference between `var`, `let` and `const` keywords?](#whats-the-difference-between-var-let-and-const-keywords)
- [What are Arrow functions?](#what-are-arrow-functions)
- [What are Classes and Constructors?](#what-are-classes-and-constructors)
- [What are Template Literals?](#what-are-template-literals)
- [What is Object Destructuring?](#what-is-object-destructuring)
- [What are ES6 Modules?](#what-are-es6-modules)
- [What is the Set object, Map, WeakMap and how does it work?](#what-is-the-set-object-map-weakmap-and-how-does-it-work)

---

# What is a Callback function?

A **callback function** is a function that is passed as an argument to another function and is executed later, usually after some operation has been completed. This allows asynchronous execution and enables JavaScript to handle tasks like event handling, API calls, and timers efficiently.

### Example of a Basic Callback Function

```javascript
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!
```

## Why Use Callback Functions?

- **Asynchronous Execution**: They help execute code after an operation (like fetching data or reading a file) completes.
- **Code Reusability**: Functions can be reused and passed around as arguments.
- **Event Handling**: Callbacks are extensively used in event-driven programming.
- **Avoiding Blocking Code**: JavaScript is single-threaded, and callbacks help in handling tasks without blocking execution.

## Callback Functions in Asynchronous JavaScript

Callbacks are heavily used in asynchronous operations such as reading files, making HTTP requests, and handling timers.

### Example: Using Callbacks with `setTimeout`

```javascript
function delayedMessage(callback) {
  setTimeout(() => {
    console.log("This message is delayed");
    callback();
  }, 2000);
}

delayedMessage(() => console.log("Callback executed!"));
// Output (after 2 seconds):
// This message is delayed
// Callback executed!
```

### Example: Callback in an API Call (Simulated with `setTimeout`)

```javascript
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    let data = { name: "John", age: 30 };
    callback(data);
  }, 3000);
}

function displayData(data) {
  console.log("Data received:", data);
}

fetchData(displayData);
// Output (after 3 seconds):
// Fetching data...
// Data received: { name: "John", age: 30 }
```

## Callback Hell (Nested Callbacks)

When multiple callbacks are nested, it leads to complex and hard-to-maintain code, known as "callback hell."

### Example of Callback Hell

```javascript
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 completed");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});
```

## Solving Callback Hell with Promises

To avoid callback hell, JavaScript introduced **Promises**, which make asynchronous code more readable and maintainable.

### Example Using Promises Instead of Callbacks

```javascript
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve();
    }, 1000);
  });
}

step1()
  .then(step2)
  .then(step3)
  .then(() => console.log("All steps completed"));
```

## Summary

- **Callback functions** allow functions to be passed as arguments to other functions for later execution.
- They are widely used in **asynchronous programming**, such as timers, event handling, and API requests.
- **Callback hell** occurs when multiple nested callbacks make the code difficult to read and maintain.
- **Promises** and **async/await** provide better alternatives to callback-based asynchronous programming.

Using callbacks effectively can enhance the efficiency and responsiveness of JavaScript applications, making them suitable for real-world scenarios like UI interactions and server-side operations.

[🔝 Back to Top](#table-of-contents)

# What are Promises?

- Objects representing the eventual completion or failure of an asynchronous operation.

**Example:**

```javascript
new Promise((resolve, reject) => {
  resolve("Success");
}).then(console.log);
```

[🔝 Back to Top](#table-of-contents)

# What are Promises?

- Objects representing the eventual completion or failure of an asynchronous operation.

**Example:**

```javascript
new Promise((resolve, reject) => {
  resolve("Success");
}).then(console.log);
```

[🔝 Back to Top](#table-of-contents)

# What is async/await and How does it work?

- Syntax for handling asynchronous code using Promises.

**Example:**

```javascript
async function fetchData() {
  const data = await fetch("/api");
  console.log(data);
}
```

[🔝 Back to Top](#table-of-contents)

# What is Hoisting?

- Variables and function declarations are moved to the top of their scope during execution.

**Example:**

```javascript
console.log(a); // Output: undefined
var a = 5;
```

[🔝 Back to Top](#table-of-contents)

# What is Scope?

- Scope defines the accessibility of variables.
- Types: Global, Local, and Block scope.

[🔝 Back to Top](#table-of-contents)

# What are Closures?

- Functions that retain access to their lexical scope.

**Example:**

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // Output: 1
```

[🔝 Back to Top](#table-of-contents)

# What does "use strict" do?

`"use strict"` is a directive in JavaScript that enables **strict mode**, which helps catch common programming mistakes and prevents the use of problematic features. It was introduced in **ECMAScript 5 (ES5)** and improves code security and performance.

---

## 🔹 Why Use `"use strict"`?

Strict mode helps in:

1. **Catching silent errors** – Some JavaScript errors that would otherwise fail silently will now throw an error.
2. **Preventing accidental globals** – Stops unintentional creation of global variables.
3. **Restricting the use of unsafe features** – Disallows dangerous features like `with` statements.
4. **Making debugging easier** – Throws errors for mistakes, making issues easier to find.
5. **Potential performance optimizations** – Allows JavaScript engines to optimize code better.

---

## 🔹 How to Enable `"use strict"`

### 1️⃣ Strict Mode for an Entire Script

```javascript
"use strict";

x = 10; // ❌ ReferenceError: x is not defined
console.log(x);
```

- Without strict mode, JavaScript would create `x` as a global variable.
- With strict mode, JavaScript throws an error because `x` is not explicitly declared (`let`, `const`, or `var`).

### 2️⃣ Strict Mode for a Specific Function

```javascript
function myFunction() {
  "use strict";
  y = 20; // ❌ ReferenceError: y is not defined
  console.log(y);
}

myFunction();
```

- Outside the function, the script runs in normal mode.
- Inside the function, strict mode is enabled.

---

## 🔹 Common Errors Caught by `"use strict"`

### ✅ 1. Preventing Accidental Global Variables

```javascript
"use strict";
x = 5; // ❌ ReferenceError: x is not defined
```

---

### ✅ 2. Preventing Duplicate Parameter Names

```javascript
"use strict";
function sum(a, a) {
  // ❌ SyntaxError: Duplicate parameter name not allowed
  return a + a;
}
```

---

### ✅ 3. Preventing Assignment to Read-Only Properties

```javascript
"use strict";
const obj = Object.freeze({ name: "Alice" });
obj.name = "Bob"; // ❌ TypeError: Cannot assign to read-only property 'name'
```

---

### ✅ 4. Preventing `delete` on Variables or Functions

```javascript
"use strict";
let num = 10;
delete num; // ❌ SyntaxError: Delete of an unqualified identifier
```

---

### ✅ 5. Restricting the `with` Statement

```javascript
"use strict";
with (Math) {
  // ❌ SyntaxError: Strict mode code may not include a with statement
  let x = round(4.5);
}
```

---

## 🔹 Does `"use strict"` Apply to Modules?

Yes, **ES6 modules (`import`/`export`) use strict mode by default**, so there's no need to add `"use strict"` manually.

Example:

```javascript
// In an ES6 module
export function test() {
  undeclaredVar = 42; // ❌ ReferenceError in strict mode
}
```

---

## 🔹 Should You Always Use `"use strict"`?

Yes, **it's a good practice** to always enable strict mode, as it helps catch common mistakes and enforces better coding standards. However, when working with older codebases, enabling strict mode may break existing scripts that rely on non-strict behavior.

---

## 🔹 Conclusion

- `"use strict"` **enables strict mode**, making JavaScript safer and reducing errors.
- It **prevents accidental globals, duplicate parameters, and unsafe assignments**.
- It **throws errors for silent mistakes**, helping developers debug code more easily.
- It is **automatically enabled in ES6 modules**.

[🔝 Back to Top](#table-of-contents)

# What is the value of this in JavaScript?

In JavaScript, the `this` keyword refers to an object. The object it refers to **depends on how the function is called**.

---

## 🔹 `this` in Global Space

Anything defined globally is said to be in a **global space**.

```javascript
console.log(this); // Refers to global object (window in browsers)
```

💡 **Note:** The global object differs based on the runtime environment. In **browsers**, it is `window`, while in **Node.js**, it is `global`.

---

## 🔹 `this` Inside a Function

```javascript
function x() {
  console.log(this);
}
x();
```

- **In non-strict mode**: `this` refers to the **global object** (`window` in browsers).
- **In strict mode (`'use strict'`)**: `this` is `undefined`.

```javascript
"use strict";
function x() {
  console.log(this); // undefined
}
x();
```

### ❗ `this` Substitution in Non-Strict Mode

- If `this` is `null` or `undefined` in non-strict mode, **it gets replaced by the global object**.
- This is why `this` inside a function (in non-strict mode) refers to the global object.

```javascript
function x() {
  console.log(this); // window (non-strict mode)
}
x();
window.x(); // Still window
```

---

## 🔹 `this` Inside an Object's Method

If `this` is inside an object method, it refers to the object itself.

```javascript
const obj = {
  a: 10,
  x: function () {
    console.log(this); // {a: 10, x: f()}
    console.log(this.a); // 10
  },
};
obj.x();
```

Here, `this` refers to `obj`, the object that owns the method.

---

## 🔹 `this` in `call()`, `apply()`, and `bind()`

These methods allow us to **explicitly set** the value of `this`.

```javascript
const student = {
  name: "Alok",
  printName: function () {
    console.log(this.name);
  },
};
student.printName(); // Alok

const student2 = {
  name: "Kajal",
};

// student2.printName(); // ❌ Error: printName is not a function

student.printName.call(student2); // ✅ Outputs: Kajal
```

- **`call()`** and **`apply()`** invoke the function immediately with a new `this` value.
- **`bind()`** returns a new function with `this` permanently set.

---

## 🔹 `this` Inside an Arrow Function

Arrow functions **do not have their own `this`**. Instead, they inherit `this` from their **enclosing lexical scope**.

```javascript
const obj = {
  a: 10,
  x: () => {
    console.log(this); // window (not obj)
  },
};
obj.x();
```

### 🔹 Arrow Function Inside a Regular Function

```javascript
const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj2.x();
```

- Here, `y` is an arrow function inside `x`, so it inherits `this` from `x`, which means `this` refers to `obj2`.

---

## 🔹 `this` Inside DOM Event Handlers

In an **event listener**, `this` refers to the **element that triggered the event**.

```html
<button onclick="alert(this)">Click Me</button>
<!-- Alerts: [object HTMLButtonElement] -->
```

---

## 🔹 Summary Table

| Context                           | Value of `this`         |
| --------------------------------- | ----------------------- |
| Global scope (browser)            | `window`                |
| Global scope (Node.js)            | `{}` (empty object)     |
| Regular function (non-strict)     | `window` (or global)    |
| Regular function (`'use strict'`) | `undefined`             |
| Object method                     | The object itself       |
| Constructor function              | New instance            |
| Arrow function                    | Lexical `this`          |
| Event listener                    | The element clicked     |
| `call()` / `apply()`              | Explicitly set value    |
| `bind()`                          | Permanently bound value |

---

## 🔹 Conclusion

- The value of `this` **depends on how a function is called**.
- In regular functions, it refers to the **global object**, but in **strict mode**, it is `undefined`.
- In **methods**, it refers to the object that owns the method.
- **Arrow functions** inherit `this` from their surrounding scope.
- `call()`, `apply()`, and `bind()` **explicitly set `this`**.

[🔝 Back to Top](#table-of-contents)

# What is ECMAScript?

ECMAScript (ES) is a **standardized** scripting language specification upon which **JavaScript** is based. It defines the core features, syntax, and behavior of JavaScript.

🔹 **Key Points:**

- Created by **ECMA International** as **ECMA-262** standard.
- Defines the rules for JavaScript execution.
- New versions introduce updates and enhancements to the language.

---

## 🔹 History of ECMAScript Versions

Each ECMAScript version (ES) brings new features and improvements.

| ECMAScript Version | Year | Key Features                                                          |
| ------------------ | ---- | --------------------------------------------------------------------- |
| **ES1**            | 1997 | First edition of ECMAScript                                           |
| **ES3**            | 1999 | Regular Expressions, Try-Catch                                        |
| **ES5**            | 2009 | `JSON.parse()`, `strict mode`, Array Methods (map, filter, reduce)    |
| **ES6 (ES2015)**   | 2015 | `let`, `const`, Arrow Functions, Classes, Promises, Template Literals |
| **ES7 (ES2016)**   | 2016 | `Array.includes()`, Exponentiation Operator (`**`)                    |
| **ES8 (ES2017)**   | 2017 | `async/await`, `Object.values()`, `Object.entries()`                  |
| **ES9 (ES2018)**   | 2018 | Rest/Spread Properties, `Promise.finally()`                           |
| **ES10 (ES2019)**  | 2019 | `flat()`, `flatMap()`, `Object.fromEntries()`                         |
| **ES11 (ES2020)**  | 2020 | Optional Chaining (`?.`), Nullish Coalescing (`??`), Dynamic Imports  |
| **ES12 (ES2021)**  | 2021 | Logical Assignment, Numeric Separators (`_`), WeakRefs                |

🔹 **Modern JavaScript follows ECMAScript standards to ensure compatibility across browsers and environments.**

---

## 🔹 Why is ECMAScript Important?

1️⃣ **Standardization** → Ensures JavaScript works consistently across different platforms.
2️⃣ **Feature Evolution** → Adds new functionalities to enhance performance & developer experience.
3️⃣ **Compatibility** → Maintains backward compatibility with older versions.
4️⃣ **Performance Improvements** → Introduces optimizations for faster execution.

---

## 🔹 How to Use Modern ECMAScript Features?

Most **modern browsers** support the latest ECMAScript features. However, for older browsers, you can use **transpilers** like Babel to convert ES6+ code into ES5 for compatibility.

```javascript
// Example: Using ES6+ features
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice"));
```

---

## 🔹 Summary

✅ **ECMAScript** is the foundation of JavaScript.
✅ New versions introduce **better syntax, performance, and features**.
✅ **ES6 (2015)** was a major update with `let`, `const`, Arrow Functions, and more.
✅ Modern browsers support **most ECMAScript features**, but transpilers like **Babel** ensure backward compatibility.

Staying up to date with ECMAScript helps developers write **efficient**, **modern**, and **scalable** JavaScript! 🚀

[🔝 Back to Top](#table-of-contents)

# What is AJAX?

**Explanation:**
AJAX (Asynchronous JavaScript and XML) is a technique used in web development to create dynamic and interactive web applications. It allows web pages to send and receive data from a server asynchronously without refreshing the entire page.

## How AJAX Works

AJAX uses the `XMLHttpRequest` object or modern `fetch()` API to communicate with a server. The general workflow involves:

1. A user triggers an event (e.g., clicking a button).
2. JavaScript sends a request to the server.
3. The server processes the request and sends back a response.
4. JavaScript updates the web page dynamically without requiring a full page reload.

## Example Using `XMLHttpRequest`

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
```

## Example Using `fetch()` API

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

## Advantages of AJAX

- **Improves user experience** by allowing updates without full page reloads.
- **Enhances performance** by reducing server load and bandwidth usage.
- **Allows asynchronous operations** for seamless data retrieval.
- **Supports multiple data formats** like JSON, XML, HTML, and text.

## Disadvantages of AJAX

- **Increases complexity** due to asynchronous nature.
- **SEO challenges** since content loading dynamically may not be indexed properly.
- **Security concerns** as client-side scripts expose endpoints to potential attacks.

## Conclusion

AJAX plays a crucial role in modern web applications by enabling dynamic content updates without refreshing the page. With the adoption of `fetch()` and modern APIs, AJAX has become more efficient and easier to implement.

[🔝 Back to Top](#table-of-contents)

# 🧩 Operators and Types

# What is the difference between undefined and null?

- `undefined` means a variable has been declared but not assigned a value.
- `null` is an assigned value representing no value.

**Example:**

```javascript
let a;
console.log(a); // Output: undefined
let b = null;
console.log(b); // Output: null
```

[🔝 Back to Top](#table-of-contents)

# What does the && operator do?

- Returns the first falsy value or the last truthy value in a chain of expressions.

**Example:**

```javascript
console.log(true && false); // Output: false
console.log(1 && "hello"); // Output: hello
```

[🔝 Back to Top](#table-of-contents)

# What does the || operator do?

- Returns the first truthy value or the last falsy value in a chain of expressions.

**Example:**

```javascript
console.log(false || true); // Output: true
console.log(0 || "hello"); // Output: hello
```

[🔝 Back to Top](#table-of-contents)

# Is using the + or unary plus operator the fastest way to convert a string to a number?

- Yes, it is a concise and efficient way to convert strings to numbers.

**Example:**

```javascript
let str = "42";
console.log(+str); // Output: 42
```

[🔝 Back to Top](#table-of-contents)

# What's the difference between == and ===?

- `==`: Compares values, allowing type coercion.
- `===`: Compares both value and type.

[🔝 Back to Top](#table-of-contents)

# What does the !! operator do?

- Converts a value to its boolean equivalent.

**Example:**

```javascript
console.log(!!"hello"); // Output: true
```

[🔝 Back to Top](#table-of-contents)

# What are the falsy values in JavaScript?

- `false`, `0`, `""`, `null`, `undefined`, `NaN`.

## 22. How to check if a value is falsy?

**Example:**

```javascript
if (!value) {
  console.log("Falsy value");
}
```

[🔝 Back to Top](#table-of-contents)

# How to check if a value is falsy?

```javascript
if (!value) {
  console.log("Falsy value");
}
```

[🔝 Back to Top](#table-of-contents)

# What's the difference between Spread operator and Rest operator?

JavaScript provides two powerful operators, the **spread (`...`) operator** and the **rest (`...`) operator**, which look identical but serve different purposes based on how and where they are used.

---

## 1. **Spread Operator (`...`)**

The **spread operator** expands an iterable (like an array, string, or object) into individual elements.

### **Use Cases of Spread Operator**

#### 1.1 Expanding an Array

```javascript
const numbers = [1, 2, 3];
console.log(...numbers); // Output: 1 2 3
```

#### 1.2 Copying an Array

```javascript
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]
```

#### 1.3 Merging Arrays

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
```

#### 1.4 Spreading in Function Arguments

```javascript
function sum(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // Output: 6
```

#### 1.5 Copying and Merging Objects

```javascript
const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, city: "New York" };
console.log(updatedPerson); // Output: { name: "Alice", age: 25, city: "New York" }
```

---

## 2. **Rest Operator (`...`)**

The **rest operator** collects multiple elements into a single array or object. It is mainly used in function parameters and destructuring.

### **Use Cases of Rest Operator**

#### 2.1 Gathering Function Arguments

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

#### 2.2 Rest Operator in Destructuring

```javascript
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // Output: 10
console.log(second); // Output: 20
console.log(rest); // Output: [30, 40, 50]
```

```javascript
const personDetails = { name: "Bob", age: 28, country: "USA" };
const { name, ...otherDetails } = personDetails;
console.log(name); // Output: Bob
console.log(otherDetails); // Output: { age: 28, country: "USA" }
```

---

## 3. **Key Differences**

| Feature       | Spread Operator (`...`)                         | Rest Operator (`...`)                         |
| ------------- | ----------------------------------------------- | --------------------------------------------- |
| Purpose       | Expands elements into individual items          | Collects multiple elements into an array      |
| Usage Context | Used in arrays, objects, and function arguments | Used in function parameters and destructuring |
| Example       | `const newArr = [...arr]` (expands)             | `function sum(...args) {}` (gathers)          |

---

## 4. **Final Thoughts**

- The **spread operator** is used to expand elements (arrays, objects, function arguments).
- The **rest operator** is used to collect multiple values into a single array or object.
- Though they look the same (`...`), their functionality differs based on the context in which they are used.

Both operators make JavaScript more powerful and concise by improving code readability and flexibility. 🚀

[🔝 Back to Top](#table-of-contents)

# What are Default Parameters?

**Explanation:**

- Function parameters with default values.

**Example:**

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
```

[🔝 Back to Top](#table-of-contents)

# What are Wrapper Objects?

**Explanation:**

In JavaScript, **Wrapper Objects** are temporary objects that wrap around primitive values, allowing them to access methods and properties like objects. JavaScript provides three main wrapper objects:

- **String** for string values
- **Number** for number values
- **Boolean** for boolean values

These wrapper objects enable primitive data types to behave like objects when necessary.

## How Wrapper Objects Work

JavaScript automatically creates a temporary object when a method is called on a primitive value. Once the method is executed, the temporary object is discarded.

### Example:

```javascript
const str = "hello";
console.log(str.toUpperCase()); // Output: "HELLO"
```

Behind the scenes, JavaScript performs the following steps:

1. Creates a temporary `String` object: `new String("hello")`
2. Calls the `toUpperCase()` method on that object.
3. Returns the result and discards the temporary object.

## Types of Wrapper Objects

### String Wrapper Object

```javascript
const str = new String("hello");
console.log(str.length); // Output: 5
console.log(str[0]); // Output: "h"
```

### Number Wrapper Object

```javascript
const num = new Number(100);
console.log(num.toFixed(2)); // Output: "100.00"
```

### Boolean Wrapper Object

```javascript
const bool = new Boolean(true);
console.log(bool.toString()); // Output: "true"
```

## Key Characteristics of Wrapper Objects

- Wrapper objects are created **temporarily** when using primitive types and their methods.
- When manually instantiated using `new`, they behave as objects.
- They are **not** the same as primitive values.

### Example of Difference Between Primitive and Wrapper Object

```javascript
const primitiveStr = "hello";
const objectStr = new String("hello");

console.log(typeof primitiveStr); // Output: "string"
console.log(typeof objectStr); // Output: "object"
console.log(primitiveStr === objectStr); // Output: false
```

## When to Use Wrapper Objects?

1. **Implicit Usage (Recommended)**: Let JavaScript handle wrapper objects internally when working with primitives.
2. **Explicit Usage (Rare Cases)**: Use `new String()`, `new Number()`, or `new Boolean()` when strictly requiring an object type (e.g., working with prototypes or object-based operations).

### Avoid Using Explicit Wrapper Objects:

Using wrapper objects explicitly can cause unexpected behavior in comparisons:

```javascript
console.log(new Boolean(false) ? "Truthy" : "Falsy"); // Output: "Truthy" (because it's an object)
```

## Summary

- **Wrapper objects** enable primitive values to use object-like properties and methods.
- **Temporary wrapper objects** are created automatically by JavaScript and discarded immediately.
- **Manually creating wrapper objects** using `new` can lead to unintended issues and should generally be avoided.

Wrapper objects are a fundamental concept in JavaScript, ensuring a seamless interaction between primitive and object-based values!

[🔝 Back to Top](#table-of-contents)

# What is the difference between Implicit and Explicit Coercion?

Type Coercion in JavaScript is the process of converting a value from one data type to another automatically or manually. It happens in scenarios where JavaScript expects a certain data type and attempts to convert values accordingly.

JavaScript performs two types of type coercion:

1. **Implicit Coercion** (Type conversion is done automatically by JavaScript)
2. **Explicit Coercion** (Type conversion is manually done by the developer)

---

## Implicit Type Coercion

Implicit Coercion occurs when JavaScript automatically converts a value from one type to another without explicit instructions. This mostly happens in operations that involve different data types.

### Examples of Implicit Coercion

#### 1. String Coercion

```javascript
console.log("5" + 3); // Output: "53"
console.log("5" + true); // Output: "5true"
console.log("5" + null); // Output: "5null"
```

> In these cases, the `+` operator triggers **string concatenation**, converting numbers and booleans into strings.

#### 2. Numeric Coercion

```javascript
console.log("5" - 3); // Output: 2
console.log("5" * 3); // Output: 15
console.log("10" / "2"); // Output: 5
```

> Here, JavaScript converts strings into numbers because `-`, `*`, and `/` expect numeric operands.

#### 3. Boolean Coercion

```javascript
console.log(Boolean("Hello")); // Output: true
console.log(Boolean("")); // Output: false
console.log(Boolean(0)); // Output: false
console.log(Boolean(1)); // Output: true
```

> Falsy values: `0`, `""`, `null`, `undefined`, `NaN`, `false`
> Truthy values: Any non-empty string, non-zero number, objects, arrays, etc.

---

## Explicit Type Coercion

Explicit Coercion is when a developer **forcibly converts** a value from one type to another using built-in JavaScript functions.

### Examples of Explicit Coercion

#### 1. String Conversion

```javascript
console.log(String(123)); // Output: "123"
console.log(String(true)); // Output: "true"
console.log((456).toString()); // Output: "456"
```

#### 2. Number Conversion

```javascript
console.log(Number("123")); // Output: 123
console.log(Number("abc")); // Output: NaN
console.log(parseInt("12.34")); // Output: 12
console.log(parseFloat("12.34")); // Output: 12.34
```

#### 3. Boolean Conversion

```javascript
console.log(Boolean(0)); // Output: false
console.log(Boolean(1)); // Output: true
console.log(Boolean("Hello")); // Output: true
```

---

## Key Differences Between Implicit and Explicit Coercion

| Feature     | Implicit Coercion                                                                 | Explicit Coercion                                                     |
| ----------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Control     | Happens automatically by JavaScript                                               | Done manually by the developer                                        |
| Readability | Can sometimes lead to unexpected results                                          | More predictable and explicit                                         |
| Usage       | Happens in operations involving different types (`+`, `-`, `*`, `/`, comparisons) | Uses functions like `String()`, `Number()`, `Boolean()`, `parseInt()` |
| Example     | `"5" + 3 → "53"` (string concatenation)                                           | `Number("5") → 5` (explicit conversion)                               |

---

## Best Practices

- **Avoid implicit coercion where possible**, as it can lead to unexpected behavior.
- **Use explicit coercion** to improve readability and maintainability.
- **Be mindful of falsy and truthy values**, as they can impact conditional logic.
- **Use `===` (strict equality) instead of `==`**, as `==` allows implicit coercion.

### Example of Unexpected Behavior

```javascript
console.log([] == false); // Output: true
console.log(null == undefined); // Output: true
console.log(" \t\n" == 0); // Output: true
```

> These occur due to implicit coercion, which can be avoided using strict equality (`===`).

---

## Summary

- **Implicit Coercion**: JavaScript automatically converts types in certain operations.
- **Explicit Coercion**: Developers manually convert types using built-in functions.
- **Explicit coercion is preferred** for clarity and maintainability.
- **Understanding coercion helps prevent unexpected behavior and improves code quality.**

[🔝 Back to Top](#table-of-contents)

# What is NaN? and How to check if a value is NaN?

**Explanation:**

- NaN: Not-a-Number.

**Example:**

```javascript
Number.isNaN(value);
```

[🔝 Back to Top](#table-of-contents)

# How to check if a value is an Array?

**Example:**

```javascript
Array.isArray(value);
```

[🔝 Back to Top](#table-of-contents)

# How to check if a number is even without using the `%` or modulo operator?

**Example:**

```javascript
const isEven = (num) => (num & 1) === 0;
```

[🔝 Back to Top](#table-of-contents)

# How to check if a certain property exists in an object?

**Example:**

```javascript
"property" in object;
```

[🔝 Back to Top](#table-of-contents)

# 🌐 DOM and Events

# What is the DOM?

- The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML document as a tree of objects, where each element, attribute, and piece of text is a node that can be manipulated using JavaScript.

**Key Characteristics:**

- It allows dynamic updates to HTML and CSS.

- It provides methods to traverse and modify elements.

- It enables event handling in JavaScript.

- The DOM is not part of JavaScript; it's an API provided by browsers.

**Example:**

```html
<div id="example">Hello</div>
<script>
  console.log(document.getElementById("example")); // Accesses the div element
</script>
```

```html
<p id="message">Hello, World!</p>
<button onclick="changeText()">Click Me</button>
<script>
  function changeText() {
    document.getElementById("message").innerText = "Hello, JavaScript!";
  }
</script>
```

`document.getElementById("message")` accesses the element.

`.innerText` modifies its text content dynamically.

[🔝 Back to Top](#table-of-contents)

# What is Event Propagation?

Event Propagation determines how an event travels through the DOM when triggered. It occurs in **three phases**:

1. **Capturing Phase** (Event travels from root to the target element)
2. **Target Phase** (Event reaches the target element)
3. **Bubbling Phase** (Event travels back from the target element to the root)

[🔝 Back to Top](#table-of-contents)

# What is Event Deligation?

**Event delegation** is a technique where a **single event listener is attached to a parent element** to manage events on multiple child elements, even if they are added dynamically.

### **Example:**

```js
document.getElementById("list").addEventListener("click", (event) => {
  if (event.target.classList.contains("item")) {
    console.log("Item clicked:", event.target.innerText);
  }
});
```

#### **HTML:**

```html
<ul id="list">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>
```

### **Why Use Event Delegation?**

- **Improves Performance** (Fewer event listeners).
- **Handles Dynamic Elements**.
- **Reduces Memory Usage**.

[🔝 Back to Top](#table-of-contents)

# What's Event Bubbling?

- Events propagate from the target element up to its ancestors.
- It is default in JS
-

### **Definition**

**Event Bubbling** is a part of event propagation where an event starts at the **target element** and propagates **upwards** through its parent elements.

### **Example:**

#### **HTML**

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

#### **JavaScript**

```js
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child Clicked");
});
```

#### **Output when clicking the button:**

```
Child Clicked
Parent Clicked
```

- The event bubbles **from child → parent**.

[🔝 Back to Top](#table-of-contents)

# What's Event Capturing?

- Events propagate from the root down to the target element.

### **Definition**

**Event Capturing** (also called **trickling**) is the opposite of bubbling. The event starts at the **root element** and moves **down** to the target element.

### **Example:**

```js
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent Capturing");
  },
  true
);

document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  true
);
```

#### **Output when clicking the button:**

```
Parent Capturing
Child Clicked
```

- The event **captures** from parent → child.
- The third argument `true` enables capturing mode.

[🔝 Back to Top](#table-of-contents)

# What's the difference between event.preventDefault() and event.stopPropagation() methods?

### **A. `event.preventDefault()`**

It **prevents the default action** of an element (e.g., stopping a form from submitting or preventing a link from navigating).

#### **Example:** Prevent form submission

```js
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Stops the form from submitting
  console.log("Form submission prevented!");
});
```

#### **Example:** Prevent link navigation

```js
document.querySelector("a").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Link navigation prevented!");
});
```

### **B. `event.stopPropagation()`**

It **stops the event from propagating** (bubbling or capturing) through the DOM.

#### **Example:** Prevent event bubbling

```js
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", (event) => {
  event.stopPropagation(); // Stops event from reaching parent
  console.log("Child Clicked");
});
```

#### **Output when clicking the button:**

```
Child Clicked
```

- **Parent Clicked** is NOT logged because `stopPropagation()` prevents bubbling.

[🔝 Back to Top](#table-of-contents)

# How to know if the event.preventDefault() method was used in an element?

### **Method 1: Using `event.defaultPrevented`**

The `event.defaultPrevented` property returns `true` if `preventDefault()` was called.

#### **Example:**

```js
document.querySelector("a").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Link navigation prevented!");
  console.log("Was preventDefault() called?", event.defaultPrevented);
});
```

#### **Output:**

```
Link navigation prevented!
Was preventDefault() called? true
```

### **Method 2: Wrapping `preventDefault()`**

You can override `preventDefault()` to track calls.

```js
(function () {
  const originalPreventDefault = Event.prototype.preventDefault;
  Event.prototype.preventDefault = function () {
    console.log("preventDefault() was called");
    originalPreventDefault.call(this);
  };
})();
```

- This method **logs every call** to `preventDefault()` globally.

---

## **Conclusion**

| Concept                     | Definition                                                                         |
| --------------------------- | ---------------------------------------------------------------------------------- |
| **DOM**                     | The browser's representation of an HTML document as a tree of nodes.               |
| **Event Propagation**       | The way events move through the DOM (Capturing → Target → Bubbling).               |
| **Event Bubbling**          | The event moves from target → parent elements.                                     |
| **Event Capturing**         | The event moves from root → target element.                                        |
| **event.preventDefault()**  | Stops the default behavior of an element (e.g., form submission, link navigation). |
| **event.stopPropagation()** | Prevents the event from propagating (bubbling/capturing).                          |
| **Event Delegation**        | Using a parent event listener to handle child events efficiently.                  |

[🔝 Back to Top](#table-of-contents)

# What is event.target?

- Refers to the element that triggered the event.

[🔝 Back to Top](#table-of-contents)

# What is event.currentTarget?

- Refers to the element to which the event handler is attached.

[🔝 Back to Top](#table-of-contents)

---

## 🛋 Objects & Prototypes

# What is an IIFE, what is the use of it?

An **Immediately Invoked Function Expression (IIFE)** is a JavaScript function that is executed **immediately after it is defined**.

It has the following syntax:

```javascript
(function () {
  console.log("This is an IIFE");
})();
```

### Explanation:

- The function is **wrapped in parentheses** `(function() { ... })` to make it an **expression**.
- The **`()` at the end** invokes the function immediately.

Alternatively, you can use an **arrow function IIFE**:

```javascript
(() => {
  console.log("IIFE with arrow function");
})();
```

---

## 🔹 Why Use an IIFE?

1. **Avoid Polluting the Global Scope** 🧹

   - Variables inside an IIFE are **not accessible globally**, preventing accidental overwrites.

   ```javascript
   (function () {
     var message = "Hello, World!";
     console.log(message); // Accessible here
   })();

   console.log(message); // ❌ Error: message is not defined
   ```

2. **Encapsulation & Data Privacy** 🔒

   - Helps in **creating private variables and functions** that are not accessible outside the IIFE.

   ```javascript
   const counter = (function () {
     let count = 0;
     return {
       increment: function () {
         return ++count;
       },
       decrement: function () {
         return --count;
       },
     };
   })();

   console.log(counter.increment()); // 1
   console.log(counter.decrement()); // 0
   console.log(counter.count); // ❌ Undefined (count is private)
   ```

3. **Avoid Conflicts in Global Scope (Useful in Modules & Libraries)** 📦

   - When multiple scripts run on the same page, an IIFE **prevents naming collisions**.

   ```javascript
   (function ($) {
     console.log("Using jQuery IIFE", $);
   })(jQuery); // Passing jQuery as an argument
   ```

4. **Executing Code Immediately** ⏩

   - Useful for running setup code **once at the beginning** of a script.

   ```javascript
   (function () {
     console.log("App Initialized");
   })();
   ```

5. **Creating a Singleton** 👤

   - Helps in implementing a **singleton pattern**, ensuring only **one instance** exists.

   ```javascript
   const AppConfig = (function () {
     const settings = {
       apiKey: "123456",
       theme: "dark",
     };
     return {
       get: function (key) {
         return settings[key];
       },
     };
   })();

   console.log(AppConfig.get("theme")); // dark
   ```

---

## 🔹 Summary Table

| Feature             | Explanation                                                      |
| ------------------- | ---------------------------------------------------------------- |
| **Syntax**          | `(function() { ... })();`                                        |
| **Scope Isolation** | Variables inside an IIFE **don't affect global scope**           |
| **Encapsulation**   | Data inside an IIFE remains **private**                          |
| **Use Cases**       | Prevents conflicts, initialization, module patterns, data hiding |
| **Variants**        | `(function() { ... })();` and `(() => { ... })();`               |

## 🔹 Conclusion

IIFEs are powerful for **scoping, preventing global pollution, and ensuring data privacy**. They are widely used in **JavaScript modules, design patterns, and initialization scripts**.

[🔝 Back to Top](#table-of-contents)

# What is the use of Function.prototype.apply method?

The **`apply()`** method in JavaScript allows you to call a function **with a specified `this` value and arguments provided as an array** (or an array-like object).

**Syntax:**

```javascript
func.apply(thisArg, [argsArray]);
```

- `func`: The function to be invoked.
- `thisArg`: The value of `this` inside the function.
- `argsArray`: An array or array-like object containing the arguments.

### Example 1: Using `apply()` to Call a Function with Arguments

```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: "Alice" };

greet.apply(person, ["Hello", "!"]); // Output: Hello, Alice!
```

📌 **Explanation:**

- `apply()` sets `this` to `person`, so `this.name` becomes `"Alice"`.
- The function receives arguments from an array `["Hello", "!"]`.

---

### Example 2: Using `apply()` for Array Manipulation

Since **`Math.max()` and `Math.min()`** do not accept arrays directly, we can use `apply()` to pass an array of numbers:

```javascript
const numbers = [3, 5, 8, 1, 9];

const maxNumber = Math.max.apply(null, numbers);
const minNumber = Math.min.apply(null, numbers);

console.log(maxNumber); // Output: 9
console.log(minNumber); // Output: 1
```

📌 **Explanation:**

- `null` is used as `this` since `Math.max()` does not rely on `this`.
- `apply()` spreads the array elements as function arguments.

---

### Example 3: Borrowing Methods from Other Objects

You can use `apply()` to borrow methods from one object and use them on another.

```javascript
const student = {
  name: "John",
  introduce: function (age, city) {
    console.log(`Hi, I'm ${this.name}, ${age} years old from ${city}.`);
  },
};

const student2 = { name: "Emma" };

student.introduce.apply(student2, [25, "New York"]);
// Output: Hi, I'm Emma, 25 years old from New York.
```

📌 **Explanation:**

- The `introduce` method is borrowed from `student` and used for `student2`.
- `this` now refers to `student2`, and parameters are passed as an array.

---

### Example 4: Using `apply()` for Constructor Inheritance

When creating objects using constructors, `apply()` helps in **calling another constructor inside a new one**.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Student(name, age, grade) {
  Person.apply(this, [name, age]);
  this.grade = grade;
}

const student1 = new Student("Jake", 20, "A");
console.log(student1); // Output: { name: 'Jake', age: 20, grade: 'A' }
```

📌 **Explanation:**

- `apply()` calls `Person` inside `Student`, reusing the logic for `name` and `age`.
- This avoids redundant code when inheriting properties from `Person`.

---

## 🔹 Difference Between `call()` and `apply()`

| Feature          | `call()`                                               | `apply()`                                                |
| ---------------- | ------------------------------------------------------ | -------------------------------------------------------- |
| Arguments format | Passed individually (`func.call(thisArg, arg1, arg2)`) | Passed as an array (`func.apply(thisArg, [arg1, arg2])`) |
| Use case         | When arguments are known beforehand                    | When arguments are stored in an array                    |
| Example          | `func.call(obj, a, b, c)`                              | `func.apply(obj, [a, b, c])`                             |

---

## 🔹 Summary

- `apply()` is used to **invoke functions with a specified `this` value** and an **array of arguments**.
- It is useful for **method borrowing, array manipulation, and constructor inheritance**.
- It differs from `call()` in how arguments are passed (`apply()` uses an array, `call()` uses individual arguments).
- It is particularly useful when working with **Math functions, function borrowing, and object inheritance**.

[🔝 Back to Top](#table-of-contents)

# What is the use of Function.prototype.call method?

The `call()` method is a built-in function in JavaScript that allows you to invoke a function with a specified `this` value and arguments provided **individually**.

## Syntax

```javascript
functionName.call(thisArg, arg1, arg2, ...)
```

- `thisArg` → The value to be used as `this` when executing the function.
- `arg1, arg2, ...` → Arguments passed **individually** to the function.

---

## 🔹 Why Use `call()`?

### 1️⃣ **Setting `this` explicitly**

```javascript
const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

const person2 = { name: "Bob" };

person.greet.call(person2); // "Hello, Bob"
```

💡 The `call()` method allows `greet()` to execute with `this` bound to `person2` instead of `person`.

---

### 2️⃣ **Using `call()` for Inheritance (Function Borrowing)**

```javascript
const student = {
  name: "John",
  introduce: function () {
    console.log("My name is " + this.name);
  },
};

const teacher = { name: "Mr. Smith" };

student.introduce.call(teacher); // "My name is Mr. Smith"
```

Here, `introduce` is borrowed from `student` and applied to `teacher`.

---

### 3️⃣ **Calling Functions with Arguments**

```javascript
function multiply(a, b) {
  console.log(a * b);
}

multiply.call(null, 5, 3); // 15
```

In this case, `this` is not used inside `multiply()`, so we pass `null`.

---

### 4️⃣ **Using `call()` with Built-in Functions**

#### Converting an Array-like Object to an Array

```javascript
function printArguments() {
  const args = Array.prototype.slice.call(arguments);
  console.log(args);
}

printArguments(1, 2, 3, 4); // [1, 2, 3, 4]
```

`arguments` is an array-like object, and `call()` helps convert it into an array.

---

## 🔹 `call()` vs `apply()` vs `bind()`

| Method    | Invocation Style           | Arguments Format    | Returns                                         |
| --------- | -------------------------- | ------------------- | ----------------------------------------------- |
| `call()`  | Calls function immediately | Passed individually | `undefined` (unless function returns something) |
| `apply()` | Calls function immediately | Passed as an array  | `undefined` (unless function returns something) |
| `bind()`  | Returns a new function     | Passed individually | New function                                    |

---

## 🔹 Summary

- `call()` allows **explicitly setting `this`** for a function.
- It is useful for **function borrowing** and invoking functions with **specific arguments**.
- Unlike `apply()`, `call()` takes arguments **individually**.
- Unlike `bind()`, it **executes immediately** instead of returning a new function.

[🔝 Back to Top](#table-of-contents)

# What's the difference between Function.prototype.apply and Function.prototype.call?

Both `apply()` and `call()` are built-in JavaScript methods that allow you to invoke a function with a specific `this` value. The key difference between them is **how they pass arguments** to the function.

---

## 🔹 Syntax & Key Difference

### `call()` Syntax:

```javascript
functionName.call(thisArg, arg1, arg2, ...);
```

- Accepts arguments **individually**.

### `apply()` Syntax:

```javascript
functionName.apply(thisArg, [arg1, arg2, ...]);
```

- Accepts arguments as an **array or array-like object**.

---

## 🔹 Example 1: Passing Arguments

### Using `call()`:

```javascript
function greet(name, age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet.call(null, "Alice", 25);
// Output: Hello, my name is Alice and I am 25 years old.
```

### Using `apply()`:

```javascript
function greet(name, age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet.apply(null, ["Alice", 25]);
// Output: Hello, my name is Alice and I am 25 years old.
```

---

## 🔹 Example 2: Using `Math.max()`

`apply()` is useful when dealing with an array of values.

### Using `apply()`:

```javascript
const numbers = [3, 7, 1, 9, 5];
const max = Math.max.apply(null, numbers);
console.log(max); // Output: 9
```

### Using `call()` (Incorrect Way):

```javascript
// Math.max expects individual numbers, so using call requires manual unpacking
const max = Math.max.call(null, 3, 7, 1, 9, 5);
console.log(max); // Output: 9
```

`apply()` is more convenient when working with an array of values.

---

## 🔹 Example 3: Borrowing Methods

```javascript
const person = {
  fullName: function (city, country) {
    console.log(`${this.firstName} ${this.lastName} from ${city}, ${country}`);
  },
};

const user = {
  firstName: "John",
  lastName: "Doe",
};

person.fullName.call(user, "New York", "USA");
// Output: John Doe from New York, USA

person.fullName.apply(user, ["New York", "USA"]);
// Output: John Doe from New York, USA
```

Both `call()` and `apply()` achieve the same result, but `apply()` takes the arguments as an array.

---

## 🔹 When to Use `call()` vs `apply()`

| Use Case                                           | `call()` | `apply()` |
| -------------------------------------------------- | -------- | --------- |
| When arguments are known beforehand                | ✅       | ❌        |
| When arguments are stored in an array              | ❌       | ✅        |
| Borrowing methods                                  | ✅       | ✅        |
| Working with `Math.max` and `Math.min` on an array | ❌       | ✅        |

---

## 🔹 Summary

- **Both `call()` and `apply()` invoke a function immediately with a specified `this` value.**
- **Main difference:** `call()` takes arguments individually, while `apply()` takes them as an array.
- **Use `apply()` when arguments are in an array-like format.**
- **Use `call()` when arguments are passed explicitly one by one.**

[🔝 Back to Top](#table-of-contents)

# What is the usage of Function.prototype.bind?

The `bind()` method creates a **new function** that, when invoked, has its `this` value **permanently set** to the first argument provided to `bind()`. Unlike `call()` and `apply()`, it does **not** execute the function immediately.

## 🔹 Syntax

```javascript
const boundFunction = functionName.bind(thisArg, arg1, arg2, ...);
```

- `thisArg`: The value to be set as `this` inside the function.
- `arg1, arg2, ...`: Optional arguments to be **pre-set** when calling the new function.
- Returns a **new function** with `this` bound to `thisArg`.

---

## 🔹 Example 1: Binding `this`

```javascript
const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

const greetFunc = person.greet.bind(person);
greetFunc(); // Output: "Hello, Alice"
```

Here, `bind()` ensures that `this` inside `greetFunc` always refers to `person`.

---

## 🔹 Example 2: Using `bind()` for Function Borrowing

```javascript
const student = {
  name: "John",
  introduce: function () {
    console.log("My name is " + this.name);
  },
};

const teacher = { name: "Mr. Smith" };

const teacherIntro = student.introduce.bind(teacher);
teacherIntro(); // Output: "My name is Mr. Smith"
```

`bind()` allows us to reuse the `introduce()` method with a different object (`teacher`).

---

## 🔹 Example 3: Using `bind()` with Partial Application

`bind()` can also be used to **pre-set** function arguments.

```javascript
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // Output: 10
```

Here, `double` is a new function where the first argument (`a`) is permanently set to `2`.

---

## 🔹 Example 4: `bind()` in Event Listeners

```javascript
const button = document.querySelector("button");
const user = {
  name: "Emma",
  handleClick: function () {
    console.log(this.name + " clicked the button");
  },
};

button.addEventListener("click", user.handleClick.bind(user));
```

Without `bind()`, `this` inside `handleClick` would refer to the button element instead of `user`.

---

## 🔹 `bind()` vs `call()` vs `apply()`

| Method    | Invocation                                           | Arguments Format    | Returns               |
| --------- | ---------------------------------------------------- | ------------------- | --------------------- |
| `bind()`  | Returns a **new function**, not executed immediately | Passed individually | A new function        |
| `call()`  | Executes **immediately**                             | Passed individually | Function return value |
| `apply()` | Executes **immediately**                             | Passed as an array  | Function return value |

---

## 🔹 When to Use `bind()`

- When you need to **ensure `this` remains unchanged**.
- When **passing a function as a callback** (e.g., event listeners, setTimeout).
- When **pre-setting arguments** for a function (**partial application**).
- When using **method borrowing**.

---

## 🚀 Summary

- `bind()` **creates a new function** with `this` permanently set.
- Unlike `call()` and `apply()`, it **does not execute immediately**.
- It is useful for **ensuring the correct `this` value**, **function borrowing**, and **partial function application**.

[🔝 Back to Top](#table-of-contents)

# What is the arguments object?

The `arguments` object is a special, array-like object available inside **regular functions** (not arrow functions) that provides access to all arguments passed to the function.

🔹 **Key Points:**

- It is **not an actual array**, but it behaves similarly.
- It is **available only inside functions**.
- It allows accessing arguments dynamically.

---

## 🔹 Example Usage

### 1️⃣ Accessing Function Arguments

```javascript
function showArguments() {
  console.log(arguments);
}

showArguments(1, 2, 3);
// Output: Arguments(3) [1, 2, 3]
```

The `arguments` object captures all parameters passed to the function.

---

### 2️⃣ Using `arguments.length`

```javascript
function countArgs() {
  console.log("Number of arguments:", arguments.length);
}

countArgs(1, "hello", true);
// Output: Number of arguments: 3
```

You can use `.length` to determine how many arguments were passed.

---

### 3️⃣ Iterating Over Arguments

```javascript
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10
```

Even though `arguments` is not an array, it can be iterated over using a loop.

---

## 🔹 `arguments` is **Not Available in Arrow Functions**

Arrow functions do not have their own `arguments` object.

```javascript
const showArgs = () => {
  console.log(arguments); // ❌ Throws an error
};

showArgs(1, 2, 3);
```

If you need access to arguments in an arrow function, use **rest parameters (`...args`)** instead.

```javascript
const showArgs = (...args) => {
  console.log(args); // ✅ [1, 2, 3]
};

showArgs(1, 2, 3);
```

---

## 🔹 Converting `arguments` to an Array

Since `arguments` is not a real array, you may need to convert it using `Array.from()` or the spread operator (`...`).

```javascript
function convertArgs() {
  const argsArray = Array.from(arguments);
  console.log(argsArray);
}

convertArgs(1, 2, 3); // Output: [1, 2, 3]
```

OR

```javascript
function convertArgs() {
  const argsArray = [...arguments];
  console.log(argsArray);
}

convertArgs(1, 2, 3); // Output: [1, 2, 3]
```

---

## 🔹 Summary

✅ The `arguments` object provides access to all function arguments.
✅ It is **array-like**, but not an actual array.
✅ It is **not available** in arrow functions.
✅ Use `Array.from(arguments)` or `[...arguments]` to convert it to a real array.
✅ Use **rest parameters (`...args`)** instead for modern JavaScript.

Mastering `arguments` helps in writing **flexible** and **dynamic** functions! 🚀

[🔝 Back to Top](#table-of-contents)

# Why does `b` in this code become a global variable when you call this function?

- Assigning a value to an undeclared variable makes it global.

**Example:**

```javascript
function test() {
  b = 10; // No `var`, `let`, or `const`
}
```

✅ **ECMAScript** is the foundation of JavaScript.
✅ New versions introduce **better syntax, performance, and features**.
✅ **ES6 (2015)** was a major update with `let`, `const`, Arrow Functions, and more.
✅ Modern browsers support **most ECMAScript features**, but transpilers like **Babel** ensure backward compatibility.

Staying up to date with ECMAScript helps developers write **efficient**, **modern**, and **scalable** JavaScript! 🚀

[🔝 Back to Top](#table-of-contents)

---

# 🛠 Functional Programming

# What is Functional Programming and what are the features of JavaScript that makes it a candidate as a functional language?

- Functional programming is a programming paradigm where functions are treated as first-class citizens and emphasizes immutability and pure functions.
- JavaScript supports higher-order functions, closures, and first-class functions, making it suitable for functional programming.

## 🔹 What is Functional Programming?

Functional Programming (FP) is a programming paradigm that treats computation as the evaluation of **pure functions** and avoids changing state and mutable data. It emphasizes **declarative** code, immutability, and function composition.

FP is widely used in JavaScript to write **cleaner, more modular, and reusable code**.

---

## 🔹 Key Principles of Functional Programming

### 1️⃣ **Pure Functions**

A pure function is a function that:

- Given the same input, always returns the same output.
- Has **no side effects** (does not modify external state).

```javascript
// Pure Function Example
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Always returns 5
```

---

### 2️⃣ **Immutability**

Immutability means **data does not change** after it is created. Instead of modifying data, FP creates **new copies**.

```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // Creates a new array instead of modifying the original
console.log(newNumbers); // [1, 2, 3, 4]
```

---

### 3️⃣ **First-Class and Higher-Order Functions**

- **First-Class Functions**: Functions can be assigned to variables, passed as arguments, and returned from other functions.
- **Higher-Order Functions (HOFs)**: Functions that take other functions as arguments or return functions.

```javascript
// Higher-Order Function Example
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10
```

---

### 4️⃣ **Function Composition**

Combining multiple functions to create a new function.

```javascript
const add = (a) => a + 2;
const multiply = (a) => a * 3;
const composedFunction = (x) => multiply(add(x));
console.log(composedFunction(2)); // (2 + 2) * 3 = 12
```

---

### 5️⃣ **Avoiding Side Effects**

A side effect occurs when a function modifies something outside its scope.

```javascript
let counter = 0;
function increment() {
  counter++; // Side effect: modifies external state
}
```

A **pure function** would return a new value instead:

```javascript
function pureIncrement(count) {
  return count + 1;
}
console.log(pureIncrement(5)); // 6
```

---

## 🔹 Why is JavaScript a Functional Programming Language?

JavaScript supports several FP features that make it a **functional language**:

✅ **First-Class Functions** (functions are treated as values)

```javascript
const sayHello = () => console.log("Hello");
const greet = sayHello;
greet(); // "Hello"
```

✅ **Higher-Order Functions**

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

✅ **Immutability with Spread Operator**

```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4];
console.log(newArr); // [1, 2, 3, 4]
```

✅ **Pure Functions & Avoiding Side Effects**

```javascript
const square = (n) => n * n;
console.log(square(4)); // 16 (No side effects)
```

✅ **Function Composition**

```javascript
const greet = (name) => `Hello, ${name}`;
const exclaim = (sentence) => `${sentence}!`;
const excitedGreet = (name) => exclaim(greet(name));
console.log(excitedGreet("Alice")); // "Hello, Alice!"
```

---

## 🔹 Summary

- JavaScript **supports** functional programming paradigms.
- It allows **first-class and higher-order functions**.
- Encourages **immutability, pure functions, and function composition**.
- FP helps write **more modular, maintainable, and bug-free code**.

Functional Programming is a powerful way to improve **code clarity, reusability, and maintainability** in JavaScript. 🚀

[🔝 Back to Top](#table-of-contents)

# What are Higher Order Functions?

A **Higher-Order Function (HOF)** is a function that **takes another function as an argument or returns a function**. This allows for more flexible, reusable, and modular code.

---

## 🔹 Why Use Higher-Order Functions?

Higher-Order Functions make JavaScript code:

- **More concise and readable**
- **More reusable** (reduces code duplication)
- **More modular** (better separation of concerns)
- **Easier to debug and test**

---

## 🔹 Examples of Higher-Order Functions

### 1️⃣ **Passing Functions as Arguments**

```javascript
function operateOnNumbers(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(operateOnNumbers(5, 3, add)); // 8
```

Here, `operateOnNumbers` is a **higher-order function** because it takes another function (`add`) as an argument.

---

### 2️⃣ **Returning Functions from Functions**

```javascript
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10
```

Here, `createMultiplier` is a **higher-order function** because it **returns a function**.

---

### 3️⃣ **Built-in Higher-Order Functions in JavaScript**

JavaScript provides several built-in higher-order functions:

#### **`map()` - Transforming Arrays**

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

#### **`filter()` - Filtering Data**

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4, 6]
```

#### **`reduce()` - Accumulating Values**

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

#### **`forEach()` - Iterating Over Arrays**

```javascript
const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num * 2));
// Output: 2, 4, 6
```

---

## 🔹 Summary

- **Higher-Order Functions** take or return other functions.
- They improve **code reusability** and **modularity**.
- JavaScript includes built-in HOFs like **`map`**, **`filter`**, **`reduce`**, and **`forEach`**.

Mastering HOFs helps write **more efficient and cleaner** JavaScript code. 🚀

[🔝 Back to Top](#table-of-contents)

# Why are functions called First-class Objects?

In JavaScript, **functions are first-class objects** (also known as **first-class citizens**). This means that functions can:

✅ Be assigned to variables
✅ Be passed as arguments to other functions
✅ Be returned from functions
✅ Have properties and methods just like objects

This characteristic makes JavaScript a **powerful functional programming language**.

---

## 🔹 Why Are Functions First-Class Objects?

### 1️⃣ **Assigning Functions to Variables**

```javascript
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Alice")); // "Hello, Alice!"
```

Here, `greet` is a function stored in a variable, just like any other object.

---

### 2️⃣ **Passing Functions as Arguments**

```javascript
function executeFunction(fn, value) {
  return fn(value);
}

function square(x) {
  return x * x;
}

console.log(executeFunction(square, 4)); // 16
```

Functions can be **passed as arguments** to other functions, making them highly reusable.

---

### 3️⃣ **Returning Functions from Functions**

```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

Functions can **return other functions**, allowing for powerful abstractions.

---

### 4️⃣ **Functions as Object Properties (Methods)**

```javascript
const person = {
  name: "John",
  sayHello: function () {
    return `Hello, my name is ${this.name}`;
  },
};

console.log(person.sayHello()); // "Hello, my name is John"
```

Functions can be **stored as properties inside objects**, making them methods.

---

### 5️⃣ **Functions Having Properties and Methods**

```javascript
function example() {}
example.info = "This is a function property";
console.log(example.info); // "This is a function property"
```

Since functions are objects, they can have **properties and methods** like other objects.

---

## 🔹 Summary

- **Functions are first-class objects** in JavaScript.
- They can be **assigned to variables, passed as arguments, and returned from functions**.
- They **can have properties and methods** like other objects.
- This feature enables **functional programming paradigms** such as Higher-Order Functions.

Understanding first-class functions is essential for writing **flexible, modular, and reusable** JavaScript code! 🚀

[🔝 Back to Top](#table-of-contents)

---

## 📆 Array Methods (Polyfills)

# Implement the Array.prototype.map method by hand.

```javascript
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
```

[🔝 Back to Top](#table-of-contents)

# Implement the Array.prototype.filter method by hand.

```javascript
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
```

[🔝 Back to Top](#table-of-contents)

# Implement the Array.prototype.reduce method by hand.

```javascript
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
```

[🔝 Back to Top](#table-of-contents)

---

# 🏗️ Objects and Prototypes

# What is the prototype of an object?

In JavaScript, every object has an internal property called `[[Prototype]]`, which allows it to inherit properties and methods from another object. This forms the basis of **prototype-based inheritance**.

You can access an object's prototype using:

```javascript
console.log(Object.getPrototypeOf(obj));
```

Alternatively, in most environments, you can use:

```javascript
console.log(obj.__proto__);
```

---

## 🔹 How Prototypes Work

When you try to access a property on an object, JavaScript first looks for that property on the object itself. If it doesn’t find it, it looks up the prototype chain until it either finds the property or reaches the end of the chain (`null`).

### Example:

```javascript
const person = {
  greet: function () {
    console.log("Hello!");
  },
};

const user = Object.create(person); // `user` inherits from `person`
user.greet(); // Output: "Hello!"
```

Here, `user` does not have a `greet` method, but since its prototype (`person`) does, it can access `greet()` through prototype inheritance.

---

## 🔹 The Prototype Chain

The prototype chain is a series of linked objects. If a property or method is not found in an object, JavaScript looks for it in its prototype, then in the prototype’s prototype, and so on until it reaches `null`.

### Example:

```javascript
console.log(user.__proto__); // person
console.log(user.__proto__.__proto__); // Object prototype
console.log(user.__proto__.__proto__.__proto__); // null (end of chain)
```

---

## 🔹 Constructor Functions and Prototypes

Every function in JavaScript has a `prototype` property, which is used to create new objects when the function is used as a constructor.

### Example:

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, " + this.name);
};

const alice = new Person("Alice");
alice.sayHello(); // Output: "Hello, Alice"
```

Here, `alice` does not have a `sayHello` method, but its prototype (`Person.prototype`) does, so it can access it.

---

## 🔹 Changing an Object’s Prototype

You can change an object’s prototype dynamically using:

```javascript
Object.setPrototypeOf(obj, newPrototype);
```

Example:

```javascript
const newProto = {
  greet: function () {
    console.log("Hi!");
  },
};

Object.setPrototypeOf(user, newProto);
user.greet(); // Output: "Hi!"
```

---

## 🔹 `hasOwnProperty()` and Prototype Properties

To check whether an object has a property directly (not inherited), use `hasOwnProperty()`:

```javascript
console.log(user.hasOwnProperty("greet")); // false (inherited)
console.log(person.hasOwnProperty("greet")); // true (directly on `person`)
```

---

## 🔹 Summary Table

| Concept                             | Explanation                                                             |
| ----------------------------------- | ----------------------------------------------------------------------- |
| `[[Prototype]]`                     | Internal link to another object for inheritance                         |
| `Object.create(proto)`              | Creates an object with `proto` as its prototype                         |
| `Object.getPrototypeOf(obj)`        | Returns the prototype of an object                                      |
| `Object.setPrototypeOf(obj, proto)` | Sets a new prototype for an object                                      |
| `.prototype`                        | Property of functions used for inheritance in constructor functions     |
| `.hasOwnProperty(prop)`             | Checks if a property exists directly on an object, not in its prototype |

---

## 🔹 Conclusion

- Every object in JavaScript has a prototype.
- Prototypes enable inheritance, reducing memory usage by sharing methods across instances.
- The prototype chain allows properties/methods to be searched up the hierarchy.
- You can manipulate prototypes dynamically, but be cautious as it may lead to performance issues.

[🔝 Back to Top](#table-of-contents)

# How to create an object without a prototype?

By default, all JavaScript objects inherit properties and methods from `Object.prototype`. However, sometimes you may want to create a **pure object** without any inherited properties or prototype chain. This is useful when:

- You want to avoid prototype pollution.
- You need a truly **plain object** (e.g., for dictionary-like key-value storage).
- You want to improve performance by preventing unnecessary prototype lookups.

---

## 🔹 Using `Object.create(null)`

The recommended way to create an object **without a prototype** is by using `Object.create(null)`.

```javascript
const obj = Object.create(null);

console.log(obj); // {} (empty object without prototype)
console.log(Object.getPrototypeOf(obj)); // null
console.log(obj.toString); // undefined (since `toString` is from Object.prototype)
```

✅ The `obj` does **not** inherit from `Object.prototype`, meaning it has **no built-in methods** like `toString()`, `hasOwnProperty()`, etc.

---

## 🔹 Key Differences: Normal Object vs. `Object.create(null)`

```javascript
const normalObj = {};
const noProtoObj = Object.create(null);

console.log(normalObj.toString); // [Function: toString]
console.log(noProtoObj.toString); // undefined
```

| Feature             | `{}` (Normal Object)  | `Object.create(null)` |
| ------------------- | --------------------- | --------------------- |
| Prototype Exists?   | ✅ `Object.prototype` | ❌ No prototype       |
| `toString()` method | ✅ Inherited          | ❌ Undefined          |
| `hasOwnProperty()`  | ✅ Available          | ❌ Undefined          |

---

## 🔹 Common Use Cases

### 1️⃣ Creating a Pure Key-Value Map (Safer Than `{}`)

When using objects as **key-value stores**, a prototype-less object avoids accidental key conflicts with inherited properties.

```javascript
const data = Object.create(null);
data.username = "Alice";
data.age = 25;

data.toString = "Oops!"; // No conflict with Object.prototype.toString

console.log(data); // { username: 'Alice', age: 25, toString: 'Oops!' }
```

If you used `{}`, assigning `data.toString = "Oops!"` could cause issues since `toString` is a method in `Object.prototype`.

---

### 2️⃣ Preventing Prototype Pollution

If an attacker injects prototype-related properties like `__proto__`, it could cause security issues in some cases. Using `Object.create(null)` prevents this.

```javascript
const safeObject = Object.create(null);
safeObject.__proto__ = "Hacked!";

console.log(safeObject.__proto__); // "Hacked!" (but does NOT affect prototype chain)
console.log(Object.getPrototypeOf(safeObject)); // null (still safe)
```

---

## 🔹 Alternative: `Object.setPrototypeOf`

Another way (less common) is to manually set an object’s prototype to `null` after creation:

```javascript
const obj = {};
Object.setPrototypeOf(obj, null);

console.log(Object.getPrototypeOf(obj)); // null
```

⚠️ **Note:** `Object.create(null)` is preferred since it avoids unnecessary prototype creation in the first place.

---

## 🔹 Summary

✅ `Object.create(null)` creates an object without a prototype.
✅ Such objects **do not inherit** from `Object.prototype`.
✅ Useful for **safe key-value stores** and **security** purposes.
✅ Prevents issues like **prototype pollution**.
✅ Unlike `{}`, these objects **lack built-in methods** (`toString`, `hasOwnProperty`, etc.).

[🔝 Back to Top](#table-of-contents)

# Why does it return false when comparing two similar objects in JavaScript?

- Objects are compared by reference, not value.

**Example:**

```javascript
let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 === obj2); // Output: false
```

[🔝 Back to Top](#table-of-contents)

# What are the ways of making objects in JavaScript?

**Explanation:**
JavaScript provides multiple ways to create objects. Below are the different approaches with examples:

## 1. Object Literals

This is the simplest and most commonly used way to create objects in JavaScript.

```javascript
const person = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is Alice
```

## 2. Using the `new Object()` Constructor

This approach uses JavaScript's built-in `Object` constructor.

```javascript
const person = new Object();
person.name = "Bob";
person.age = 30;
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet(); // Output: Hello, my name is Bob
```

## 3. Using a Constructor Function

A constructor function allows creating multiple objects with the same structure.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const person1 = new Person("Charlie", 35);
person1.greet(); // Output: Hello, my name is Charlie
```

## 4. Using the `Object.create()` Method

The `Object.create()` method creates an object using a prototype object.

```javascript
const personPrototype = {
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const person2 = Object.create(personPrototype);
person2.name = "David";
person2.greet(); // Output: Hello, my name is David
```

## 5. Using ES6 Classes

Classes provide a more structured and modern way to create objects in JavaScript.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person3 = new Person("Emma", 28);
person3.greet(); // Output: Hello, my name is Emma
```

## 6. Using Factory Functions

A factory function returns an object without using the `new` keyword.

```javascript
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
}

const person4 = createPerson("Frank", 40);
person4.greet(); // Output: Hello, my name is Frank
```

## Conclusion

Each method has its use case:

- **Object literals** are best for simple objects.
- **`new Object()`** is rarely used but provides flexibility.
- **Constructor functions** allow object instantiation before ES6.
- **`Object.create()`** is useful for prototypal inheritance.
- **Classes** provide an OOP-friendly syntax.
- **Factory functions** allow flexible object creation without `new`.

Understanding these approaches is essential for JavaScript developers, especially for building scalable applications.

[🔝 Back to Top](#table-of-contents)

# What's the difference between Object.seal and Object.freeze methods?

**Explanation:**

- `Object.seal`: Prevents adding/removing properties.
- `Object.freeze`: Prevents adding/removing/modifying properties.

## Object.seal()

The `Object.seal()` method prevents new properties from being added or existing properties from being deleted from an object. However, the values of existing properties can still be modified.

### Characteristics:

- Cannot add new properties.
- Cannot delete existing properties.
- Can modify existing property values.
- The object remains extensible but with limited modifications.

### Example:

```javascript
const user = { name: "Alice", age: 25 };
Object.seal(user);

user.age = 30; // ✅ Allowed
user.city = "New York"; // ❌ Not allowed (Cannot add new properties)
delete user.name; // ❌ Not allowed (Cannot delete properties)

console.log(user); // { name: "Alice", age: 30 }
```

## Object.freeze()

The `Object.freeze()` method prevents new properties from being added, existing properties from being deleted, and existing properties from being modified. It makes the object completely immutable.

### Characteristics:

- Cannot add new properties.
- Cannot delete existing properties.
- Cannot modify existing property values.
- The object becomes completely read-only.

### Example:

```javascript
const config = { mode: "dark", version: 1.0 };
Object.freeze(config);

config.mode = "light"; // ❌ Not allowed (Cannot modify properties)
config.theme = "blue"; // ❌ Not allowed (Cannot add new properties)
delete config.version; // ❌ Not allowed (Cannot delete properties)

console.log(config); // { mode: "dark", version: 1.0 }
```

## Key Differences

| Feature              | `Object.seal()`                                                    | `Object.freeze()`       |
| -------------------- | ------------------------------------------------------------------ | ----------------------- |
| Add new properties   | ❌ Not Allowed                                                     | ❌ Not Allowed          |
| Delete properties    | ❌ Not Allowed                                                     | ❌ Not Allowed          |
| Modify properties    | ✅ Allowed                                                         | ❌ Not Allowed          |
| Object extensibility | 🚫 Prevents property addition and deletion but allows modification | ❌ Completely immutable |

## When to Use

- **Use `Object.seal()`** when you want to allow modifications to existing properties but prevent new properties or deletion.
- **Use `Object.freeze()`** when you want to make the object completely immutable and prevent any changes.

### Summary

- `Object.seal()` allows modification of properties but prevents addition and deletion.
- `Object.freeze()` makes the object completely immutable by preventing any changes.

Both methods are useful when you need to enforce strict control over object modifications in JavaScript.

## JavaScript's ALL Object Property Manipulation Methods

find more methodes here

[🔝 Back to Top](#table-of-contents)

# 📦 ES6+ Features

# What are the new features in ES6 or ECMAScript 2015 till 2025?

## 🔹 ECMAScript 2015 (ES6)

### 1️⃣ **Let & Const** (Block-scoped variables)

```javascript
let a = 10;
const b = 20;
```

### 2️⃣ **Arrow Functions**

```javascript
const add = (x, y) => x + y;
console.log(add(2, 3)); // 5
```

### 3️⃣ **Template Literals**

```javascript
const name = "Alice";
console.log(`Hello, ${name}!`); // Hello, Alice!
```

### 4️⃣ **Destructuring**

```javascript
const obj = { x: 10, y: 20 };
const { x, y } = obj;
console.log(x, y); // 10 20
```

### 5️⃣ **Spread & Rest Operators**

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

---

## 🔹 ECMAScript 2016 (ES7)

### 1️⃣ **Array.prototype.includes()**

```javascript
console.log([1, 2, 3].includes(2)); // true
```

### 2️⃣ **Exponentiation Operator (`**`)\*\*

```javascript
console.log(2 ** 3); // 8
```

---

## 🔹 ECMAScript 2017 (ES8)

### 1️⃣ **Async/Await**

```javascript
async function fetchData() {
  return await Promise.resolve("Data loaded");
}
fetchData().then(console.log); // Data loaded
```

### 2️⃣ **Object.values() & Object.entries()**

```javascript
const obj = { a: 1, b: 2 };
console.log(Object.values(obj)); // [1, 2]
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]
```

---

## 🔹 ECMAScript 2018 (ES9)

### 1️⃣ **Rest/Spread with Objects**

```javascript
const person = { name: "John", age: 25 };
const { age, ...rest } = person;
console.log(rest); // { name: 'John' }
```

### 2️⃣ **Promise.prototype.finally()**

```javascript
fetch("https://api.example.com")
  .then((response) => console.log(response))
  .finally(() => console.log("Done"));
```

---

## 🔹 ECMAScript 2019 (ES10)

### 1️⃣ **Array.flat()**

```javascript
console.log([1, [2, [3]]].flat(2)); // [1, 2, 3]
```

### 2️⃣ **Object.fromEntries()**

```javascript
const entries = [
  ["name", "Alice"],
  ["age", 30],
];
console.log(Object.fromEntries(entries)); // { name: 'Alice', age: 30 }
```

---

## 🔹 ECMAScript 2020 (ES11)

### 1️⃣ **Optional Chaining (`?.`)**

```javascript
const user = {};
console.log(user?.address?.city); // undefined
```

### 2️⃣ **Nullish Coalescing (`??`)**

```javascript
const value = null ?? "default";
console.log(value); // default
```

---

## 🔹 ECMAScript 2021 (ES12)

### 1️⃣ **String.replaceAll()**

```javascript
console.log("Hello Hello".replaceAll("Hello", "Hi")); // Hi Hi
```

### 2️⃣ **Promise.any()**

```javascript
Promise.any([Promise.reject("Error"), Promise.resolve("Success")]).then(
  console.log
); // Success
```

---

## 🔹 ECMAScript 2022 (ES13)

### 1️⃣ **Class Fields & Static Initialization Blocks**

```javascript
class Person {
  name = "John";
  static role = "Admin";
}
console.log(new Person().name, Person.role);
```

### 2️⃣ **Error Cause (`cause` property)**

```javascript
try {
  throw new Error("Something went wrong", { cause: "Network issue" });
} catch (e) {
  console.log(e.cause); // Network issue
}
```

---

## 🔹 ECMAScript 2023 (ES14)

### 1️⃣ **Array.findLast() & Array.findLastIndex()**

```javascript
console.log([1, 2, 3, 4].findLast((n) => n % 2 === 0)); // 4
```

### 2️⃣ **Symbol.prototype.description**

```javascript
const sym = Symbol("desc");
console.log(sym.description); // desc
```

---

## 🔹 ECMAScript 2024 (ES15) & ECMAScript 2025 (ES16)

🚀 **Expected Features**:
1️⃣ **Immutable Arrays**: Prevent modifications to arrays.
2️⃣ **Pipeline Operator (`|>`):** Enables function composition.
3️⃣ **New Type Annotations**: Support for static type checking.
4️⃣ **New JSON.parse() Improvements**: Enhanced parsing performance.

---

## ✅ Summary

JavaScript continues to evolve with new features every year, making it more powerful and developer-friendly!

[🔝 Back to Top](#table-of-contents)

# What's the difference between var, let and const keywords?

- `var`: Function-scoped, hoisted, can be redeclared.
- `let`: Block-scoped, not hoisted.
- `const`: Block-scoped, immutable references.

JavaScript provides three ways to declare variables: `var`, `let`, and `const`. Understanding their differences is essential for writing clean and predictable code.

---

## 1️⃣ **`var` - Function Scoped Variable**

### ✅ Features:

✔️ Function-scoped (NOT block-scoped).<br>
✔️ Can be **redeclared** and **reassigned**.<br>
✔️ Gets **hoisted** but initialized with `undefined`.<br>
✔️ Can be accessed before declaration (due to hoisting).

### ⚡ Example:

```javascript
console.log(x); // undefined (Hoisting)
var x = 10;
console.log(x); // 10

var x = 20; // Redeclaration allowed
console.log(x); // 20
```

### 🚨 Problem with `var`:

```javascript
if (true) {
  var y = 50;
}
console.log(y); // 50 (Leaked outside block!)
```

Since `var` is function-scoped, it **ignores block scope**, leading to potential bugs.

---

## 2️⃣ **`let` - Block Scoped Variable**

### ✅ Features:

✔️ **Block-scoped** (confined to `{}` blocks).<br>
✔️ Can be **reassigned**, but **not redeclared** in the same scope.<br>
✔️ Gets **hoisted**, but not initialized (ReferenceError if accessed before declaration).

### ⚡ Example:

```javascript
if (true) {
  let a = 30;
  console.log(a); // 30
}
console.log(a); // ❌ ReferenceError (block-scoped)
```

### 🚨 Error on Redeclaration:

```javascript
let b = 100;
let b = 200; // ❌ SyntaxError: Identifier 'b' has already been declared
```

---

## 3️⃣ **`const` - Block Scoped, Immutable Reference**

### ✅ Features:

✔️ **Block-scoped** (like `let`).<br>
✔️ **Cannot be reassigned** (immutable reference, but object properties are mutable).<br>
✔️ Must be **initialized** at the time of declaration.<br>
✔️ Hoisted, but not initialized.

### ⚡ Example:

```javascript
const PI = 3.14;
PI = 3.1415; // ❌ TypeError: Assignment to constant variable
```

### 🚨 Object Mutation Allowed:

```javascript
const obj = { name: "John" };
obj.name = "Doe"; // ✅ Allowed!
console.log(obj.name); // "Doe"
```

While `const` prevents reassignment, **object properties can still be modified**.

---

## 🔹 Key Differences: Summary Table

| Feature         | `var`                               | `let`                        | `const`                      |
| --------------- | ----------------------------------- | ---------------------------- | ---------------------------- |
| Scope           | Function                            | Block                        | Block                        |
| Hoisting        | ✅ Yes (initialized to `undefined`) | ✅ Yes (but not initialized) | ✅ Yes (but not initialized) |
| Redeclaration   | ✅ Yes                              | ❌ No                        | ❌ No                        |
| Reassignment    | ✅ Yes                              | ✅ Yes                       | ❌ No                        |
| Must Initialize | ❌ No                               | ❌ No                        | ✅ Yes                       |

---

## 🔹 Best Practices

✔️ **Use `const` by default**. <br>
✔️ **Use `let` if reassignment is needed**. <br>
✔️ **Avoid `var` to prevent scoping issues**.

By following these best practices, you ensure more predictable and bug-free JavaScript code! 🚀

[🔝 Back to Top](#table-of-contents)

# What are Arrow functions?

- Concise syntax for writing functions.
- Does not have its own `this`.

Arrow functions are a concise syntax for writing functions in JavaScript, introduced in **ES6**. They provide a more readable and shorter way to define functions compared to the traditional `function` keyword.

### Syntax:

```javascript
const functionName = (param1, param2) => {
  // Function body
};
```

---

## 🔹 Key Features of Arrow Functions

### 1️⃣ **Shorter Syntax**

```javascript
// Traditional function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// Arrow function
const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3)); // 5
```

💡 **If there is only one expression, the `return` keyword can be omitted.**

---

### 2️⃣ **Implicit Return**

If an arrow function has only **one statement**, it implicitly returns the result without using `return`.

```javascript
const square = (x) => x * x;
console.log(square(4)); // 16
```

---

### 3️⃣ **Lexical `this` Binding**

Unlike traditional functions, arrow functions **do not have their own `this` value**. Instead, they inherit `this` from the surrounding lexical scope.

#### Example: `this` in Regular Function vs Arrow Function

```javascript
const obj = {
  value: 10,
  traditionalFunc: function () {
    console.log(this.value); // 10
  },
  arrowFunc: () => {
    console.log(this.value); // undefined (inherits `this` from global scope)
  },
};

obj.traditionalFunc(); // 10
obj.arrowFunc(); // undefined
```

💡 **Arrow functions inherit `this` from their enclosing scope. They are great for maintaining `this` inside callbacks.**

---

### 4️⃣ **No `arguments` Object**

Arrow functions **do not have their own `arguments` object**.

```javascript
function traditional() {
  console.log(arguments); // Works: Arguments(3) [1, 2, 3]
}

const arrow = () => {
  console.log(arguments); // ❌ Error: arguments is not defined
};

traditional(1, 2, 3);
arrow(1, 2, 3);
```

💡 **Use rest parameters (`...args`) instead in arrow functions:**

```javascript
const arrow = (...args) => {
  console.log(args); // ✅ [1, 2, 3]
};
arrow(1, 2, 3);
```

---

### 5️⃣ **Cannot Be Used as Constructors**

Arrow functions **cannot** be used with `new` because they do not have their own `this`.

```javascript
const Person = (name) => {
  this.name = name; // ❌ Error: Arrow functions don’t have their own `this`
};
const p = new Person("John"); // TypeError
```

💡 **Use regular functions for constructor functions.**

---

### 6️⃣ **Cannot Use `bind`, `call`, or `apply` to Change `this`**

Arrow functions always take `this` from their surrounding context, so methods like `bind`, `call`, and `apply` **have no effect**.

```javascript
const obj = {
  num: 42,
  arrowFunc: () => console.log(this.num),
};

const newObj = { num: 100 };
obj.arrowFunc.call(newObj); // undefined (ignores `call`)
```

💡 **Use regular functions when you need explicit control over `this`.**

---

## 🔹 When to Use Arrow Functions?

✅ Best for **short** functions
✅ Great for **callbacks** and **array methods**
✅ Useful for maintaining **lexical `this`** in class methods or closures
❌ **Not** suitable for methods in objects (because of `this` behavior)
❌ **Not** suitable for constructor functions

---

## 🔹 Summary

✅ Arrow functions provide a **shorter syntax** for defining functions.
✅ They have **implicit return** when using a single expression.
✅ They **inherit `this`** from their lexical scope (they don’t have their own `this`).
✅ They **do not have `arguments`**, `prototype`, or `new`.
✅ **Best used** for callbacks, array methods, and concise function definitions.

[🔝 Back to Top](#table-of-contents)

# What are Classes and Constructors?

Classes in JavaScript are a blueprint for creating objects. They allow you to define object properties and behaviors in a structured way. JavaScript classes were introduced in **ES6** to provide a more structured and OOP-like syntax over the traditional prototype-based inheritance.

### Syntax of a Class

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

## Understanding Constructors

The `constructor` method is a special method in a class that gets executed when an object is instantiated from the class using the `new` keyword.

### Key Points:

- The `constructor` initializes the object's properties.
- You can pass arguments to the constructor when creating an object.
- If no `constructor` is defined, JavaScript provides a default empty constructor.

## Class Inheritance

JavaScript allows classes to inherit properties and methods from another class using the `extends` keyword.

```javascript
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Calls the constructor of the parent class
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} works as a ${this.jobTitle}.`);
  }
}

const emp1 = new Employee("Bob", 25, "Software Engineer");
emp1.greet(); // Inherited method from Person
emp1.work(); // Output: Bob works as a Software Engineer.
```

## Prototypes and Performance Considerations

Under the hood, JavaScript classes use **prototypes**. When you define a method inside a class, it is added to the class's prototype, ensuring that all instances share the same method reference instead of duplicating it in memory.

```javascript
console.log(Object.getPrototypeOf(emp1) === Employee.prototype); // true
```

Methods defined inside the `constructor` are re-created for each instance, which can lead to performance inefficiencies.

```javascript
class BadPractice {
  constructor() {
    this.sayHello = function () {
      console.log("Hello");
    };
  }
}

const obj1 = new BadPractice();
const obj2 = new BadPractice();
console.log(obj1.sayHello === obj2.sayHello); // false (bad practice)
```

## Static Methods

Static methods are defined using the `static` keyword and are called on the class itself, not on instances of the class.

```javascript
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(5, 3)); // Output: 8
```

## Private Fields and Methods

JavaScript now supports private fields and methods using the `#` symbol. These cannot be accessed outside the class.

```javascript
class BankAccount {
  #balance; // Private property

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
  }
}

const account = new BankAccount("John", 1000);
account.deposit(500);
// account.#balance; // ❌ Error: Private field cannot be accessed
```

## Getters and Setters

You can define getter and setter methods to control access to properties.

```javascript
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name cannot be empty!");
    }
  }
}

const user1 = new User("Charlie");
console.log(user1.name); // Output: CHARLIE
user1.name = "David";
console.log(user1.name); // Output: DAVID
```

## Mixins: Extending Functionality Without Inheritance

Sometimes, you want to add functionality to multiple classes without using class inheritance. **Mixins** allow you to do this by copying methods into a class prototype.

```javascript
let sayHiMixin = {
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  },
};

Object.assign(Person.prototype, sayHiMixin);

const person2 = new Person("Eve", 40);
person2.sayHi(); // Output: Hi, my name is Eve
```

## Real-world Use Cases

- **React Components**: Modern JavaScript frameworks like React heavily use classes for component-based development.
- **Data Models**: Classes help organize and model complex data structures in applications.
- **Encapsulation & Security**: Private fields ensure data security and encapsulation within an application.

## Summary

- **Classes** provide a structured way to define objects in JavaScript.
- **Constructors** initialize object properties when a new instance is created.
- **Inheritance** allows one class to extend another, reusing properties and methods.
- **Prototype-based methods** improve memory efficiency.
- **Static methods** belong to the class, not instances.
- **Private fields and methods** (`#`) restrict access within the class.
- **Getters and Setters** provide controlled access to object properties.
- **Mixins** help in reusing methods across multiple classes.

JavaScript classes enhance code readability and maintainability, making object-oriented programming easier and more powerful.

<!-- TODO: class - privet, public, static etc -->

DIff b/w normal function and constructor function

Check OBJ properties like, freez

[🔝 Back to Top](#table-of-contents)

# What are Template Literals?

Template literals are a feature in JavaScript introduced in **ES6 (ECMAScript 2015)** that provide an improved way to handle strings. They allow embedding expressions, multiline strings, and easier string concatenation compared to traditional string methods.

Template literals use **backticks (` `)** instead of single (`'`) or double (`"`) quotes.

## Basic Syntax

```javascript
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!
```

## Features of Template Literals

### 1. **String Interpolation** (Embedding Expressions)

Template literals support embedding JavaScript expressions inside `${}`.

```javascript
const a = 10;
const b = 20;
console.log(`The sum of ${a} and ${b} is ${a + b}`);
// Output: The sum of 10 and 20 is 30
```

### 2. **Multiline Strings**

Unlike traditional strings, template literals allow multiline strings without needing `\n` or concatenation.

```javascript
const multiLineString = `This is a multiline
string using template literals.`;
console.log(multiLineString);
/* Output:
This is a multiline
string using template literals.
*/
```

### 3. **Tagged Templates**

Tagged templates allow parsing template literals with custom functions.

```javascript
function highlight(strings, ...values) {
  return strings.reduce(
    (acc, str, index) =>
      acc + str + (values[index] ? `**${values[index]}**` : ""),
    ""
  );
}

const user = "John";
const age = 25;
const message = highlight`User: ${user}, Age: ${age}`;
console.log(message);
// Output: User: **John**, Age: **25**
```

### 4. **Expression Evaluation**

You can perform calculations or invoke functions inside template literals.

```javascript
const price = 100;
const discount = 10;
const finalPrice = `Final Price: $${price - discount}`;
console.log(finalPrice); // Output: Final Price: $90
```

### 5. **Using Template Literals for HTML Templates**

Template literals are useful in dynamically generating HTML strings.

```javascript
const title = "Welcome";
const html = `
    <h1>${title}</h1>
    <p>This is a dynamic paragraph.</p>
`;
console.log(html);
```

## Benefits of Template Literals

- **Improves Readability**: No need for concatenation (`+`) for embedding variables.
- **Easier Multiline Handling**: Readable and maintainable multiline strings.
- **Better Expression Handling**: Directly embed expressions and function calls.
- **Powerful String Manipulation**: Tagged templates allow advanced parsing and transformations.

## Conclusion

Template literals simplify string manipulation in JavaScript, making code more readable and maintainable. They are widely used in modern JavaScript applications, including UI frameworks like React and template-based rendering.

[🔝 Back to Top](#table-of-contents)

# What is Object Destructuring?

Object destructuring is a convenient way to extract multiple properties from an object and assign them to variables in a single statement. It helps in writing cleaner and more readable code by avoiding repetitive object property references.

## Basic Syntax

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const { name, age, city } = person;

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York
```

## Using Default Values

If a property does not exist in the object, you can set a default value.

```javascript
const person = { name: "Alice", age: 25 };
const { name, age, city = "Unknown" } = person;

console.log(city); // Output: Unknown
```

## Renaming Variables

You can rename variables while destructuring.

```javascript
const user = { id: 101, username: "devAlice" };
const { username: userName } = user;

console.log(userName); // Output: devAlice
```

## Nested Object Destructuring

If an object has nested properties, you can destructure them as well.

```javascript
const employee = {
  name: "Bob",
  address: {
    city: "Los Angeles",
    zip: "90001",
  },
};

const {
  name,
  address: { city, zip },
} = employee;
console.log(city); // Output: Los Angeles
```

## Destructuring in Function Parameters

You can use destructuring in function parameters to extract specific values from an object argument.

```javascript
function displayUser({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

const user = { name: "Charlie", age: 28 };
displayUser(user); // Output: Charlie is 28 years old.
```

## Rest Operator with Destructuring

The rest operator (`...`) can be used to collect remaining properties into a new object.

```javascript
const car = { brand: "Toyota", model: "Camry", year: 2022, color: "Blue" };
const { brand, model, ...rest } = car;

console.log(rest); // Output: { year: 2022, color: "Blue" }
```

## Summary

- Object destructuring simplifies the process of extracting values from objects.
- Default values can be assigned if a property is missing.
- Properties can be renamed while destructuring.
- Nested properties can be accessed directly.
- Function parameters can be destructured for easier argument handling.
- The rest operator helps in collecting remaining properties.

Object destructuring is a powerful feature in JavaScript that improves code readability and efficiency.

[🔝 Back to Top](#table-of-contents)

# What are ES6 Modules?

ES6 Modules (ECMAScript 2015) allow JavaScript to be split into reusable files. This modular approach makes it easier to maintain and organize code, preventing global scope pollution.

### Key Features of ES6 Modules:

1. **Encapsulation**: Variables and functions inside a module are not accessible outside unless explicitly exported.
2. **Reusability**: Code can be shared across multiple files.
3. **Lazy Loading**: Modules are loaded only when needed, improving performance.
4. **Strict Mode by Default**: ES6 modules automatically use `"use strict"`.
5. **Static Structure**: Imports and exports are resolved at compile-time.

## Exporting from a Module

To share code between modules, we use the `export` keyword.

### Named Export

Named exports allow multiple exports per file.

```javascript
// mathUtils.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

Importing named exports:

```javascript
// main.js
import { add, multiply } from "./mathUtils.js";
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
```

### Default Export

Each module can have only one default export.

```javascript
// greeting.js
export default function greet(name) {
  return `Hello, ${name}!`;
}
```

Importing a default export:

```javascript
// main.js
import greet from "./greeting.js";
console.log(greet("Alice")); // Hello, Alice!
```

## Importing Everything from a Module

```javascript
import * as math from "./mathUtils.js";
console.log(math.add(4, 5)); // 9
console.log(math.multiply(4, 5)); // 20
```

## Dynamic Imports (Lazy Loading)

Dynamic imports use `import()` to load modules asynchronously.

```javascript
import("./mathUtils.js").then((module) => {
  console.log(module.add(3, 4));
});
```

## Module Caching

Once a module is imported, it is cached and subsequent imports reuse the cached version.

### Differences Between ES6 Modules and CommonJS

| Feature         | ES6 Modules              | CommonJS (Node.js)       |
| --------------- | ------------------------ | ------------------------ |
| Syntax          | `import/export`          | `require/module.exports` |
| Execution       | Statically analyzed      | Dynamically executed     |
| Scope           | File-based               | Module-based             |
| `this` Behavior | `undefined` in top-level | `module.exports`         |

### Conclusion

ES6 modules help in structuring large applications by providing a clean, maintainable, and efficient way to manage dependencies. They are widely used in modern JavaScript development, including React, Vue, and other frameworks.

[🔝 Back to Top](#table-of-contents)

# What is the Set object, Map, weak map and how does it work?

## 1. Set Object

### What is a Set?

A `Set` is a built-in JavaScript object that stores **unique values** of any type. It does not allow duplicate values.

### Creating a Set

```javascript
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, will be ignored
mySet.add("Hello");
mySet.add({ name: "John" });
console.log(mySet); // Output: Set { 1, 2, 'Hello', { name: 'John' } }
```

### Key Features

- Stores unique values (no duplicates allowed)
- Can hold any data type
- Iterates in insertion order

### Common Methods

| Method          | Description                     |
| --------------- | ------------------------------- |
| `add(value)`    | Adds a new value to the Set     |
| `delete(value)` | Removes a value from the Set    |
| `has(value)`    | Checks if a value exists        |
| `clear()`       | Removes all values from the Set |
| `size`          | Returns the number of elements  |

### Iterating a Set

```javascript
const numbers = new Set([10, 20, 30, 40]);

// Using forEach
numbers.forEach((value) => console.log(value));

// Using for..of
for (let value of numbers) {
  console.log(value);
}
```

---

## 2. Map Object

### What is a Map?

A `Map` is a collection of **key-value pairs**, where keys can be of any data type.

### Creating a Map

```javascript
const myMap = new Map();
myMap.set("name", "Alice");
myMap.set(1, "Number One");
myMap.set(true, "Boolean True");
console.log(myMap);
```

### Key Features

- Maintains key-value pairs
- Keys can be any data type (objects, arrays, functions, etc.)
- Preserves insertion order

### Common Methods

| Method            | Description                                 |
| ----------------- | ------------------------------------------- |
| `set(key, value)` | Adds a key-value pair to the Map            |
| `get(key)`        | Retrieves the value associated with the key |
| `has(key)`        | Checks if a key exists                      |
| `delete(key)`     | Removes a key-value pair                    |
| `clear()`         | Removes all key-value pairs                 |
| `size`            | Returns the number of key-value pairs       |

### Iterating a Map

```javascript
const users = new Map([
  [1, "John"],
  [2, "Alice"],
  [3, "Bob"],
]);

// Loop through keys and values
for (let [key, value] of users) {
  console.log(`${key} -> ${value}`);
}

// Using forEach
users.forEach((value, key) => {
  console.log(key, value);
});
```

---

## 3. WeakMap

### What is a WeakMap?

A `WeakMap` is similar to a `Map`, but with **weakly held keys**, meaning:

- Keys must be **objects** (not primitive values)
- Entries are **garbage collected** when keys become unreachable
- Does not have `size`, `clear()`, or iterable methods

### Creating a WeakMap

```javascript
const weakMap = new WeakMap();
let obj = { id: 1 };
weakMap.set(obj, "User Data");
console.log(weakMap.get(obj)); // Output: User Data

obj = null; // The entry is removed automatically
```

### Key Features

- Keys must be objects
- Does not prevent garbage collection
- No iteration methods (`forEach`, `keys()`, `values()`, etc.)

### Common Methods

| Method            | Description                         |
| ----------------- | ----------------------------------- |
| `set(key, value)` | Adds a key-value pair               |
| `get(key)`        | Retrieves value associated with key |
| `has(key)`        | Checks if a key exists              |
| `delete(key)`     | Removes a key-value pair            |

---

## Differences Between Set, Map, and WeakMap

| Feature            | Set    | Map                       | WeakMap      |
| ------------------ | ------ | ------------------------- | ------------ |
| Key Type           | N/A    | Any                       | Objects only |
| Value Uniqueness   | Unique | Can have duplicate values | N/A          |
| Iteration          | Yes    | Yes                       | No           |
| Garbage Collection | No     | No                        | Yes          |
| `size` property    | Yes    | Yes                       | No           |

---

## When to Use Set, Map, and WeakMap

- **Use `Set`** when you need a collection of unique values.
- **Use `Map`** when you need key-value storage with any key type.
- **Use `WeakMap`** when you need key-value storage with automatic garbage collection.

---

### Conclusion

JavaScript provides `Set`, `Map`, and `WeakMap` to manage collections effectively. `Set` ensures uniqueness, `Map` allows flexible key-value storage, and `WeakMap` provides efficient memory management. Understanding their differences helps in writing efficient JavaScript code.

[🔝 Back to Top](#table-of-contents)

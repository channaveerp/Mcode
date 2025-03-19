Prepare here: https://devtools.tech/lists/all
Namaste JS:- https://alok722.github.io/namaste-javascript-notes/dist/lectures.html;

## 1. What's the difference between undefined and null?

**Explanation:**

- `undefined` means a variable has been declared but not assigned a value.
- `null` is an assigned value representing no value.

**Example:**

```javascript
let a;
console.log(a); // Output: undefined
let b = null;
console.log(b); // Output: null
```

## 2. What does the `&&` operator do?

**Explanation:**

- Returns the first falsy value or the last truthy value in a chain of expressions.

**Example:**

```javascript
console.log(true && false); // Output: false
console.log(1 && "hello"); // Output: hello
```

## 3. What does the `||` operator do?

**Explanation:**

- Returns the first truthy value or the last falsy value in a chain of expressions.

**Example:**

```javascript
console.log(false || true); // Output: true
console.log(0 || "hello"); // Output: hello
```

## 4. Is using the `+` or unary plus operator the fastest way to convert a string to a number?

**Explanation:**

- Yes, it is a concise and efficient way to convert strings to numbers.

**Example:**

```javascript
let str = "42";
console.log(+str); // Output: 42
```

## 5. What is the DOM?

**Explanation:**

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

## 6. What is Event Propagation?

### **Definition**

Event Propagation determines how an event travels through the DOM when triggered. It occurs in **three phases**:

1. **Capturing Phase** (Event travels from root to the target element)
2. **Target Phase** (Event reaches the target element)
3. **Bubbling Phase** (Event travels back from the target element to the root)

## 6A. What is Event Deligation?

### **Definition**

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

## 7. What's Event Bubbling?

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

## 8. What's Event Capturing?

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

---

## 9. What's the difference between `event.preventDefault()` and `event.stopPropagation()` methods?

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

## 10. How to know if the `event.preventDefault()` method was used in an element?

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

## 11. Why does this code `obj.someprop.x` throw an error?

**Explanation:**

- Accessing `x` assumes `someprop` is an object, but if `someprop` is `undefined` or `null`, it throws an error.

## 12. What is `event.target`?

**Explanation:**

- Refers to the element that triggered the event.

## 13. What is `event.currentTarget`?

**Explanation:**

- Refers to the element to which the event handler is attached.

## 14. What's the difference between `==` and `===`?

**Explanation:**

- `==`: Compares values, allowing type coercion.
- `===`: Compares both value and type.

## 15. Why does it return false when comparing two similar objects in JavaScript?

**Explanation:**

- Objects are compared by reference, not value.

**Example:**

```javascript
let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 === obj2); // Output: false
```

## 16. What does the `!!` operator do?

**Explanation:**

- Converts a value to its boolean equivalent.

**Example:**

```javascript
console.log(!!"hello"); // Output: true
```

## 17. How to evaluate multiple expressions in one line?

**Example:**

```javascript
let result = (console.log("Hello"), 2 + 2);
console.log(result); // Output: 4
```

## 18. What is Hoisting?

**Explanation:**

- Variables and function declarations are moved to the top of their scope during execution.

**Example:**

```javascript
console.log(a); // Output: undefined
var a = 5;
```

## 19. What is Scope?

**Explanation:**

- Scope defines the accessibility of variables.
- Types: Global, Local, and Block scope.

## 20. What are Closures?

**Explanation:**

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

## 21. What are the falsy values in JavaScript?

**Explanation:**

- `false`, `0`, `""`, `null`, `undefined`, `NaN`.

## 22. How to check if a value is falsy?

**Example:**

```javascript
if (!value) {
  console.log("Falsy value");
}
```

## 23. What does "use strict" do?

**Explanation:**

- Enforces stricter parsing and error handling.

## 24. What's the value of `this` in JavaScript?

**Explanation:**

- Depends on the context (global, object, function).

## 25. What is the prototype of an object?

**Explanation:**

- An object from which other objects inherit properties.

## 26. What is an IIFE, what is the use of it?

**Explanation:**

- Immediately Invoked Function Expression.

**Example:**

```javascript
(function () {
  console.log("IIFE");
})();
```

## 27. What is the use of Function.prototype.apply method?

**Explanation:**

- Calls a function with a given `this` and arguments array.

## 28. What is the use of Function.prototype.call method?

**Explanation:**

- Calls a function with a given `this` and arguments individually.

## 29. What's the difference between Function.prototype.apply and Function.prototype.call?

**Explanation:**

- `apply`: Accepts arguments as an array.
- `call`: Accepts arguments individually.

## 30. What is the usage of Function.prototype.bind?

**Explanation:**

- Returns a new function with `this` and arguments bound.

**Example:**

```javascript
let obj = { a: 10 };
function print() {
  console.log(this.a);
}
const boundFunc = print.bind(obj);
boundFunc(); // Output: 10
```

## 31. What is Functional Programming and what are the features of JavaScript that makes it a candidate as a functional language?

**Explanation:**

- Functional programming is a programming paradigm where functions are treated as first-class citizens and emphasizes immutability and pure functions.
- JavaScript supports higher-order functions, closures, and first-class functions, making it suitable for functional programming.

## 32. What are Higher Order Functions?

**Explanation:**

- Functions that take other functions as arguments or return functions as their result.

**Example:**

```javascript
function higherOrder(fn) {
  return function (x) {
    return fn(x) * 2;
  };
}
```

## 33. Why are functions called First-class Objects?

**Explanation:**

- Functions in JavaScript can be assigned to variables, passed as arguments, and returned from other functions, like any other object.

## 34. Implement the Array.prototype.map method by hand.

**Implementation:**

```javascript
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
```

## 35. Implement the Array.prototype.filter method by hand.

**Implementation:**

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

## 36. Implement the Array.prototype.reduce method by hand.

**Implementation:**

```javascript
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
```

## 37. What is the arguments object?

**Explanation:**

- An array-like object available within functions that contains all the arguments passed to the function.

## 38. How to create an object without a prototype?

**Implementation:**

```javascript
const obj = Object.create(null);
```

## 39. Why does `b` in this code become a global variable when you call this function?

**Explanation:**

- Assigning a value to an undeclared variable makes it global.

**Example:**

```javascript
function test() {
  b = 10; // No `var`, `let`, or `const`
}
```

## 40. What is ECMAScript?

**Explanation:**

- A scripting language specification on which JavaScript is based.

## 41. What are the new features in ES6 or ECMAScript 2015?

**Features:**

- `let` and `const`
- Arrow functions
- Template literals
- Classes
- Destructuring
- Modules

## 42. What's the difference between `var`, `let` and `const` keywords?

**Explanation:**

- `var`: Function-scoped, hoisted, can be redeclared.
- `let`: Block-scoped, not hoisted.
- `const`: Block-scoped, immutable references.

## 43. What are Arrow functions?

**Explanation:**

- Concise syntax for writing functions.
- Does not have its own `this`.

## 44. What are Classes?

**Explanation:**

- Syntactical sugar over JavaScript’s prototype-based inheritance.

**Example:**

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

## 45. What are Template Literals?

**Explanation:**

- String literals allowing embedded expressions and multiline strings.

**Example:**

```javascript
const name = "John";
console.log(`Hello, ${name}!`);
```

## 46. What is Object Destructuring?

**Explanation:**

- Extracts properties from objects into variables.

**Example:**

```javascript
const obj = { a: 1, b: 2 };
const { a, b } = obj;
```

## 47. What are ES6 Modules?

**Explanation:**

- JavaScript’s standardized module system using `import` and `export`.

## 48. What is the Set object and how does it work?

**Explanation:**

- A collection of unique values.

**Example:**

```javascript
const set = new Set([1, 2, 2]);
console.log(set); // Output: Set(2) { 1, 2 }
```

## 49. What is a Callback function?

**Explanation:**

- A function passed as an argument to another function.

## 50. What are Promises?

**Explanation:**

- Objects representing the eventual completion or failure of an asynchronous operation.

**Example:**

```javascript
new Promise((resolve, reject) => {
  resolve("Success");
}).then(console.log);
```

## 51. What is async/await and How does it work?

**Explanation:**

- Syntax for handling asynchronous code using Promises.

**Example:**

```javascript
async function fetchData() {
  const data = await fetch("/api");
  console.log(data);
}
```

## 52. What's the difference between Spread operator and Rest operator?

**Explanation:**

- Spread: Expands an array.
- Rest: Collects arguments into an array.

## 53. What are Default Parameters?

**Explanation:**

- Function parameters with default values.

**Example:**

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
```

## 54. What are Wrapper Objects?

**Explanation:**

- Temporary objects created for primitive values to access methods.

## 55. What is the difference between Implicit and Explicit Coercion?

**Explanation:**

- Implicit: Automatic type conversion.
- Explicit: Manual type conversion.

## 56. What is NaN? and How to check if a value is NaN?

**Explanation:**

- NaN: Not-a-Number.

**Example:**

```javascript
Number.isNaN(value);
```

## 57. How to check if a value is an Array?

**Example:**

```javascript
Array.isArray(value);
```

## 58. How to check if a number is even without using the `%` or modulo operator?

**Example:**

```javascript
const isEven = (num) => (num & 1) === 0;
```

## 59. How to check if a certain property exists in an object?

**Example:**

```javascript
"property" in object;
```

## 60. What is AJAX?

**Explanation:**

- Asynchronous JavaScript and XML for server communication without reloading the page.

## 61. What are the ways of making objects in JavaScript?

**Explanation:**

- Using object literals, `Object.create`, `class`, or constructor functions.

## 62. What's the difference between Object.seal and Object.freeze methods?

**Explanation:**

- `Object.seal`: Prevents adding/removing properties.
- `Object.freeze`: Prevents adding/removing/modifying properties.

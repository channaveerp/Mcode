# Advanced JavaScript Interview Preparation

## 1. Fundamentals: Variables, Data Types, and Operators

- **Variables:** JavaScript has `var`, `let`, and `const`. `var` is function-scoped, while `let` and `const` are block-scoped.
- **Data Types:** Primitive types (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) and non-primitive types (`object`, `array`, `function`).
- **Operators:** Arithmetic (`+`, `-`, `*`, `/`), comparison (`==`, `===`, `>`, `<`), logical (`&&`, `||`), and assignment (`=`, `+=`, `-=`).

### Example:

```javascript
let num = 10; // number
const name = "John"; // string
let isActive = true; // boolean
```

## 2. Functions: Scope, Closures, and 'this' Keyword

- **Scope:** Determines the accessibility of variables. Global scope, function scope, and block scope (`let`, `const`).
- **Closures:** A function inside another function that retains access to its outer function's variables.
- **'this' Keyword:** Refers to the context in which a function is invoked. It varies depending on how the function is called.

### Example:

```javascript
function outer() {
  let x = 10;
  return function inner() {
    console.log(x); // Closure
  };
}
const closureFn = outer();
closureFn(); // 10
```

## 3. ES6 Features: Arrow Functions, Destructuring, Spread/Rest Operators, Template Literals

- **Arrow Functions:** Shorter syntax for writing functions.
- **Destructuring:** Extracts values from arrays or objects.
- **Spread/Rest Operators:** The spread operator (`...`) expands an array or object. The rest operator (`...`) collects arguments into an array.
- **Template Literals:** Multi-line strings and string interpolation.

### Example:

```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // Spread
const [first, second] = arr; // Destructuring
const sum = (a, b) => a + b; // Arrow function
const name = `Hello, ${name}!`; // Template literal
```

## 4. Async JavaScript: Promises and Async/Await

- **Promises:** A promise represents the completion (or failure) of an asynchronous operation.
- **Async/Await:** A syntactic sugar for working with promises, making asynchronous code easier to read and write.

### Example:

```javascript
function fetchData() {
  return new Promise((resolve) => setTimeout(() => resolve("Data"), 1000));
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}
getData(); // "Data"
```

## 5. DOM Manipulation

- **Selecting elements:** `document.querySelector()`, `document.getElementById()`, etc.
- **Manipulating elements:** `.innerHTML`, `.style`, `.classList`, etc.
- **Creating and removing elements:** `document.createElement()`, `.removeChild()`, etc.

### Example:

```javascript
const div = document.createElement("div");
div.innerHTML = "Hello, World!";
document.body.appendChild(div);
```

## 6. Event Handling

- **Event Listeners:** Use `addEventListener()` to bind events to elements.
- **Event Delegation:** Attach events to a parent element to manage child element events.
- **Event Object:** An object containing details about the event (e.g., `event.target`, `event.preventDefault()`).

### Example:

```javascript
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  console.log(event.target); // Log the clicked button
});
```

## 7. Prototypes and Classes

- **Prototypal Inheritance:** JavaScript objects inherit properties and methods from other objects.
- **ES6 Classes:** Syntactic sugar over prototype-based inheritance.

### Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
const dog = new Animal("Dog");
dog.speak(); // "Dog makes a sound."
```

## 8. Closures

Closures occur when a function retains access to its lexical scope, even after the outer function has finished executing.

### Example:

```javascript
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const increment = counter();
increment(); // 1
increment(); // 2
```

## 9. Module Systems: CommonJS, AMD, and ES6 Modules

- **CommonJS:** Module system used by Node.js, uses `require()` and `module.exports`.
- **AMD (Asynchronous Module Definition):** A module system used for front-end JavaScript.
- **ES6 Modules:** Native module system using `import` and `export`.

### Example:

```javascript
// ES6 Module (file1.js)
export const greet = () => "Hello";

// Import in another file
import { greet } from "./file1.js";
```

## 10. AJAX and Fetch API

AJAX (Asynchronous JavaScript and XML) is used for making HTTP requests. The Fetch API is a modern replacement for XMLHttpRequest.

### Example:

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## 11. Design Patterns

- **Singleton Pattern:** Ensures a class has only one instance.
- **Observer Pattern:** A mechanism for notifying multiple objects about changes in state.
- **Module Pattern:** Encapsulates functionality to avoid polluting the global scope.

## 12. JSON: Parsing and Stringifying

- **`JSON.parse()`**: Converts a JSON string into a JavaScript object.
- **`JSON.stringify()`**: Converts a JavaScript object into a JSON string.

### Example:

```javascript
const jsonString = '{"name":"John"}';
const obj = JSON.parse(jsonString);
const newJsonString = JSON.stringify(obj);
```

## 13. Error Handling

Use `try...catch` to handle errors gracefully and prevent application crashes.

### Example:

```javascript
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message); // "Something went wrong"
}
```

## 14. Data Structures: Arrays, Objects, Maps, and Sets

- **Arrays:** Ordered collection of items.
- **Objects:** Key-value pairs.
- **Maps:** Similar to objects but keys can be of any type.
- **Sets:** A collection of unique values.

### Example:

```javascript
const arr = [1, 2, 3];
const obj = { name: "John", age: 30 };
const map = new Map();
map.set("key", "value");
const set = new Set([1, 2, 3]);
```

## 15. Functional Programming: map, filter, and reduce

- **map:** Transforms each element of an array.
- **filter:** Filters elements of an array based on a condition.
- **reduce:** Accumulates array values into a single result.

### Example:

```javascript
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2); // [2, 4, 6]
const evens = nums.filter((n) => n % 2 === 0); // [2]
const sum = nums.reduce((acc, n) => acc + n, 0); // 6
```

## 16. Build Tools: Webpack and Babel

- **Webpack:** A module bundler for JavaScript applications.
- **Babel:** A JavaScript compiler that converts ES6+ code to ES5.

## 17. Testing: Jest and Mocha

- **Jest:** A JavaScript testing framework with built-in assertions and mocks.
- **Mocha:** A flexible test framework for JavaScript.

## 18. Debugging: Browser Developer Tools

Master browser dev tools for inspecting, debugging, and profiling JavaScript.

## 19. ESLint and Code Style

Use ESLint to enforce code style rules and maintain consistent code quality.

## 20. Security: XSS, CSRF

- **XSS (Cross-Site Scripting):** Injecting malicious scripts into web pages.
- **CSRF (Cross-Site Request Forgery):** Attacks where unauthorized commands are sent from a user that the website trusts.

## 21. Promises and Async/Await

See **#4 Async JavaScript** section for more on this topic.

## 22. Modern JavaScript Frameworks: React, Angular, Vue.js

Learn one of the major modern frameworks for building single-page applications.

## 23. Working with APIs

Know how to make API calls, handle responses, and integrate them into your JavaScript applications.

## 24. Documentation

Document your code with JSDoc or similar tools for readability and maintainability.

## 25. Automation: Task Runners like Grunt and Gulp

Automate tasks like minification, compilation, and testing with tools like Grunt and Gulp.

## 26. Progressive Web Apps (PWAs): Service Workers

PWAs are web apps that provide offline capabilities and can be installed on a user's device.

## 27. Web Performance: Optimizing Code

Focus on optimizing loading times, reducing file sizes, and improving JavaScript execution for faster web experiences.

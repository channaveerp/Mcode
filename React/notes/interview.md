# React JS Interview Questions

# Table of Contents

## 1. React Fundamentals

- [What is React?](#what-is-react)
- [Explain the difference between Real DOM, Virtual DOM, and Shadow DOM?](#explain-the-difference-between-real-dom-virtual-dom-and-shadow-dom)
- [What are the key features of React?](#what-are-the-key-features-of-react)
- [What is JSX?](#what-is-jsx)
- [Why can't browsers read JSX?](#why-cant-browsers-read-jsx)
- [What are React components?](#what-are-react-components)
- [Differentiate between a Class component and a Functional component.](#differentiate-between-a-class-component-and-a-functional-component)
- [What is the difference between state and props in React?](#what-is-the-difference-between-state-and-props-in-react)
- [What are Fragments in React?](#what-are-fragments-in-react)
- [What is the importance of key in React?](#what-is-the-importance-of-key-in-react)
- [What is the difference between React.Fragment and <>?</](#what-is-the-difference-between-reactfragment-and-)

---

## 2. React Hooks

- [What are React hooks? Name some common hooks.](#what-are-react-hooks-name-some-common-hooks)
- [How do useState and useEffect work in React?](#how-do-usestate-and-useeffect-work-in-react)
- [Rules for Using React Hooks](#rules-for-using-react-hooks)
- [What is useRef in React JS?](#what-is-useref-in-react-js)
- [What is the difference between useRef and createRef?](#what-is-the-difference-between-useref-and-createref)
- [What is useTransition hook, and how does it work?](#what-is-usetransition-hook-and-how-does-it-work)
- [What is useDeferredValue in React 18?](#explain-the-working-of-usedeferredvalue-in-react-18)
- [What is the new startTransition function in React 18?](#what-is-the-new-starttransition-function-in-react-18)
- [What is the difference between useTransition and startTransition?](#what-is-the-difference-between-usetransition-and-starttransition)
- [What is the useImperativeHandle hook?](#what-is-the-useimperativehandle-hook)
- [What is the difference between useEffect and useLayoutEffect?](#what-is-the-difference-between-useeffect-and-uselayouteffect)
- [How can we implement componentWillUnmount in function component?](#how-can-we-impliment-componentwillunmount-in-function-component)

---

## 3. React 18 & 19 Features

- [What are the new features introduced in React 18?](#what-are-the-new-features-introduced-in-react-18)
- [What is concurrent rendering in React 18?](#what-is-concurrent-rendering-in-react-18)
- [How does automatic batching work in React 18?](#how-does-automatic-batching-work-in-react-18)
- [How has React 18 improved Suspense?](#how-has-react-18-improved-suspense)
- [How do you use the Concurrent Features introduced in React 18?](#how-do-you-use-the-concurrent-features-introduced-in-react-18)
- [How does React 18 enhance server-side rendering (SSR)?](#how-does-react-18-enhance-server-side-rendering-ssr)
- [What is React Server Components, and how does it work with React 18?](#what-is-react-server-components-and-how-does-it-work-with-react-18)
- [What role does the concurrentMode flag play in React 18?](#what-role-does-the-concurrentmode-flag-play-in-react-18)
- [What are React's new features in React 19?](#what-are-reacts-new-features-in-react-19)

---

## 4. Component Communication

- [Explain the concept of lifting state up in React.](#explain-the-concept-of-lifting-state-up-in-react)
- [How does one pass data between components in React?](#how-does-one-pass-data-between-components-in-react)
- [What is Prop Drilling, and how can it be avoided?](#what-is-prop-drilling-and-how-can-it-be-avoided)
- [What are default props in React?](#what-are-default-props-in-react)

---

## 5. Lifecycle & State Management

- [Explain the React lifecycle methods in detail.](#explain-the-react-lifecycle-methods-in-detail)
- [componentDidCatch Method](#componentdidcatch-method)
- [What is the significance of React’s shouldComponentUpdate method?](#what-is-the-significance-of-reacts-shouldcomponentupdate-method)
- [What is reducer, action, store in redux](#what-is-reducer-action-store-in-redux)
- [What is middleware in Redux](#what-is-middleware-in-redux)
- [Explain data flow in Redux](#explain-data-flow-in-redux)

---

## 6. Context, Redux, and State Tools

- [What is React Context API, and when would you use it?](#what-is-react-context-api-and-when-would-you-use-it)
- [What is Redux, and how is it used in React?](#what-is-redux-and-how-is-it-used-in-react)
- [What is the difference between Context API and Redux?](#what-is-the-difference-between-context-api-and-redux)
- [What is Redux-Thunk](#what-is-redux-thunk)
- [What is Redux-Saga, Difference between Redux-Thunk and Redux-Saga](#what-is-redux-saga-defference-between-redux-thunk-and-redux-saga)
- [How do you handle side effects in Redux?](#how-do-you-handle-side-effects-in-redux)

---

## 7. Performance Optimization

- [How Do You Optimize Performance in a React Application?](#how-do-you-optimize-performance-in-a-react-application)
- [Explain the concept of memoization in React using React.memo and useMemo.](#explain-the-concept-of-memoization-in-react-using-reactmemo-and-usememo)
- [What is the difference between React.memo and useMemo?](#what-is-the-difference-between-reactmemo-and-usememo)
- [What is the difference between useMemo and React.memo?](#what-is-the-difference-between-usememo-and-reactmemo)

---

## 8. Error Handling & Boundaries

- [Handling Errors in React Using Error Boundaries](#handling-errors-in-react-using-error-boundaries)

---

## 9. Forms & Input Handling

- [How does React handle forms and controlled components?](#how-does-react-handle-forms-and-controlled-components)
- [What are uncontrolled components in React?](#what-are-uncontrolled-components-in-react)
- [What are controlled and uncontrolled inputs in forms?](#what-are-controlled-and-uncontrolled-inputs-in-forms)

---

## 10. Advanced Concepts

- [What are higher-order components (HOCs) in React?](#what-are-higher-order-components-hocs-in-react)
- [What are React Portals, and when should you use them?](#what-are-react-portals-and-when-should-you-use-them)
- [What is StrictMode in React?](#what-is-strictmode-in-react)
- [What is reconciliation in React?](#what-is-reconciliation-in-react)
- [What is React Fiber?](#what-is-react-fiber)
- [How does hydration work in React?](#how-does-hydration-work-in-react)
- [What are static methods in React components?](#what-are-static-methods-in-react-components)
- [What is a render prop in React?](#what-is-a-render-prop-in-react)

---

## 11. Miscellaneous

- [Synthetic Events in React](#synthetic-events-in-react)
- [What is the difference between export default and export in React js](#what-is-difference-between-export-default-and-export-in-react-js)
- [What is super, constructor, render function in React JS](#what-is-super-constructor-render-function-in-react-js)
- [What is node module in React JS](#what-is-node-module-in-react-js)
- [What is server side render in React JS](#what-is-server-side-render-in-react-js)
- [What is useStrict in React JS](#what-is-usestrict-in-react-js)
- [How does React handle accessibility?](#how-does-react-handle-accessibility)
- [How does React handle updates to child components?](#how-does-react-handle-updates-to-child-components)
- [How does React handle animations?](#how-does-react-handle-animations)

---

## 12. Testing

- [Testing React Components](#testing-react-components)
- [Role of Jest in React Testing](#role-of-jest-in-react-testing)
- [Shallow Rendering vs. Full Rendering](#shallow-rendering-vs-full-rendering)
- [How to Do Jest Setup in a React Project](#how-to-do-jest-setup-in-a-react-project)

---

## 13. Routing and Lazy Loading

- [Implementing Lazy Loading in React](#implementing-lazy-loading-in-react)
- [Setting up Routing and Private Routing in React](#setting-up-routing-and-private-routing-in-react)

---

## 14. Custom Hooks & Libraries

- [Create Some Commonly Used React Custom Hooks with Examples](#create-some-commonly-used-react-custom-hooks-with-examples)
- [Implement Custom React "classnames" Library](#implement-custom-react-classnames-library)
- [Implement Custom Redux using "immer" Library](#implement-custom-redux-using-immer-library)

---

## 15. Virtual DOM Implementation

- [Implement Custom Virtual DOM - Serialization](#implement-custom-virtual-dom---serialization)
- [Implement Custom Virtual DOM - Deserialization](#implement-custom-virtual-dom---deserialization)

---

## 16. Miscellaneous Setup & Utilities

- [Memoize/Cache Identical API Calls](#memoizecache-identical-api-calls)
- [Setting up Redux/Redux Toolkit in React](#setting-up-reduxredux-toolkit-in-react)
- [How does the React working mechanism function?](#how-does-the-react-working-mechanism-function)
- [How do you create a reusable modal in React?](#how-do-you-create-a-reusable-modal-in-react)

# What is React?

**React** is a JavaScript library for building user interfaces. It enables developers to create reusable UI components and efficiently update and render components in response to data changes.

React is a JavaScript library for building user interfaces, developed and maintained by Meta (formerly Facebook). It is primarily used for building single-page applications (SPAs), where data dynamically changes over time without requiring a full page reload.

React promotes a component-based architecture, where the UI is broken down into small, reusable, and self-contained pieces.

### React Working Mechanism – Behind the Scenes

### Overview

React is a declarative, component-based JavaScript library used to build efficient and interactive user interfaces. While developers typically work with React at the component and hook level, it internally follows a well-defined set of steps and algorithms to convert UI declarations into real DOM updates.

This document provides a deep-dive explanation of how React works behind the scenes, including the **rendering lifecycle**, **reconciliation**, and **diffing algorithm**.

---

## 1. React's Rendering Lifecycle

React follows a **two-phase rendering process**:

### **1. Render Phase (Pure/Read-Only Phase)**

- React **calls the component functions** to generate the Virtual DOM (a lightweight JavaScript representation of the UI).
- It builds a **React Fiber tree** representing the UI structure.
- This phase is **pure** and **side-effect-free**.

### **2. Commit Phase (Impure/DOM Mutation Phase)**

- React **compares the new Fiber tree to the previous one** to calculate changes.
- It updates the real DOM in the most efficient way possible.
- React also executes side-effects (e.g., `useEffect`, `componentDidMount`).

---

## 2. The Virtual DOM

- The **Virtual DOM (VDOM)** is a JavaScript object tree that mimics the real DOM.
- Every time the state or props change, React re-renders the component and creates a new VDOM tree.
- React then compares the **new VDOM** with the **previous VDOM** using a process called **reconciliation**.

---

## 3. Reconciliation

Reconciliation is React's process of updating the DOM when state or props change.

### Steps:

1. Create a new React element tree from updated components.
2. Compare it with the old tree (using the diffing algorithm).
3. Calculate the **minimum number of operations** needed to update the real DOM.
4. Apply these operations in the **commit phase**.

React aims to make this process as fast as possible using **heuristics and assumptions**.

---

## 4. The Diffing Algorithm

React uses a highly optimized **O(n)** algorithm to compare trees.

### Key Assumptions:

1. Elements of different types produce different trees.
2. Developers can hint identity via `key` props in lists.

### Types of Comparisons:

- **Element Type Change**: Replace the node entirely.
- **Props Change**: Update only the changed attributes.
- **Children List Change**: Uses keys to reorder, insert, or remove nodes efficiently.

```jsx
<ul>
  {items.map((item) => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
```

> Using unique `key` props helps React optimize list diffs.

---

## 5. React Fiber Architecture

Fiber is the **underlying data structure** used by React (since v16) to manage rendering.

### Fiber Benefits:

- Enables **incremental rendering** (pause and resume work).
- Handles **prioritization** (e.g., user interactions vs data fetching).
- Supports **concurrent rendering**.

Each unit of work in React is a **Fiber node**, which contains:

- Component type
- Props/state
- Reference to child/sibling/parent fibers
- Effect flags (to track what needs committing)

---

## 6. Concurrent Rendering (React 18+)

React 18 introduces **Concurrent Features** allowing React to work on multiple tasks simultaneously:

- **startTransition()**: Mark updates as non-urgent.
- **useDeferredValue()**: Defer non-critical renders.

### Example:

```jsx
startTransition(() => {
  setSearchQuery(input);
});
```

> React will delay this state update if more important work is pending.

---

## 7. Lifecycle of a Component (Functional with Hooks)

| Lifecycle Stage   | Hook Equivalent                                  |
| ----------------- | ------------------------------------------------ |
| Component Mount   | `useEffect(() => {}, [])`                        |
| Component Update  | `useEffect(() => {...}, [deps])`                 |
| Component Unmount | `useEffect(() => {... return () => {...} }, [])` |

---

## Summary Table

| Concept           | Description                                       |
| ----------------- | ------------------------------------------------- |
| Virtual DOM       | In-memory representation of UI                    |
| Fiber             | Core data structure that tracks components & work |
| Reconciliation    | The process of diffing and applying UI changes    |
| Diffing Algorithm | Heuristic algorithm for comparing VDOM trees      |
| Concurrent Mode   | Allows React to work on tasks asynchronously      |

---

## Conclusion

React's internal mechanisms are built for performance, responsiveness, and scalability. By understanding how Virtual DOM, Fiber, reconciliation, and the diffing algorithm work, senior developers can write more performant applications and debug complex UI behaviors effectively.

> Mastering React internals equips you to optimize rendering, improve UX, and architect high-performing apps with confidence.

---

[🔝 Back to Top](#table-of-contents)

# Explain the difference between Real DOM, Virtual DOM, and Shadow DOM?

Understanding the difference between **Real DOM**, **Virtual DOM**, and **Shadow DOM** is essential for senior React developers. These concepts relate to how the UI is structured, updated, and optimized across different environments and technologies.

---

### Real DOM (Document Object Model)

- The **Real DOM** is the standard, browser-provided API for representing and interacting with HTML and XML documents.
- It represents the actual UI structure rendered on the screen.
- **Characteristics**:
  - Tree-structured model of the webpage.
  - Each node is an object representing a part of the UI.
  - DOM updates involve re-rendering portions or all of the UI.
- **Performance Implication**:
  - When a change happens (e.g., updating text in a node), the browser often needs to recalculate styles, reflow layouts, and repaint the UI.
  - These operations are computationally expensive, especially with frequent and unnecessary updates.
- **Example**:
  - Updating the inner text of a `<div>` might require layout reflow, affecting performance if not optimized.

---

### Virtual DOM (VDOM)

- The **Virtual DOM** is an in-memory representation of the real DOM elements using JavaScript objects.
- It is a concept used by frameworks like React to optimize UI rendering.
- **How it Works**:
  1. When the component’s state or props change, React creates a new Virtual DOM tree.
  2. React then compares it with the previous Virtual DOM using a **diffing algorithm**.
  3. Only the differences ("diffs") between the two trees are calculated.
  4. A minimal set of operations is applied to the real DOM for optimal performance.
- **Advantages**:
  - Minimizes direct interaction with the real DOM.
  - Improves rendering performance.
  - Enables declarative UI programming.
- **Drawback**:
  - Slight overhead in diffing computation, but far less than manipulating the Real DOM directly.

---

### Shadow DOM

- The **Shadow DOM** is a **browser-native feature** that allows encapsulation of DOM and CSS for web components.
- It creates a separate DOM tree attached to an element, isolating it from the main document DOM.
- **Use Case**:
  - Avoids style clashes and DOM leaks.
  - Great for developing standalone, reusable UI components.
- **How it Works**:
  - A shadow root is attached to a custom element (e.g., `<my-component>`).
  - Everything inside the shadow root is scoped locally and unaffected by external styles or scripts.
- **Example**:
  ```html
  <my-component>
    #shadow-root
    <style>
      div {
        color: red;
      }
    </style>
    <div>Encapsulated Content</div>
  </my-component>
  ```
- **Important Notes**:
  - The Shadow DOM is used heavily in Web Components, not typically used directly in React (though React can interact with it).

---

### Summary Table

| Feature       | Real DOM                         | Virtual DOM                           | Shadow DOM                         |
| ------------- | -------------------------------- | ------------------------------------- | ---------------------------------- |
| Ownership     | Browser-native                   | React-controlled (JavaScript objects) | Browser-native (Web Components)    |
| Updates       | Direct and full DOM manipulation | Efficient diffing & minimal updates   | Scoped to isolated components      |
| Performance   | Slower for frequent changes      | High performance with batch updates   | Fast and isolated rendering        |
| Encapsulation | None                             | None                                  | Full DOM and CSS encapsulation     |
| Primary Use   | Traditional web development      | React and similar libraries           | Web Components and custom elements |

---

In React applications, the **Virtual DOM** allows developers to create dynamic, responsive UIs efficiently without worrying about expensive real DOM manipulations. Meanwhile, the **Shadow DOM** is valuable when building framework-agnostic, reusable components with strict style encapsulation, typically outside React’s core usage pattern.

[🔝 Back to Top](#table-of-contents)

# What are the key features of React?

React is a popular JavaScript library for building dynamic and performant user interfaces. Its architecture and design enable scalable, component-driven development. Below are the **key features** that make React a powerful tool for frontend development:

---

## 🔹 1. Component-Based Architecture

React breaks the UI into **independent, reusable pieces** called components.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

- Encourages **modularity and reusability**.
- Each component can manage its own **state and lifecycle**.

---

## 🔹 2. Virtual DOM

React uses a **Virtual DOM**, a lightweight in-memory representation of the real DOM.

- Improves performance through **efficient diffing and minimal updates**.
- Enables **high-speed UI rendering** by reducing expensive real DOM operations.

---

## 🔹 3. Declarative UI

React enables you to describe what the UI should look like **based on the state**.

```jsx
const App = ({ isLoggedIn }) => (
  <div>{isLoggedIn ? "Welcome!" : "Please sign in."}</div>
);
```

- Makes the code **more predictable** and easier to debug.
- React handles **updating the DOM** to match your data.

---

## 🔹 4. JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that allows writing **HTML-like code** within JavaScript.

```jsx
const element = <h1>Hello, world!</h1>;
```

- Makes UI structure **more readable and expressive**.
- Transpiled using Babel to `React.createElement()` calls.

---

## 🔹 5. Hooks API

Introduced in React 16.8, **Hooks** allow using state and lifecycle features in **functional components**.

- `useState`, `useEffect`, `useContext`, `useMemo`, `useCallback`

```jsx
const [count, setCount] = useState(0);
```

- Promotes **cleaner code** and better separation of concerns.

---

## 🔹 6. Unidirectional Data Flow

Data in React flows in **one direction** (from parent to child) via **props**.

- Encourages **predictable data models**.
- Easier to **debug and maintain** large applications.

---

## 🔹 7. Lifecycle Methods

For class components, React provides lifecycle methods like:

- `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`

In functional components, lifecycle-like behavior is handled via `useEffect()`.

---

## 🔹 8. React Developer Tools

A powerful set of browser extensions to inspect:

- Component hierarchy
- Props and state
- React performance profiling

---

## 🔹 9. Context API

Provides a way to **share global data** like theme, user info, or language across components **without prop drilling**.

```jsx
const ThemeContext = React.createContext("light");
```

---

## 🔹 10. Server-Side Rendering (SSR) Support

Using frameworks like **Next.js**, React supports rendering components **on the server**.

- Improves SEO
- Reduces time-to-first-byte (TTFB)

---

## 🔹 11. Concurrent Rendering (via Fiber Architecture)

React’s **Fiber architecture** enables features like:

- **Time-slicing**: breaking rendering into units of work
- **Suspense**: asynchronous rendering for lazy-loaded components

---

## 🔹 12. Rich Ecosystem and Community

React has a vast collection of:

- Component libraries (Material UI, Chakra UI, etc.)
- State management tools (Redux, Zustand, Recoil)
- Routing solutions (React Router)

---

## 🔹 13. Portability with React Native

React enables building **native mobile applications** using **React Native** with the same core concepts.

- Code reuse between web and mobile
- Single development paradigm

---

## ✅ Summary Table

| Feature              | Description                                         |
| -------------------- | --------------------------------------------------- |
| Component-Based      | Reusable, self-contained UI building blocks         |
| Virtual DOM          | Efficient UI updates with diffing algorithm         |
| Declarative Syntax   | UI reflects state                                   |
| JSX                  | HTML in JS, enhanced readability                    |
| Hooks                | Functional components with state/lifecycle support  |
| One-Way Data Binding | Predictable and controlled data flow                |
| Context API          | Global state sharing without prop drilling          |
| SSR Support          | SEO-friendly rendering with tools like Next.js      |
| Developer Tools      | Rich debugging and inspection support               |
| React Native         | Build native mobile apps using React components     |
| Concurrent Mode      | Asynchronous rendering and performance optimization |

---

These features combined make React a powerful, flexible, and high-performance solution for building complex and modern web applications.

[🔝 Back to Top](#table-of-contents)

# What is JSX?

**JSX (JavaScript XML)** is a **syntax extension for JavaScript** commonly used with **React** to describe what the UI should look like. JSX allows developers to write **HTML-like markup** directly within JavaScript code.

JSX gets transpiled (usually by **Babel**) into standard `React.createElement()` calls which the browser can interpret.

---

## Why Use JSX?

- Improves **readability** and **developer productivity** by allowing a declarative UI syntax.
- Embeds component logic and layout together.
- Offers **syntax familiar to HTML/CSS developers**, reducing the learning curve.
- Helps **leverage the full power of JavaScript** within templates.

---

## JSX Example

```jsx
const name = "Alice";
const greeting = <h1>Hello, {name}!</h1>;
```

This is transpiled to:

```js
const greeting = React.createElement("h1", null, `Hello, ${name}!`);
```

---

## Embedding Expressions

You can embed any JavaScript expression inside JSX by wrapping it in curly braces `{}`.

```jsx
const user = { firstName: "John", lastName: "Doe" };
const element = <p>{user.firstName + " " + user.lastName}</p>;
```

---

## JSX is Not a Template Engine

- Unlike traditional templating engines (like Handlebars or EJS), JSX is **closer to JavaScript** than HTML.
- It supports **if/else logic, loops, functions**, and other JS features natively.

### Example: Conditional Rendering

```jsx
const element = isLoggedIn ? <Dashboard /> : <LoginForm />;
```

---

## JSX Rules

### 1. Single Parent Element

All JSX elements must have **one parent element**.

```jsx
return (
  <div>
    <h1>Title</h1>
    <p>Description</p>
  </div>
);
```

### 2. Self-Closing Tags

Tags without children must be **self-closed**:

```jsx
<img src='avatar.png' alt='Avatar' />
```

### 3. `className` instead of `class`

`class` is a reserved keyword in JS, so JSX uses `className`.

```jsx
<div className='container'></div>
```

### 4. `htmlFor` instead of `for`

```jsx
<label htmlFor='email'>Email</label>
```

---

## Using JavaScript in JSX

You can call functions, use array methods, and perform inline calculations.

```jsx
<ul>
  {items.map((item) => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
```

---

## JSX Best Practices

- **Keep JSX clean**: Use smaller, readable components.
- **Use keys** when rendering lists.
- **Avoid complex logic** inside JSX — move to helper functions if needed.
- **Use fragments** (`<>...</>`) to group multiple elements without extra divs.

```jsx
return (
  <>
    <Header />
    <Content />
    <Footer />
  </>
);
```

---

## JSX in the Build Process

- JSX is **not valid JavaScript**. Tools like **Babel** transform JSX into JavaScript during the build process.
- You need a build system like **Webpack** (often used with Create React App or Vite).

---

## Common Interview Points

| Topic                 | Details                                         |
| --------------------- | ----------------------------------------------- |
| JSX vs HTML           | JSX uses `className`, `htmlFor`, etc.           |
| JSX Compilation       | Transpiles to `React.createElement()`           |
| Logic in JSX          | Can use JS expressions but not statements       |
| Fragment Usage        | Prevent unnecessary DOM nodes                   |
| Conditional Rendering | Via ternary or short-circuiting                 |
| Reusability           | JSX makes it easy to create and reuse UI blocks |

---

## Summary

JSX is a **powerful abstraction** that blends the **declarative clarity of HTML** with the **power and flexibility of JavaScript**. It enhances React's developer experience by making component-based UI logic more expressive, readable, and maintainable.

Understanding JSX deeply is fundamental for any senior React developer.

[🔝 Back to Top](#table-of-contents)

# Why can't browsers read JSX?

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in React to describe UI components in an HTML-like syntax. While JSX looks like HTML, **browsers cannot interpret JSX directly**.

---

## Why Browsers Can’t Read JSX

### 1. **JSX is Not Valid JavaScript**

JSX is a **syntactic sugar** built on top of JavaScript. Browsers have JavaScript engines that can only interpret **valid ECMAScript** (standard JS). JSX contains **non-standard syntax**, which must be transpiled.

#### Example:

```jsx
const element = <h1>Hello, world!</h1>;
```

This line is **not valid JavaScript** — the browser would throw a syntax error.

---

## How JSX Works Behind the Scenes

### JSX Transpilation

JSX must be converted into standard JavaScript before it can run in the browser. This is handled by **transpilers** like **Babel**.

#### Transpiled Version:

```js
const element = React.createElement("h1", null, "Hello, world!");
```

This version is valid JavaScript and can be executed by the browser’s JS engine.

---

## Tooling to Handle JSX

- **Babel**: Converts JSX into `React.createElement()` calls.
- **Webpack/Vite/Parcel**: Bundlers that integrate Babel and package the application.
- **Create React App (CRA)**: Provides out-of-the-box JSX support with build configuration.

### Configuration Example (babel.config.js)

```js
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
```

---

## What Happens at Runtime

1. You write JSX.
2. Babel transpiles JSX to JavaScript.
3. Webpack/Vite bundles the code.
4. The browser receives the transpiled JS.
5. React creates and manipulates DOM nodes using `React.createElement()` under the hood.

---

## Summary Table

| Concept              | JSX              | JavaScript (Browser Compatible)            |
| -------------------- | ---------------- | ------------------------------------------ |
| Example              | `<h1>Hello</h1>` | `React.createElement('h1', null, 'Hello')` |
| Can browsers run it? | ❌ No            | ✅ Yes                                     |
| Needs transpilation  | ✅ Yes           | ❌ No                                      |

---

## Key Takeaways

- **Browsers cannot read JSX directly** because it's not part of the ECMAScript standard.
- JSX must be **transpiled into valid JavaScript** using Babel.
- This step happens during **build time**, not runtime.
- Understanding the JSX-to-JS transformation is critical for senior-level debugging and optimization.

---

## Interview Tip

If asked why JSX doesn’t work in browsers, explain:

> "JSX is a developer-friendly syntax that resembles HTML but is not valid JavaScript. Therefore, browsers can’t parse it natively. Tools like Babel convert it into plain JavaScript before it's executed in the browser."

This shows not just familiarity with React, but an understanding of the build and execution pipeline.

[🔝 Back to Top](#table-of-contents)

# What are React components?

React components are the **fundamental building blocks** of any React application. They encapsulate UI pieces and logic, allowing you to create **modular, reusable, and maintainable code**.

---

## Key Characteristics of React Components

- **Reusable**: Define once, use anywhere.
- **Compositional**: Build complex UIs from smaller parts.
- **Declarative**: Describe how the UI should look for a given state.
- **Encapsulated**: Each component manages its own state and behavior.

---

## Types of Components

### 1. **Functional Components** (Recommended)

These are JavaScript functions that accept props and return JSX.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

#### Modern Usage with Hooks:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 2. **Class Components** (Legacy)

Use ES6 classes and provide lifecycle methods.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

> 📌 **Note**: Functional components with Hooks are the modern standard since React 16.8.

---

## Component Composition

React encourages building UIs by nesting components:

```jsx
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
```

---

## Props: Passing Data to Components

Props are read-only inputs to components.

```jsx
function Greet({ name }) {
  return <h2>Hello, {name}</h2>;
}

<Greet name='Alice' />;
```

---

## State: Local Data within Components

State allows components to create and manage internal data.

```jsx
const [isOn, setIsOn] = useState(true);
```

---

## Lifecycle (Class) vs Hooks (Function)

| Lifecycle Method     | Hook Equivalent     |
| -------------------- | ------------------- |
| componentDidMount    | useEffect           |
| componentDidUpdate   | useEffect           |
| componentWillUnmount | useEffect (cleanup) |

---

## Best Practices

- Keep components small and focused.
- Use props for configuration.
- Avoid complex logic inside render.
- Separate stateful and stateless components when possible.
- Use memoization (`React.memo`, `useMemo`, `useCallback`) to optimize rendering.

---

## Conclusion

React components are the **core unit of abstraction** in React. Mastery over component design, props, state management, and hooks is essential for building scalable and performant applications.

In interviews, demonstrate:

- When to use components.
- How to design reusable components.
- Differences between function and class components.
- Component communication using props and context.

> 🎯 A senior developer is expected to not only use components but design them for extensibility, testability, and clarity.

[🔝 Back to Top](#table-of-contents)

# Differentiate between a Class component and a Functional component.

In React, components can be created using **classes** or **functions**. Understanding the distinction is crucial, especially when discussing performance, hooks, lifecycle methods, and current best practices in modern React development.

---

### Class Component

A component defined using an ES6 class. It extends `React.Component` and must contain a `render()` method.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Functional Component

A plain JavaScript function that returns JSX.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

---

## 2. Syntax Simplicity

| Feature   | Class Component               | Functional Component |
| --------- | ----------------------------- | -------------------- |
| Syntax    | Verbose (class, `this`)       | Concise and readable |
| State     | `this.state`, `this.setState` | `useState()` hook    |
| Lifecycle | Class methods                 | `useEffect()` hook   |
| Binding   | Manual `this` binding needed  | No `this` required   |

---

## 3. State and Side Effects

### Class Component Example:

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => this.setState({ count: this.state.count + 1 });

  render() {
    return <button onClick={this.increment}>{this.state.count}</button>;
  }
}
```

### Functional Component with Hooks:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

## 4. Lifecycle Methods

### Class Component:

- `componentDidMount()`
- `componentDidUpdate()`
- `componentWillUnmount()`

### Functional Component:

All managed through `useEffect()`:

```jsx
useEffect(() => {
  // componentDidMount + componentDidUpdate
  return () => {
    // componentWillUnmount
  };
}, [dependencies]);
```

---

## 5. Performance & Modern Best Practices

- Functional components are generally preferred today.
- Easier to read, test, and maintain.
- Work seamlessly with React features like **Hooks**, **Concurrent Mode**, and **Suspense**.

---

## 6. When to Use What?

| Use Case                             | Recommendation                  |
| ------------------------------------ | ------------------------------- |
| Modern React applications            | Functional Components           |
| Using React Hooks                    | Functional Components           |
| Legacy code or lifecycle granularity | Class Components (rarely today) |

---

## Conclusion

Functional components, enhanced with Hooks, have largely replaced class components in modern React development. However, understanding both is essential for maintaining older codebases and demonstrating well-rounded knowledge in interviews.

> 🎯 As a senior developer, knowing **why** functional components are favored and **how** React handles them internally can set you apart in technical interviews.

[🔝 Back to Top](#table-of-contents)

# What is the difference between state and props in React?

React uses both **state** and **props** to manage data and control component behavior, but they serve different purposes:

#### 1. **Definition**

- **Props** (short for "properties"):

  - Read-only data passed from a parent component to a child component.
  - Immutable from the child component's perspective.
  - Used to configure or customize a component.

- **State**:
  - A data structure that starts with a default value when a component mounts.
  - Can be changed over time, typically in response to user actions or other events.
  - Managed within the component itself (or using hooks like `useState`).

---

#### 2. **Mutability**

- **Props**: Immutable – child components cannot change them.
- **State**: Mutable – managed and updated using `setState` (class components) or `useState` (functional components).

---

#### 3. **Usage Context**

- **Props**:

  - Ideal for passing data from parent to child.
  - Used to render dynamic content based on external input.

- **State**:
  - Used for data that changes over time (e.g., input field values, toggles, etc.).
  - Suitable for local component behavior.

---

#### 4. **Example**

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- `Greeting` uses **props** to receive `name`.
- `Counter` uses **state** to keep track of the number of clicks.

---

#### 5. **Summary Table**

| Feature                 | Props                      | State                          |
| ----------------------- | -------------------------- | ------------------------------ |
| Mutability              | Immutable                  | Mutable                        |
| Ownership               | Parent Component           | Own Component                  |
| Purpose                 | Pass data & configuration  | Manage internal data           |
| Updates Cause Re-render | Yes                        | Yes                            |
| Accessible From         | Child components via props | Within the component via hooks |

---

Understanding the difference between props and state is fundamental to mastering React component design and data flow.

[🔝 Back to Top](#table-of-contents)

# What are Fragments in React?

### What are Fragments in React?

**Fragments** in React allow you to group multiple elements without adding extra nodes to the DOM. This is useful for returning multiple elements from a component without unnecessarily introducing additional wrappers like `<div>` that can affect CSS styling, layouts, or semantics.

---

### Why Use Fragments?

Traditionally, if you want to return multiple elements from a component, you would wrap them in a `<div>`:

```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </div>
  );
}
```

While this works, it introduces an extra `<div>` into the DOM, which can lead to:

- **Unwanted CSS behavior**
- **Invalid HTML (e.g., wrapping `<tr>` inside `<div>`)**
- **Increased DOM depth**, impacting performance or accessibility

React Fragments solve this problem.

---

### Syntax of Fragments

React provides two ways to use fragments:

#### 1. `<React.Fragment>`

```jsx
function App() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </React.Fragment>
  );
}
```

#### 2. Shorthand Syntax `<>...</>`

```jsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </>
  );
}
```

> Note: Shorthand syntax doesn’t support `key` or attributes. Use `<React.Fragment>` if you need to pass props.

---

### Practical Example: Rendering Table Rows

Using a regular `<div>` inside a `<table>` would result in invalid HTML:

```jsx
function Table() {
  return (
    <table>
      <tbody>
        <div>
          <tr>
            <td>Row 1</td>
          </tr>
        </div>
      </tbody>
    </table>
  );
}
```

To avoid this, use Fragments:

```jsx
function Table() {
  return (
    <table>
      <tbody>
        <>
          <tr>
            <td>Row 1</td>
          </tr>
          <tr>
            <td>Row 2</td>
          </tr>
        </>
      </tbody>
    </table>
  );
}
```

Or, if you need to assign a `key` (e.g., in a `.map()`):

```jsx
function TableRows({ rows }) {
  return rows.map((row, index) => (
    <React.Fragment key={index}>
      <tr>
        <td>{row}</td>
      </tr>
    </React.Fragment>
  ));
}
```

---

### When to Use Fragments

- When rendering lists of children without a parent container
- When avoiding extra DOM nodes is critical
- When using semantic HTML that does not allow arbitrary wrappers

---

### Summary

| Feature             | `<div>`     | `<React.Fragment>` or `<>`   |
| ------------------- | ----------- | ---------------------------- |
| Adds to DOM         | Yes         | No                           |
| Affects Layout      | Potentially | No                           |
| Can have attributes | Yes         | Only with `<React.Fragment>` |
| Semantic issues     | Yes         | No                           |

React Fragments are a powerful feature that help maintain clean and efficient DOM structures, especially in component-based architecture where multiple elements often need to be grouped logically without affecting markup semantics.

[🔝 Back to Top](#table-of-contents)

# What is the importance of key in React?

In React, the `key` prop is a **special attribute** that must be included when creating **lists of elements**. Keys help React **identify which items have changed, been added, or removed**, enabling efficient updates to the DOM.

---

### Why is `key` Important?

1. **Efficient Re-rendering**

   - React uses keys to optimize rendering performance.
   - Keys help React quickly determine if a DOM element can be reused.

2. **Avoiding Unnecessary DOM Operations**

   - Without a proper key, React may re-render or re-create elements unnecessarily.

3. **Maintaining Component State**
   - Keys help React preserve component state between renders.

---

### Example Without Key (Incorrect)

```jsx
{
  items.map((item) => <li>{item.name}</li>);
}
```

This will trigger a warning in the console because `key` is missing.

### Example With Key (Correct)

```jsx
{
  items.map((item) => <li key={item.id}>{item.name}</li>);
}
```

Using a unique identifier (like `item.id`) as the key ensures proper re-rendering behavior.

---

### Best Practices

- Use **unique, stable identifiers** (e.g., `id`) as keys.
- Avoid using **array indexes** as keys, especially if the list can change.
- Keys must be **unique among siblings** but do not need to be globally unique.

---

### Common Pitfall: Using Index as Key

```jsx
{
  items.map((item, index) => <li key={index}>{item.name}</li>);
}
```

- This can cause issues if items are reordered, added, or removed.
- React may not re-render the list as expected, causing bugs.

---

### Summary Table

| Key Usage     | Behavior                                       |
| ------------- | ---------------------------------------------- |
| Unique ID key | ✅ Optimal and predictable                     |
| Index as key  | ⚠️ Potentially buggy during reorder/add/remove |
| Missing key   | ❌ React warning and inefficient rendering     |

---

The `key` prop is vital for list rendering and performance optimization in React. Choosing the right key improves user experience and reduces rendering bugs.

[🔝 Back to Top](#table-of-contents)

# What is the difference between React.Fragment and <></>?

When building React components, **fragments** are used to group multiple children elements without adding extra nodes to the DOM. React provides two ways to use fragments:

1. `React.Fragment`
2. Shorthand syntax `<> </>`

Both serve the same fundamental purpose, but they have differences in usage and capabilities.

---

### 1. `React.Fragment`

`React.Fragment` is the full form fragment syntax. It can wrap multiple elements and **also accept keys** or props in some rare use cases (like when rendering a list of fragments).

#### Example:

```jsx
return (
  <React.Fragment>
    <h1>Title</h1>
    <p>Description</p>
  </React.Fragment>
);
```

#### When to Use:

- When you need to pass a `key` (especially in list rendering).
- When you want more explicit, readable code.

#### Example with `key`:

```jsx
const items = ["One", "Two", "Three"];
return items.map((item, index) => (
  <React.Fragment key={index}>
    <dt>{item}</dt>
    <dd>Detail for {item}</dd>
  </React.Fragment>
));
```

---

### 2. Shorthand `<> </>`

This is a syntactic sugar introduced in React 16.2. It provides a cleaner and more concise way to write fragments.

#### Example:

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
```

#### When to Use:

- When you don't need to pass any props or keys.
- Preferred in most scenarios for brevity.

---

### Key Differences

| Feature           | `React.Fragment` | Shorthand `<> </>`           |
| ----------------- | ---------------- | ---------------------------- |
| Supports `key`    | ✅ Yes           | ❌ No                        |
| Verbosity         | More verbose     | More concise                 |
| Readability       | More explicit    | Cleaner for small components |
| Use in Lists      | Ideal with `key` | Not usable with `key`        |
| JSX Compatibility | Fully supported  | Limited to JSX only          |

---

### Summary

Use `<> </>` when you simply want to group elements without adding extra DOM nodes. Use `React.Fragment` when you need to attach props such as `key` or prefer explicit code style. Understanding when to use each helps keep your code clean, maintainable, and semantically correct.

[🔝 Back to Top](#table-of-contents)

# What are React hooks? Name some common hooks.

React Hooks are special functions introduced in React 16.8 that allow developers to use state and other React features in functional components, without writing class components.

Hooks provide a more direct API to React concepts such as state, lifecycle, context, and refs, making code easier to understand and test.

### Why Hooks?

Simplify component logic reuse.

Eliminate the need for classes.

Better separation of concerns in complex components.

Encourage function component usage.

**Common hooks:**

### 1. `useState`

Allows functional components to have local state.

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

### 2. `useEffect`

Used for side effects like data fetching or subscriptions.

```jsx
import React, { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty dependency array means it runs only once.

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}
```

### 3. `useContext`

Access context values without wrapping components in a Consumer.

```jsx
import React, { useContext, createContext } from "react";

const ThemeContext = createContext("light");

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button>{theme} Theme</button>;
}
```

### 4. `useReducer`

Manages complex state logic.

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}
```

### 5. `useRef`

Access DOM elements or persist values without causing re-renders.

```jsx
import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}
```

### 6. `useMemo`

Memoize expensive calculations.

```jsx
import React, { useMemo, useState } from "react";

function ExpensiveComponent({ num }) {
  const compute = (num) => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) result += num;
    return result;
  };

  const result = useMemo(() => compute(num), [num]);

  return <div>Result: {result}</div>;
}
```

[🔝 Back to Top](#table-of-contents)

# How do useState and useEffect work in React?

React's `useState` and `useEffect` hooks are two of the most essential tools for managing component state and side effects in functional components.

---

### `useState`

#### Purpose

- Adds local state to functional components.
- Returns a stateful value and a function to update it.

#### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

#### Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

#### Key Points

- `useState` initializes with the `initialValue`.
- Updating state with `setState` triggers a re-render.
- Each call to `useState` is isolated.

---

### `useEffect`

#### Purpose

- Handles side effects like fetching data, subscriptions, or manually updating the DOM.
- Replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

#### Syntax

```jsx
useEffect(() => {
  // effect logic
  return () => {
    // optional cleanup
  };
}, [dependencies]);
```

#### Example

```jsx
import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []); // Empty dependency array => run once on mount

  return <p>Seconds passed: {seconds}</p>;
}
```

#### Key Points

- Runs after render by default.
- Cleanup function is useful for clearing timers, listeners, or subscriptions.
- Dependency array controls when the effect runs:
  - `[]`: runs once on mount
  - `[value]`: runs on mount and when `value` changes

---

### Summary Table

| Hook      | Purpose                            | Example Use Cases                        |
| --------- | ---------------------------------- | ---------------------------------------- |
| useState  | Manage local state                 | Form inputs, toggles, counters           |
| useEffect | Perform side effects in components | Fetch data, set up subscriptions, timers |

---

These two hooks form the foundation of interactive and dynamic functional components in modern React.

[🔝 Back to Top](#table-of-contents)

# Rules for Using React Hooks

React Hooks are powerful features introduced in React 16.8 that allow functional components to use state and lifecycle methods. However, to ensure predictable and correct behavior, there are **strict rules** to follow when using hooks.

---

### 1. **Only Call Hooks at the Top Level**

Hooks must be called **at the top level of a React function**, not inside loops, conditions, or nested functions.

#### ✅ Correct:

```jsx
function MyComponent() {
  const [count, setCount] = useState(0); // Top level
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

#### ❌ Incorrect:

```jsx
function MyComponent() {
  if (someCondition) {
    const [count, setCount] = useState(0); // ❌ Don't do this
  }
  // ...
}
```

**Why?**
React relies on the **order** of hooks being consistent across renders. Placing them inside conditionals or loops breaks this order.

---

### 2. **Only Call Hooks from React Functions**

Hooks should only be called from **functional React components** or **custom hooks**—not from regular JavaScript functions.

#### ✅ Correct:

```jsx
function MyComponent() {
  const [value, setValue] = useState("Hello");
  return <p>{value}</p>;
}

function useCustomHook() {
  const [flag, setFlag] = useState(true);
  return flag;
}
```

#### ❌ Incorrect:

```jsx
function randomFunction() {
  const [x, setX] = useState(0); // ❌ Invalid context
}
```

**Why?**
Only React components and custom hooks participate in React’s rendering lifecycle. External functions don’t.

---

### 3. **Use Hooks in the Same Order Every Time**

Avoid dynamically changing the number or order of hook calls. This ensures that React associates the right state with the right hook.

#### ✅ Consistent Order:

```jsx
function Component({ show }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  return show ? <p>{a}</p> : <p>{b}</p>;
}
```

#### ❌ Dynamic Hook Calls:

```jsx
function Component({ show }) {
  if (show) {
    const [a, setA] = useState(0); // ❌ Might not be called every render
    return <p>{a}</p>;
  }
  return <p>Nothing</p>;
}
```

---

### 4. **Naming Convention for Custom Hooks**

Always start custom hook names with `use` (e.g., `useFetch`, `useAuth`).

**Why?**
React uses the `use` prefix to identify functions that are hooks. This ensures they are checked for rules like call order and context.

---

### 5. **Do Not Call Hooks Inside Nested Functions**

Avoid calling hooks inside any nested or callback functions.

#### ❌ Incorrect:

```jsx
function Component() {
  function handleClick() {
    const [clicked, setClicked] = useState(false); // ❌ Don't do this
  }
  return <button onClick={handleClick}>Click</button>;
}
```

#### ✅ Correct:

```jsx
function Component() {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(true);
  }
  return <button onClick={handleClick}>Click</button>;
}
```

---

### Summary Table

| Rule | Description                                                       |
| ---- | ----------------------------------------------------------------- |
| 1    | Only call hooks at the top level of your component or custom hook |
| 2    | Only call hooks from React functions (components or custom hooks) |
| 3    | Call hooks in the same order on every render                      |
| 4    | Name custom hooks with `use` prefix                               |
| 5    | Never call hooks inside nested functions, loops, or conditions    |

---

### Additional Tip: Use ESLint Plugin

Use `eslint-plugin-react-hooks` to automatically catch violations of these rules during development.

```bash
npm install eslint-plugin-react-hooks --save-dev
```

Add this to `.eslintrc`:

```json
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

[🔝 Back to Top](#table-of-contents)

# What is useRef in React JS?

The `useRef` hook in React is a built-in hook that allows you to persist values between renders **without triggering a re-render** when the value changes. It can also be used to **access DOM elements directly**.

---

### Syntax:

```jsx
const myRef = useRef(initialValue);
```

- `initialValue`: The initial value you want to assign to the ref.
- `myRef.current`: This is where the mutable value is stored.

---

### Primary Use Cases:

1. **Accessing DOM elements**
2. **Storing mutable values that don't cause re-renders**
3. **Keeping track of previous state values**

---

### 1. Accessing DOM Elements

```jsx
import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Direct DOM access
  }, []);

  return <input ref={inputRef} type='text' placeholder='Focus on load' />;
}
```

**Explanation:**

- `inputRef` is attached to the input DOM element.
- `useEffect` runs after the component mounts and focuses the input.

---

### 2. Storing Mutable Values (Without Causing Re-Renders)

```jsx
function Timer() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log("Current count:", countRef.current);
  };

  return <button onClick={increment}>Increment</button>;
}
```

**Explanation:**

- `countRef.current` is incremented without re-rendering the component.
- This is useful when you want to hold data without triggering UI updates.

---

### 3. Tracking Previous State

```jsx
function PreviousValue({ value }) {
  const prevValue = useRef();

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <p>Current: {value}</p>
      <p>Previous: {prevValue.current}</p>
    </div>
  );
}
```

**Explanation:**

- `prevValue` stores the previous prop value across renders.
- Common pattern for comparing changes.

---

### Key Notes:

- `useRef` **does not notify** when its value changes.
- Good for storing **mutable references**, like timeouts, intervals, or DOM nodes.
- It's often compared to `useState`, but unlike `useState`, updates to `useRef.current` **do not cause re-renders**.

---

### When _Not_ to Use `useRef`

- Do not use it for reactive state (e.g., something that should reflect in the UI).
- Prefer `useState` or `useReducer` for values that affect rendering.

---

### Summary Table

| Feature             | `useRef`                       |
| ------------------- | ------------------------------ |
| Triggers Re-render? | ❌ No                          |
| Stores DOM Ref?     | ✅ Yes                         |
| Mutable Value?      | ✅ Yes                         |
| UI Reflective?      | ❌ No (use `useState` instead) |

---

`useRef` is a powerful tool for managing non-UI logic, DOM access, and optimizing performance-critical areas of your app without unnecessary re-renders.

[🔝 Back to Top](#table-of-contents)

# What is the difference between useRef and createRef?

Understanding the difference between `useRef` and `createRef` is crucial for senior React developers, especially when working with function components versus class components.

---

### `useRef`

- **Introduced in:** React 16.8
- **Usage Context:** Function components
- **Persistence:** Returns a mutable ref object whose `.current` property persists across renders.
- **Common Use Cases:**
  - Accessing DOM elements.
  - Storing mutable values that do not trigger re-renders when changed.

#### Example:

```jsx
import { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type='text' placeholder='Focus me on mount' />;
}
```

- **Note:** `inputRef.current` is the actual DOM node. It stays the same across re-renders unless reassigned.

---

### `createRef`

- **Introduced in:** React 16.3
- **Usage Context:** Class components (but can technically be used in function components too).
- **Persistence:** Returns a new ref object every time it is called.
- **Drawback in Function Components:** If called inside a function component, it creates a new ref on every render, which makes it unsuitable for persisting values.

#### Example:

```jsx
import React, { createRef, Component } from "react";

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <input ref={this.inputRef} type='text' placeholder='Focus me on mount' />
    );
  }
}
```

---

### Key Differences

| Feature            | `useRef` (Function Component)              | `createRef` (Class Component)             |
| ------------------ | ------------------------------------------ | ----------------------------------------- |
| Component Type     | Function components                        | Class components                          |
| Value Persistence  | Persistent across renders                  | New reference on each render              |
| Usage Pattern      | Use for storing instance variables or refs | Mostly for DOM access in class components |
| Updates Component? | No (does not trigger re-render)            | No (also does not trigger re-render)      |

---

### Summary

- **Use `useRef`** in **function components** for accessing DOM elements or persisting mutable variables.
- **Use `createRef`** in **class components** to create refs to access DOM or child components.

Using `createRef` inside function components can lead to unexpected behavior since the ref is re-initialized on every render. Prefer `useRef` for functional patterns.

Would you like a comparison involving `forwardRef` as well?

[🔝 Back to Top](#table-of-contents)

# What is useTransition hook, and how does it work?

The `useTransition` hook, introduced in **React 18**, enables developers to differentiate between **urgent** and **non-urgent** state updates. It allows non-urgent updates (transitions) to be deferred, keeping the UI responsive.

---

### Why Use `useTransition`?

In many apps, some updates are more important (e.g., typing input) while others can be delayed (e.g., updating a long list). `useTransition` helps prioritize updates for better user experience.

---

### Syntax

```jsx
const [isPending, startTransition] = useTransition();
```

- `isPending`: A boolean indicating whether the transition is ongoing.
- `startTransition`: A function to wrap non-urgent updates.

---

### Example

```jsx
const [query, setQuery] = useState("");
const [results, setResults] = useState([]);
const [isPending, startTransition] = useTransition();

const handleInputChange = (e) => {
  const value = e.target.value;
  setQuery(value); // urgent update

  startTransition(() => {
    const filtered = expensiveSearch(value);
    setResults(filtered); // non-urgent update
  });
};
```

### Output Behavior

- UI updates from `setQuery` are immediate.
- `setResults` update might be deferred if React needs to prioritize more urgent rendering.
- `isPending` is `true` while the transition is in progress (e.g., show a loading spinner).

---

### Benefits

- Keeps the app responsive during heavy updates.
- Improves perceived performance.
- Simple to integrate into existing logic.

---

### Summary Table

| Element           | Description                           |
| ----------------- | ------------------------------------- |
| `startTransition` | Marks non-urgent state updates        |
| `isPending`       | Flags if transition is in progress    |
| Main Benefit      | Prevents blocking on heavy operations |

---

The `useTransition` hook is key in enabling smoother user interactions by handling performance-sensitive updates in modern React apps.

[🔝 Back to Top](#table-of-contents)

# What is useDeferredValue in React 18?

React 18 introduced `useDeferredValue` as part of its concurrent rendering features. It allows developers to defer re-rendering of non-urgent parts of the UI, thereby improving the responsiveness of critical interactions like typing, clicking, or navigation.

---

### 🔍 What is `useDeferredValue`?

`useDeferredValue` is a React Hook that returns a deferred version of a value. React will try to keep the deferred value updated, but it may delay the update to prioritize more urgent renders.

---

### 📌 Use Case

Useful when you want to prioritize user interactions (e.g., typing) over non-critical updates (e.g., filtering a large list).

---

### 📘 Syntax

```js
const deferredValue = useDeferredValue(value);
```

- `value`: The input value you want to defer.
- `deferredValue`: The output value that updates less urgently.

---

### ✅ Example: Search Filter Optimization

```jsx
import React, { useState, useDeferredValue } from "react";

const SearchComponent = () => {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  const filteredItems = expensiveFilterFunction(deferredInput);

  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Search...'
      />

      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

function expensiveFilterFunction(query) {
  const items = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
  }));
  return items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}

export default SearchComponent;
```

### 💡 Explanation

- `input` is updated immediately on every keystroke.
- `deferredInput` may lag slightly behind `input`, giving React time to update more urgent parts (like keeping the input responsive).
- Filtering is done based on the deferred value, improving perceived performance.

---

### 🚀 Benefits

- Prioritizes high-urgency updates.
- Prevents UI blocking in expensive operations.
- Works well with concurrent rendering features.

---

### ⚠️ Notes

- Not a replacement for debouncing or throttling.
- Useful when the UI should remain responsive during heavy computations.

---

### Summary

`useDeferredValue` improves the responsiveness of React applications by deferring low-priority updates. It enables smoother UX, especially when dealing with expensive calculations or rendering large lists during user input.

[🔝 Back to Top](#table-of-contents)

# What is the new startTransition function in React 18?

`startTransition()` is a new API introduced in **React 18** that allows developers to mark updates as **non-urgent**. These updates, known as **transitions**, tell React that the update can be interrupted and doesn't need to happen immediately.

It’s part of React’s **concurrent rendering** capabilities, designed to improve performance and responsiveness in modern applications.

---

## Why Do We Need It?

In traditional rendering, **all state updates are treated as urgent**, which can lead to janky UI when complex or slow renders block more immediate interactions like typing.

`startTransition()` solves this by letting React prioritize **urgent updates** (e.g., input field typing) over **non-urgent ones** (e.g., search result updates).

---

## Basic Syntax

```jsx
import { startTransition } from "react";

startTransition(() => {
  // Non-urgent update
  setState(newValue);
});
```

You can also use the `useTransition` hook:

```jsx
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setFilteredData(expensiveComputation(input));
});
```

---

## Real-World Example

```jsx
function SearchComponent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const filtered = expensiveSearch(value);
      setResults(filtered);
    });
  };

  return (
    <div>
      <input type='text' value={query} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {results.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

### How it helps:

- Keeps typing snappy
- Defers expensive UI updates
- Renders fallback (`Loading...`) only if delay is noticeable

---

## Behavior Summary

| Feature                         | Behavior            |
| ------------------------------- | ------------------- |
| Interruptible                   | ✅ Yes              |
| Deferred priority               | ✅ Yes              |
| Keeps urgent updates responsive | ✅ Yes              |
| Causes fallback rendering       | ✅ Only when needed |
| Works with Suspense             | ✅ Yes              |

---

## When to Use `startTransition()`

- Filtering/searching large data sets
- Rendering tabs/pages with async content
- Deferring re-renders of heavy UI blocks
- Reducing jank during rapid user interaction

---

## Conclusion

React 18’s `startTransition()` provides developers with granular control over rendering priority, improving UX and responsiveness. It allows you to prioritize interactions like input and clicks while deferring expensive updates, unlocking the full power of **concurrent rendering** in modern React apps.

> 💡 Tip: Use `startTransition` thoughtfully — not all updates should be deferred. Only mark updates as transitions if deferring them improves user experience.

[🔝 Back to Top](#table-of-contents)

# What is the difference between useTransition and startTransition?

React 18 introduced **Concurrent Features** to improve rendering performance. Two key APIs that support deferred, non-blocking updates are:

- `startTransition()` – a top-level function
- `useTransition()` – a React hook

These APIs serve similar purposes but are used in **different contexts**.

---

## 1. `startTransition()` – Top-Level API

### Description:

A global function from React that wraps **non-urgent updates** and tells React to schedule them with lower priority.

### Syntax:

```jsx
import { startTransition } from "react";

startTransition(() => {
  setState(newValue);
});
```

### Use Case:

- Used **outside of React components** or **inside event handlers** when hooks are not ideal
- Useful in **class components** or **utilities outside the render tree**

### Example:

```jsx
function handleInputChange(value) {
  startTransition(() => {
    setFilteredData(filterHeavyList(value));
  });
}
```

---

## 2. `useTransition()` – Hook API

### Description:

A React hook that returns a transition state (`isPending`) along with the `startTransition` function. Allows tracking if a transition is ongoing.

### Syntax:

```jsx
const [isPending, startTransition] = useTransition();
```

### Use Case:

- Ideal for usage **inside functional components**
- You can show a **loading indicator** during the transition

### Example:

```jsx
function SearchComponent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const filtered = heavySearch(value);
      setResults(filtered);
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {results.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Summary Table

| Feature                         | `startTransition`          | `useTransition`              |
| ------------------------------- | -------------------------- | ---------------------------- |
| Type                            | Function                   | Hook                         |
| Usage Context                   | Anywhere (events, classes) | Inside functional components |
| Returns `isPending`?            | ❌ No                      | ✅ Yes                       |
| Ideal for Tracking UI State     | ❌ No                      | ✅ Yes                       |
| Works with Concurrent Rendering | ✅ Yes                     | ✅ Yes                       |

---

## Final Thoughts

Both `startTransition` and `useTransition` help prioritize urgent vs. non-urgent updates, enabling smoother and more responsive user experiences. For functional components, prefer `useTransition` to get loading state; use `startTransition` elsewhere to defer heavy updates.

> 🎯 Knowing when and where to use these APIs is critical for building performant apps and will be a key topic in senior React interviews.

[🔝 Back to Top](#table-of-contents)

# What is the useImperativeHandle hook?

`useImperativeHandle` is a React hook that allows a parent component to customize the instance value (i.e., methods or properties) that is exposed when using `ref` with a child component.

This is especially useful when a parent needs to **imperatively call methods** on a child component, but without exposing the entire internal implementation of the child.

---

### Syntax

```jsx
useImperativeHandle(ref, createHandle, [deps]);
```

- **ref**: The forwarded ref from the parent.
- **createHandle**: A function that returns an object containing the values/methods to expose.
- **deps**: Dependency array (optional) for memoization.

---

### When to Use

- When you want to expose a controlled API from a child component to its parent.
- When using `forwardRef` to pass refs down the component tree.
- To avoid exposing the full child component instance to the parent.

---

### Example: Exposing a focus method

```jsx
import React, { useRef, forwardRef, useImperativeHandle } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} type='text' placeholder='Type here...' />;
});

function ParentComponent() {
  const customInputRef = useRef();

  return (
    <div>
      <CustomInput ref={customInputRef} />
      <button onClick={() => customInputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
}
```

---

### Explanation

1. `CustomInput` is a child component using `forwardRef` to accept a `ref` from the parent.
2. Inside `CustomInput`, we use a local `inputRef` to access the DOM element.
3. With `useImperativeHandle`, we expose only a `focus()` method to the parent.
4. The parent (`ParentComponent`) uses the ref to trigger the input's focus method on button click.

---

### Why is this useful?

- **Encapsulation**: You avoid exposing the entire component internals.
- **Control**: The parent only accesses what you explicitly allow.
- **Flexibility**: Useful in reusable components where you may want to allow limited imperative control.

---

### Best Practices

- Use it sparingly; prefer declarative code over imperative interactions.
- Combine with `forwardRef`.
- Make sure exposed methods are minimal and well-documented.

---

`useImperativeHandle` is a powerful tool in advanced React component design, especially when building shared libraries or UI kits.

[🔝 Back to Top](#table-of-contents)

# What is the difference between useEffect and useLayoutEffect?

Both `useEffect` and `useLayoutEffect` are React hooks that allow you to run side effects in function components. However, they differ in **when** they are executed during the component lifecycle.

---

### `useEffect`

- **Purpose**: Used for performing side effects like data fetching, event listeners, subscriptions, or manipulating the DOM **after the component has rendered**.
- **Timing**: Fires **after the paint**.
- **Impact**: Non-blocking. Won't block the browser from updating the screen.
- **Best For**:
  - API calls
  - Setting up subscriptions
  - Analytics tracking
  - DOM mutations that don’t affect layout

#### Example:

```jsx
import { useEffect, useState } from "react";

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return <div>{data ? data.message : "Loading..."}</div>;
}
```

---

### `useLayoutEffect`

- **Purpose**: Like `useEffect`, but it fires **synchronously after all DOM mutations** and **before the browser repaints**.
- **Timing**: Fires **before the paint**.
- **Impact**: Blocking. Can delay paint, so use sparingly.
- **Best For**:
  - Reading layout or DOM measurements
  - Making DOM changes that must happen before paint
  - Avoiding visual flickers

#### Example:

```jsx
import { useLayoutEffect, useRef } from "react";

function LayoutComponent() {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    const width = divRef.current.offsetWidth;
    console.log("Width before paint:", width);
  }, []);

  return <div ref={divRef}>Measure me</div>;
}
```

---

### Summary Table

| Feature            | `useEffect`              | `useLayoutEffect`                 |
| ------------------ | ------------------------ | --------------------------------- |
| When it runs       | After paint              | Before paint                      |
| Blocking?          | No                       | Yes (blocks painting)             |
| Use for DOM reads? | No                       | Yes                               |
| Performance Impact | Low                      | Higher if misused                 |
| Common Use Cases   | API calls, subscriptions | Layout measurements, sync scrolls |

---

### Conclusion

Use `useEffect` by default. Reach for `useLayoutEffect` **only** when you need to measure DOM or synchronously update layout before the browser paints. Misusing `useLayoutEffect` can harm performance.

[🔝 Back to Top](#table-of-contents)

# How can we implement componentWillUnmount in function component?

In class components, React provides lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. In functional components, these are implemented using the `useEffect` hook and other React hooks like `useState` and `useRef`.

Below is a breakdown of how to implement the equivalent of class component lifecycle methods using functional components:

---

### 1. **componentDidMount**

> Runs once after the component mounts (initial render).

```jsx
import React, { useEffect } from "react";

function ComponentDidMountExample() {
  useEffect(() => {
    console.log("Component mounted");
  }, []); // empty dependency array

  return <div>Mounted Component</div>;
}
```

---

### 2. **componentDidUpdate**

> Runs after every re-render where specified dependencies change.

```jsx
import React, { useState, useEffect } from "react";

function ComponentDidUpdateExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}
```

---

### 3. **componentWillUnmount**

> Runs cleanup logic before the component is removed from the DOM.

```jsx
import React, { useEffect } from "react";

function ComponentWillUnmountExample() {
  useEffect(() => {
    const timer = setInterval(() => console.log("Tick"), 1000);

    return () => {
      clearInterval(timer);
      console.log("Component will unmount, timer cleared");
    };
  }, []);

  return <div>Timer is running</div>;
}
```

---

### 4. **shouldComponentUpdate**

> This method doesn’t have a direct equivalent but can be achieved using `React.memo` and custom comparison.

```jsx
import React from "react";

const MyComponent = React.memo(
  function MyComponent({ value }) {
    console.log("Rendered with value:", value);
    return <div>{value}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value; // prevent re-render if same
  }
);
```

---

### 5. **getDerivedStateFromProps**

> In functional components, this is typically handled using `useEffect` to sync state with props.

```jsx
import React, { useState, useEffect } from "react";

function SyncPropsToState({ propValue }) {
  const [stateValue, setStateValue] = useState(propValue);

  useEffect(() => {
    setStateValue(propValue);
  }, [propValue]);

  return <div>{stateValue}</div>;
}
```

---

### Summary Table

| Class Lifecycle          | Functional Component Equivalent            |
| ------------------------ | ------------------------------------------ |
| componentDidMount        | `useEffect(() => {}, [])`                  |
| componentDidUpdate       | `useEffect(() => {}, [dep])`               |
| componentWillUnmount     | `useEffect(() => { return () => {} }, [])` |
| shouldComponentUpdate    | `React.memo()`                             |
| getDerivedStateFromProps | `useEffect()` syncing state with props     |

These implementations offer functional components full control over lifecycle behaviors using hooks. Let me know if you’d like a code sandbox or runnable example.

[🔝 Back to Top](#table-of-contents)

# What are the new features introduced in React 18?

React 18 introduced several powerful and long-awaited features aimed at improving performance, enhancing user experience, and enabling concurrent rendering. Here's a detailed explanation of each key feature, along with examples:

---

## 1. **Concurrent Rendering (Concurrent Mode)**

**Overview**:
Concurrent Rendering is the cornerstone of React 18. It allows React to interrupt rendering tasks to prioritize more urgent updates (like user interactions), resulting in a smoother UI.

**Example**:

```jsx
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container); // Enables concurrent features
root.render(<App />);
```

**Benefits**:

- Improves responsiveness
- Makes complex UI updates feel faster

---

## 2. **Automatic Batching**

**Overview**:
React 18 batches state updates even across asynchronous boundaries like `setTimeout`, promises, and event handlers.

**Example**:

```jsx
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setCount((c) => c + 1);
      setFlag((f) => !f);
      // Both updates will be batched together
    }, 1000);
  };

  return <button onClick={handleClick}>Update</button>;
}
```

**Before React 18**: These updates would cause two re-renders.
**In React 18**: Only one re-render.

---

## 3. **startTransition API**

**Overview**:
`startTransition` helps differentiate between urgent and non-urgent updates. Transitions are deferred and interruptible.

**Example**:

```jsx
import { startTransition, useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const filtered = expensiveSearch(value);
      setResults(filtered);
    });
  };

  return <input onChange={handleChange} value={query} />;
}
```

**Use case**: Search bars, filters, etc.

---

## 4. **Suspense Improvements**

**Overview**:
React 18 enhances Suspense for data fetching with support for concurrent rendering. It can now wait for async operations and fallback gracefully.

**Example**:

```jsx
<Suspense fallback={<Spinner />}>
  <UserProfile />
</Suspense>
```

Combine this with frameworks like Relay or libraries like React Query for advanced data fetching.

---

## 5. **Streaming Server-Side Rendering (SSR) with Suspense**

**Overview**:
Server-side rendering in React 18 supports streaming HTML with Suspense, enabling faster time-to-first-byte and progressive hydration.

**Example (Next.js or Remix)**:
Use `pipeToNodeWritable` for streaming to Node.js:

```js
import { renderToPipeableStream } from "react-dom/server";

renderToPipeableStream(<App />, {
  onShellReady() {
    /* ... */
  },
});
```

---

## 6. **useId Hook**

**Overview**:
Provides a unique, consistent ID for client and server rendering.

**Example**:

```jsx
function Form() {
  const id = useId();

  return (
    <>
      <label htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} type='email' />
    </>
  );
}
```

**Use case**: Accessibility, SSR consistency.

---

## 7. **New Root API (`createRoot`)**

**Overview**:
Replaces `ReactDOM.render` to enable concurrent features.

**Example**:

```jsx
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
```

**Note**: Legacy `ReactDOM.render` is still available but doesn't support concurrent features.

---

## 8. **React 18 and Strict Mode Enhancements**

React 18 runs components mounted with Strict Mode twice (only in development) to detect unexpected side-effects.

**Purpose**: Help identify unsafe lifecycle patterns and improve app robustness before concurrent rendering.

---

## Summary Table

| Feature               | Purpose                                | Benefit                           |
| --------------------- | -------------------------------------- | --------------------------------- |
| Concurrent Rendering  | Split rendering tasks                  | Better responsiveness             |
| Automatic Batching    | Batch updates across async calls       | Fewer renders, better performance |
| startTransition       | Mark low-priority updates              | Smoother UI during updates        |
| Suspense Enhancements | Graceful fallback for async operations | Better loading states             |
| Streaming SSR         | Progressive rendering on server        | Faster page loads                 |
| useId                 | Unique, deterministic IDs              | SSR consistency                   |
| New Root API          | Enables concurrent rendering           | Foundation for React 18 features  |

---

React 18 is a significant step toward making UIs more interactive, scalable, and faster. Mastering these features is crucial for senior React developers.

[🔝 Back to Top](#table-of-contents)

# What is concurrent rendering in React 18?

Concurrent Rendering is one of the most transformative features introduced in React 18. It allows React to interrupt and pause rendering work to focus on more important updates, thereby improving responsiveness and user experience. This is a foundational change that enables many other features like `Suspense`, `startTransition`, and `automatic batching` to function more efficiently.

---

## 🚀 What is Concurrent Rendering?

In traditional (synchronous) rendering, React blocks the main thread until the entire render is completed. This could lead to performance issues if the UI is large or if the operation is computationally expensive.

**Concurrent Rendering** breaks this limitation by allowing React to:

- Interrupt rendering tasks
- Prioritize urgent updates (like clicks or input)
- Resume work later

This makes the UI smoother and more responsive, especially in complex applications.

---

## 🔄 How Does It Work?

Concurrent Rendering is not a mode you explicitly turn on in components. Instead, it's enabled automatically when you use the new root API:

```jsx
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

> Using `createRoot` instead of `ReactDOM.render` enables the concurrent capabilities.

---

## 🧠 Example: Simulating Heavy Computation

```jsx
import React, { useState, useTransition } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Mark this update as non-urgent
    startTransition(() => {
      const result = Array.from({ length: 5000 }, (_, i) => `${value} - ${i}`);
      setList(result);
    });
  };

  return (
    <div>
      <input type='text' value={input} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

### What’s Happening?

- `setInput` is an urgent update.
- `setList` is a deferred (non-urgent) update using `startTransition`.
- React interrupts and schedules rendering of the list separately to keep the input responsive.

---

## 📈 Benefits of Concurrent Rendering

| Benefit                     | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| Prioritized Rendering       | Keeps user interactions smooth by rendering urgent tasks first.   |
| Interruptible Tasks         | Long renders can pause and resume to avoid UI blocking.           |
| Better User Experience      | Especially for forms, search inputs, and real-time data updates.  |
| Foundation for New Features | Enables `Suspense`, `startTransition`, `automatic batching`, etc. |

---

## 🔐 Important Notes

- You don’t control **when** React switches tasks—it does so automatically.
- Concurrent rendering is **opt-in** via `createRoot()`.
- It requires a **mental model shift**—renders may be paused, aborted, or restarted.

---

## 🧠 Interview Insight

**Q: How would you explain concurrent rendering to a non-technical stakeholder?**  
A: Concurrent rendering makes the app feel faster and smoother by allowing the system to focus on what the user cares about most—like typing and clicking—without getting slowed down by other background tasks.

---

React 18’s concurrent rendering is a game-changer for building highly interactive, performant applications. Understanding and leveraging it effectively can set you apart as a senior React developer.

[🔝 Back to Top](#table-of-contents)

# How does automatic batching work in React 18?

Automatic Batching is a powerful feature introduced in React 18 that improves performance by reducing the number of re-renders. It does this by automatically grouping multiple state updates into a single re-render—even when those updates occur in asynchronous code (like timeouts, promises, or native event handlers).

---

## 🧠 What is Batching?

**Batching** is the process where React groups multiple `setState` calls into a single update to avoid unnecessary re-renders.

**Before React 18**:

- Batching only happened inside React event handlers (e.g., `onClick`, `onChange`).
- Updates outside React's scope (e.g., `setTimeout`, `fetch`) caused multiple re-renders.

**With React 18**:

- Batching now works **automatically** across more contexts, including:
  - Promises
  - `setTimeout` / `setInterval`
  - Native event handlers
  - Custom event listeners

---

## 🧪 Example: Pre-React 18 Behavior

```jsx
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = () => {
    setTimeout(() => {
      setCount((c) => c + 1); // causes one render
      setText("Updated"); // causes another render
    }, 1000);
  };

  return <button onClick={handleClick}>Update</button>;
}
```

> In React 17, this causes **two re-renders**.

---

## ✅ React 18 Behavior (Automatic Batching)

```jsx
import { createRoot } from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = () => {
    setTimeout(() => {
      setCount((c) => c + 1);
      setText("Updated");
      // Only one render will happen here in React 18
    }, 1000);
  };

  return <button onClick={handleClick}>Update</button>;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

> In React 18, both `setState` calls are batched, resulting in **only one re-render**.

---

## 🚀 Benefits of Automatic Batching

| Benefit               | Description                                          |
| --------------------- | ---------------------------------------------------- |
| Improved Performance  | Fewer re-renders, which means faster UI updates.     |
| Cleaner Code          | No need to manually batch updates.                   |
| Works with Async Code | Enhances state updates in real-world async scenarios |

---

## 🔧 Manual Batching (Optional API)

If you need to **manually batch** updates (e.g., in legacy setups), React provides a utility:

```jsx
import { flushSync } from "react-dom";

flushSync(() => {
  setCount((c) => c + 1);
  setText("Manual update");
});
```

> Use `flushSync` to force synchronous re-rendering in special cases (e.g., animations).

---

## ⚠️ Caveats

- Automatic batching works **only** with `createRoot`.
- Batching may delay `useEffect` and `layout effect` execution slightly—ensure correctness.

---

## 🧠 Interview Insight

**Q: Why is automatic batching important in React 18?**  
**A:** It reduces unnecessary renders, improves performance, and simplifies code, especially in asynchronous contexts where manual batching was previously required.

---

React 18's automatic batching makes your apps more efficient out of the box. As a senior developer, understanding how and when updates are batched helps in writing performant, predictable UIs.

[🔝 Back to Top](#table-of-contents)

# How has React 18 improved Suspense

React 18 brings major enhancements to **Suspense**, making it a first-class tool for handling asynchronous operations in both the client and server. While Suspense was introduced in earlier versions for lazy-loading components, React 18 expands its scope significantly with full support for **Concurrent Rendering** and **Server-Side Rendering (SSR)**.

---

## 🎯 What is Suspense?

Suspense is a React feature that allows you to "suspend" rendering while data is being loaded or a component is being lazily imported. It provides a fallback UI (like a spinner or placeholder) until the operation completes.

### Basic Usage Example

```jsx
import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./MyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

---

## 🚀 What’s New in React 18

### 1. **Concurrent Rendering Support**

React 18 integrates Suspense with the concurrent renderer, allowing for interruptible and prioritized rendering. This means you can delay rendering parts of the UI without blocking the whole app.

### 2. **Suspense for Data Fetching**

With libraries like **React Query**, **Relay**, or the new `use` hook (experimental), Suspense can be used to wait for asynchronous data:

```jsx
function Post({ postId }) {
  const post = use(fetchPost(postId)); // experimental
  return <div>{post.title}</div>;
}

function App() {
  return (
    <Suspense fallback={<div>Loading post...</div>}>
      <Post postId={1} />
    </Suspense>
  );
}
```

### 3. **Streaming Server-Side Rendering (SSR)**

React 18 introduces a new SSR architecture based on streaming, where Suspense boundaries act as checkpoints for streaming HTML to the client:

```jsx
import { renderToPipeableStream } from "react-dom/server";

const { pipe } = renderToPipeableStream(<App />, {
  onShellReady() {
    pipe(response); // start streaming partial HTML
  },
  onAllReady() {
    // fallback when everything is ready
  },
});
```

Now, the server can send HTML as soon as it's available and progressively stream additional content as it resolves.

### 4. **SuspenseList** (Stable)

React 18 stabilizes `SuspenseList`, which lets you coordinate multiple Suspense components:

```jsx
<SuspenseList revealOrder='forwards'>
  <Suspense fallback={<Spinner />}>
    {" "}
    <ComponentA />{" "}
  </Suspense>
  <Suspense fallback={<Spinner />}>
    {" "}
    <ComponentB />{" "}
  </Suspense>
</SuspenseList>
```

This improves perceived performance by revealing components in a specified order.

---

## ✅ Benefits of Suspense in React 18

| Feature                   | Benefit                                                               |
| ------------------------- | --------------------------------------------------------------------- |
| Concurrent rendering      | More responsive UIs, better prioritization                            |
| Data fetching integration | Simpler mental model for handling async data                          |
| Streaming SSR             | Faster Time-to-First-Byte (TTFB) and better perceived performance     |
| SuspenseList              | Fine-grained control over how loading states are revealed to the user |

---

## ⚠️ Considerations

- Native data fetching with Suspense is still **experimental** (e.g., the `use` hook).
- Works best with frameworks like **Next.js 13+**, **Relay**, or libraries designed to integrate with Suspense.

---

## 🧠 Interview Insight

**Q: How has Suspense evolved in React 18?**  
**A:** React 18 makes Suspense more powerful by integrating it with concurrent rendering, enabling SSR streaming, and coordinating multiple loading states with SuspenseList. It’s no longer just for lazy-loading—it’s a foundational primitive for async UI.

---

React 18 transforms Suspense from a lazy-loading tool into a core building block for async UIs. Mastering it is essential for senior-level React development, especially in modern SSR and concurrent rendering scenarios.

[🔝 Back to Top](#table-of-contents)

# How do you use the Concurrent Features introduced in React 18?

React 18 introduces **Concurrent Features** that allow React to interrupt, pause, resume, and abandon rendering tasks. These features improve user experience by keeping apps responsive during heavy or asynchronous operations.

---

## 🚀 What Are Concurrent Features?

Concurrent Features allow React to:

- **Interrupt rendering** to respond to user input.
- **Defer non-urgent updates**.
- **Prioritize critical tasks** over less important ones.
- **Batch multiple updates together**, even if they're async.

React 18 enables these features when you use the new `createRoot` API.

```jsx
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container); // 🚀 Enables concurrent rendering
root.render(<App />);
```

> ⚠️ The legacy `ReactDOM.render` does **not** enable concurrent features.

---

## 🛠️ Core Concurrent Features

### 1. **Automatic Batching**

Automatically groups multiple state updates—even in timeouts, promises, and native events—into a single render.

```jsx
setTimeout(() => {
  setState1("A");
  setState2("B");
  // Only one re-render in React 18
}, 1000);
```

### 2. **startTransition / useTransition**

Marks non-urgent updates as transitions so they can be interrupted.

#### `startTransition` (Imperative)

```jsx
import { startTransition } from "react";

function handleSearch(input) {
  startTransition(() => {
    setSearchQuery(input); // Non-urgent update
  });
}
```

#### `useTransition` (Declarative)

```jsx
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setValue(input);
});

return isPending ? <Spinner /> : <Results data={value} />;
```

### 3. **Suspense Enhancements**

Suspense is now integrated with concurrent rendering to better handle lazy loading and data fetching with fine control over UI interruptions.

```jsx
<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

### 4. **Streaming Server-Side Rendering (SSR)**

React 18’s `renderToPipeableStream` allows streaming HTML from the server, improving Time to First Byte (TTFB).

```jsx
import { renderToPipeableStream } from "react-dom/server";

const stream = renderToPipeableStream(<App />, {
  onShellReady() {
    stream.pipe(response);
  },
});
```

---

## 💡 Real-world Example: Search with Transition

```jsx
import { useState, useTransition } from "react";

function SearchApp() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    startTransition(() => {
      const filtered = searchData(value); // simulate filtering
      setResults(filtered);
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending && <span>Loading...</span>}
      <ul>
        {results.map((r) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## ✅ Benefits of Concurrent Features

| Feature              | Benefit                                                |
| -------------------- | ------------------------------------------------------ |
| Automatic Batching   | Fewer re-renders, better performance                   |
| Transitions          | UI stays responsive during non-urgent updates          |
| Suspense Integration | Asynchronous loading with smoother fallback management |
| Streaming SSR        | Faster page load with partial HTML rendering           |

---

## 🧠 Interview Insight

**Q: How do you use concurrent features in React 18?**  
**A:** Use `createRoot` to enable concurrent mode. Leverage `startTransition` or `useTransition` to mark non-urgent updates, benefit from automatic batching for better performance, and wrap lazy components or data fetchers in `Suspense` for smooth async rendering.

---

Mastering these concurrent features equips you to build fast, responsive apps and handle performance-critical scenarios—a must-have skill for a senior React developer.

[🔝 Back to Top](#table-of-contents)

# How does React 18 enhance server-side rendering (SSR)?

React 18 significantly improves Server-Side Rendering (SSR) capabilities, focusing on **performance**, **streaming**, and **developer experience**. These enhancements make it easier to render content faster and progressively hydrate the page on the client side.

---

## 🧠 Why SSR Matters

SSR improves:

- **SEO**: Search engines can index fully rendered HTML.
- **Performance**: Users get content faster with faster Time to First Byte (TTFB).
- **User Experience**: Perceived performance improves through progressive rendering.

---

## 🔥 New SSR Features in React 18

### 1. `renderToPipeableStream` (Node.js)

Replaces `renderToNodeStream` with support for **streaming HTML** to the client. Works better with Suspense and allows partial HTML to be sent as components become ready.

#### Example:

```jsx
import { renderToPipeableStream } from "react-dom/server";
import express from "express";
import App from "./App";

const app = express();

app.get("/", (req, res) => {
  const stream = renderToPipeableStream(<App />, {
    onShellReady() {
      res.setHeader("Content-Type", "text/html");
      stream.pipe(res); // Start streaming immediately
    },
    onError(err) {
      console.error(err);
    },
  });
});
```

### 2. `renderToReadableStream` (for Edge and Web Streams)

Useful in environments like Cloudflare Workers, Deno, and modern runtimes supporting Web Streams.

#### Example:

```js
import { renderToReadableStream } from "react-dom/server";

const stream = await renderToReadableStream(<App />);
return new Response(stream, {
  headers: { "Content-Type": "text/html" },
});
```

### 3. **Streaming with Suspense**

Suspense boundaries now control when specific parts of the HTML are streamed. This means:

- Critical UI loads immediately.
- Non-critical content streams later without blocking.

```jsx
<Suspense fallback={<div>Loading header...</div>}>
  <Header />
</Suspense>
<Suspense fallback={<div>Loading content...</div>}>
  <Content />
</Suspense>
```

React sends HTML for `Header` and `Content` as each becomes available.

### 4. **Selective Hydration**

Only the parts of the page the user interacts with are hydrated first. This minimizes JS execution, improving perceived interactivity.

---

## ⚙️ Comparison: React 17 vs React 18 SSR

| Feature                  | React 17             | React 18                        |
| ------------------------ | -------------------- | ------------------------------- |
| Streaming                | `renderToNodeStream` | `renderToPipeableStream` (Node) |
| Edge/Web Compatibility   | ❌                   | `renderToReadableStream` ✅     |
| Suspense SSR Integration | Limited              | Full support ✅                 |
| Selective Hydration      | ❌                   | ✅                              |

---

## ✅ Benefits of React 18 SSR

| Feature              | Benefit                                             |
| -------------------- | --------------------------------------------------- |
| Streaming HTML       | Faster TTFB, better perceived load time             |
| Suspense Integration | Progressive rendering of UI                         |
| Selective Hydration  | Lower JS execution, faster interactivity            |
| Web stream support   | Run SSR in modern runtimes (Cloudflare, Deno, etc.) |

---

## 🧠 Interview Insight

**Q: How does React 18 improve SSR?**

**A:** React 18 introduces `renderToPipeableStream` and `renderToReadableStream` for true streaming SSR. It allows partial HTML to be streamed as it becomes ready using Suspense boundaries and supports selective hydration, making pages interactive faster and reducing JS overhead.

---

Mastering React 18 SSR is crucial for building fast, scalable applications that deliver excellent user experience and SEO performance.

[🔝 Back to Top](#table-of-contents)

# What is React Server Components, and how does it work with React 18?

React Server Components (RSC) are a powerful feature that lets you build modern web applications by rendering components **on the server** and sending them as serialized HTML and data to the client. They aim to improve performance, reduce JavaScript bundle sizes, and optimize the developer experience.

---

## 🎯 Goal of React Server Components

- Reduce **client-side JavaScript**.
- Offload logic-heavy operations (e.g., DB calls, auth) to the **server**.
- Enable **better SSR and streaming** integration with React 18.
- Improve initial load performance by rendering non-interactive parts server-side.

---

## 🧱 How Server Components Work

React introduces two types of components:

| Component Type        | Runs On | Purpose                          |
| --------------------- | ------- | -------------------------------- |
| **Server Components** | Server  | Fetch data, render static markup |
| **Client Components** | Client  | Handle interactivity and state   |

In React 18 (e.g., via Next.js 13+ with App Router), components are marked with directives:

```tsx
// app/page.tsx (Server Component by default)
export default function Page() {
  return <PostList />;
}

// app/components/PostList.tsx
import { getPosts } from "../lib/data";

export default async function PostList() {
  const posts = await getPosts(); // Runs on the server
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// app/components/LikeButton.tsx
("use client"); // 👈 Marks this as a Client Component

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>{liked ? "Liked" : "Like"}</button>
  );
}
```

---

## 🔄 How RSC Integrates with React 18

React 18 provides the underlying rendering engine that makes streaming and hydration of server-rendered content efficient.

Key integration points:

1. **Streaming with Suspense** — Partial UI renders as data is fetched.
2. **Selective Hydration** — Only interactive components are hydrated on the client.
3. **Zero JS for Server Components** — They are never sent to the client.

---

## ⚡ Benefits of Server Components

| Benefit                  | Explanation                                             |
| ------------------------ | ------------------------------------------------------- |
| Smaller JS Bundles       | Server-only code is excluded from client bundle         |
| Faster Page Loads        | HTML is rendered and streamed from server               |
| Improved Security        | Sensitive logic (e.g., DB access) runs server-side only |
| Better DX with Streaming | Seamless integration with Suspense and React 18 SSR     |

---

## 🚧 Limitations

- Cannot use state, effects (`useState`, `useEffect`) in server components.
- Server components can **only render client components**, not the other way around.
- Must be supported by your framework (e.g., **Next.js 13+ with App Router**).

---

## 📘 Real-World Example

```tsx
// Server Component
// app/posts/page.tsx
import PostList from "../../components/PostList";

export default function PostsPage() {
  return (
    <div>
      <h1>All Posts</h1>
      <PostList />
    </div>
  );
}

// Server Component (fetches data only on server)
// app/components/PostList.tsx
import { getPosts } from "@/lib/posts";

export default async function PostList() {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// Client Component for interactivity
// app/components/LikeButton.tsx
("use client");

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "🤍"}</button>
  );
}
```

---

## 🧠 Interview Insight

**Q: What are React Server Components and how do they work in React 18?**

**A:** React Server Components allow rendering of logic-heavy, non-interactive parts of your app on the server. Combined with React 18’s concurrent rendering and streaming capabilities, they reduce JS bundle size, improve TTFB, and make apps more performant. They can't hold state or side effects and are designed to work with frameworks like Next.js.

---

Understanding and using RSC in React 18 sets you apart as a modern, performance-oriented senior developer. It's the future of scalable React apps.

[🔝 Back to Top](#table-of-contents)

# What role does the concurrentMode flag play in React 18?

React 18 introduces **Concurrent Mode** features as the default behavior without needing an explicit `concurrentMode` flag like in previous experimental versions. However, it's still important to understand the concept, especially for interviews or migration contexts.

---

## 🎯 What is Concurrent Mode?

Concurrent Mode is a set of new rendering capabilities in React that allow:

- Interruptible rendering
- Better prioritization of UI updates
- Improved responsiveness and performance

React 18 replaces the old opt-in `concurrentMode` flag with **automatic concurrency** via `createRoot`.

---

## ✅ Behavior Before React 18

In React 17 and earlier, to enable Concurrent Mode, you needed:

```jsx
import { unstable_createRoot as createRoot } from "react-dom";
const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

Or, in experimental releases:

```jsx
<React.unstable_ConcurrentMode>
  <App />
</React.unstable_ConcurrentMode>
```

---

## 🚀 What Changed in React 18?

React 18 removed the need for a `concurrentMode` flag and instead introduced:

### 🔹 `createRoot()`

This API enables concurrent rendering **by default**.

```jsx
// React 18
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container); // Concurrent features enabled here
root.render(<App />);
```

If you still use `ReactDOM.render()`, it will **not** enable concurrent features.

---

## 🧱 Features Enabled via Concurrent Rendering

| Feature            | Enabled via `createRoot()` |
| ------------------ | -------------------------- |
| Automatic Batching | ✅                         |
| Transition API     | ✅                         |
| `startTransition`  | ✅                         |
| `useDeferredValue` | ✅                         |
| `useTransition`    | ✅                         |
| Streaming SSR      | ✅                         |

---

## 📘 Real-World Example

```tsx
// index.tsx (React 18 Entry Point)
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Enables concurrent features
root.render(<App />);
```

With this setup, your app gains access to concurrent features such as:

```tsx
const [isPending, startTransition] = useTransition();

const handleClick = () => {
  startTransition(() => {
    // low-priority update
    setFilter(input);
  });
};
```

---

## 🧠 Interview Insight

**Q: What is the `concurrentMode` flag in React 18?**

**A:** React 18 no longer uses a `concurrentMode` flag. Instead, concurrent rendering is automatically enabled by using the `createRoot()` API from `react-dom/client`. This unlocks new features like automatic batching, transitions, and deferred values, improving app responsiveness and user experience.

---

Understanding how React 18 replaced the `concurrentMode` flag with `createRoot()` helps clarify how React’s concurrent features are now seamlessly integrated into modern React apps.

[🔝 Back to Top](#table-of-contents)

# What are React's new features in React 19?

React 19 introduces significant updates aimed at simplifying modern web development, enhancing performance, and improving developer ergonomics. Here's a detailed breakdown of each major feature, complete with examples for interview preparation.

---

## 1. ✅ **Actions API**

The new Actions API simplifies form submissions and data mutations by integrating them into the rendering flow. It supports `startTransition`, `redirect`, and built-in error handling.

### Example:

```tsx
"use client";
import { useActionState } from "react";

async function updateName(name) {
  if (!name) return "Name is required";
  await saveToServer(name);
  redirect("/success");
}

export default function NameForm() {
  const [error, formAction, isPending] = useActionState(updateName, undefined);

  return (
    <form action={formAction}>
      <input name='name' />
      <button disabled={isPending}>Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
}
```

---

## 2. 🔄 **New Hooks**

### 🧩 `useActionState`

Used to manage state for form actions, especially useful for loading/error states.

### 🧩 `useFormStatus`

Provides form submission state like `pending`, useful for conditional UI changes during form submission.

### 🧩 `useOptimistic`

Enables optimistic updates to UI before the server confirms them.

### 🧩 `use()`

Suspends component rendering until a promise resolves — allows using `await` inside components.

### Example using `use()`:

```tsx
import { use } from "react";

function Weather() {
  const data = use(fetch("/api/weather").then((res) => res.json()));
  return <p>{data.temp}°C</p>;
}
```

---

## 3. 🌐 **React Server Components (RSC)**

Server Components let you fetch and render on the server, reducing client-side JS. Ideal for performance and SEO.

### Example:

```tsx
// Server Component (runs on server only)
export default async function Posts() {
  const posts = await fetchPosts();
  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}
```

---

## 4. 💧 **Improved Hydration**

React 19 enhances hydration to make SSR pages interactive faster. It only hydrates what changes, reducing the time to interactivity, especially useful for slow networks.

---

## 5. ⚙️ **Enhanced Context API**

The Context API has improved performance with better updates and now supports context selectors to avoid unnecessary re-renders.

### Example (with useContextSelector):

```tsx
import { createContext } from "use-context-selector";

const UserContext = createContext({ name: "Jane", age: 30 });

function Username() {
  const name = useContextSelector(UserContext, (v) => v.name);
  return <span>{name}</span>;
}
```

---

## 6. 🌐 **Custom Elements Support**

React 19 adds official support for using native Custom Elements (Web Components).

### Example:

```tsx
function App() {
  return <my-custom-element someattr='value' />;
}
```

---

## 7. ⚡ **Resource Preloading**

React 19 supports built-in resource preloading (fonts, images, scripts). Useful for performance optimization and better Core Web Vitals.

---

## 🧠 Interview Tip

> "React 19 shifts focus toward full-stack React apps, bringing powerful SSR, form handling, and concurrency into the core. Understanding these APIs in depth can be a game-changer for building scalable and performant applications."

---

## 📌 Summary Table

| Feature              | Description                                     |
| -------------------- | ----------------------------------------------- |
| Actions API          | Streamlined form handling with transitions      |
| New Hooks            | Hooks for async state, optimistic UI, and forms |
| Server Components    | Server-rendered components for better perf      |
| Improved Hydration   | Faster interactive SSR pages                    |
| Enhanced Context API | Better performance, now with selectors          |
| Custom Elements      | Native Web Component support                    |
| Resource Preloading  | Faster page loads with prefetch hints           |

---

These improvements make React 19 a comprehensive framework for building fast, scalable, and modern web apps.

[🔝 Back to Top](#table-of-contents)

# Explain the concept of lifting state up in React.

# Lifting State Up in React

## Definition

Lifting state up means moving shared state from child components to their closest common parent component. This allows multiple components to access and modify the same state.

## Why Lift State?

- **Single Source of Truth**: Ensures all components use the same data
- **Synchronization**: Keeps components in sync automatically
- **Better Data Flow**: Makes state changes predictable
- **Reusability**: Child components become more reusable

## Implementation Steps

1. Identify components that share state
2. Move the state to their closest common parent
3. Pass the state down via props
4. Pass callback functions to modify state

## Example: Temperature Converter

```jsx
// Parent Component
function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  function handleCelsiusChange(value) {
    setTemperature(value);
    setScale("c");
  }

  function handleFahrenheitChange(value) {
    setTemperature(value);
    setScale("f");
  }

  return (
    <div>
      <TemperatureInput
        scale='c'
        temperature={
          scale === "f" ? convertToCelsius(temperature) : temperature
        }
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale='f'
        temperature={
          scale === "c" ? convertToFahrenheit(temperature) : temperature
        }
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}

// Child Component (Stateless)
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <input
      value={temperature}
      onChange={(e) => onTemperatureChange(e.target.value)}
      placeholder={`Enter ${scale.toUpperCase()}`}
    />
  );
}
```

### Key Benefits

- Parent component becomes the "single source of truth"

- Child components remain stateless and reusable

- Changes propagate automatically to all dependent components

### When to Use

✔ Multiple components need access to the same state
✔ Components need to stay synchronized
✔ You need to aggregate data from multiple children

### Potential Drawbacks

- Can lead to prop drilling in deep component trees

- Parent component may become complex

- May cause unnecessary re-renders without optimization

[🔝 Back to Top](#table-of-contents)

# How does one pass data between components in React

# Passing Data Between Components in React

# Passing Data Between Components in React

In React, component-based architecture promotes reusability and modular design. One of the most common tasks is passing data between components. This can be categorized into multiple methods:

1. [Parent to Child (Props)](#parent-to-child-props)
2. [Child to Parent (Callback Functions)](#child-to-parent-callback-functions)
3. [Sibling Components (Lifting State Up)](#sibling-components-lifting-state-up)
4. [Context API](#context-api)
5. [State Management Libraries](#state-management-libraries)
6. [Event Bus Pattern](#event-bus-pattern)

---

## Parent to Child (Props)

This is the most common and straightforward method.

```jsx
function Parent() {
  return <Child message='Hello from Parent' />;
}

function Child({ message }) {
  return <p>{message}</p>;
}
```

**Explanation:**

- The parent component (`Parent`) passes the `message` prop to the `Child`.
- The child accesses it via `props` (destructured here).

---

## Child to Parent (Callback Functions)

When a child needs to communicate with the parent, you pass a function from the parent to the child.

```jsx
function Parent() {
  const handleData = (data) => {
    console.log("Data from child:", data);
  };

  return <Child onSend={handleData} />;
}

function Child({ onSend }) {
  return <button onClick={() => onSend("Hello Parent")}>Send Data</button>;
}
```

**Explanation:**

- The parent defines a function `handleData`.
- This function is passed to the child as a prop (`onSend`).
- The child calls it when needed, sending data back to the parent.

---

## Sibling Components (Lifting State Up)

Siblings can't directly communicate, but their shared parent can mediate.

```jsx
function Parent() {
  const [message, setMessage] = React.useState("");

  return (
    <>
      <Sender onSend={setMessage} />
      <Receiver message={message} />
    </>
  );
}

function Sender({ onSend }) {
  return (
    <button onClick={() => onSend("Hi from Sender")}>Send to Sibling</button>
  );
}

function Receiver({ message }) {
  return <p>Received: {message}</p>;
}
```

**Explanation:**

- `Parent` holds the shared state (`message`).
- `Sender` updates it, and `Receiver` displays it.
- This pattern is typical in lifting state up.

---

## Context API

For deeply nested components or large apps, lifting state becomes cumbersome. React offers context to manage shared state more cleanly.

```jsx
const MessageContext = React.createContext();

function Parent() {
  const [message, setMessage] = React.useState("Hello Context");

  return (
    <MessageContext.Provider value={message}>
      <Child />
    </MessageContext.Provider>
  );
}

function Child() {
  const message = React.useContext(MessageContext);
  return <p>{message}</p>;
}
```

**Explanation:**

- A context is created with `React.createContext()`.
- The parent provides a value.
- Any child within the provider can access it using `useContext`.

---

## State Management Libraries

For complex state scenarios or larger applications, external state management libraries can be used. Examples include:

### Redux Example:

```jsx
// actions.js
export const setMessage = (message) => ({
  type: "SET_MESSAGE",
  payload: message,
});

// reducer.js
const initialState = { message: "" };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

// Component.jsx
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "./actions";

function Component() {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  return (
    <>
      <p>{message}</p>
      <button onClick={() => dispatch(setMessage("New Message"))}>
        Update
      </button>
    </>
  );
}
```

**Explanation:**

- Redux provides a centralized store.
- Components interact via `useSelector` and `useDispatch`.

Other libraries include Zustand, Recoil, MobX, etc.

---

## Event Bus Pattern

For decoupled communication without tight parent-child relationships, an event bus can be used.

### Example using EventEmitter:

```jsx
// eventBus.js
import EventEmitter from "events";
export const eventBus = new EventEmitter();

// ComponentA.jsx
import { eventBus } from "./eventBus";

function ComponentA() {
  return (
    <button onClick={() => eventBus.emit("customEvent", "Data from A")}>
      Emit Event
    </button>
  );
}

// ComponentB.jsx
import { useEffect, useState } from "react";
import { eventBus } from "./eventBus";

function ComponentB() {
  const [data, setData] = useState("");

  useEffect(() => {
    eventBus.on("customEvent", (msg) => setData(msg));
    return () => eventBus.removeAllListeners("customEvent");
  }, []);

  return <p>Received: {data}</p>;
}
```

**Explanation:**

- Components communicate via emitted events and listeners.
- Useful for cross-cutting concerns, though less common in React.

---

## Summary Table

| Direction          | Method                       | Use Case                                       |
| ------------------ | ---------------------------- | ---------------------------------------------- |
| Parent to Child    | Props                        | Passing static or dynamic data downward        |
| Child to Parent    | Callback Functions           | Handling events or passing data upward         |
| Sibling to Sibling | Lifting State Up             | Synchronizing between related child components |
| Deep/Nested Comps  | Context API                  | Avoid prop drilling in deeply nested trees     |
| Global Access      | Redux, Zustand, Recoil, etc. | Large-scale state sharing                      |
| Decoupled Comms    | Event Bus Pattern            | Communication between unrelated components     |

---

## Final Tips for Interview:

- Know when to lift state vs. use context.
- Be clear about unidirectional data flow.
- Understand prop drilling and how to avoid it with context or libraries.
- Familiarize yourself with Redux or Zustand basics.
- Explore alternatives like Recoil or Jotai if relevant to your role.
- Be prepared to write and reason through examples in interviews.

[🔝 Back to Top](#table-of-contents)

# What is Prop Drilling, and how can it be avoided?

Prop Drilling is a situation in React where data is passed from a parent component to deeply nested child components through intermediate components that do not necessarily need the data.

## Why It Happens

React follows a unidirectional data flow — state lives in parent components and is passed down to children via props. When a deeply nested component needs the data, and there’s no direct way to reach it, the data has to be passed through every intermediate component in the hierarchy.

## Example of Prop Drilling

```jsx
function App() {
  const user = { name: "Alice" };
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <p>Hello, {user.name}!</p>;
}
```

**Problem:**

- `Parent` and `Child` do not use the `user` prop, but they must pass it down for `GrandChild` to access it.

This makes the component structure harder to maintain and less reusable.

---

# How to Avoid Prop Drilling

## 1. Using React Context API

The Context API allows you to share values between components without explicitly passing props through every level.

```jsx
import React, { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  const user = { name: "Alice" };
  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const user = useContext(UserContext);
  return <p>Hello, {user.name}!</p>;
}
```

**Benefits:**

- Eliminates unnecessary prop passing.
- Improves component reusability.

## 2. State Management Libraries

For larger applications, tools like Redux, Zustand, Recoil, or MobX can centralize state management, avoiding the need to pass props manually.

### Redux Example (simplified):

```jsx
// store.js
const initialState = { user: { name: "Alice" } };

function reducer(state = initialState, action) {
  return state;
}

// GrandChild.jsx
import { useSelector } from "react-redux";

function GrandChild() {
  const user = useSelector((state) => state.user);
  return <p>Hello, {user.name}!</p>;
}
```

**Benefits:**

- Centralized global state.
- Avoids deeply nested prop chains.

## 3. Component Composition

Sometimes, using composition instead of prop drilling can help, especially if the component structure can be refactored to group related functionality.

---

# When Is Prop Drilling Acceptable?

- For small apps or simple hierarchies, prop drilling is fine and doesn't add complexity.
- Avoid premature optimization — don't reach for Context or Redux too early.

---

# Interview Tips

- Be able to explain the trade-offs.
- Show proficiency with both Context API and external libraries.
- Demonstrate awareness of maintainability and scalability concerns.

---

# Summary

| Technique             | Use Case                                        |
| --------------------- | ----------------------------------------------- |
| Prop Drilling         | Simple hierarchies, minimal state               |
| Context API           | Medium-scale apps, avoid drilling in deep trees |
| State Libraries       | Large-scale apps, shared or complex state       |
| Component Composition | Refactoring alternative to reduce prop passing  |

Understand each pattern and choose based on app size, complexity, and team preferences.

[🔝 Back to Top](#table-of-contents)

# What are default props in React?

Default props are values that a component uses when a specific prop is not provided. They help ensure components have fallback values and behave consistently even if some props are missing.

## Why Use Default Props?

- Prevent `undefined` errors.
- Improve code robustness.
- Provide sensible fallback behavior.

---

## Setting Default Props (Function Components)

In modern React (with ES6+), default props are typically defined using default parameters:

```jsx
function Greeting({ name = "Guest" }) {
  return <p>Hello, {name}!</p>;
}

// Usage
<Greeting />           // Output: Hello, Guest!
<Greeting name="John"/> // Output: Hello, John!
```

## Older Way (Using `defaultProps`)

This method is still valid but more common in class components or before default parameters were widespread.

```jsx
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

Greeting.defaultProps = {
  name: "Guest",
};
```

**Note:** As of React 17+, the `defaultProps` static property is not supported for function components in TypeScript without custom type workarounds.

---

## Default Props in Class Components

```jsx
class Greeting extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}

Greeting.defaultProps = {
  name: "Guest",
};
```

---

## Combining with PropTypes (Optional)

You can define expected types and defaults for better validation (useful in development):

```jsx
import PropTypes from "prop-types";

function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

Greeting.propTypes = {
  name: PropTypes.string,
};

Greeting.defaultProps = {
  name: "Guest",
};
```

---

## Summary Table

| Method                     | Component Type   | Recommendation             |
| -------------------------- | ---------------- | -------------------------- |
| Default Parameters         | Functional       | ✅ Modern and clean        |
| `Component.defaultProps`   | Class / Function | ✅ Still valid for classes |
| `PropTypes + defaultProps` | Class / Function | ✅ For prop validation     |

---

## Interview Tips

- Prefer ES6 default parameters for function components.
- Understand the fallback mechanism.
- Know when and how to use `defaultProps` and `PropTypes`.
- Mention that defaults help in preventing bugs and improving maintainability.

[🔝 Back to Top](#table-of-contents)

# Explain the React lifecycle methods in detail.

React lifecycle methods are special functions each component can have that allow you to hook into specific moments in a component's life — from its creation to updates and eventual removal from the DOM.

Lifecycle methods are available in **class components**. Functional components use **Hooks** (like `useEffect`) to achieve similar behavior.

---

## Phases of Component Lifecycle

1. **Mounting** – Component is being inserted into the DOM.
2. **Updating** – Component is being re-rendered due to changes in props or state.
3. **Unmounting** – Component is being removed from the DOM.
4. **Error Handling** – Error occurred during rendering or in lifecycle methods.

---

## 1. Mounting Phase

These methods are called in this order:

### `constructor(props)`

- Initializes state and binds methods.
- Avoid side effects here.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
```

### `static getDerivedStateFromProps(props, state)`

- Syncs state with props.
- Rarely used; returns new state or `null`.

```jsx
static getDerivedStateFromProps(props, state) {
  if (props.value !== state.prevValue) {
    return { derivedValue: props.value, prevValue: props.value };
  }
  return null;
}
```

### `render()`

- Returns JSX to render UI.
- **Pure** function; no side effects.

```jsx
render() {
  return <div>{this.state.count}</div>;
}
```

### `componentDidMount()`

- Invoked once after initial render.
- Good place for side effects like API calls or subscriptions.

```jsx
componentDidMount() {
  fetchData().then(data => this.setState({ data }));
}
```

---

## 2. Updating Phase

Triggered by changes in props, state, or `forceUpdate()`.

### `static getDerivedStateFromProps(props, state)`

- Called on every update.

### `shouldComponentUpdate(nextProps, nextState)`

- Used for performance optimization.
- Return `false` to skip rendering.

```jsx
shouldComponentUpdate(nextProps, nextState) {
  return nextState.count !== this.state.count;
}
```

### `render()`

- Called again if `shouldComponentUpdate` returns `true`.

### `getSnapshotBeforeUpdate(prevProps, prevState)`

- Captures DOM info before changes are applied.
- Return value is passed to `componentDidUpdate`.

```jsx
getSnapshotBeforeUpdate(prevProps, prevState) {
  return window.scrollY;
}
```

### `componentDidUpdate(prevProps, prevState, snapshot)`

- Called after render.
- Use it for operations based on previous props/state or `snapshot`.

```jsx
componentDidUpdate(prevProps, prevState, snapshot) {
  if (snapshot !== null) {
    console.log('Previous scroll position:', snapshot);
  }
}
```

---

## 3. Unmounting Phase

### `componentWillUnmount()`

- Clean up tasks like clearing timers, unsubscribing, etc.

```jsx
componentWillUnmount() {
  clearInterval(this.timer);
}
```

---

## 4. Error Handling Phase

### `componentDidCatch(error, info)`

- Catches errors in child components.
- Use to log errors or show fallback UI.

```jsx
componentDidCatch(error, info) {
  logErrorToService(error, info);
}
```

### `static getDerivedStateFromError(error)`

- Update state to show fallback UI.

```jsx
static getDerivedStateFromError(error) {
  return { hasError: true };
}
```

---

## React Lifecycle Diagram (Class Components)

```
Mounting:
  constructor() → getDerivedStateFromProps() → render() → componentDidMount()

Updating:
  getDerivedStateFromProps() → shouldComponentUpdate() → render() → getSnapshotBeforeUpdate() → componentDidUpdate()

Unmounting:
  componentWillUnmount()

Error Handling:
  getDerivedStateFromError() → componentDidCatch()
```

---

## Functional Components Equivalent

In functional components, `useEffect` replaces multiple lifecycle methods:

```jsx
import React, { useState, useEffect } from "react";

function MyComponent({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("componentDidMount & componentDidUpdate");
    return () => {
      console.log("componentWillUnmount");
    };
  }, [value]);

  return <div>{count}</div>;
}
```

---

## Interview Tips

- Memorize the order of lifecycle methods.
- Know side-effect-friendly methods: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.
- Be ready to convert lifecycle logic into `useEffect` equivalents.
- Demonstrate understanding of performance optimization (`shouldComponentUpdate`).

---

## Summary Table

| Phase      | Method                   | Purpose                        |
| ---------- | ------------------------ | ------------------------------ |
| Mounting   | constructor              | Initialize state, bind methods |
|            | getDerivedStateFromProps | Sync props to state            |
|            | render                   | Render UI                      |
|            | componentDidMount        | Fetch data, side effects       |
| Updating   | shouldComponentUpdate    | Optimize rendering             |
|            | getSnapshotBeforeUpdate  | Capture DOM state              |
|            | componentDidUpdate       | React to updates               |
| Unmounting | componentWillUnmount     | Cleanup                        |
| Error      | getDerivedStateFromError | Set fallback state             |
|            | componentDidCatch        | Log or show error UI           |

[🔝 Back to Top](#table-of-contents)

# componentDidCatch Method

`componentDidCatch` is a lifecycle method in React class components used to catch JavaScript errors in child components. It helps build robust applications by allowing you to handle and respond to runtime errors gracefully.

---

## Purpose

- Catch and handle errors during rendering, in lifecycle methods, or constructors of child components.
- Log errors for monitoring.
- Display fallback UI instead of crashing the app.

---

## Syntax

```jsx
componentDidCatch(error, info);
```

- `error`: The actual error thrown.
- `info`: An object with a `componentStack` key containing stack trace of where the error occurred.

---

## Example: Error Boundary Component

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught by Error Boundary:", error);
    console.log("Component Stack:", info.componentStack);
    // Send to logging service if needed
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

// Usage:
<ErrorBoundary>
  <BuggyComponent />
</ErrorBoundary>;
```

---

## When Does It Trigger?

- Errors in child components during:
  - Rendering
  - Lifecycle methods
  - Constructors

It **does not catch**:

- Event handlers
- Asynchronous code (e.g. `setTimeout`, `fetch`)
- Server-side rendering errors

For those, use try-catch blocks or global error handlers.

---

## Best Practices

- Use `componentDidCatch` in a dedicated error boundary component.
- Log errors for monitoring (e.g., Sentry, LogRocket).
- Pair it with `getDerivedStateFromError` to update UI.
- Wrap specific parts of the app to isolate failures.

---

## Functional Component Equivalent

Functional components don’t support `componentDidCatch`, but you can still use the Error Boundary pattern by wrapping them in a class component.

```jsx
function App() {
  return (
    <ErrorBoundary>
      <MyFunctionalComponent />
    </ErrorBoundary>
  );
}
```

---

## Interview Tips

- Know that `componentDidCatch` catches only rendering/lifecycle errors in child components.
- Be ready to implement a reusable error boundary.
- Know what it does **not** catch and how to handle those cases separately.
- Understand the combination with `getDerivedStateFromError`.

---

## Summary Table

| Aspect           | Details                                      |
| ---------------- | -------------------------------------------- |
| Lifecycle Phase  | Error Handling                               |
| Used In          | Class Components only                        |
| Triggers On      | Child errors in render/lifecycle/constructor |
| Not Triggered On | Async errors, event handlers                 |
| Common Usage     | Logging and fallback UI                      |

[🔝 Back to Top](#table-of-contents)

# What is the significance of React’s shouldComponentUpdate method?

`shouldComponentUpdate` is a lifecycle method in React class components used to control whether a component should re-render when new props or state are received. This method is crucial for optimizing performance in large or frequently updating applications.

---

## Purpose

- Prevent unnecessary renders
- Improve performance by skipping rendering when output hasn’t changed

---

## Syntax

```jsx
shouldComponentUpdate(nextProps, nextState) {
  // return true to allow re-render
  // return false to skip render
}
```

- `nextProps`: The new props that the component will receive.
- `nextState`: The new state before rendering.

---

## Example: Manual Check

```jsx
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value;
  }

  render() {
    console.log("Rendering...");
    return <div>{this.props.value}</div>;
  }
}
```

**Explanation:**

- The component only re-renders if `value` prop has changed.
- Avoids render if `value` remains the same.

---

## Default Behavior

- If you do **not** implement `shouldComponentUpdate`, the component re-renders on every update by default.

---

## Use Cases

- When component renders complex UI
- When props or state are large data structures
- When children are expensive to render

---

## With PureComponent

React provides `React.PureComponent`, which implements `shouldComponentUpdate` with a shallow comparison of props and state.

```jsx
class MyPureComponent extends React.PureComponent {
  render() {
    return <div>{this.props.value}</div>;
  }
}
```

**Note:**

- Shallow comparison only checks top-level properties.
- Deep/nested objects may still trigger unnecessary renders.

---

## Functional Components Alternative

Use `React.memo()` and `useMemo()` or `useCallback()`:

```jsx
const MyComponent = React.memo(function ({ value }) {
  console.log("Rendering...");
  return <div>{value}</div>;
});
```

---

## Performance Tip

- Use `shouldComponentUpdate` or `React.memo` only when there's a clear performance bottleneck.
- Premature optimization can add complexity.

---

## Interview Tips

- Explain that it's used to optimize performance.
- Be ready to write a custom comparison for props.
- Know the difference between `shouldComponentUpdate`, `PureComponent`, and `React.memo`.
- Understand shallow vs deep comparison.

---

## Summary Table

| Aspect           | Details                                  |
| ---------------- | ---------------------------------------- |
| Type             | Lifecycle Method (Class Component)       |
| Purpose          | Control rendering for performance        |
| Parameters       | `nextProps`, `nextState`                 |
| Return Value     | `true` to render, `false` to skip        |
| Default Behavior | Always re-renders unless overridden      |
| Functional Alt   | `React.memo()`, `useMemo`, `useCallback` |

[🔝 Back to Top](#table-of-contents)

# What is reducer, action, store in redux

Redux is a predictable state container for JavaScript apps. It is widely used with React to manage complex application state in a centralized manner. The three most fundamental concepts in Redux are:

- **Actions**
- **Reducers**
- **Store**

---

## 1. Action

An **action** is a plain JavaScript object that describes what happened. It must have a `type` property, and can also carry data through a `payload` field.

### Example:

```js
const incrementAction = {
  type: "INCREMENT",
};

const setUserAction = {
  type: "SET_USER",
  payload: { name: "Alice", age: 30 },
};
```

**Explanation:**

- `type`: A string that describes the action's purpose.
- `payload`: Optional data to pass to the reducer.

---

## 2. Reducer

A **reducer** is a pure function that takes the current state and an action, then returns a new state.

### Example:

```js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
```

**Explanation:**

- Should be a pure function: no side effects, always returns same output for same input.
- Handles different `type`s and updates state accordingly.

---

## 3. Store

The **store** is the single source of truth. It holds the entire application's state and provides methods to access state, dispatch actions, and register listeners.

### Example:

```js
import { createStore } from "redux";

const store = createStore(counterReducer);

// Get current state
console.log(store.getState());

// Dispatch an action
store.dispatch({ type: "INCREMENT" });

console.log(store.getState());
```

**Store API Methods:**

- `getState()`: Returns the current state.
- `dispatch(action)`: Sends an action to the reducer.
- `subscribe(listener)`: Registers a callback to be invoked on state changes.

---

## Putting It All Together

```js
// reducer.js
const initialState = { count: 0 };
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// store.js
import { createStore } from "redux";
import counterReducer from "./reducer";
const store = createStore(counterReducer);

// app.js
store.dispatch({ type: "INCREMENT" });
console.log(store.getState()); // { count: 1 }
```

---

## Interview Tips

- Always define actions as constants to avoid typos.
- Reducers must be pure; never mutate the original state.
- Store should be configured using `createStore` or `configureStore` (from Redux Toolkit).
- Explain the unidirectional data flow in Redux: `dispatch` → `reducer` → `store update` → `view rerender`

---

## Summary Table

| Concept | Description                                 | Role in Redux                             |
| ------- | ------------------------------------------- | ----------------------------------------- |
| Action  | Plain object with type & optional payload   | Describes what happened                   |
| Reducer | Pure function (state, action) => newState   | Updates state based on action             |
| Store   | Centralized container for application state | Manages state, dispatching, subscriptions |

[🔝 Back to Top](#table-of-contents)

# What is middleware in Redux

In Redux, **middleware** is a powerful way to extend Redux's capabilities. It provides a third-party extension point between dispatching an action and the moment it reaches the reducer.

---

## Why Use Middleware?

Middleware lets you:

- Handle asynchronous actions (e.g., API calls)
- Log actions and state changes
- Perform side effects like analytics
- Modify or halt actions before they reach reducers

---

## How Middleware Works

A middleware function sits between the action dispatch and the reducer. It intercepts every action dispatched and can:

- Pass it on to the next middleware or the reducer
- Modify it
- Cancel it

### Basic Signature:

```js
const middleware = (store) => (next) => (action) => {
  // your code here
};
```

- `store`: Provides access to `getState` and `dispatch`
- `next`: Passes the action to the next middleware or reducer
- `action`: The dispatched action

---

## Common Middlewares

### 1. Redux Thunk

Allows you to write action creators that return a function instead of an action.

```js
const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_START" });
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch((err) => dispatch({ type: "FETCH_ERROR", error: err }));
  };
};
```

- Requires `redux-thunk` middleware
- Enables async logic inside action creators

### 2. Redux Logger

Logs every action and state change to the console.

```js
import { createLogger } from "redux-logger";
const logger = createLogger();
```

### 3. Redux Saga

Uses ES6 generators to handle complex async workflows in a cleaner way.

```js
function* fetchDataSaga() {
  try {
    const data = yield call(fetchData);
    yield put({ type: "FETCH_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_ERROR", error });
  }
}
```

---

## Applying Middleware

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));
```

Or using Redux Toolkit:

```js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});
```

Redux Toolkit includes `redux-thunk` by default.

---

## Interview Tips

- Know that middleware enhances `dispatch`
- Be able to write a basic custom middleware
- Compare Thunk vs Saga (e.g., complexity vs readability)
- Mention Redux Toolkit simplifies middleware setup

---

## Summary Table

| Middleware        | Purpose                               | Use Case                        |
| ----------------- | ------------------------------------- | ------------------------------- |
| redux-thunk       | Allows async logic in action creators | API calls, conditional dispatch |
| redux-logger      | Logs actions and state changes        | Debugging                       |
| redux-saga        | Uses generators for async flow        | Complex workflows               |
| Custom middleware | Adds custom logic before reducer      | Authentication, analytics, etc. |

---

Middleware provides a flexible, scalable way to manage side effects and enhance Redux functionality.

[🔝 Back to Top](#table-of-contents)

# Explain data flow in Redux

Redux enforces a **unidirectional data flow**, which makes application behavior more predictable and easier to debug. Understanding how data flows in a Redux application is crucial for designing and maintaining complex state logic.

---

## Overview of Redux Data Flow

1. **UI Dispatches an Action**
2. **Redux Middleware (Optional)**
3. **Reducer Updates the State**
4. **Store Notifies Subscribers (UI)**

### Diagram:

```
[Component] --dispatch(action)--> [Middleware (optional)] --> [Reducer] --> [New State in Store] --> [UI Rerenders]
```

---

## Step-by-Step Explanation

### 1. Component Dispatches an Action

A component triggers a state change by dispatching an action.

```js
store.dispatch({ type: "INCREMENT" });
```

### 2. Middleware Intercepts the Action _(if used)_

Middleware can intercept, modify, delay, or cancel actions before they reach the reducer.

```js
const logger = (store) => (next) => (action) => {
  console.log("Dispatching:", action);
  return next(action);
};
```

### 3. Reducer Processes the Action

Reducers receive the current state and the action, then return the next state.

```js
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
```

### 4. Store Updates and Notifies Subscribers

The Redux store updates the state and automatically notifies any subscribed components.

```js
store.subscribe(() => {
  console.log("State changed:", store.getState());
});
```

React components connected to the store (via hooks like `useSelector`) will re-render based on updated state.

---

## Unidirectional Flow Benefits

- **Predictability:** All state changes are traceable through actions.
- **Debuggability:** Tools like Redux DevTools make it easy to inspect and replay state changes.
- **Consistency:** Centralized state management avoids inconsistent local states.

---

## Example Flow in a Counter App

```js
// Action
const increment = () => ({ type: "INCREMENT" });

// Dispatch from UI
<button onClick={() => dispatch(increment())}>Increment</button>;

// Reducer
function counter(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// React updates based on new state
const count = useSelector((state) => state.count);
```

---

## Interview Tips

- Emphasize unidirectional flow: `dispatch → middleware → reducer → store → UI`
- Mention how middleware fits in (e.g., redux-thunk or redux-saga)
- Explain how `connect()` or hooks (`useSelector`, `useDispatch`) relate to the flow
- Clarify the role of pure functions in reducers

---

## Summary Table

| Stage                 | Description                               |
| --------------------- | ----------------------------------------- |
| Dispatch              | Component triggers action                 |
| Middleware (optional) | Intercepts and enhances actions           |
| Reducer               | Calculates new state from action          |
| Store                 | Holds and updates state                   |
| Subscriber (UI)       | React components re-render with new state |

Redux’s data flow ensures clarity and structure in state management, making it a powerful choice for complex applications.

[🔝 Back to Top](#table-of-contents)

# What is React Context API, and when would you use it?

# React Context API Explained

The **React Context API** is a built-in feature that allows for sharing state across the entire app (or part of it) without having to pass props manually through every level of the component tree.

---

## Why Use Context API?

**Problem:** In large applications, props need to be passed down through many layers (known as "prop drilling"), even when only one deeply nested component needs the data.

**Solution:** The Context API lets you share values like state, themes, user info, or settings globally without prop drilling.

---

## Key Concepts

- **Context**: An object created using `React.createContext()`.
- **Provider**: A component that provides the context value to its children.
- **Consumer / useContext**: Access the context value in a component.

---

## Example Usage

### 1. Create a Context

```js
import React from "react";
const ThemeContext = React.createContext();
```

### 2. Provide the Context

```js
function App() {
  return (
    <ThemeContext.Provider value='dark'>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

### 3. Consume the Context

```js
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button className={theme}>I am styled by {theme} theme</button>;
}
```

---

## When to Use Context API

- **Theming** (light/dark mode)
- **Authentication status**
- **Language or locale settings**
- **User preferences or settings**
- **Globally available data (e.g., current user info)**

**Avoid** using Context for high-frequency updates (like animations or mouse position), as it can trigger unnecessary re-renders.

---

## Comparison to Other Patterns

| Method          | Use Case                           |
| --------------- | ---------------------------------- |
| Props           | Simple, localized state            |
| Context API     | Global, non-frequent state sharing |
| Redux / Zustand | Complex, frequent, or shared logic |

---

## Interview Tips

- Explain Context as a solution to prop drilling
- Mention `useContext` as the modern, preferred consumption method
- Understand Provider/Consumer relationship
- Mention performance caveats and alternatives (like memoization or splitting providers)

---

## Summary

- Context API simplifies state sharing in React apps
- Best for static or infrequently changing data
- Use `React.createContext()`, `Provider`, and `useContext()`

It provides a clean, scalable way to avoid prop drilling and share data across components efficiently.

[🔝 Back to Top](#table-of-contents)

# What is Redux, and how is it used in React?

**Redux** is a predictable state container for JavaScript applications. It helps manage application state in a centralized store, making state changes more predictable and traceable. While Redux can be used with any UI layer, it is commonly used with **React** to manage state across components.

---

## Why Redux?

React components have local state, but managing state across many components, especially deeply nested ones, becomes difficult. Redux solves this by:

- Centralizing state
- Enabling consistent state updates via actions and reducers
- Making it easier to debug and test state changes

---

## Core Concepts of Redux

| Concept       | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| **Store**     | Holds the application state                                  |
| **Action**    | Describes an event or intention to change state              |
| **Reducer**   | Pure function that takes state and action, returns new state |
| **Dispatch**  | Sends an action to the store                                 |
| **Subscribe** | Listen to state updates                                      |

---

## How Redux Works in React

1. Create a **store** with a root reducer
2. Use `Provider` from `react-redux` to make the store available
3. Use `useSelector` to read state, and `useDispatch` to send actions

---

## Example

### 1. Create a Reducer

```js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

### 2. Create a Redux Store

```js
import { createStore } from "redux";
const store = createStore(counterReducer);
```

### 3. Wrap App with Provider

```js
import { Provider } from "react-redux";

<Provider store={store}>
  <App />
</Provider>;
```

### 4. Use Redux in React Components

```js
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}
```

---

## Advantages

- Centralized state management
- Easy debugging with Redux DevTools
- Predictable state transitions
- Great for large, complex applications

## Disadvantages

- Boilerplate code
- Learning curve
- May be overkill for small projects

---

## Interview Tips

- Understand the Redux data flow: **action → reducer → new state → UI**
- Be able to explain `useSelector`, `useDispatch`, and `Provider`
- Be familiar with `combineReducers` and `middleware`
- Know when Redux is appropriate vs Context or local state

---

## Summary

Redux is a powerful tool for managing global state in React applications. It provides a consistent, traceable flow of data, but should be used judiciously based on app complexity and needs.

[🔝 Back to Top](#table-of-contents)

# What is the difference between Context API and Redux?

# Difference Between Context API and Redux

React offers multiple ways to manage and share state across components. Two commonly used options are the **Context API** and **Redux**. Both can handle global state, but they have different purposes, features, and trade-offs.

---

## Overview

| Feature            | Context API                           | Redux                                    |
| ------------------ | ------------------------------------- | ---------------------------------------- |
| Built-in           | Yes (React)                           | No (external library)                    |
| Boilerplate        | Minimal                               | High (actions, reducers, store setup)    |
| Use Case           | Simple global state (theme, user)     | Complex state logic and transformations  |
| Performance        | Can cause re-renders if not optimized | Optimized for fine-grained state updates |
| Debugging          | Basic                                 | Advanced (Redux DevTools)                |
| Middleware Support | No                                    | Yes (e.g., redux-thunk, redux-saga)      |
| Async Handling     | Manual (via effects)                  | Middleware-enabled                       |
| Learning Curve     | Low                                   | Medium to High                           |

---

## Context API

The Context API is a lightweight solution provided by React for avoiding **prop drilling**.

### Example Use Case:

- Sharing user authentication status
- Theme toggling (light/dark mode)

### Example:

```jsx
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value='dark'>
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  const theme = useContext(ThemeContext);
  return <p>Theme is {theme}</p>;
}
```

### Pros:

- Simpler syntax and setup
- No external libraries needed

### Cons:

- Triggers re-renders of all consuming components
- Not optimized for large or frequently updated state

---

## Redux

Redux is a powerful state management library that uses a centralized **store**, **actions**, and **reducers**.

### Example Use Case:

- Managing cart items in an e-commerce app
- Handling complex, nested data and async operations

### Example:

```js
// reducer.js
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// Component.jsx
const count = useSelector((state) => state.count);
const dispatch = useDispatch();
```

### Pros:

- Structured and scalable for complex apps
- Excellent debugging tools
- Middleware support for async logic

### Cons:

- More boilerplate
- Steeper learning curve

---

## When to Use What

| Situation                              | Recommended Tool |
| -------------------------------------- | ---------------- |
| Small to medium app with few globals   | Context API      |
| Large app with complex state flows     | Redux            |
| Need for debugging and middleware      | Redux            |
| Avoiding prop drilling for simple data | Context API      |

---

## Interview Tip

- Clearly describe the use case for each
- Be able to implement both
- Discuss performance and architectural considerations

---

## Conclusion

- Use **Context API** for simple, static or infrequent state sharing
- Use **Redux** for complex, frequently updated, and deeply nested state scenarios
- Both tools can coexist depending on requirements

[🔝 Back to Top](#table-of-contents)

# What is Redux-Thunk

# What is Redux-Thunk?

**Redux-Thunk** is a middleware for Redux that allows you to write **action creators that return functions** instead of plain action objects. This is particularly useful for handling **asynchronous logic** like API calls inside your Redux actions.

---

## Why Redux-Thunk?

Redux by default only allows dispatching plain JavaScript objects (actions). However, real-world applications often need to handle async operations (e.g., fetching data from an API). Redux-Thunk enables these operations inside action creators.

---

## How It Works

Redux-Thunk intercepts dispatched actions. If the action is a **function** instead of an object, Redux-Thunk invokes it and provides `dispatch` and `getState` as arguments.

---

## Syntax

```js
const fetchData = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await fetch("/api/data");
      const data = await res.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error });
    }
  };
};
```

---

## Setup

1. Install:

```bash
npm install redux-thunk
```

2. Apply middleware:

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));
```

---

## Full Example

### Reducer:

```js
const initialState = {
  loading: false,
  data: [],
  error: null,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { loading: false, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
}
```

### Component:

```js
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions";

function DataComponent() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

---

## Benefits

- Handles async logic cleanly
- Access to `dispatch` and `getState`
- Works seamlessly with Redux DevTools

## Drawbacks

- Still involves boilerplate
- Doesn’t enforce structure (unlike Redux Toolkit)

---

## Interview Tips

- Be able to explain the purpose of thunks
- Demonstrate async actions with real-world examples
- Understand how to test thunk actions
- Know alternatives like redux-saga or redux-observable

---

## Conclusion

Redux-Thunk is a simple yet powerful tool for managing asynchronous logic in Redux. It extends Redux’s capabilities by allowing action creators to delay the dispatch of an action or to dispatch only if a certain condition is met.

[🔝 Back to Top](#table-of-contents)

# What is Redux-Saga, Difference between Redux-Thunk and Redux-Saga

## What is Redux-Saga?

**Redux-Saga** is a Redux middleware library that handles asynchronous operations using **ES6 generator functions**. It provides a more powerful and declarative way to manage side effects such as data fetching, API calls, and background tasks.

---

## Why Use Redux-Saga?

Redux-Saga is well-suited for applications with:

- Complex async flows (e.g., race conditions, retries)
- Long-running background tasks
- Better separation of concerns between side effects and UI

---

## Core Concepts

- **Saga:** A generator function that yields effects (plain JS objects)
- **Effect Creators:** Functions like `take`, `call`, `put`, `delay` that instruct the middleware on what to do
- **Watcher Saga:** Watches for dispatched actions
- **Worker Saga:** Handles the business logic

### Basic Saga Example

```js
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, "/api/data");
    yield put({ type: "FETCH_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({ type: "FETCH_ERROR", payload: error });
  }
}

function* watchFetchData() {
  yield takeEvery("FETCH_REQUEST", fetchDataSaga);
}

export default watchFetchData;
```

### Setting Up Redux-Saga

```js
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
```

---

## Redux-Thunk vs. Redux-Saga

| Feature              | Redux-Thunk                          | Redux-Saga                                      |
| -------------------- | ------------------------------------ | ----------------------------------------------- |
| Syntax               | Functions                            | Generator functions                             |
| Simplicity           | Easier to learn                      | More complex, steeper learning curve            |
| Side Effect Handling | Imperative (inside functions)        | Declarative (yield effects)                     |
| Use Case             | Simple async flows (e.g., API calls) | Complex async flows (e.g., debouncing, retries) |
| Code Testability     | Moderate                             | High (easy to mock effects)                     |
| Debugging            | Basic                                | Excellent with sagas and logging tools          |
| Parallel/Concurrent  | Difficult to manage                  | Easy with `fork`, `all`, `cancel`               |
| DevTools Integration | Basic                                | Good with custom tools                          |

---

## When to Use What?

| Scenario                                           | Recommendation |
| -------------------------------------------------- | -------------- |
| Simple data fetch or form submit                   | Redux-Thunk    |
| Complex workflows with multiple async tasks        | Redux-Saga     |
| Needs retries, timeouts, cancellation, concurrency | Redux-Saga     |
| Small to medium scale project                      | Redux-Thunk    |

---

## Interview Tips

- Be ready to contrast Redux-Thunk and Redux-Saga
- Understand the generator function mechanism
- Know the `take`, `put`, `call`, and `fork` saga effects
- Discuss pros/cons and when you’d use one over the other

---

## Conclusion

Redux-Saga and Redux-Thunk are both excellent tools for managing side effects in Redux. While Thunk is simpler and great for small-scale apps, Saga shines in large, complex applications with advanced async logic.

[🔝 Back to Top](#table-of-contents)

# How do you handle side effects in Redux?

In Redux, **side effects** refer to operations that interact with the outside world, such as API calls, accessing browser storage, or logging. Since Redux itself is synchronous and pure by design, side effects need to be handled using **middleware**.

---

## Common Middleware for Side Effects

### 1. Redux-Thunk

- Allows you to write action creators that return functions.
- Ideal for simple asynchronous logic like API requests.

#### Example:

```js
const fetchUser = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_USER_START" });
    try {
      const response = await fetch("/api/user");
      const data = await response.json();
      dispatch({ type: "FETCH_USER_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_USER_ERROR", payload: error });
    }
  };
};
```

### 2. Redux-Saga

- Uses generator functions to handle complex side effects declaratively.
- Great for managing complex flows, cancellations, and concurrency.

#### Example:

```js
import { call, put, takeEvery } from "redux-saga/effects";

function* fetchUserSaga() {
  try {
    const user = yield call(fetch, "/api/user");
    const data = yield user.json();
    yield put({ type: "FETCH_USER_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_USER_ERROR", payload: error });
  }
}

function* watchUserSaga() {
  yield takeEvery("FETCH_USER_REQUEST", fetchUserSaga);
}
```

### 3. Redux-Observable (RxJS)

- Uses reactive programming with observables.
- Ideal for highly reactive applications.

#### Example:

```js
import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, catchError } from "rxjs/operators";

const fetchUserEpic = (action$) =>
  action$.pipe(
    ofType("FETCH_USER_REQUEST"),
    mergeMap(() =>
      ajax.getJSON("/api/user").pipe(
        map((response) => ({ type: "FETCH_USER_SUCCESS", payload: response })),
        catchError((error) => of({ type: "FETCH_USER_ERROR", payload: error }))
      )
    )
  );
```

### 4. Redux Toolkit (RTK Query)

- Built-in tool for data fetching and caching.
- Removes the need for writing thunks or sagas manually.

#### Example:

```js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getUser: builder.query({ query: () => "user" }),
  }),
});

export const { useGetUserQuery } = api;
```

---

## Choosing the Right Tool

| Tool             | Use Case                                  |
| ---------------- | ----------------------------------------- |
| Redux-Thunk      | Simple async actions                      |
| Redux-Saga       | Complex async workflows, background tasks |
| Redux-Observable | Highly reactive apps with streams         |
| RTK Query        | Built-in solution with less boilerplate   |

---

## Best Practices

- Keep side-effect logic out of reducers.
- Use middleware to isolate async logic.
- Handle loading, success, and error states explicitly.
- Write tests for your async action flows.

---

## Conclusion

Side effects are a necessary part of building real-world applications. Redux supports various ways to handle them cleanly through middleware like Thunk, Saga, and modern tools like RTK Query. Choosing the right one depends on the complexity and nature of your application.

[🔝 Back to Top](#table-of-contents)

# How Do You Optimize Performance in a React Application?

Optimizing performance in React ensures faster user experiences, better responsiveness, and efficient resource usage. Here are effective techniques and strategies:

---

## 1. Memoization

### a. `React.memo`

Prevents re-rendering of functional components if props haven't changed.

```js
const MyComponent = React.memo(({ name }) => {
  console.log("Rendering");
  return <div>{name}</div>;
});
```

### b. `useMemo`

Memoizes the result of expensive computations.

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### c. `useCallback`

Memoizes functions to avoid re-creating them on each render.

```js
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

---

## 2. Code Splitting

Use dynamic `import()` to load code only when needed.

```js
const LazyComponent = React.lazy(() => import("./LazyComponent"));
```

```jsx
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

---

## 3. Virtualization

Render only visible items in a long list using libraries like `react-window` or `react-virtualized`.

```js
import { FixedSizeList as List } from "react-window";

<List height={150} itemCount={1000} itemSize={35} width={300}>
  {({ index, style }) => <div style={style}>Row {index}</div>}
</List>;
```

---

## 4. Avoid Reconciliation

Minimize component re-renders by:

- Keeping state local where necessary
- Lifting state only when needed
- Using keys in lists correctly
- Avoiding inline functions/objects in props

---

## 5. Optimizing State Management

- Use tools like Zustand, Redux Toolkit efficiently
- Avoid unnecessary global state
- Co-locate state with components that use it

---

## 6. Batching Updates

React automatically batches state updates, but ensure you're not forcing synchronous updates that break batching.

---

## 7. Image Optimization

- Use modern image formats like WebP
- Lazy-load images with `loading="lazy"`
- Compress images

---

## 8. Use Production Build

Ensure you're using optimized production builds:

```bash
npm run build
```

---

## 9. Use Performance Profiling Tools

- React DevTools Profiler
- Lighthouse
- Chrome DevTools

---

## 10. Server-Side Rendering (SSR) & Static Site Generation (SSG)

Use frameworks like **Next.js** for SSR/SSG to improve initial load performance.

---

## Summary Table

| Technique       | Purpose                                |
| --------------- | -------------------------------------- |
| Memoization     | Avoid unnecessary renders/computations |
| Code Splitting  | Reduce initial bundle size             |
| Virtualization  | Efficiently render large lists         |
| Localized State | Reduce re-renders and complexity       |
| Lazy Loading    | Load components or images on demand    |
| SSR/SSG         | Faster initial load, SEO benefits      |

---

## Final Tips for Interview

- Discuss `React.memo`, `useMemo`, `useCallback`
- Mention list virtualization for large data sets
- Highlight the importance of profiling and performance audits
- Explain tradeoffs when optimizing (e.g., memoization vs. simplicity)

Performance optimization in React is about balancing user experience and developer effort. Prioritize based on profiling insights rather than premature optimization.

[🔝 Back to Top](#table-of-contents)

# Explain the concept of memoization in React using React.memo and useMemo.

**Memoization** is a performance optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again. In React, memoization helps prevent unnecessary re-renders and recalculations.

---

## Why Use Memoization in React?

- Avoid re-rendering components unnecessarily
- Prevent re-creating functions or values
- Improve app performance, especially with large or complex UIs

---

## 1. `React.memo`

### What It Does

`React.memo` is a higher-order component that memoizes the rendered output of a functional component. If the component's props haven’t changed, React skips rendering it.

### Syntax:

```js
const MemoizedComponent = React.memo(Component);
```

### Example:

```jsx
const Greeting = React.memo(({ name }) => {
  console.log("Rendering Greeting");
  return <p>Hello, {name}!</p>;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting name='Alice' />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

**Explanation:**

- Clicking the button causes a re-render of `App`.
- Since `Greeting` receives the same `name` prop, it doesn’t re-render.

---

## 2. `useMemo`

### What It Does

`useMemo` memoizes the result of a computation. It recalculates the result only when one of the dependencies changes.

### Syntax:

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### Example:

```jsx
function ExpensiveComponent({ number }) {
  const squared = useMemo(() => {
    console.log("Computing square...");
    return number * number;
  }, [number]);

  return <p>Square: {squared}</p>;
}
```

**Explanation:**

- The square is only recalculated when `number` changes.
- Prevents expensive operations from running on every render.

---

## When to Use Each

| Hook/Component | Use Case                              |
| -------------- | ------------------------------------- |
| `React.memo`   | Prevent re-render of child components |
| `useMemo`      | Optimize expensive calculations       |

---

## Caveats

- Don’t overuse memoization — it adds complexity.
- Use only when performance bottlenecks are confirmed.
- Memoized values/components are not always faster if they’re cheap to compute.

---

## Final Interview Tip

In a senior React interview, clearly explain the concept of memoization, when to use `React.memo` vs `useMemo`, and how to identify real performance bottlenecks using profiling tools like React DevTools.

Memoization is a valuable tool for optimizing performance — but like all optimizations, it should be driven by actual need, not assumption.

[🔝 Back to Top](#table-of-contents) - 50

# What is the difference between React.memo and useMemo?

In React, `React.memo` and `useMemo` are used for **performance optimization**, but they serve different purposes and operate in different contexts. Understanding their differences is key for writing efficient, maintainable code in a senior React developer role.

---

## 🔹 React.memo

### What is it?

`React.memo` is a **higher-order component** used to memoize an entire **functional component**. It prevents re-rendering of the component if its **props do not change**.

### Syntax

```js
const MemoizedComponent = React.memo(MyComponent);
```

### Example:

```jsx
const Greeting = React.memo(({ name }) => {
  console.log("Rendering Greeting");
  return <p>Hello, {name}</p>;
});

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Greeting name='Alice' />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

### Explanation:

- `Greeting` is wrapped in `React.memo`.
- When `count` changes, `App` re-renders but `Greeting` does **not**, since its prop `name` remains unchanged.

---

## 🔹 useMemo

### What is it?

`useMemo` is a **React Hook** that memoizes the **return value of a function**. It's used to **avoid expensive recalculations** on every render.

### Syntax:

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### Example:

```jsx
function ExpensiveComponent({ number }) {
  const squared = React.useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  return <p>Square: {squared}</p>;
}
```

### Explanation:

- The calculation runs only when `number` changes.
- Avoids recalculating `number * number` unnecessarily.

---

## 🔁 Key Differences

| Feature  | `React.memo`                       | `useMemo`                              |
| -------- | ---------------------------------- | -------------------------------------- |
| Purpose  | Prevent component re-renders       | Memoize values or computations         |
| Used On  | Functional components              | Inside functional components           |
| Prevents | Re-render of memoized component    | Re-execution of expensive computation  |
| Type     | Higher-order component             | Hook                                   |
| Best For | Child components with static props | Expensive computations in render cycle |

---

## ⚠️ When NOT to Use

- **Avoid premature optimization.** Use profiling tools (e.g., React DevTools) to identify bottlenecks.
- Don't memoize simple or cheap calculations—they might add unnecessary complexity.

---

## ✅ When to Use

| Scenario                                | Use          |
| --------------------------------------- | ------------ |
| Child component renders with same props | `React.memo` |
| Expensive computation in render         | `useMemo`    |

---

## Final Interview Tip

As a senior React developer, be ready to:

- Demonstrate examples for both.
- Explain trade-offs.
- Identify situations where memoization improves performance.
- Show how they integrate into real-world performance tuning.

Efficient use of `React.memo` and `useMemo` can make your application significantly faster and more responsive, especially in complex UIs or large datasets.

[🔝 Back to Top](#table-of-contents)

# Handling Errors in React Using Error Boundaries

In React, **Error Boundaries** are components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the entire app.

This feature is essential for building resilient user interfaces and improving user experience.

---

## 🔹 What Are Error Boundaries?

An **Error Boundary** is a special type of React component that implements either of the following lifecycle methods:

- `static getDerivedStateFromError(error)`
- `componentDidCatch(error, info)`

Error Boundaries **only catch errors in**:

- Class components
- Functional components
- Event handlers
- Lifecycle methods

They **do not catch errors**:

- In event handlers (you must use `try/catch` manually)
- Inside asynchronous code (e.g., `setTimeout`, Promises)
- During server-side rendering

---

## 🔧 How to Create an Error Boundary

### Step-by-Step Example:

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to render fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}
```

### Usage:

```jsx
function BuggyComponent() {
  throw new Error("Crashed!");
}

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}
```

---

## 🛠 Best Practices

- Use **multiple error boundaries** to isolate different parts of the UI.
- Provide **custom fallback UIs** for better user experience.
- Integrate with **logging tools** (e.g., Sentry, LogRocket).

---

## 🧠 Functional Alternative (Experimental)

React 18+ allows for a functional approach using third-party libraries like `react-error-boundary`:

```jsx
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }) {
  return <p role='alert'>Something went wrong: {error.message}</p>;
}

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <BuggyComponent />
</ErrorBoundary>;
```

---

## 📌 Interview Tips

- Be able to explain **what types of errors are caught**.
- Know the **lifecycle methods involved**.
- Understand **limitations** (e.g., event handlers, async).
- Discuss **real-world use** like logging and user-friendly messages.

---

## ✅ Summary

| Feature              | Description                                      |
| -------------------- | ------------------------------------------------ |
| Purpose              | Prevent app from crashing due to errors          |
| Core Methods         | `getDerivedStateFromError`, `componentDidCatch`  |
| Applies To           | Child component tree                             |
| Doesn't Catch        | Event handlers, async code                       |
| UI Fallback          | Custom error message component                   |
| Advanced Alternative | `react-error-boundary` for functional components |

Error Boundaries are crucial for handling unforeseen runtime errors and maintaining application stability in React apps.

[🔝 Back to Top](#table-of-contents)

# How does React handle forms and controlled components?

In React, forms are an essential part of collecting user input. React provides a declarative approach to handling form elements using what are called **controlled components**. Understanding how React handles these components is crucial for building reliable and predictable forms in your applications.

---

## Controlled vs Uncontrolled Components

### Controlled Components

A **controlled component** is an input element (like `<input>`, `<textarea>`, `<select>`) whose value is controlled by React through the component's state.

### Uncontrolled Components

In contrast, **uncontrolled components** manage their own state internally using the DOM. Accessing their current value typically involves using a `ref`.

Controlled components are preferred in React because they provide more control over the form data and allow for easier validation and manipulation.

---

## Example of a Controlled Component

Here's a basic example of a controlled component using an input field:

```jsx
import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted with name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' value={name} onChange={handleChange} />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default ControlledForm;
```

### How it Works:

1. The `value` of the input is tied to the state variable `name`.
2. The `onChange` handler updates the state as the user types.
3. The input field displays whatever is in the `name` state.
4. On form submission, `handleSubmit` is triggered, and the current value of `name` is used.

---

## Benefits of Controlled Components

- **Single source of truth**: All form data is stored in the component state.
- **Validation**: Easy to validate inputs before submission.
- **Conditionally disable/enable fields**: Based on state.
- **Dynamic inputs**: You can show/hide or enable/disable inputs dynamically.

---

## Example with Multiple Controlled Inputs

```jsx
import React, { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='username'
        value={formData.username}
        onChange={handleChange}
        placeholder='Username'
      />
      <input
        name='email'
        type='email'
        value={formData.email}
        onChange={handleChange}
        placeholder='Email'
      />
      <input
        name='password'
        type='password'
        value={formData.password}
        onChange={handleChange}
        placeholder='Password'
      />
      <button type='submit'>Register</button>
    </form>
  );
}

export default SignupForm;
```

---

## When to Use Uncontrolled Components

You might consider using uncontrolled components when:

- You need quick access to form data without re-rendering the component.
- The form is very simple.
- You are integrating with a non-React library that relies on DOM-based inputs.

Example with `ref`:

```jsx
import React, { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type='text' />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default UncontrolledForm;
```

---

## Conclusion

In React, **controlled components** are the standard for form handling. They provide complete control over user input, making validation, conditional rendering, and input state tracking much easier and more robust. Understanding this pattern is key for mastering form handling in professional React applications.

[🔝 Back to Top](#table-of-contents)

# What are uncontrolled components in React?

In React, form elements can be handled in two ways: **controlled** and **uncontrolled**. **Uncontrolled components** are form inputs that manage their own state internally, rather than relying on React state.

---

## 🔹 What Are Uncontrolled Components?

Uncontrolled components use the **DOM itself to manage the form state**. Instead of updating React state on every change, you use **Refs** to access values when needed.

---

## 🔧 Example of Uncontrolled Component

```jsx
import React, { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={inputRef} />
      <button type='submit'>Submit</button>
    </form>
  );
}
```

### Explanation:

- `inputRef` references the DOM node.
- The input value is retrieved **on demand** via `ref.current.value`.
- No React state (`useState`) is used to track input value.

---

## 🔁 Uncontrolled vs Controlled Components

| Feature            | Controlled                | Uncontrolled                         |
| ------------------ | ------------------------- | ------------------------------------ |
| Value Storage      | React state               | DOM (via `ref`)                      |
| On Change Handling | `onChange` updates state  | Not required unless manually handled |
| Accessing Value    | From state                | `ref.current.value`                  |
| Use Case           | Dynamic forms, validation | Simple, non-interactive form fields  |

---

## ✅ When to Use Uncontrolled Components

- For **quick prototyping** or simple forms
- When integrating with **non-React code** (e.g., legacy code, libraries)
- Where **real-time validation** or tracking is not needed

---

## 🧠 Interview Tips

- Be able to contrast with controlled components
- Know when uncontrolled is preferable
- Explain how to use `ref` to access form values
- Mention that uncontrolled components are **closer to traditional HTML behavior**

---

## 🔒 Caveats

- Harder to implement **custom validation**
- Not suitable for **complex forms**
- State not traceable or testable via React tools

---

## 📌 Summary

| Aspect           | Description                                      |
| ---------------- | ------------------------------------------------ |
| Definition       | Form elements with internal state (not in React) |
| Key Tool         | `useRef` to access DOM node values               |
| Common Use Cases | Simple forms, integrations, legacy compatibility |
| Downsides        | Harder to control and validate                   |

Uncontrolled components are useful for specific scenarios but generally controlled components are preferred in modern React applications for better state management and validation.

[🔝 Back to Top](#table-of-contents)

# What are controlled and uncontrolled inputs in forms?

In React, form inputs can be managed in two ways: **controlled** and **uncontrolled** components. These terms refer to how form input values are handled — whether React manages the state or the DOM does.

---

## 🔹 Controlled Inputs

A **controlled input** is a form element where **React controls the input's value** via state.

### Example:

```jsx
import React, { useState } from "react";

function ControlledForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputValue} onChange={handleChange} />
      <button type='submit'>Submit</button>
    </form>
  );
}
```

### Explanation:

- Input value is tied to component state (`inputValue`).
- `onChange` keeps the input and state in sync.
- React fully controls the data flow.

---

## 🔹 Uncontrolled Inputs

An **uncontrolled input** is managed by the DOM. You use **refs** to access the input's value instead of storing it in state.

### Example:

```jsx
import React, { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={inputRef} />
      <button type='submit'>Submit</button>
    </form>
  );
}
```

### Explanation:

- React doesn’t manage the input’s value.
- Access to the value is done via `ref` at submit time.

---

## 🔁 Comparison Table

| Feature             | Controlled Input               | Uncontrolled Input              |
| ------------------- | ------------------------------ | ------------------------------- |
| Value Stored In     | React state                    | DOM                             |
| Updates Tracked By  | `onChange`                     | No state tracking               |
| Data Access         | From React state               | Using `ref`                     |
| Use Case            | Dynamic validation, state sync | Simple input, integration cases |
| Testing & Debugging | Easier with React dev tools    | Harder to inspect               |
| Flexibility         | More control                   | Less boilerplate                |

---

## ✅ When to Use

- **Use Controlled Inputs**:

  - When you need real-time validation
  - When you want to enable/disable buttons based on input
  - When integrating with other stateful logic

- **Use Uncontrolled Inputs**:
  - When working with third-party libraries
  - When building simple forms without complex validation
  - For quick prototyping

---

## 🧠 Interview Tips

- Be prepared to explain how controlled inputs ensure React has full control of the UI state.
- Know when uncontrolled inputs are better suited (e.g., performance or legacy code).
- Understand the role of `ref` in uncontrolled components.

---

## 📌 Summary

| Type       | Controlled                | Uncontrolled                          |
| ---------- | ------------------------- | ------------------------------------- |
| Managed By | React state               | DOM                                   |
| Access     | `state` and `onChange`    | `ref.current.value`                   |
| Best For   | Complex forms, validation | Simple forms, third-party integration |

Both approaches have their place. Understanding when and how to use them is key to writing robust and maintainable React forms.

[🔝 Back to Top](#table-of-contents)

# What are higher-order components (HOCs) in React?

## 🔹 What is a Higher-Order Component?

A **Higher-Order Component (HOC)** is an advanced pattern in React that allows you to reuse component logic. It's a **function that takes a component and returns a new component** with additional props or behavior.

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

HOCs follow the principle of higher-order functions in JavaScript.

---

## 📦 Use Cases

- Code reuse and logic abstraction
- Conditional rendering
- Authorization logic
- Enhancing third-party components
- Injecting props or behavior

---

## 🔧 Basic Example

```jsx
function withGreeting(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div>
        <h2>Hello from HOC!</h2>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

function Welcome(props) {
  return <p>Welcome, {props.name}!</p>;
}

const EnhancedWelcome = withGreeting(Welcome);

// Usage
<EnhancedWelcome name='John' />;
```

### Explanation:

- `withGreeting` is an HOC.
- It wraps `Welcome`, adds a heading, and passes all props through.

---

## 📘 Real-world Example: With Loading Spinner

```jsx
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <Component {...props} />;
  };
}

function DataList({ data }) {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

const DataListWithLoading = withLoading(DataList);

// Usage
<DataListWithLoading isLoading={true} data={[]} />;
```

---

## 📐 HOCs vs Render Props vs Hooks

| Pattern      | Use Case                          | Complexity | React Version |
| ------------ | --------------------------------- | ---------- | ------------- |
| HOC          | Reuse logic across components     | Moderate   | Any           |
| Render Props | Share code using render callbacks | Moderate   | Any           |
| Hooks        | Compose logic using functions     | Low        | 16.8+         |

Hooks are more modern and often replace the need for HOCs in functional components.

---

## ⚠️ Caveats and Best Practices

- **Don't mutate the original component** — return a new one.
- **Name your HOCs meaningfully** (e.g., `withLogger`, `withTheme`).
- **Avoid nesting too many HOCs** — leads to wrapper hell.
- **Use `displayName`** to improve debugging:

```js
EnhancedComponent.displayName = `WithGreeting(${getDisplayName(
  WrappedComponent
)})`;
```

---

## 🧠 Interview Tips

- Be ready to explain how HOCs promote code reuse.
- Know how to pass props correctly through HOCs.
- Understand that HOCs do **not modify** components — they enhance them.
- Mention that hooks have replaced many HOC use cases in modern apps.

---

## 📌 Summary

| Concept        | Description                           |
| -------------- | ------------------------------------- |
| HOC Definition | Function that returns a new component |
| Key Benefit    | Logic reuse, prop injection           |
| Example        | `withLoading(Component)`              |
| Alternative    | Hooks (preferred in modern React)     |

Higher-order components are a powerful abstraction, especially useful when working with class-based components or older codebases. For functional components, consider using hooks instead.

[🔝 Back to Top](#table-of-contents)

# What are React Portals, and when should you use them?

## 🔹 What are React Portals?

**React Portals** provide a way to render children into a DOM node **outside the DOM hierarchy** of the parent component. This is especially useful for UI elements like modals, tooltips, dropdowns, and notifications that need to visually break out of their containing parent.

Introduced in React 16, a portal allows rendering content into a DOM node that exists outside the root DOM hierarchy.

---

## 🧪 Syntax

```jsx
ReactDOM.createPortal(child, container);
```

- **child**: The React component or element to render.
- **container**: A DOM node outside the root node (e.g., `#modal-root`).

---

## 🔧 Basic Example

### HTML:

```html
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
</body>
```

### React:

```jsx
import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className='modal'>{children}</div>,
    document.getElementById("modal-root")
  );
}

function App() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && (
        <Modal>
          <p>This is a modal!</p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
}
```

---

## 📦 Use Cases for React Portals

| Use Case            | Why Portals?                                        |
| ------------------- | --------------------------------------------------- |
| Modal dialogs       | Break out of parent containers like overflow/hidden |
| Tooltips            | Prevent z-index or positioning issues               |
| Dropdown menus      | Avoid clipping or layout constraints                |
| Toast notifications | Position outside app layout for better visibility   |

---

## ⚠️ Important Considerations

- Portals render outside the parent hierarchy **but maintain React’s event bubbling** model. This means event handlers (like `onClick`) still propagate up through React parents, even if the DOM structure differs.
- You still need to **manually manage accessibility** (e.g., focus traps, ARIA roles).
- Styling portals may require **additional CSS handling**, like positioning and z-index.

---

## 🧠 Interview Tips

- Be ready to explain how portals help with layout or z-index issues.
- Know that portals don't break React's event system.
- Understand where to use `createPortal` — for floating UI, modals, etc.
- Be familiar with maintaining accessibility and focus.

---

## 📌 Summary

| Feature              | React Portals                     |
| -------------------- | --------------------------------- |
| Defined By           | `ReactDOM.createPortal`           |
| Renders To           | A DOM node outside root hierarchy |
| Maintains React Tree | ✅ Yes                            |
| Common Uses          | Modals, tooltips, dropdowns       |
| Event Bubbling       | ✅ Works as in normal React tree  |

React Portals give you a clean and powerful way to manage floating UI without leaving React’s declarative paradigm.

[🔝 Back to Top](#table-of-contents)

# What is StrictMode in React?

## 🔍 What is React StrictMode?

**React.StrictMode** is a tool in React that helps developers identify potential problems in an application during the development phase. It **does not render any visible UI** and **does not affect production builds**.

It activates **additional checks and warnings** for its descendants, helping enforce best practices and anticipating future breaking changes.

---

## 🧪 Syntax

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

You can also wrap just part of your component tree:

```jsx
<React.StrictMode>
  <ComponentA />
  <ComponentB />
</React.StrictMode>
```

---

## 🧭 What Does StrictMode Do?

1. **Identifies unsafe lifecycle methods**

   - Warns about usage of deprecated methods like `componentWillMount`, `componentWillReceiveProps`, etc.

2. **Warns about legacy string refs**

   - Encourages the use of `React.createRef()` or `useRef()`.

3. **Detects unexpected side effects**

   - Invokes certain functions **twice** in development mode to help identify side effects (like in `useEffect`, `useState`).

4. **Detects deprecated APIs**

   - Promotes forward compatibility with newer React versions.

5. **Ensures reusable state logic**
   - Encourages use of proper patterns with hooks.

---

## ⚠️ Important Behavior

- Functions like `useEffect`, `useLayoutEffect`, and `constructor` are **called twice (only in development)** to help detect unexpected side effects.
- This does **not happen in production** — there is **no performance impact** on the production build.

---

## 🔧 Example

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Effect runs");
    return () => console.log("Cleanup");
  }, []);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

function App() {
  return (
    <React.StrictMode>
      <Counter />
    </React.StrictMode>
  );
}
```

### Output in Console:

```
Effect runs
Cleanup
Effect runs
```

This double execution happens only in development to catch errors or memory leaks.

---

## 🧠 Interview Tips

- Emphasize that `StrictMode` is **only for development**.
- Mention its role in **highlighting potential problems early**.
- Understand what kind of issues it helps uncover (side effects, deprecated APIs).
- Be ready to explain why effects run twice in development.

---

## 📌 Summary

| Feature               | StrictMode                                |
| --------------------- | ----------------------------------------- |
| Purpose               | Detect issues in development              |
| Production Impact     | ❌ None                                   |
| Affects UI            | ❌ No                                     |
| Triggers Effect Twice | ✅ In development only                    |
| Usage Scope           | Full or partial tree                      |
| Helps with            | Best practices, side effects, legacy APIs |

`React.StrictMode` is a valuable ally for writing robust and forward-compatible React code, ensuring that your app is prepared for future updates and best practices.

[🔝 Back to Top](#table-of-contents)

# What is reconciliation in React?

# Reconciliation in React

## 🔍 What is Reconciliation?

**Reconciliation** is the process through which React updates the DOM to match the desired state of the UI. It compares the **new virtual DOM tree** with the **previous one**, determines the minimal number of changes, and applies those updates to the **actual DOM** efficiently.

This is a core part of React's performance optimization and its declarative UI model.

---

## 🧠 Why Reconciliation Matters

- The real DOM is **slow** to update.
- React uses a **virtual DOM** to simulate UI rendering.
- React compares (or “diffs”) the new virtual DOM with the previous one to find changes.
- Only the **necessary changes** are applied to the real DOM, improving performance.

---

## 🔧 How React Performs Reconciliation

1. **Virtual DOM Rendering**: Each render produces a new virtual DOM tree.
2. **Diffing**: React compares the new tree with the previous one.
3. **Change Detection**:
   - If elements have the **same type**, React keeps the existing DOM node and only updates changed attributes.
   - If elements have **different types**, React destroys the old node and creates a new one.
4. **Keyed Elements**: When rendering lists, React uses `key` props to uniquely identify elements and avoid unnecessary re-renders.

---

## 📄 Example

```jsx
function App() {
  const [items, setItems] = React.useState(["A", "B", "C"]);

  return (
    <div>
      <button onClick={() => setItems(["B", "C", "D"])}>Update</button>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Reconciliation Process:

1. React renders `['A', 'B', 'C']` to the DOM.
2. On button click, the state updates to `['B', 'C', 'D']`.
3. React uses the `key` prop to:
   - Reuse nodes for `B` and `C`
   - Remove `A`
   - Add `D`

This minimizes DOM operations, enhancing performance.

---

## ⚠️ Common Mistake: Not Using Keys

```jsx
// Bad: Using array index as key
{
  items.map((item, index) => <li key={index}>{item}</li>);
}
```

This may lead to incorrect diffing behavior if items are reordered.

---

## 📌 Summary Table

| Concept             | Description                                     |
| ------------------- | ----------------------------------------------- |
| Virtual DOM         | Lightweight copy of real DOM                    |
| Diffing Algorithm   | Compares old and new virtual DOM trees          |
| Minimal DOM Updates | Applies only the necessary changes              |
| Keys in Lists       | Helps React identify which items changed        |
| Performance Impact  | Significant optimization for complex UI updates |

---

## 🧠 Interview Tips

- Be ready to explain how React compares virtual DOM trees.
- Know the importance of `key` props in list rendering.
- Understand when React reuses, updates, or recreates DOM nodes.
- Mention that reconciliation is a key reason React is fast.

React’s reconciliation algorithm is what allows it to provide a declarative API while still achieving great performance.

## The Diffing Algorithm

The **Diffing Algorithm** in React is a key part of the **reconciliation process**, which determines how React efficiently updates the DOM. When a component's state or props change, React creates a **new virtual DOM tree** and compares it to the **previous one** to compute the minimal set of DOM operations.

The algorithm is optimized with **heuristics** to avoid expensive comparisons.

---

## 🧠 Why Not a Full Tree Comparison?

Comparing two full trees node by node has a time complexity of **O(n³)** — impractical for large UIs. React uses **heuristics** to reduce this to **O(n)**.

---

## ⚙️ Heuristics React Uses

### 1. **Elements of Different Types**

If the root elements are different types, React **destroys** the old tree and **builds** a new one from scratch.

```jsx
// Before
<div>Hello</div>

// After
<span>Hello</span>
```

React discards the `<div>` and creates a new `<span>`.

### 2. **Elements of the Same Type**

React will **update the element in-place** and **recursively diff** its children.

```jsx
// Before
<div className="old">Text</div>

// After
<div className="new">Text</div>
```

Only the `className` is updated.

### 3. **Children with Keys**

When dealing with lists, React relies on **`key` props** to track elements across renders.

```jsx
<ul>
  <li key="a">A</li>
  <li key="b">B</li>
</ul>

// Updates to:
<ul>
  <li key="b">B</li>
  <li key="a">A</li>
</ul>
```

React reorders the list items instead of re-rendering them entirely.

If `key` is missing or incorrect (e.g., using array index), React may unnecessarily re-render or remove items.

---

## 🔧 List Diffing Example

```jsx
function ListExample() {
  const [items, setItems] = React.useState(["A", "B", "C"]);

  return (
    <div>
      <button onClick={() => setItems(["C", "A", "D"])}>Change</button>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Behavior:

- `B` is removed.
- `C` and `A` are moved.
- `D` is added.

With keys, React performs **minimum updates**.

---

## 📌 Summary Table

| Scenario                          | Behavior                                       |
| --------------------------------- | ---------------------------------------------- |
| Different element types           | Replace element and children                   |
| Same element type                 | Update attributes and diff children            |
| Children with keys                | Reorder, add, or remove efficiently            |
| Children without keys or bad keys | Potential performance issue, incorrect updates |

---

## 🧠 Interview Tips

- Know that React avoids full tree diffs by using heuristics.
- Be able to explain the importance of keys in lists.
- Mention that the diffing algorithm contributes to React's performance.
- Understand how `type` and `key` affect DOM reuse.

React’s diffing algorithm is an essential innovation that enables fast and efficient UI rendering with minimal DOM mutations.

[🔝 Back to Top](#table-of-contents)

# What is React Fiber?

**React Fiber** is the **reconciliation engine** introduced in React 16 that powers the rendering process. It is a complete rewrite of React’s core algorithm, designed to enable **incremental rendering**, **better error handling**, **pausing**, and **resuming work** — improving performance and user experience.

Before Fiber, React’s rendering process was **synchronous and recursive**, which blocked the main thread and made rendering large trees problematic.

---

## 🧠 Key Motivations Behind Fiber

1. **Interruptible Rendering:**
   React can pause work on a component and resume it later.

2. **Concurrency:**
   Supports concurrent rendering — essential for features like `Concurrent Mode` and `Suspense`.

3. **Prioritization:**
   Assigns priority levels to tasks (e.g., user interactions > background data fetch).

4. **Error Boundaries:**
   Better handling of errors during rendering.

5. **Better Scheduling:**
   React can yield to the browser and resume later, improving responsiveness.

---

## ⚙️ How Fiber Works (Simplified)

Each component now has a **Fiber node**, which is a JavaScript object describing:

- The component type
- Props
- State
- Side-effects
- Sibling, child, and return links

React builds a **Fiber tree**, which is the virtual DOM restructured for easier traversal and interruption.

### Phases of Rendering:

1. **Render Phase (Can be paused, resumed, aborted):**

   - Builds the Fiber tree.
   - No changes to the DOM yet.

2. **Commit Phase (Synchronous):**
   - Applies the changes to the DOM.
   - Executes lifecycle methods and effects.

---

## 🔄 Example Flow

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

When the button is clicked:

- React schedules an update.
- The render phase walks through the Fiber tree.
- If the work takes too long, it can yield.
- In the commit phase, it updates the DOM.

---

## 🛠️ Fiber Data Structure (Conceptually)

Each Fiber node contains:

- `type`: Function or class component
- `key`: Unique identifier (used in lists)
- `child`, `sibling`, `return`: Tree traversal
- `alternate`: Link to the previous version (for diffing)

---

## 📌 Summary Table

| Feature             | Pre-Fiber (Stack Reconciler) | Fiber Engine |
| ------------------- | ---------------------------- | ------------ |
| Interrupt rendering | ❌                           | ✅           |
| Prioritize updates  | ❌                           | ✅           |
| Error boundaries    | ❌                           | ✅           |
| Concurrency support | ❌                           | ✅           |
| Yield to browser    | ❌                           | ✅           |

---

## 🧠 Interview Tips

- Fiber is React’s core engine since v16.
- Key features: interruptible rendering, prioritization, and concurrency.
- Know the difference between render and commit phases.
- Can mention use cases like `Suspense`, `Concurrent Mode`, and time slicing.

React Fiber modernizes React to handle complex apps with improved efficiency and responsiveness.

[🔝 Back to Top](#table-of-contents)

# How does hydration work in React?

**Hydration** in React is the process where a React application running in the browser **attaches event listeners** and makes a **server-rendered HTML page interactive**.

This is typically used in **Server-Side Rendering (SSR)** scenarios — such as with frameworks like Next.js — where HTML is pre-rendered on the server and sent to the client. Once the HTML is loaded on the client, React "hydrates" the DOM with JavaScript logic to make it dynamic.

---

## 🚀 Why Hydration is Important

- **Performance Boost:** Users see meaningful content faster (pre-rendered HTML).
- **SEO Friendly:** Search engines can crawl content better.
- **Interactive Experience:** Converts static markup into an interactive React app.

---

## 🔧 How Hydration Works

1. **Server:** Renders the HTML string from your React components.
2. **Client:** Loads JavaScript and runs `ReactDOM.hydrate()`.
3. **Hydration:** React attaches event listeners to existing DOM nodes without replacing them.

### Example with Server-Side Rendering:

```jsx
// Server-side
import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToString(<App />);
// Send 'html' to client in an HTML template
```

```jsx
// Client-side
import { hydrateRoot } from "react-dom/client";

const container = document.getElementById("root");
hydrateRoot(container, <App />); // previously: ReactDOM.hydrate()
```

> **Note:** As of React 18, `hydrateRoot` replaces the older `ReactDOM.hydrate()`.

---

## 💡 Key Considerations

- **HTML Must Match:** The markup rendered on the server must match the initial render on the client. Otherwise, React will warn or replace the DOM.
- **Avoid Non-Determinism:** Don’t use code that relies on browser-only APIs (like `window`, `localStorage`) during the initial render.
- **Hydration vs. Rendering:** Hydration is not the same as initial rendering. It's a reattachment to an already-existing DOM.

---

## ⚠️ Hydration Mismatches

If the server-rendered HTML and client-side render don’t match, you may see warnings like:

```
Warning: Text content did not match. Server: "Hello" Client: "Hello World"
```

This happens when server and client renders differ. Use deterministic rendering to avoid this.

---

## 🧠 Interview Tips

- Hydration is used in SSR for connecting server-rendered HTML with client-side React.
- It improves **initial load time** and **SEO**.
- The `hydrateRoot()` API in React 18 supports **concurrent features**.
- Understand common pitfalls like mismatched HTML and non-deterministic renders.

---

## ✅ Summary Table

| Feature           | Hydration                             |
| ----------------- | ------------------------------------- |
| Purpose           | Attach React to server-rendered HTML  |
| API               | `ReactDOM.hydrate()`, `hydrateRoot()` |
| Usage Context     | Server-Side Rendering (SSR)           |
| Key Benefit       | Faster load + interactive UI          |
| Potential Pitfall | Markup mismatch warnings              |

---

Hydration is a cornerstone of modern React performance techniques when using SSR frameworks. It ensures a smooth transition from static content to dynamic interactivity.

[🔝 Back to Top](#table-of-contents)

# What are static methods in React components?

**Static methods** are methods that belong to a class itself, **not to instances** of the class. In the context of React components (especially class components), static methods can be used to define metadata, helper utilities, or configuration that doesn't rely on instance-specific data.

In React, static methods are commonly used for lifecycle hooks, context configuration, and routing features.

---

## 🛠️ Syntax

```jsx
class MyComponent extends React.Component {
  static myStaticMethod() {
    console.log("This is a static method.");
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

// Usage:
MyComponent.myStaticMethod();
```

---

## 🔍 Common Use Cases

### 1. **`getDerivedStateFromProps` (Static Lifecycle Method)**

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.reset) {
      return { count: 0 };
    }
    return null;
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}
```

> React calls `getDerivedStateFromProps` before rendering. It must be static because it doesn’t have access to `this`.

---

### 2. **Context API: `contextType` (Static Field)**

```jsx
const MyContext = React.createContext();

class MyComponent extends React.Component {
  static contextType = MyContext;

  render() {
    return <div>{this.context}</div>;
  }
}
```

> Declaring `contextType` as static allows the component to access context via `this.context`.

---

### 3. **Static Utility Functions**

```jsx
class MathUtils extends React.Component {
  static add(a, b) {
    return a + b;
  }

  render() {
    return <div>{MathUtils.add(2, 3)}</div>; // 5
  }
}
```

> Useful for reusable logic that does not depend on the instance.

---

## 🧠 Key Notes

- Static methods are called on the class, not the instance.
- Cannot access `this` or instance variables within a static method.
- Often used for configuration (`contextType`), data derivation (`getDerivedStateFromProps`), or utility helpers.

---

## ✅ Summary Table

| Feature                             | Description                                         |
| ----------------------------------- | --------------------------------------------------- |
| `static myStaticMethod()`           | Utility or metadata function                        |
| `static getDerivedStateFromProps()` | React lifecycle method (no `this`)                  |
| `static contextType`                | Context API (enables `this.context`)                |
| Usage                               | Called directly on the class (e.g., `MyClass.fn()`) |

---

## 📌 Interview Tip

Be clear that static methods:

- Don’t have access to instance properties or lifecycle methods.
- Are useful for configuration and static utilities.
- Are required for some React APIs like `getDerivedStateFromProps` and `contextType`.

Understanding static methods is key for working with advanced React class component patterns and framework integrations.

[🔝 Back to Top](#table-of-contents)

# What is a render prop in React?

A **render prop** is a technique for sharing code between React components using a **function as a prop**. Instead of hardcoding JSX in a component, you pass a function to determine what to render.

Render props allow greater flexibility and reusability by giving control over what gets rendered.

---

## 🛠️ Basic Example

```jsx
class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) => {
    this.setState({ x: event.clientX, y: event.clientY });
  };

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <h1>
          The mouse position is ({x}, {y})
        </h1>
      )}
    />
  );
}
```

### Explanation:

- `MouseTracker` is a component that tracks mouse position.
- It receives a prop called `render`, which is a function.
- It calls that function with internal state (`x` and `y`), allowing the caller to decide what to display.

---

## 🧱 Render Props Pattern vs. Other Patterns

| Pattern            | Description                             |
| ------------------ | --------------------------------------- |
| Render Props       | Pass a function that returns UI         |
| Higher-Order Comp. | Wrap another component and inject props |
| Hooks              | Extract reusable logic in functions     |

> Render props were popular before hooks; they are still useful in class-based components or certain libraries.

---

## 🧠 Best Practices

- **Avoid prop name collisions** by using meaningful names like `render`, `children`, or `component`.
- Can be implemented using `children` as a function:

```jsx
<MyComponent>{(data) => <p>{data.value}</p>}</MyComponent>
```

---

## 🧪 Real-World Use Case: Data Fetching

```jsx
class DataFetcher extends React.Component {
  state = { data: null };

  componentDidMount() {
    fetch(this.props.url)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

function App() {
  return (
    <DataFetcher
      url='https://jsonplaceholder.typicode.com/todos/1'
      render={(data) => (data ? <div>{data.title}</div> : <p>Loading...</p>)}
    />
  );
}
```

---

## ✅ Summary

- A **render prop** is a prop that takes a function and returns JSX.
- Enables **code sharing and composition**.
- Common in class components before hooks.
- Avoid deeply nested hierarchies ("wrapper hell").

---

## 📌 Interview Tip

If asked in an interview:

- Define render props clearly.
- Explain flexibility and reusability.
- Show a working example, preferably a custom component like `MouseTracker` or `DataFetcher`.
- Mention that render props are less common in modern React with hooks but still valuable for understanding patterns.

[🔝 Back to Top](#table-of-contents)

# Synthetic Events in React

In React, **Synthetic Events** are a cross-browser wrapper around the browser’s native events. They are part of React’s event system and provide a consistent API regardless of the browser.

React creates SyntheticEvent objects to wrap the native events, making them compatible across all browsers and enhancing performance via event delegation.

---

## 🛠️ Basic Usage

```jsx
function ClickButton() {
  const handleClick = (event) => {
    console.log("Synthetic Event Type:", event.type);
    console.log("Target Element:", event.target);
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Output Example:

```
Synthetic Event Type: click
Target Element: <button>Click Me</button>
```

---

## 🧱 Synthetic vs Native Events

| Feature           | SyntheticEvent | Native Event          |
| ----------------- | -------------- | --------------------- |
| Cross-Browser     | ✅ Yes         | ❌ Varies             |
| Memory Efficiency | ✅ Pooled      | ❌ Allocated per call |
| API Uniformity    | ✅ Consistent  | ❌ Varies             |

---

## 🔄 Event Pooling

React pools SyntheticEvent objects for performance, reusing them across multiple events.

### ⚠️ Important:

After the event callback, the SyntheticEvent is returned to the pool and its properties become `nullified`.

### Solution:

If you need the event asynchronously, call `event.persist()`:

```jsx
function DelayedLogger() {
  const handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      console.log("Delayed Event Type:", event.type);
    }, 1000);
  };

  return <button onClick={handleClick}>Log Later</button>;
}
```

---

## 📚 Supported Event Types

React supports many synthetic event types, including:

- `onClick`, `onDoubleClick`
- `onChange`, `onInput`
- `onSubmit`
- `onMouseEnter`, `onMouseLeave`
- `onKeyDown`, `onKeyUp`
- `onFocus`, `onBlur`
- `onTouchStart`, `onTouchMove`
- And more...

---

## 🧪 Example: Form Submission

```jsx
function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted using Synthetic Event");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Name' />
      <button type='submit'>Submit</button>
    </form>
  );
}
```

---

## ✅ Summary

- **Synthetic Events** normalize native events across browsers.
- React uses **event delegation** and **event pooling** for efficiency.
- Use `event.persist()` if accessing events asynchronously.
- Provide a familiar and unified API like DOM events.

---

## 📌 Interview Tip

If asked:

- Define Synthetic Events and their purpose.
- Explain pooling and how to use `event.persist()`.
- Provide use cases with examples.
- Compare with native DOM events.

Understanding Synthetic Events demonstrates knowledge of React internals and event handling best practices.

[🔝 Back to Top](#table-of-contents)

# What is the difference between export default and export in React js

In React (and JavaScript modules in general), both `export` and `export default` are used to share code between files. However, they serve different purposes and affect how you import the data.

---

## 1️⃣ `export default`

### ✅ Purpose:

Exports a **single value** from a module. This can be a function, class, object, or primitive.

### ✅ Syntax:

```jsx
// MyComponent.js
export default function MyComponent() {
  return <div>Hello from default export</div>;
}
```

### ✅ Import:

```jsx
// App.js
import MyComponent from "./MyComponent";
```

- No curly braces needed.
- You can rename the imported component:

```jsx
import RenamedComponent from "./MyComponent";
```

---

## 2️⃣ Named `export`

### ✅ Purpose:

Allows **multiple exports** from a file.

### ✅ Syntax:

```jsx
// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

### ✅ Import:

```jsx
import { add, subtract } from "./utils";
```

- Curly braces are **mandatory**.
- Import name **must match** the exported name.
- You can alias using `as`:

```jsx
import { add as sum } from "./utils";
```

---

## 🆚 Key Differences

| Feature            | `export default`                     | `export` (named)                      |
| ------------------ | ------------------------------------ | ------------------------------------- |
| Number of exports  | Only one per file                    | Multiple exports allowed              |
| Import syntax      | No curly braces                      | Requires curly braces                 |
| Name during import | Can be renamed freely                | Must match (unless using `as`)        |
| Use case           | Single main thing (component, class) | Utility functions, constants, helpers |

---

## 🧪 Real-World Example in React

### Button.js (default export)

```jsx
export default function Button() {
  return <button>Click Me</button>;
}
```

### constants.js (named export)

```jsx
export const BUTTON_COLOR = "blue";
export const BUTTON_SIZE = "large";
```

### App.js

```jsx
import Button from "./Button";
import { BUTTON_COLOR, BUTTON_SIZE } from "./constants";

function App() {
  return (
    <div style={{ color: BUTTON_COLOR }}>
      <Button />
    </div>
  );
}
```

---

## 🧠 Best Practices

- Use `export default` when a module **exports a single main component or function**.
- Use `export` (named) when you need to export **multiple items** from one file.
- Be consistent within your project to avoid confusion.

---

## 📌 Interview Tip

> Be prepared to explain when you'd use each type. Mention how named exports encourage modularity while default exports are ideal for single-responsibility components or modules.

[🔝 Back to Top](#table-of-contents)

# What is super, constructor, render function in React JS

In React, especially when working with **class components**, understanding how `super`, `constructor`, and `render()` function is crucial. These are part of JavaScript's class syntax and React's component lifecycle.

---

## 1️⃣ `constructor()`

### ✅ Purpose:

The `constructor` is a special method used to initialize a component's state and bind methods.

### ✅ Syntax:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props); // Call the parent class constructor
    this.state = {
      count: 0,
    };
  }
}
```

### 🧠 Key Points:

- Called when the component is instantiated.
- It's the right place to initialize `state`.
- Required to call `super(props)` before using `this`.

---

## 2️⃣ `super()`

### ✅ Purpose:

The `super()` function is used to call the **constructor of the parent class** (`React.Component`).

### ✅ Syntax:

```jsx
constructor(props) {
  super(props);
  // now you can use this.props
}
```

### 🧠 Key Points:

- Required in the constructor of any class that extends another class.
- Without calling `super(props)`, `this.props` will be `undefined` in the constructor.

---

## 3️⃣ `render()`

### ✅ Purpose:

The `render()` method defines what the **UI should look like**. It must return valid JSX.

### ✅ Syntax:

```jsx
render() {
  return <h1>Hello, {this.props.name}</h1>;
}
```

### 🧠 Key Points:

- Mandatory for all class components.
- Should be a pure function of props and state.
- No side effects (like API calls) should occur here.

---

## 🧪 Example Putting It All Together:

```jsx
import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }

  render() {
    return <h1>Welcome, {this.state.name}!</h1>;
  }
}

export default Welcome;
```

---

## 📌 Summary Table

| Term        | Purpose                        | When to Use                           |
| ----------- | ------------------------------ | ------------------------------------- |
| constructor | Initialize state, bind methods | At component creation                 |
| super       | Call parent class constructor  | Inside constructor before `this`      |
| render      | Define UI output (JSX)         | Always (required for class component) |

---

## 🎯 Interview Tip

> Even though React has shifted towards functional components with hooks, understanding class component lifecycle (constructor, render) is still important for legacy code and interviews.

[🔝 Back to Top](#table-of-contents)

# What is node module in React JS

In a React (or any Node.js-based) project, `node_modules` is a directory that contains all the JavaScript libraries and dependencies installed via npm (Node Package Manager) or yarn.

It is **automatically generated** when you run:

```bash
npm install
# or
yarn install
```

---

## 🔍 Why Is It Important?

React projects rely on many third-party packages such as:

- `react`
- `react-dom`
- `react-scripts`
- Webpack, Babel, ESLint, etc.

All these packages are downloaded and stored inside the `node_modules` folder to be available for the project during development and production builds.

---

## 🛠 How It Works

1. You define dependencies in `package.json`:

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "axios": "^1.2.0"
  }
}
```

2. When you run `npm install`, it:

   - Looks at the dependencies listed.
   - Downloads those packages and their internal dependencies.
   - Installs them into `node_modules`.

3. You can import those modules in your React code:

```jsx
import React from "react";
import axios from "axios";
```

---

## 🧾 Example

Given this `package.json`:

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lodash": "^4.17.21"
  }
}
```

After running `npm install`, you'll get:

```
my-app/
├── node_modules/
│   ├── react/
│   ├── react-dom/
│   └── lodash/
├── package.json
└── src/
```

Then in your code:

```jsx
import _ from "lodash";

const numbers = [10, 5, 100, 2];
const max = _.max(numbers); // 100
```

---

## 📁 Should You Commit `node_modules` to Git?

**No!** It's a bad practice because:

- The folder can be huge.
- It can be regenerated from `package.json` using `npm install`.

Use a `.gitignore` file to exclude it:

```
/node_modules
```

---

## 🧠 Key Points

- `node_modules` contains all installed packages.
- Do not edit files inside it directly.
- Automatically generated based on `package.json`.
- Avoid pushing it to version control.

---

## ✅ Interview Tip

> Understanding how `node_modules` works shows you're familiar with npm/yarn workflows and project structure. Know the difference between `dependencies` and `devDependencies`, and be able to explain why `node_modules` is ignored in Git.

[🔝 Back to Top](#table-of-contents)

# What is server side render in React JS

Server-Side Rendering (SSR) is a technique where the HTML of a web page is generated on the server instead of the browser. The fully rendered page is then sent to the browser, which improves performance and SEO.

In the context of React, SSR means rendering React components to HTML on the server and sending that HTML to the client.

---

## ⚙️ How It Works

1. **Client sends request** to the server (e.g., visiting a URL).
2. **Server renders the React app** to an HTML string.
3. **Server sends the HTML** to the browser.
4. **Browser displays the content** immediately.
5. **React hydrates the app**, attaching event listeners to make it interactive.

---

## 🧠 Why Use SSR?

- ✅ Faster initial page load (especially on slow networks)
- ✅ Better SEO (HTML content is crawlable by search engines)
- ✅ Enhanced user experience

---

## 🧪 Basic SSR Example with `ReactDOMServer`

```jsx
// server.js
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";

const server = express();

server.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  res.send(`
    <html>
      <head><title>SSR Example</title></head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

server.listen(3000);
```

---

## ⚒ Frameworks that Support SSR

- **Next.js** – the most popular React framework for SSR
- **Remix** – supports SSR and routing
- **Razzle** – universal React rendering

### 🔍 Example with Next.js

```jsx
// pages/index.js
function Home({ message }) {
  return <div>{message}</div>;
}

export async function getServerSideProps() {
  return {
    props: {
      message: "Hello from the server!",
    },
  };
}

export default Home;
```

---

## 🆚 CSR vs SSR

| Feature            | Client-Side Rendering (CSR) | Server-Side Rendering (SSR) |
| ------------------ | --------------------------- | --------------------------- |
| Initial Load Speed | Slower                      | Faster                      |
| SEO                | Poor                        | Good                        |
| Server Load        | Light                       | Heavy                       |
| Interactivity      | After JS loads              | Immediately with hydration  |

---

## 📌 Key Points

- SSR improves performance and SEO.
- React supports SSR via `ReactDOMServer`.
- Hydration is essential for interactivity after SSR.
- Use frameworks like Next.js for production-ready SSR apps.

---

## ✅ Interview Tip

> Be ready to explain the benefits and trade-offs of SSR vs CSR, describe hydration, and mention real-world use cases like improving SEO for marketing pages or blogs.

[🔝 Back to Top](#table-of-contents)

# What is useStrict in React JS

`React.StrictMode` is a tool provided by React to help developers identify potential problems in their applications. It activates additional checks and warnings for its descendants, assisting in writing more robust code.

It does **not render any visible UI** and has **no effect in production builds** — it only runs in development mode.

---

## 🎯 Key Purposes

1. **Identifies unsafe lifecycle methods**
2. **Warns about legacy string ref API usage**
3. **Detects unexpected side effects**
4. **Helps with preparing for async rendering**
5. **Double-invokes functions like `useEffect` cleanup to find bugs**

---

## 🔧 How to Use StrictMode

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 📌 What Happens Inside StrictMode

- Lifecycle methods like `componentWillMount`, `componentWillUpdate`, and `componentWillReceiveProps` are flagged.
- Side effects in `useEffect`, `useLayoutEffect`, or constructors are run twice in development (for detection).

---

## 🔍 Example: Detecting Side Effects

```jsx
function ExampleComponent() {
  React.useEffect(() => {
    console.log("Effect ran");
    return () => console.log("Cleanup");
  }, []);

  return <div>Hello World</div>;
}

// Inside App.jsx
<React.StrictMode>
  <ExampleComponent />
</React.StrictMode>;
```

**Output in console (development only):**

```
Effect ran
Cleanup
Effect ran
```

This double call helps detect unintended effects.

---

## 🤔 When Should You Use It?

- During development to catch potential issues early.
- In new projects to adopt modern best practices.
- Around specific components to isolate checks.

---

## ✅ Interview Tip

> React.StrictMode is a development-only tool to highlight potential issues in React apps. Emphasize how it encourages writing clean, forward-compatible code.

---

## ⚠️ Note

- Does **not** affect performance in production.
- Does **not** prevent errors but **warns** about bad practices.

---

## Summary

| Feature     | Behavior                            |
| ----------- | ----------------------------------- |
| Production  | No effect                           |
| Development | Adds warnings/checks                |
| Common use  | Around root or sensitive trees      |
| Useful for  | Detecting side effects, legacy APIs |

React.StrictMode is your ally for writing better, future-proof React applications.

[🔝 Back to Top](#table-of-contents)

# How does React handle accessibility?

Accessibility (a11y) in web development refers to building applications that can be used by as many people as possible, including individuals with disabilities.

React supports building accessible web apps by:

- Encouraging semantic HTML
- Providing tooling and best practices
- Allowing integration with ARIA (Accessible Rich Internet Applications)

---

## ✅ Core Concepts

### 1. **Semantic HTML**

React uses JSX, which compiles to HTML. Using proper HTML tags is the first step:

```jsx
function LoginForm() {
  return (
    <form>
      <label htmlFor='username'>Username</label>
      <input id='username' name='username' />

      <label htmlFor='password'>Password</label>
      <input type='password' id='password' name='password' />

      <button type='submit'>Login</button>
    </form>
  );
}
```

### 2. **ARIA Attributes**

ARIA attributes enhance accessibility when semantic HTML is not enough:

```jsx
function Modal({ isOpen }) {
  return (
    isOpen && (
      <div role='dialog' aria-labelledby='dialog-title' aria-modal='true'>
        <h2 id='dialog-title'>Welcome</h2>
        <p>This is an important message</p>
      </div>
    )
  );
}
```

### 3. **Keyboard Navigation**

Always support tab navigation:

```jsx
<button
  onKeyDown={(e) => {
    if (e.key === "Enter") handleClick();
  }}
>
  Click Me
</button>
```

Or better, just use `<button>` which supports `Enter`/`Space` by default.

### 4. **Focus Management**

For custom components like modals, you need to manage focus manually:

```jsx
useEffect(() => {
  if (isOpen) document.getElementById("closeButton")?.focus();
}, [isOpen]);
```

### 5. **React Testing Library**

Encourages writing tests based on accessibility:

```jsx
import { render, screen } from "@testing-library/react";

render(<LoginForm />);
expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
```

---

## 🔍 Common Accessibility Tips

- Use `htmlFor` instead of `for` in JSX.
- Avoid using `div` or `span` for interactive elements.
- Don’t rely on color alone to convey information.
- Use `tabIndex`, `aria-*`, and `role` attributes properly.
- Test with screen readers (NVDA, VoiceOver).

---

## 🧰 Useful Tools

- **eslint-plugin-jsx-a11y**: Linter for accessibility in JSX.
- **axe-core / axe DevTools**: Browser extension for auditing accessibility.
- **React ARIA**: From Adobe, provides accessibility primitives.

---

## ✍️ Example: Accessible Button with ARIA

```jsx
function AccessibleButton({ label, onClick }) {
  return (
    <div
      role='button'
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={label}
    >
      {label}
    </div>
  );
}
```

**Better alternative:** Just use `<button>` unless there's a strong reason.

---

## 🎯 When Interviewed, Emphasize:

- React helps with a11y, but the developer must enforce best practices.
- Use semantic HTML and ARIA where appropriate.
- Accessibility is essential, not optional.

---

## Summary Table

| Feature             | Description                                            |
| ------------------- | ------------------------------------------------------ |
| Semantic HTML       | Encouraged via JSX                                     |
| ARIA Support        | Fully supported through props                          |
| Keyboard Navigation | Must be manually supported for custom components       |
| Focus Management    | Essential for modals, dialogs, menus                   |
| Tooling             | ESLint, axe, React Testing Library                     |
| Testing             | Accessible queries using `getByLabelText`, `getByRole` |

Accessibility in React is achievable with care, discipline, and the right tools. Prioritize it from the beginning of your application design.

[🔝 Back to Top](#table-of-contents)

# How does React handle updates to child components?

React follows a **top-down, unidirectional data flow** model. When a parent component re-renders, React determines whether it needs to also re-render its child components. This process is driven by:

1. Changes in **props**
2. Changes in **state**
3. **Reconciliation and Virtual DOM Diffing**

---

## 🧠 When Do Child Components Re-render?

### 1. **Prop Changes**

If a parent passes new props to a child, React will re-render the child:

```jsx
function Child({ value }) {
  console.log("Child Rendered");
  return <p>{value}</p>;
}

function Parent() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child value={count} />
    </>
  );
}
```

**Explanation**: Child re-renders because `value` (a prop) changes.

### 2. **Unchanged Props But Parent Re-renders**

Even if props remain unchanged, children re-render **unless**:

- They are wrapped in `React.memo()`
- Or a custom `shouldComponentUpdate` is implemented (in class components)

```jsx
const Child = React.memo(({ value }) => {
  console.log("Memoized Child Rendered");
  return <p>{value}</p>;
});
```

### 3. **State or Context Usage Inside Child**

If a child component maintains its own state or consumes context, it will re-render when those change:

```jsx
function Child() {
  const [name, setName] = React.useState("React");
  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
```

### 4. **Key Prop Change in Lists**

When using `.map()` with dynamic lists, if a key changes, React treats it as a new component.

---

## 📦 Optimization Techniques

### 1. **React.memo**

Prevents re-renders if props haven’t changed.

### 2. **useMemo/useCallback**

Helps prevent unnecessary calculations or re-creations of functions passed as props.

### 3. **shouldComponentUpdate / PureComponent**

Used in class-based components for fine control over updates.

### 4. **Key Stability**

Use stable keys to avoid unnecessary re-renders in lists.

---

## 🔍 Example: Unnecessary Child Re-renders

```jsx
const Child = React.memo(({ data }) => {
  console.log("Child rendered");
  return <div>{data.name}</div>;
});

function Parent() {
  const [count, setCount] = React.useState(0);
  const data = { name: "React" }; // new object each render

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child data={data} />
    </>
  );
}
```

**Fix**: Memoize `data` using `useMemo()`

```jsx
const data = useMemo(() => ({ name: "React" }), []);
```

---

## 🧪 Interview Tips

- Know when children re-render due to prop/state/context changes.
- Understand memoization and reference equality.
- Explain how React reconciles and uses the virtual DOM.
- Mention tools like React DevTools to debug re-renders.

---

## Summary Table

| Trigger               | Will Child Re-render?  | How to Prevent                  |
| --------------------- | ---------------------- | ------------------------------- |
| Props changed         | ✅ Yes                 | N/A                             |
| Props unchanged       | ✅ (unless memoized)   | Use `React.memo`                |
| Parent state changed  | ✅ if child used props | `React.memo`, move state down   |
| Key changed in list   | ✅ Yes (new instance)  | Use stable keys                 |
| Context value changed | ✅ Yes                 | Use `React.memo` + `useContext` |

Understanding how and when React updates child components is crucial to optimizing rendering performance in complex apps.

[🔝 Back to Top](#table-of-contents)

# How does React handle animations?

React does not include built-in animation capabilities like jQuery. Instead, it supports animations via external libraries and controlled component updates. Common techniques include:

1. **CSS Transitions/Animations**
2. **React Transition Group**
3. **Framer Motion**
4. **React Spring**
5. **Manual JavaScript animations**

---

## 1. 🚀 CSS Transitions/Animations

Use standard CSS transitions on elements:

```jsx
function FadeInComponent() {
  return <div className='fade'>Hello</div>;
}
```

```css
.fade {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
```

### ✅ Pros:

- Lightweight
- Easy to integrate

### ❌ Cons:

- Not dynamic or state-aware

---

## 2. ✨ React Transition Group

A popular library for handling enter/exit animations:

```bash
npm install react-transition-group
```

```jsx
import { CSSTransition } from "react-transition-group";

function ToggleComponent() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>Toggle</button>
      <CSSTransition in={show} timeout={300} classNames='fade' unmountOnExit>
        <div className='fade'>Animated Content</div>
      </CSSTransition>
    </>
  );
}
```

### CSS:

```css
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms;
}
.fade-exit {
  opacity: 1;
}
.fade-exit-active {
  opacity: 0;
  transition: opacity 300ms;
}
```

---

## 3. 🧲 Framer Motion

Powerful and declarative animation library:

```bash
npm install framer-motion
```

```jsx
import { motion } from "framer-motion";

function Box() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      I fade in!
    </motion.div>
  );
}
```

### ✅ Pros:

- Declarative
- Complex animations made easy
- State-aware and variant-driven

---

## 4. 🌱 React Spring

Physics-based animations:

```bash
npm install @react-spring/web
```

```jsx
import { useSpring, animated } from "@react-spring/web";

function SpringExample() {
  const styles = useSpring({ opacity: 1, from: { opacity: 0 } });

  return <animated.div style={styles}>Hello Spring</animated.div>;
}
```

---

## 5. 🎛 Manual JS Animation

Using `requestAnimationFrame` directly (not recommended unless custom control is needed):

```jsx
function ManualFade() {
  const ref = React.useRef();

  React.useEffect(() => {
    let start;
    const duration = 1000;

    function animate(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const opacity = Math.min(progress / duration, 1);
      ref.current.style.opacity = opacity;
      if (progress < duration) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      Manual Animation
    </div>
  );
}
```

---

## 💡 Interview Tips

- Use `Framer Motion` for dynamic UI animations.
- Prefer `React Transition Group` for lifecycle-based transitions.
- Stick to CSS for simple hover or fade effects.
- Avoid direct DOM manipulation unless necessary.

---

## Summary Table

| Method                 | Best For                             | Tool Needed      |
| ---------------------- | ------------------------------------ | ---------------- |
| CSS Transitions        | Simple effects                       | No               |
| React Transition Group | Lifecycle (mount/unmount) animations | Yes              |
| Framer Motion          | Declarative, state-based motion      | Yes              |
| React Spring           | Physics-based motion                 | Yes              |
| Manual JS              | Full control, custom logic           | No (but verbose) |

React empowers developers to integrate animation flexibly. For best results, use declarative libraries like Framer Motion or Transition Group to keep code readable and scalable.

[🔝 Back to Top](#table-of-contents)

# Testing React Components

Testing React components is a crucial part of building maintainable and reliable applications. It ensures that components behave as expected and helps prevent bugs as the application evolves.

---

## Why Test React Components?

- **Ensure Correct Behavior**: Verify that UI and logic work as intended.
- **Prevent Regressions**: Catch issues early during code changes.
- **Facilitate Refactoring**: Refactor with confidence when tests cover existing behavior.
- **Documentation**: Tests act as living documentation.

---

## Common Testing Tools

1. **Jest**: JavaScript testing framework often used with React.
2. **React Testing Library (RTL)**: Encourages testing components from the user's perspective.
3. **Enzyme**: Allows manipulation and traversal of React components (less favored in modern React).

---

## Types of Tests

### 1. **Unit Tests**

Test individual functions or components in isolation.

### 2. **Integration Tests**

Test how components work together (e.g., a form submitting and displaying data).

### 3. **End-to-End (E2E) Tests**

Test the complete flow of the application (tools: Cypress, Playwright).

---

## Basic Example using React Testing Library

### Component: `Greeting.js`

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
export default Greeting;
```

### Test: `Greeting.test.js`

```jsx
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders greeting with name", () => {
  render(<Greeting name='Alice' />);
  const greetingElement = screen.getByText(/Hello, Alice!/i);
  expect(greetingElement).toBeInTheDocument();
});
```

---

## Example: Testing Interaction

### Component: `Counter.js`

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Counter;
```

### Test: `Counter.test.js`

```jsx
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments counter on button click", () => {
  render(<Counter />);
  const button = screen.getByText(/Increment/i);
  fireEvent.click(button);
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});
```

---

## Best Practices

- **Test behavior, not implementation**.
- **Use screen queries like `getByRole`, `getByText`, etc.**
- **Avoid test IDs unless necessary.**
- **Keep tests isolated and focused.**

---

## Mocking and Async Testing

Use `jest.fn()` for mocking functions and `waitFor` for async updates.

```jsx
test("calls fetch on button click", async () => {
  const fakeFetch = jest.fn(() =>
    Promise.resolve({ json: () => Promise.resolve({ data: "OK" }) })
  );
  global.fetch = fakeFetch;

  render(<MyComponent />);
  fireEvent.click(screen.getByText("Fetch Data"));

  await waitFor(() => expect(screen.getByText("OK")).toBeInTheDocument());
});
```

---

## Final Tips for Interviews

- Understand the difference between testing strategies.
- Be able to write and explain tests for component rendering and events.
- Know when to use mocking and how to test asynchronous behavior.
- Familiarize yourself with popular testing tools like Jest and React Testing Library.

---

With a good understanding of component testing, you'll be well-prepared for technical interviews and real-world React development.

[🔝 Back to Top](#table-of-contents)

# Role of Jest in React Testing

Jest is a popular JavaScript testing framework developed by Facebook, and it is the default testing tool used in React applications. It provides a complete and easy-to-use solution for testing JavaScript code, especially React components.

---

## Key Features of Jest

1. **Zero Configuration**: Works out of the box for React projects (especially with Create React App).
2. **Snapshot Testing**: Helps track UI changes by storing and comparing snapshots.
3. **Mocking**: Easily mock functions, modules, and timers.
4. **Parallel Test Running**: Executes tests concurrently for faster performance.
5. **Code Coverage**: Generates detailed code coverage reports.
6. **Integrated Assertions and Matchers**: Comes with a rich set of assertions (`toBe`, `toEqual`, `toHaveBeenCalled`, etc.).

---

## Basic Example with Jest

### Component: `Greeting.js`

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
export default Greeting;
```

### Test: `Greeting.test.js`

```jsx
import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

test("renders the correct greeting", () => {
  render(<Greeting name='Alice' />);
  expect(screen.getByText("Hello, Alice!")).toBeInTheDocument();
});
```

---

## Snapshot Testing with Jest

Snapshot tests capture the rendered output of a component and compare it to a saved reference snapshot.

### Example:

```jsx
import renderer from "react-test-renderer";
import Greeting from "./Greeting";

test("matches the snapshot", () => {
  const tree = renderer.create(<Greeting name='Alice' />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

This test will fail if the UI changes, helping detect unintended changes.

---

## Mocking Functions

Jest provides utilities to mock modules and functions.

### Example:

```jsx
const mockFetch = jest.fn(() =>
  Promise.resolve({ json: () => ({ message: "Success" }) })
);

global.fetch = mockFetch;

test("calls fetch and displays message", async () => {
  render(<MyComponent />);
  fireEvent.click(screen.getByText("Load Data"));
  await waitFor(() => expect(screen.getByText("Success")).toBeInTheDocument());
});
```

---

## Running Tests with Jest

- Run all tests:

```bash
npm test
```

- Run specific test file:

```bash
npm test Greeting.test.js
```

- Watch mode:

```bash
npm test -- --watch
```

---

## Jest CLI & Configuration

You can customize Jest using `jest.config.js`:

```js
module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};
```

---

## Best Practices with Jest

- Use `beforeEach`/`afterEach` for setup and teardown.
- Use `describe` blocks for grouping related tests.
- Keep tests small and focused on one behavior.
- Prefer testing behavior over implementation.

---

## Conclusion

Jest is a powerful and versatile testing framework that is deeply integrated into the React ecosystem. Its ability to handle unit, snapshot, and mock testing makes it indispensable for modern React development. Mastery of Jest is essential for any senior React developer, both in day-to-day coding and in technical interviews.

[🔝 Back to Top](#table-of-contents)

# Shallow Rendering vs. Full Rendering

When testing React components, it's important to understand the difference between **shallow rendering** and **full rendering**. These approaches define how deeply your test framework renders components and their children.

---

## Shallow Rendering

**Definition:**
Shallow rendering renders only the component being tested and _not_ its child components. It is typically used to test component logic in isolation.

**Tool:** `enzyme.shallow()` (Enzyme is a popular testing utility for React).

### Example:

```jsx
// MyComponent.jsx
function MyComponent() {
  return (
    <div>
      <h1>Title</h1>
      <ChildComponent />
    </div>
  );
}
```

```jsx
// MyComponent.test.js
import { shallow } from "enzyme";
import MyComponent from "./MyComponent";

test("renders title without crashing", () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find("h1").text()).toBe("Title");
  expect(wrapper.find("ChildComponent").exists()).toBe(true);
});
```

**Benefits:**

- Fast tests
- Focused on component behavior
- Child components are not rendered, reducing test scope

**Limitations:**

- Doesn’t test full DOM behavior
- Cannot test lifecycle interactions with children

---

## Full Rendering

**Definition:**
Full rendering (aka mounting) renders the component along with all its children. It simulates real behavior more accurately.

**Tools:**

- `enzyme.mount()`
- `@testing-library/react`'s `render()`

### Example:

```jsx
import { render } from "@testing-library/react";
import MyComponent from "./MyComponent";

test("renders full component tree", () => {
  const { getByText } = render(<MyComponent />);
  expect(getByText("Title")).toBeInTheDocument();
});
```

**Benefits:**

- Full DOM testing
- Good for integration testing
- Can test effects, context, hooks, etc.

**Limitations:**

- Slower than shallow rendering
- Can be affected by issues in child components

---

## Summary Table

| Feature           | Shallow Rendering      | Full Rendering         |
| ----------------- | ---------------------- | ---------------------- |
| Tool              | `shallow()`            | `mount()`, `render()`  |
| Scope             | Only current component | Component and children |
| Speed             | Faster                 | Slower                 |
| Ideal for         | Unit tests             | Integration/UI tests   |
| Lifecycle methods | Partial support        | Full support           |
| DOM availability  | No real DOM            | Simulated DOM          |

---

## When to Use Which

- **Use Shallow Rendering** when you want to isolate and test a component's logic or output without worrying about child components.
- **Use Full Rendering** when you're testing how components interact together, or when lifecycle methods, context, and hooks must be considered.

---

## Conclusion

Understanding the difference between shallow and full rendering helps you write efficient, meaningful tests. Use the right rendering method based on what you are trying to test—component behavior or component integration.

For senior React interviews, be prepared to explain the differences and justify your choice based on the testing goal.

[🔝 Back to Top](#table-of-contents)

# How to Do Jest Setup in a React Project

**Jest** is a popular JavaScript testing framework developed by Facebook, commonly used in React applications. Setting it up correctly ensures smooth unit and integration testing.

---

## 1. Create a React Project

If you haven’t already, you can create a React app using:

```bash
npx create-react-app my-app
cd my-app
```

React projects created with `create-react-app` (CRA) come with Jest pre-installed.

---

## 2. Verify Jest Installation

Check `package.json` to see the following default test script:

```json
"scripts": {
  "test": "react-scripts test"
}
```

Run the tests using:

```bash
npm test
```

This runs Jest in watch mode.

---

## 3. Create a Sample Test File

Create a new component and its test file:

**src/components/Greeting.js**

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

**src/components/Greeting.test.js**

```jsx
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders greeting message", () => {
  render(<Greeting name='John' />);
  const heading = screen.getByText(/hello, john!/i);
  expect(heading).toBeInTheDocument();
});
```

---

## 4. Configure Jest (Optional)

If you’re ejecting from CRA or using a custom setup, you can configure Jest with a `jest.config.js` file:

```js
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
```

Also, you might need to install some dev dependencies:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom identity-obj-proxy
```

---

## 5. Setup Testing Library and DOM Matchers

In **src/setupTests.js**, add:

```js
import "@testing-library/jest-dom";
```

This allows matchers like `toBeInTheDocument()`.

---

## 6. Run Tests

Run Jest with:

```bash
npm test
```

Press `a` to run all tests.

---

## Summary

| Step              | Action                                      |
| ----------------- | ------------------------------------------- |
| Project Setup     | Use CRA or custom setup                     |
| Jest Availability | Comes by default with CRA                   |
| Sample Test       | Use `@testing-library/react` to write tests |
| Optional Config   | Use `jest.config.js` and `setupTests.js`    |
| Test Execution    | Run with `npm test` or `yarn test`          |

---

## Conclusion

Jest simplifies testing React components with built-in support and powerful features. With minimal setup using CRA, or custom configuration for advanced control, Jest is a go-to solution for reliable and maintainable React testing.

Be ready to demonstrate setting up and writing basic tests using Jest in your interview.

[🔝 Back to Top](#table-of-contents)

# Implementing Lazy Loading in React

Lazy loading in React is a performance optimization technique that helps load components only when they are needed. This reduces the initial bundle size and improves load time, especially in large applications.

---

## Why Use Lazy Loading?

- Reduces initial load time
- Splits code into smaller bundles
- Enhances user experience
- Improves performance on slower networks

---

## 1. Using `React.lazy` and `Suspense`

### Syntax:

```jsx
const ComponentName = React.lazy(() => import("./ComponentPath"));
```

### Example:

**App.js**

```jsx
import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  return (
    <div>
      <h1>Main App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

**LazyComponent.js**

```jsx
function LazyComponent() {
  return <div>This is a lazily loaded component.</div>;
}

export default LazyComponent;
```

---

## 2. Lazy Loading with React Router

You can combine lazy loading with routing to load components only when the route is visited.

### Example:

```jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

---

## 3. Error Boundaries with Lazy Components

Lazy-loaded components may fail to load. Combine with error boundaries:

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading.</h2>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
</ErrorBoundary>;
```

---

## Best Practices

- Always provide a fallback UI with `<Suspense>`
- Group components by routes or features
- Use chunk naming in Webpack for better debugging
- Monitor bundle size with tools like [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

---

## Summary Table

| Feature             | Tool/Method           |
| ------------------- | --------------------- |
| Component Lazy Load | `React.lazy()`        |
| Suspense Wrapper    | `<Suspense fallback>` |
| Route-based Load    | React Router + lazy   |
| Error Handling      | Error Boundaries      |

---

## Conclusion

Lazy loading is essential for performance optimization in modern React apps. By leveraging `React.lazy` and `Suspense`, and combining it with route-based loading and error boundaries, you can create a smooth and scalable user experience.

[🔝 Back to Top](#table-of-contents)

# Setting up Routing and Private Routing in React

React Router is a popular library used to handle routing in React applications. It allows navigation between views or components and supports dynamic routing, nested routes, and route protection (private routes).

---

## 1. Installing React Router

```bash
npm install react-router-dom
```

---

## 2. Basic Routing Setup

### Example:

```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

**Explanation:**

- `BrowserRouter` wraps the entire app.
- `Routes` contains all defined routes.
- `Route` links a path to a component.
- `Link` is used to navigate without page reloads.

---

## 3. Setting Up Private Routes

Private routes restrict access to specific components based on authentication status.

### Example:

```jsx
import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("authToken");

  return isAuthenticated ? children : <Navigate to='/login' />;
}

export default PrivateRoute;
```

### Usage in App:

```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
```

**Explanation:**

- `PrivateRoute` checks authentication.
- If not authenticated, it redirects to `/login` using `<Navigate />`.
- Otherwise, it renders the protected component.

---

## 4. Nested Routing

Nested routes allow you to render sub-components inside a parent layout.

### Example:

```jsx
function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet />
    </div>
  );
}

function Profile() {
  return <p>User Profile</p>;
}

function Settings() {
  return <p>User Settings</p>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='dashboard' element={<DashboardLayout />}>
          <Route path='profile' element={<Profile />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}
```

**Explanation:**

- Use `<Outlet />` in the parent to render child routes.
- `dashboard/profile` and `dashboard/settings` become accessible paths.

---

## 5. Dynamic Route Parameters

Dynamic segments allow you to pass values via the URL.

### Example:

```jsx
import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='user/:id' element={<UserDetail />} />
      </Routes>
    </Router>
  );
}
```

**Explanation:**

- `:id` is a dynamic parameter.
- `useParams` is used to extract it inside the component.

---

## 6. Route-Based Code Splitting with React.lazy

Lazy loading helps split routes and load them only when required, improving performance.

### Example:

```jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

**Explanation:**

- Use `React.lazy()` for components.
- Wrap routes in `<Suspense>` to show fallback UI while loading.

---

## 7. Animating Route Transitions

You can use animation libraries like `framer-motion` or `react-transition-group` to animate route changes.

### Example using Framer Motion:

```bash
npm install framer-motion
```

```jsx
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path='/about'
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
```

**Explanation:**

- `AnimatePresence` enables exit animations.
- Each page is wrapped in `motion.div` to animate mount/unmount.

---

## 8. Final Tips for Interviews

- Understand how `Route`, `Link`, `Navigate`, `useParams`, `Outlet` work.
- Be comfortable creating public, private, nested routes.
- Know how to use lazy loading to improve performance.
- Use animations for polished UX during route transitions.
- Understand how routing integrates with authentication flows.

[🔝 Back to Top](#table-of-contents)

# Create Some Commonly Used React Custom Hooks with Examples

Custom hooks in React allow you to extract component logic into reusable functions. Below are some commonly used custom hooks with detailed explanations and examples.

---

## 1. useLocalStorage

Persists state in `localStorage`.

### Hook:

```jsx
import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```

### Usage:

```jsx
const [name, setName] = useLocalStorage("name", "");
```

---

## 2. useDebounce

Delays value update by a specified delay time.

### Hook:

```jsx
import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
```

### Usage:

```jsx
const debouncedSearch = useDebounce(searchTerm, 500);
```

---

## 3. useToggle

Toggles between boolean states.

### Hook:

```jsx
import { useState } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
}
```

### Usage:

```jsx
const [isVisible, toggleVisibility] = useToggle();
```

---

## 4. useFetch

Fetches data from an API.

### Hook:

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
```

### Usage:

```jsx
const { data, loading, error } = useFetch("https://api.example.com/items");
```

---

## 5. usePrevious

Tracks the previous value of a state or prop.

### Hook:

```jsx
import { useEffect, useRef } from "react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
```

### Usage:

```jsx
const prevCount = usePrevious(count);
```

---

## 6. useOnClickOutside

Detects clicks outside a referenced element.

### Hook:

```jsx
import { useEffect } from "react";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}
```

### Usage:

```jsx
const ref = useRef();
useOnClickOutside(ref, () => setOpen(false));
```

---

## 7. useHover

Detects when an element is hovered.

### Hook:

```jsx
import { useState, useRef, useEffect } from "react";

function useHover() {
  const [isHovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseOver = () => setHovered(true);
    const handleMouseOut = () => setHovered(false);

    node.addEventListener("mouseover", handleMouseOver);
    node.addEventListener("mouseout", handleMouseOut);

    return () => {
      node.removeEventListener("mouseover", handleMouseOver);
      node.removeEventListener("mouseout", handleMouseOut);
    };
  }, [ref]);

  return [ref, isHovered];
}
```

### Usage:

```jsx
const [hoverRef, isHovered] = useHover();
```

---

## 8. useScript

Dynamically loads an external script.

### Hook:

```jsx
import { useEffect, useState } from "react";

function useScript(src) {
  const [status, setStatus] = useState(src ? "loading" : "idle");

  useEffect(() => {
    if (!src) return;

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => setStatus("ready");
    script.onerror = () => setStatus("error");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);

  return status;
}
```

### Usage:

```jsx
const status = useScript("https://example.com/some-script.js");
```

---

## 9. useInfiniteScroll

Detects when the user scrolls near the bottom of a container.

### Hook:

```jsx
import { useEffect } from "react";

function useInfiniteScroll(callback) {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 500
      ) {
        callback();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback]);
}
```

### Usage:

```jsx
useInfiniteScroll(() => fetchMoreData());
```

---

## 10. useEventListener

Attach event listeners to any element.

### Hook:

```jsx
import { useEffect, useRef } from "react";

function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => element.removeEventListener(eventName, eventListener);
  }, [eventName, element]);
}
```

### Usage:

```jsx
useEventListener("resize", () => console.log("resized"));
```

---

## 11. useDarkMode

Toggles dark/light theme and persists preference.

### Hook:

```jsx
function useDarkMode() {
  const [enabled, setEnabled] = useLocalStorage("dark-mode", false);
  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);
  return [enabled, () => setEnabled(!enabled)];
}
```

### Usage:

```jsx
const [darkMode, toggleDarkMode] = useDarkMode();
```

---

## 12. useThrottle

Limits how often a value changes over time.

### Hook:

```jsx
import { useState, useEffect } from "react";

function useThrottle(value, limit) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setThrottledValue(value), limit);
    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
}
```

### Usage:

```jsx
const throttledSearch = useThrottle(searchInput, 1000);
```

---

## Final Tips for Interviews

- Know how to create reusable logic using hooks.
- Be comfortable combining hooks like `useEffect`, `useRef`, `useState` in custom hooks.
- Always handle cleanup and edge cases in hooks.
- Hooks must follow the rules: top-level, no conditionals, use the `use` prefix.

Would you like to explore domain-specific custom hooks (e.g., forms, auth, timers)?

[🔝 Back to Top](#table-of-contents)

# Implement Custom React "classnames" Library

The `classnames` utility helps conditionally join class names together in a simple and readable way. This is especially useful in React projects when you want to apply CSS classes dynamically based on props or state.

---

## Simple `classnames` Function

### Code:

```js
function classNames(...args) {
  let classes = [];

  args.forEach((arg) => {
    if (!arg) return;

    if (typeof arg === "string") {
      classes.push(arg);
    } else if (typeof arg === "object") {
      for (let key in arg) {
        if (arg[key]) {
          classes.push(key);
        }
      }
    }
  });

  return classes.join(" ");
}
```

### How It Works:

- Accepts any number of arguments.
- If the argument is a string, it’s added as a class.
- If the argument is an object, it checks each key-value pair and includes the key if the value is truthy.

---

## Usage in a React Component

### Example:

```jsx
import React from "react";

function Button({ isPrimary, isDisabled, children }) {
  const btnClass = classNames("btn", {
    "btn-primary": isPrimary,
    "btn-disabled": isDisabled,
  });

  return <button className={btnClass}>{children}</button>;
}

export default Button;
```

### Rendering:

```jsx
<Button isPrimary>Save</Button>
// Output: <button class="btn btn-primary">Save</button>

<Button isDisabled>Cancel</Button>
// Output: <button class="btn btn btn-disabled">Cancel</button>
```

---

## When to Use

- When you need to apply multiple class names conditionally.
- Helps improve code readability and avoids complex ternary logic inside `className`.

## Enhancements You Can Add

- Support arrays of class names.
- Filter out falsy/duplicate values.
- Use in conjunction with Tailwind or CSS Modules.

[🔝 Back to Top](#table-of-contents)

# Implement Custom Redux using "immer" Library

`immer` is a small library that allows you to work with immutable state in a more convenient and readable way. It is particularly useful with Redux to simplify reducer logic by allowing direct mutation of state, which is safely handled under the hood.

---

## Why Use `immer` in Redux?

- Makes reducers easier to read and maintain.
- Avoids complex spread operations (`...state`).
- Ensures immutability without manual deep copying.

---

## Implementation with Redux Toolkit + `immer`

Redux Toolkit uses `immer` internally, so you get its benefits out of the box. Here's how you can use it in a Redux Toolkit setup.

---

### 1. Install Redux Toolkit and React Redux

```bash
npm install @reduxjs/toolkit react-redux
```

---

### 2. Create a Slice

```js
// features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1; // immer handles immutability
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

---

### 3. Configure the Store

```js
// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

---

### 4. Create a React Component

```jsx
// features/counter/Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
```

---

### 5. Wrap the App with Provider

```jsx
// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import Counter from "./features/counter/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
```

---

## Summary

- Redux Toolkit uses `immer` internally for all reducer logic.
- It simplifies Redux setup and eliminates boilerplate.
- You can mutate state directly in reducers safely.

[🔝 Back to Top](#table-of-contents)

# Implement Custom Virtual DOM - Serialization

### Implementing Custom Virtual DOM - Serialization, Diffing, and Patching

Understanding how the Virtual DOM works is key to mastering React. In this guide, we’ll walk through creating a very simple custom Virtual DOM implementation, a serialization process (for server-side rendering or debugging), a basic diffing algorithm, and now patching logic to update the real DOM.

---

## What is a Virtual DOM?

A Virtual DOM (VDOM) is an in-memory representation of the real DOM elements. React uses the VDOM to efficiently update the browser DOM by calculating the differences (diffing) and applying only necessary updates.

---

## Step-by-Step Implementation

### 1. Define Virtual DOM Element

```js
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children
        .flat()
        .map((child) =>
          typeof child === "object" ? child : createTextElement(child)
        ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
```

### 2. Serialize the Virtual DOM to HTML

```js
function renderToString(vdom) {
  if (vdom.type === "TEXT_ELEMENT") {
    return vdom.props.nodeValue;
  }

  const propsString = Object.entries(vdom.props)
    .filter(([key]) => key !== "children")
    .map(([key, value]) => ` ${key}="${value}"`)
    .join("");

  const childrenString = vdom.props.children.map(renderToString).join("");

  return `<${vdom.type}${propsString}>${childrenString}</${vdom.type}>`;
}
```

### 3. Example Usage

```js
const vdom = createElement(
  "div",
  { id: "app" },
  createElement("h1", null, "Hello Virtual DOM"),
  createElement("p", null, "This is a custom renderer.")
);

console.log(renderToString(vdom));
```

### Output

```html
<div id="app">
  <h1>Hello Virtual DOM</h1>
  <p>This is a custom renderer.</p>
</div>
```

---

## 4. Diffing Two Virtual DOMs

The goal is to detect what has changed between `oldVDOM` and `newVDOM`.

```js
function diff(oldNode, newNode) {
  if (!oldNode) return { type: "CREATE", newNode };
  if (!newNode) return { type: "REMOVE" };
  if (oldNode.type !== newNode.type) return { type: "REPLACE", newNode };

  if (
    oldNode.type === "TEXT_ELEMENT" &&
    oldNode.props.nodeValue !== newNode.props.nodeValue
  ) {
    return { type: "TEXT", value: newNode.props.nodeValue };
  }

  const propPatches = [];
  const allProps = { ...oldNode.props, ...newNode.props };

  for (const key in allProps) {
    if (key === "children") continue;
    if (oldNode.props[key] !== newNode.props[key]) {
      propPatches.push({ key, value: newNode.props[key] });
    }
  }

  const childPatches = [];
  const maxLength = Math.max(
    oldNode.props.children.length,
    newNode.props.children.length
  );

  for (let i = 0; i < maxLength; i++) {
    childPatches.push(
      diff(oldNode.props.children[i], newNode.props.children[i])
    );
  }

  return {
    type: "UPDATE",
    props: propPatches,
    children: childPatches,
  };
}
```

---

## 5. Example Diff Usage

```js
const oldVDOM = createElement(
  "div",
  { id: "app" },
  createElement("h1", null, "Old Title")
);
const newVDOM = createElement(
  "div",
  { id: "app", class: "container" },
  createElement("h1", null, "New Title")
);

console.log(diff(oldVDOM, newVDOM));
```

---

## 6. Patching the Real DOM

Now, let's implement a simple patch function that applies the differences to the actual DOM.

```js
function patch(parent, realNode, patches, index = 0) {
  if (!patches) return;

  const domNode = realNode.childNodes[index];

  switch (patches.type) {
    case "CREATE": {
      const newDom = createRealNode(patches.newNode);
      parent.appendChild(newDom);
      break;
    }
    case "REMOVE": {
      parent.removeChild(domNode);
      break;
    }
    case "REPLACE": {
      const newDom = createRealNode(patches.newNode);
      parent.replaceChild(newDom, domNode);
      break;
    }
    case "TEXT": {
      domNode.nodeValue = patches.value;
      break;
    }
    case "UPDATE": {
      for (const propPatch of patches.props) {
        domNode[propPatch.key] = propPatch.value;
      }
      patches.children.forEach((childPatch, i) => {
        patch(domNode, domNode, childPatch, i);
      });
      break;
    }
  }
}

function createRealNode(vdom) {
  if (vdom.type === "TEXT_ELEMENT") {
    return document.createTextNode(vdom.props.nodeValue);
  }

  const el = document.createElement(vdom.type);

  for (const [key, value] of Object.entries(vdom.props)) {
    if (key !== "children") {
      el[key] = value;
    }
  }

  for (const child of vdom.props.children) {
    el.appendChild(createRealNode(child));
  }

  return el;
}
```

---

## 7. Advanced Optimization: Keyed Diffing and Batched Updates

### Keyed Diffing

Improve child reconciliation using keys:

```js
function diffKeyedChildren(oldChildren, newChildren) {
  const patches = [];
  const keyedOld = {};
  oldChildren.forEach((child, i) => {
    if (child.props && child.props.key !== undefined) {
      keyedOld[child.props.key] = { child, index: i };
    }
  });

  newChildren.forEach((newChild, newIndex) => {
    const key = newChild.props?.key;
    if (key !== undefined && keyedOld[key]) {
      const { child: oldChild, index: oldIndex } = keyedOld[key];
      patches.push({
        type: "MOVE",
        from: oldIndex,
        to: newIndex,
        patch: diff(oldChild, newChild),
      });
      delete keyedOld[key];
    } else {
      patches.push({ type: "INSERT", newChild, index: newIndex });
    }
  });

  for (const key in keyedOld) {
    patches.push({ type: "REMOVE", index: keyedOld[key].index });
  }

  return patches;
}
```

### Batched Updates

Collect patches and apply them in batches:

```js
function applyBatchedPatches(parent, domNode, patchList) {
  patchList.forEach((patch) => {
    switch (patch.type) {
      case "MOVE":
        const movedNode = domNode.childNodes[patch.from];
        patch.domNode = movedNode;
        domNode.insertBefore(movedNode, domNode.childNodes[patch.to] || null);
        patchNode(movedNode, patch.patch);
        break;
      case "INSERT":
        const newDom = createRealNode(patch.newChild);
        domNode.insertBefore(newDom, domNode.childNodes[patch.index] || null);
        break;
      case "REMOVE":
        domNode.removeChild(domNode.childNodes[patch.index]);
        break;
    }
  });
}

function patchNode(domNode, patch) {
  if (!patch) return;
  if (patch.type === "TEXT") {
    domNode.nodeValue = patch.value;
  } else if (patch.type === "UPDATE") {
    patch.props.forEach((p) => {
      domNode[p.key] = p.value;
    });
    patch.children.forEach((childPatch, i) => {
      patchNode(domNode.childNodes[i], childPatch);
    });
  }
}
```

---

## Summary

- We built a minimal Virtual DOM system with serialization and diffing.
- Implemented patching with support for create, update, replace, and remove operations.
- Added advanced optimizations: keyed diffing and batched DOM updates.

This forms a simplified but functional view of how React manages efficient DOM updates internally.

[🔝 Back to Top](#table-of-contents)

# Implement Custom Virtual DOM - Deserialization

### Implementing Custom Virtual DOM - Serialization, Deserialization, Diffing, and Patching

Understanding how the Virtual DOM works is key to mastering React. In this guide, we’ll walk through creating a very simple custom Virtual DOM implementation, serialization/deserialization processes (useful for server-side rendering or debugging), a basic diffing algorithm, and patching logic to update the real DOM.

---

## What is a Virtual DOM?

A Virtual DOM (VDOM) is an in-memory representation of the real DOM elements. React uses the VDOM to efficiently update the browser DOM by calculating the differences (diffing) and applying only necessary updates.

---

## Step-by-Step Implementation

### 1. Define Virtual DOM Element

```js
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children
        .flat()
        .map((child) =>
          typeof child === "object" ? child : createTextElement(child)
        ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
```

### 2. Serialize the Virtual DOM to HTML

```js
function renderToString(vdom) {
  if (vdom.type === "TEXT_ELEMENT") {
    return vdom.props.nodeValue;
  }

  const propsString = Object.entries(vdom.props)
    .filter(([key]) => key !== "children")
    .map(([key, value]) => ` ${key}="${value}"`)
    .join("");

  const childrenString = vdom.props.children.map(renderToString).join("");

  return `<${vdom.type}${propsString}>${childrenString}</${vdom.type}>`;
}
```

### 3. Deserialize HTML into Virtual DOM

```js
function parseHTMLToVDOM(html) {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");
  const root = document.body.firstChild;
  return buildVDOMFromNode(root);
}

function buildVDOMFromNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    return createTextElement(node.nodeValue);
  }

  const props = {};
  for (const attr of node.attributes) {
    props[attr.name] = attr.value;
  }

  const children = Array.from(node.childNodes).map(buildVDOMFromNode);
  return createElement(node.tagName.toLowerCase(), props, ...children);
}
```

### Example Deserialization Usage

```js
const html = '<div id="app"><h1>Hello</h1><p>From HTML</p></div>';
const deserializedVDOM = parseHTMLToVDOM(html);
console.log(deserializedVDOM);
```

---

## 4. Diffing Two Virtual DOMs

```js
function diff(oldNode, newNode) {
  if (!oldNode) return { type: "CREATE", newNode };
  if (!newNode) return { type: "REMOVE" };
  if (oldNode.type !== newNode.type) return { type: "REPLACE", newNode };

  if (
    oldNode.type === "TEXT_ELEMENT" &&
    oldNode.props.nodeValue !== newNode.props.nodeValue
  ) {
    return { type: "TEXT", value: newNode.props.nodeValue };
  }

  const propPatches = [];
  const allProps = { ...oldNode.props, ...newNode.props };

  for (const key in allProps) {
    if (key === "children") continue;
    if (oldNode.props[key] !== newNode.props[key]) {
      propPatches.push({ key, value: newNode.props[key] });
    }
  }

  const childPatches = [];
  const maxLength = Math.max(
    oldNode.props.children.length,
    newNode.props.children.length
  );

  for (let i = 0; i < maxLength; i++) {
    childPatches.push(
      diff(oldNode.props.children[i], newNode.props.children[i])
    );
  }

  return {
    type: "UPDATE",
    props: propPatches,
    children: childPatches,
  };
}
```

---

## 5. Example Diff Usage

```js
const oldVDOM = createElement(
  "div",
  { id: "app" },
  createElement("h1", null, "Old Title")
);
const newVDOM = createElement(
  "div",
  { id: "app", class: "container" },
  createElement("h1", null, "New Title")
);

console.log(diff(oldVDOM, newVDOM));
```

---

## 6. Patching the Real DOM

```js
function patch(parent, realNode, patches, index = 0) {
  if (!patches) return;

  const domNode = realNode.childNodes[index];

  switch (patches.type) {
    case "CREATE": {
      const newDom = createRealNode(patches.newNode);
      parent.appendChild(newDom);
      break;
    }
    case "REMOVE": {
      parent.removeChild(domNode);
      break;
    }
    case "REPLACE": {
      const newDom = createRealNode(patches.newNode);
      parent.replaceChild(newDom, domNode);
      break;
    }
    case "TEXT": {
      domNode.nodeValue = patches.value;
      break;
    }
    case "UPDATE": {
      for (const propPatch of patches.props) {
        domNode[propPatch.key] = propPatch.value;
      }
      patches.children.forEach((childPatch, i) => {
        patch(domNode, domNode, childPatch, i);
      });
      break;
    }
  }
}

function createRealNode(vdom) {
  if (vdom.type === "TEXT_ELEMENT") {
    return document.createTextNode(vdom.props.nodeValue);
  }

  const el = document.createElement(vdom.type);

  for (const [key, value] of Object.entries(vdom.props)) {
    if (key !== "children") {
      el[key] = value;
    }
  }

  for (const child of vdom.props.children) {
    el.appendChild(createRealNode(child));
  }

  return el;
}
```

---

## 7. Advanced Optimization: Keyed Diffing and Batched Updates

### Keyed Diffing

```js
function diffKeyedChildren(oldChildren, newChildren) {
  const patches = [];
  const keyedOld = {};
  oldChildren.forEach((child, i) => {
    if (child.props && child.props.key !== undefined) {
      keyedOld[child.props.key] = { child, index: i };
    }
  });

  newChildren.forEach((newChild, newIndex) => {
    const key = newChild.props?.key;
    if (key !== undefined && keyedOld[key]) {
      const { child: oldChild, index: oldIndex } = keyedOld[key];
      patches.push({
        type: "MOVE",
        from: oldIndex,
        to: newIndex,
        patch: diff(oldChild, newChild),
      });
      delete keyedOld[key];
    } else {
      patches.push({ type: "INSERT", newChild, index: newIndex });
    }
  });

  for (const key in keyedOld) {
    patches.push({ type: "REMOVE", index: keyedOld[key].index });
  }

  return patches;
}
```

### Batched Updates

```js
function applyBatchedPatches(parent, domNode, patchList) {
  patchList.forEach((patch) => {
    switch (patch.type) {
      case "MOVE":
        const movedNode = domNode.childNodes[patch.from];
        patch.domNode = movedNode;
        domNode.insertBefore(movedNode, domNode.childNodes[patch.to] || null);
        patchNode(movedNode, patch.patch);
        break;
      case "INSERT":
        const newDom = createRealNode(patch.newChild);
        domNode.insertBefore(newDom, domNode.childNodes[patch.index] || null);
        break;
      case "REMOVE":
        domNode.removeChild(domNode.childNodes[patch.index]);
        break;
    }
  });
}

function patchNode(domNode, patch) {
  if (!patch) return;
  if (patch.type === "TEXT") {
    domNode.nodeValue = patch.value;
  } else if (patch.type === "UPDATE") {
    patch.props.forEach((p) => {
      domNode[p.key] = p.value;
    });
    patch.children.forEach((childPatch, i) => {
      patchNode(domNode.childNodes[i], childPatch);
    });
  }
}
```

---

## Summary

- We built a minimal Virtual DOM system with serialization and deserialization.
- Implemented diffing and patching mechanisms.
- Added support for keyed reconciliation and batched updates.

This simplified version demonstrates the fundamentals of how libraries like React manage efficient DOM rendering and state changes internally.

[🔝 Back to Top](#table-of-contents)

# Memoize/Cache Identical API Calls

Memoizing or caching identical API calls in React can greatly improve performance and prevent redundant network requests. This is especially useful in applications that frequently fetch the same data.

---

## Why Cache API Calls?

- Reduce the number of network requests
- Improve performance
- Provide faster UI updates for repeated data
- Lower server load

---

## 1. Simple Memoization using JavaScript Object

```js
const apiCache = {};

async function fetchWithCache(url) {
  if (apiCache[url]) {
    console.log("Returning cached response");
    return apiCache[url];
  }

  const response = await fetch(url);
  const data = await response.json();
  apiCache[url] = data;
  return data;
}

// Usage in React Component
useEffect(() => {
  fetchWithCache("https://api.example.com/data").then(setData);
}, []);
```

---

## 2. Custom Hook: `useCachedFetch`

```js
import { useState, useEffect, useRef } from "react";

function useCachedFetch(url) {
  const cache = useRef({});
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      if (cache.current[url]) {
        setData(cache.current[url]);
        setLoading(false);
        return;
      }

      const res = await fetch(url);
      const result = await res.json();
      cache.current[url] = result;

      if (isMounted) {
        setData(result);
        setLoading(false);
      }
    }

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading };
}

// Usage
function App() {
  const { data, loading } = useCachedFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (loading) return <div>Loading...</div>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

---

## 3. Using Libraries like `axios-cache-adapter`

For more advanced caching and expiration policies:

```bash
npm install axios axios-cache-adapter
```

```js
import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({ maxAge: 15 * 60 * 1000 });

const api = axios.create({
  adapter: cache.adapter,
});

api
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => console.log(response.data));
```

---

## Summary

- Use basic JS objects or `useRef` for simple scenarios.
- Create reusable hooks like `useCachedFetch`.
- Use third-party libraries for large-scale applications with advanced needs.

This improves app speed, reduces load, and enhances user experience.

---

[🔝 Back to Top](#table-of-contents)

# Setting up Redux/Redux Toolkit in React

Redux Toolkit (RTK) is the official, recommended way to set up Redux in modern React applications. It simplifies configuration and provides powerful utilities out of the box.

---

## 🔧 Installation

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 🧠 Key Concepts

- **Store** – Central place that holds application state.
- **Slice** – A collection of reducer logic and actions for a single feature.
- **Provider** – React context component to expose the Redux store to the app.
- **useSelector** – Access store state.
- **useDispatch** – Dispatch actions to modify state.

---

## 🛠️ Step-by-Step Setup

### 1. Create a Slice

```js
// features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### 2. Configure the Store

```js
// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

### 3. Provide the Store to React

```js
// index.js or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### 4. Use Redux in Components

```js
// CounterComponent.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";

function CounterComponent() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default CounterComponent;
```

---

## ✅ Summary

- **Redux Toolkit** reduces boilerplate and adds good defaults.
- Use `createSlice()` for clean action/reducer setup.
- Use `configureStore()` for automatic devtools and middleware.
- Access Redux via `useSelector()` and `useDispatch()`.

This is the recommended approach for scalable state management in modern React apps.

---

[🔝 Back to Top](#table-of-contents)

# How does the React working mechanism function?

React is a JavaScript library for building user interfaces. It works based on a **virtual DOM**, efficient **diffing algorithms**, and **reconciliation** to update the UI in the most optimal way. Here's a breakdown of how React works under the hood:

---

## 🔁 Core Working Mechanism

1. **JSX to Virtual DOM**

   - JSX is syntactic sugar for `React.createElement()`.
   - It creates a virtual representation (object) of the DOM.

2. **Rendering Phase**

   - React calls the component function to produce the virtual DOM tree.

3. **Diffing Algorithm**

   - React compares the new virtual DOM tree with the previous one.
   - It calculates the minimal set of changes needed.

4. **Reconciliation**

   - React updates the actual DOM with only the parts that changed.
   - This improves performance.

5. **Commit Phase**

   - Changes are committed to the real DOM.
   - Lifecycle methods like `componentDidMount` or `useEffect` run here.

6. **Fiber Architecture**
   - Fiber allows rendering to be split into units of work.
   - Enables interruption and prioritization for better performance.

---

## ⚙️ Example

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // triggers re-render
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;
```

### What Happens Here?

- `useState(0)` initializes state.
- Clicking the button calls `setCount`, updating the state.
- React re-renders the `Counter` component.
- The new virtual DOM is compared to the old one.
- Only the changed `<h2>` node is updated in the real DOM.

---

## 🧠 Behind the Scenes

- React uses **hooks** (like `useState`, `useEffect`) to manage state and side effects.
- React's **scheduler** prioritizes rendering tasks.
- **Keys** in lists help React identify which elements changed.

---

## ✅ Summary

- React uses a virtual DOM to make UI updates efficient.
- Components render a virtual tree, which is diffed and reconciled.
- Fiber enables interruptible rendering for smooth experiences.

Understanding this flow helps in writing optimized React applications and debugging performance issues effectively.

---

[🔝 Back to Top](#table-of-contents)

# How do you create a reusable modal in React?

A **reusable modal** in React is a UI component that can be opened and closed dynamically and accepts content as children or props. It’s typically implemented using **portals** to render outside the normal DOM hierarchy and can be used across various parts of your application.

---

## 🧱 Key Features

- Open and close modal dynamically
- Reusable across components
- Customizable content via `children`
- Accessibility support

---

## 🧪 Basic Implementation

### 1. **Modal Component (Reusable)**

```jsx
// Modal.js
import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <button className='modal-close' onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
```

### 2. **Modal CSS (Modal.css)**

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  min-width: 300px;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
```

### 3. **Using Modal in Parent Component**

```jsx
// App.js
import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1>Reusable Modal Example</h1>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>This is a modal</h2>
        <p>You can place any content here.</p>
      </Modal>
    </div>
  );
}

export default App;
```

### 4. **Modal Root Element in HTML**

```html
<!-- public/index.html -->
<div id="root"></div>
<div id="modal-root"></div>
```

---

## ✅ Summary

- **Reusable modals** simplify UI management.
- **Portals** allow rendering outside component hierarchy.
- Use **state hooks** to control open/close behavior.
- CSS and accessibility considerations improve user experience.

This approach enables clean, modular, and scalable React applications.

---

[🔝 Back to Top](#table-of-contents)

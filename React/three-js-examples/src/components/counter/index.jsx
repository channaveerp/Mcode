import React, { useState, useEffect } from "react";
import "./index.css";

// Virtual DOM
// Mounting, updating, Unmounting
// useEffect

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isFive, setIsFive] = useState(false);

  const increment = () => {
    setCount(count + 1);
    if (count % 5 === 0) {
      setIsFive(true);
    } else {
      setIsFive(false);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // useEffect(() => {
  //   console.log("Test Count1: ", count);
  // }, [isFive]);

  // useEffect(() => {
  //   console.log("Test Count2: ", count);
  // }, []);
  // [] calls intial one time.

  useEffect(() => {
    // The code that we want to run
    console.log("The count is:", count);

    // Optional return function
    return () => {
      console.log("I am being cleaned up!");
    };
  }, [count]); // The dependency array

  return (
    <div className='counter'>
      <h2>Counter</h2>
      <div className='count'>{count}</div>
      <div className='buttons'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

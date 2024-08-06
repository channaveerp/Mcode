import React, { useState, useEffect } from "react";
import "./index.css";

function TodoList() {
  const storedTasks = JSON.parse(localStorage.getItem("todoList")) || [];
  const [tasks, setTasks] = useState(storedTasks);
  const [inputTask, setInputTask] = useState("");

  // useEffect(() => {
  //   const storedTasks = JSON.parse(localStorage.getItem("todoList")) || [];
  //   setTasks(storedTasks);
  //   console.log("storedTasks", storedTasks);
  // }, []); // Runs once on component mount to fetch tasks from localStorage

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(tasks));
  }, [tasks]); // Updates localStorage whenever tasks change

  const addTask = () => {
    if (inputTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), text: inputTask, completed: false },
      ]);
      setInputTask("");
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='todo-list'>
      <h2>Todo List</h2>
      <input
        type='text'
        placeholder='Enter a task'
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span>{task.text}</span>
            <div>
              <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

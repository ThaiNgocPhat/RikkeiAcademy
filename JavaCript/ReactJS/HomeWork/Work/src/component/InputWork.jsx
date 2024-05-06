import React, { useState, useEffect } from "react";
import "../App.css";

function InputWork({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() !== "") {
      const newTasks = [...tasks, taskName.trim()];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      setTasks(newTasks);
      addTask(taskName.trim());
      setTaskName("");
    }
  };

  return (
    <div className="container">
      <h1>Management work</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nhập công việc..."
        />
        <button type="submit">Add work</button>
      </form>
    </div>
  );
}

export default InputWork;

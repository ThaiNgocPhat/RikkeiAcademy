import React, { useState } from "react";
import ListWork from "./component/ListWork";
import InputWork from "./component/InputWork";

function App() {
  // Initialize tasks with stored tasks or an empty array if there are none
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const addTask = (taskName) => {
    const newTasks = [...tasks, { name: taskName, completed: false }];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const updateTask = (index, newName) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].name = newName;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <InputWork addTask={addTask} />
      <ListWork
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}

export default App;

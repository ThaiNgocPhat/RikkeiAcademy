import React, { useState } from "react";
import ListWork from "./component/ListWork";
import InputWork from "./component/InputWork";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]);
  };

  const updateTask = (index, newName) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].name = newName;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
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

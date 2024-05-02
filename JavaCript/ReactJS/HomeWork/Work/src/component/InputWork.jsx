import React, { useState } from "react";
import "../App.css";

function InputWork({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() !== "") {
      addTask(taskName.trim());
      setTaskName("");
    }
  };

  return (
    <div className="container">
      <h1>Quản lý công việc</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nhập công việc..."
        />
        <button type="submit">Thêm công việc</button>
      </form>
    </div>
  );
}

export default InputWork;

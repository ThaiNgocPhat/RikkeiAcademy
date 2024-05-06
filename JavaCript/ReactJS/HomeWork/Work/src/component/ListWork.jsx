import React from "react";

function ListWork({ tasks, updateTask, deleteTask, toggleCompleted }) {
  return (
    <div className="container">
      <div id="taskList">
        {tasks.map((task, index) => (
          <div className="task-item" key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(index)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.name}
            </span>
            <button
              onClick={() =>
                updateTask(index, prompt("Nhập tên mới cho công việc:"))
              }
            >
              Update
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
      <p id="taskCount">
        Work done: {tasks.filter((task) => task.completed).length}/
        {tasks.length}
      </p>
    </div>
  );
}

export default ListWork;

import React from "react";

export default function Task({ task, onDelete, onToggle }) {
  return (
    <div className={`task ${task.completed ? 'completed': ''}`}>
      <input
        type="checkbox"
        checked = {task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

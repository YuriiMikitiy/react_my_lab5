import React from "react";
import Task from "./Task";

export default function TaskList({ tasks, onDelete, onToggle, filter }) {
  const filteredTask = tasks.filter((task) => {
    if (filter === "complated") return task.complated;
    if (filter === "active") return !task.complated;
    return true;
  });

  return (
    <div className="task-list">
      {filteredTask.map(task =>(
        <Task
        key={task.id}
        task={task}
        onDelete={onDelete}
        onToggle={onToggle}
        />
      ))}
    </div>
  );
}

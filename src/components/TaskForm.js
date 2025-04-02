import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAdd(taskName);
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Нова задача"
      />
      <button type="submit">Додати</button>
    </form>
  );
}

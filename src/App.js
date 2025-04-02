import './App.css';
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';


function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Завантаження задач з localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Збереження задач у localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    setTasks([...tasks, { id: Date.now(), name, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app">
      <h1>Список задач</h1>
      <TaskForm onAdd={addTask} />
      <Filter currentFilter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
        filter={filter}
      />
    </div>
  );
}

export default App;

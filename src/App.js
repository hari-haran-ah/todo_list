import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import EmptyListAnimation from './components/EmptyListAnimation';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [currentTask, setCurrentTask] = useState('');
  const [buttonClass, setButtonClass] = useState(''); // To apply the pulse animation class

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (currentTask.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }

    const newTask = { id: Date.now(), text: currentTask.trim(), completed: false };

    // Add the task with animation class
    setTasks([...tasks, newTask]);
    setCurrentTask(''); // Clear the input field after adding

    // Apply the pulse animation to the button
    setButtonClass('pulse');

    // Reset the button animation class after a short delay
    setTimeout(() => {
      setButtonClass('');
    }, 600); // Animation duration (match with CSS pulse duration)
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Add a task..."
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTask()}
      />
      <button
        onClick={addTask}
        className={buttonClass} // Apply the animation class to the button
      >
        Add Task
      </button>
      {tasks.length > 0 ? (
        <TodoList
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ) : (
        <EmptyListAnimation />
      )}
      <footer className="footer">
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed Tasks: {completedCount}</p>
      </footer>
    </div>
  );
}

export default App;

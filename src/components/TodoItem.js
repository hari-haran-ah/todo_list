import React, { useState } from 'react';

const TodoItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => deleteTask(task.id), 500); // Matches delete animation duration
  };

  return (
    <li
      className={`todo-item ${task.completed ? 'completed' : ''} ${isDeleting ? 'deleting' : 'added'}`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;

import React from 'react';

function TodoList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`todo-item ${task.completed ? 'completed' : ''} ${task.added ? 'added' : ''}`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

import React from "react";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => onDelete(task.id)}>❌</button>
          </li>
        ))
      )}
    </ul>
  );
}

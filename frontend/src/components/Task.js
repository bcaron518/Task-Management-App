import React from 'react';

const Task = ({ task, onUpdate, onDelete }) => (
    <div className="task">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
        <p>Status: {task.status}</p>
        <button onClick={() => onUpdate(task)}>Update</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
);

export default Task;

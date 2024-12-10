import React, { useContext } from 'react';
import Task from './Task';
import { TaskContext } from '../contexts/TaskContext';

const TaskList = () => {
    const { tasks, updateTask, deleteTask } = useContext(TaskContext);

    return (
        <div className="task-list">
            {tasks.map(task => (
                <Task key={task.id} task={task} onUpdate={updateTask} onDelete={deleteTask} />
            ))}
        </div>
    );
};

export default TaskList;

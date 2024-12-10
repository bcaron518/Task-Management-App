import { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const fetchedTasks = await getTasks();
            setTasks(fetchedTasks);
        };

        fetchTasks();
    }, []);

    const addTask = async task => {
        const newTask = await createTask(task);
        setTasks([...tasks, newTask]);
    };

    const editTask = async task => {
        const updatedTask = await updateTask(task);
        setTasks(tasks.map(t => (t.id === task.id ? updatedTask : t)));
    };

    const removeTask = async id => {
        await deleteTask(id);
        setTasks(tasks.filter(task => task.id !== id));
    };

    return {
        tasks,
        addTask,
        editTask,
        removeTask,
    };
};

export default useTasks;

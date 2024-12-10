import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = async userData => {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
};

export const login = async userData => {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
};

export const getTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
};

export const createTask = async task => {
    const response = await axios.post(`${API_URL}/tasks`, task);
    return response.data;
};

export const updateTask = async task => {
    const response = await axios.put(`${API_URL}/tasks/${task.id}`, task);
    return response.data;
};

export const deleteTask = async id => {
    const response = await axios.delete(`${API_URL}/tasks/${id}`);
    return response.data;
};

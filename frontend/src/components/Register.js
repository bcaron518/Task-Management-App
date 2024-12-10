import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useContext(AuthContext);

    const onSubmit = e => {
        e.preventDefault();
        register({ username, email, password });
    };

    return (
        <form onSubmit={onSubmit}>
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;

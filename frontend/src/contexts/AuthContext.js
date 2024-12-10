import React, { createContext, useState } from 'react';
import { register as apiRegister, login as apiLogin } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = async userData => {
        const token = await apiRegister(userData);
        setUser(token);
    };

    const login = async userData => {
        const token = await apiLogin(userData);
        setUser(token);
    };

    return (
        <AuthContext.Provider value={{ user, register, login }}>
            {children}
        </AuthContext.Provider>
    );
};

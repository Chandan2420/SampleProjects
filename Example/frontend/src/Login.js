import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            alert(response.data.message);
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>

            <label for="email">Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />

            <label for="password">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;

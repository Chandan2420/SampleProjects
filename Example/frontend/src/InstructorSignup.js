import React, { useState } from 'react';
import axios from 'axios';

const InstructorSignup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/instructorsignup', {
                name,
                email,
                password,
                role: 'instructor',
            });
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            < div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
            <h2>Instructor Signup</h2>

            <label for="name" style={{ marginBottom: '8px' }}>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required  style={{ padding: '8px', textAlign: 'center' }} />

            <label for="email" style={{ marginBottom: '8px' }}>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required  style={{ padding: '8px', textAlign: 'center' }} />

            <label for="password" style={{ marginBottom: '8px' }}>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required  style={{ padding: '8px', textAlign: 'center' }} />

            <button type="submit">Sign Up</button>
            </div>
        </form>
    );
};

export default InstructorSignup;

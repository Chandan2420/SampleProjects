import React, { useState } from 'react';
import axios from 'axios';

const StudentSignup = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/studentsignup', {
                name,
                mobile,
                email,
                password,
                role: 'student',
            });
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h2>Student Signup</h2>

            <label for="name">Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />

            <label for="mobile">Mobile:</label>
            <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} maxlength="10" placeholder=" Enter Number" required />

            <label for="email">Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />

            <label for="password">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />

            <button type="submit">Sign Up</button>
        </form>
    );
};

export default StudentSignup;

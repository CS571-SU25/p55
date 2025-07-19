import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            sessionStorage.setItem('user', username);
            setMessage('Registration successful! Redirecting...');
            setTimeout(() => navigate('/chat'), 1000);
        } else {
            setMessage('Please complete the fields.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <h2>Register</h2>
            {message && <p>{message}</p>}
            <input
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="register-input"
            />
            <input
                type="password"
                placeholder="Choose a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="register-input"
            />
            <button type="submit" className="register-submit">Register</button>
        </form>
    );
}
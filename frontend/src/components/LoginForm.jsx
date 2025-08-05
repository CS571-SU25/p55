import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

export default function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            sessionStorage.setItem('user', username);
            onLogin(username);
        } else {
            setError('Please enter username and password');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="login-form"
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
            <h2>Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="login-input"
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
            </div>

            <button type="submit" className="login-submit">Login</button>
        </form>
    );
}
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContactInfo from '../components/ContactInfo';
import LoginForm from '../components/LoginForm';

export default function HomePage({ user, onLogin }) {
    const navigate = useNavigate();
    const handleLogin = (u) => {
        onLogin(u);
        navigate('/chat');
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h1>Welcome to AIBox</h1>
            {!user ? (
                <LoginForm onLogin={handleLogin} />
            ) : (
                <p>Hello, {user}! <Link to="/chat">Go to Chat</Link></p>
            )}
            {!user && <p>Don’t have an account? <Link to="/register">Register here</Link></p>}
            <hr style={{ margin: '1.5rem 0' }} />
            <ContactInfo />
        </div>
    );
}

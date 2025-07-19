// ========================================================
// File: src/components/NavBar.jsx
// ========================================================
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure logo.png is in src/assets/

export default function NavBar() {
    const user = sessionStorage.getItem('user');
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        navigate('/');
    };

    return (
        <nav className="navbar" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.5rem 1rem',
            background: '#f8f9fa',
            borderBottom: '1px solid #e0e0e0'
        }}>
            <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={logo}
                    alt="AIBox Logo"
                    style={{ height: '40px', width: 'auto', marginRight: '0.5rem' }}
                />
                <span className="navbar-title" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
          AIBox
        </span>
            </div>
            <ul className="navbar-links" style={{
                display: 'flex',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                gap: '1rem'
            }}>
                {user ? (
                    <>
                        <li><Link to="/chat" style={{ textDecoration: 'none', color: '#333' }}>Chat</Link></li>
                        <li><Link to="/examples" style={{ textDecoration: 'none', color: '#333' }}>Examples</Link></li>
                        <li><button onClick={handleLogout} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#333' }}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Login</Link></li>
                        <li><Link to="/register" style={{ textDecoration: 'none', color: '#333' }}>Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

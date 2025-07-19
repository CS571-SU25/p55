import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';
import ExamplesPage from './pages/ExamplesPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
    // Lift user state to App level
    const [user, setUser] = useState(sessionStorage.getItem('user'));
    const isLoggedIn = !!user;

    const handleLogin = (username) => {
        sessionStorage.setItem('user', username);
        setUser(username);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        setUser(null);
    };

    return (
        <BrowserRouter>
            <NavBar user={user} onLogout={handleLogout} />

            <Routes>
                <Route
                    path="/"
                    element={<HomePage user={user} onLogin={handleLogin} />}
                />
                <Route
                    path="/register"
                    element={<RegisterPage />}
                />
                <Route
                    path="/chat"
                    element={isLoggedIn ? <ChatPage /> : <Navigate to="/" replace />}
                />
                <Route
                    path="/examples"
                    element={isLoggedIn ? <ExamplesPage /> : <Navigate to="/" replace />}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContactInfo from '../components/ContactInfo';
import LoginForm from '../components/LoginForm';
import AIBoxLogo from '../components/AIBoxLogo';
import BriefIntro from '../components/BriefIntro';

export default function HomePage({ user, onLogin }) {
  const navigate = useNavigate();
  const handleLogin = (u) => {
    onLogin(u);
    navigate('/chat');
  };

  return (
    <div>
      <div style={{ display: 'flex', padding: '1rem', gap: '2rem' }}>
        {/* Left: Login Section */}
        <div style={{ flex: 1 }}>
          <h1>Welcome to AIBox</h1>
          {!user ? (
            <LoginForm onLogin={handleLogin} />
          ) : (
            <p>Hello, {user}! <Link to="/chat">Go to Chat</Link></p>
          )}
          {!user && (
            <p>Don’t have an account? <Link to="/register">Register here</Link></p>
          )}
        </div>

        {/* Right: Logo & Intro */}
        <div style={{ flex: 1, borderLeft: '1px solid #ddd', paddingLeft: '1rem' }}>
          <AIBoxLogo />
          <BriefIntro />
        </div>
      </div>

      {/* Footer */}
      <hr style={{ margin: '1.5rem 0' }} />
      <ContactInfo />
    </div>
  );
}
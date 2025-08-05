// src/components/AIBoxLogo.jsx
import React from 'react';
import logo from '../assets/logo.png';

export default function AIBoxLogo() {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={logo}
        alt="AIBox Logo"
        style={{ width: '150px', height: 'auto', margin: '0 auto' }}
      />
    </div>
  );
}
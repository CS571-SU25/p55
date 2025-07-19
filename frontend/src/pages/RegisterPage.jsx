import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import ContactInfo from '../components/ContactInfo';

export default function RegisterPage() {
    return (
        <div style={{ padding: '1rem' }}>
            <h1>Register for AIBox</h1>
            <RegisterForm />
            <p>Already have an account? <Link to="/">Login here</Link></p>
            <hr style={{ margin: '1.5rem 0' }} />
            <ContactInfo />
        </div>
    );
}
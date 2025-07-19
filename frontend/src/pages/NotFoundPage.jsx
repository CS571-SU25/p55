import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from '../components/ContactInfo';

export default function NotFoundPage() {
    return (
        <div style={{ padding: '1rem' }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you requested doesn’t exist.</p>
            <Link to="/">Go back home</Link>
            <hr style={{ margin: '1.5rem 0' }} />
            <ContactInfo />
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from '../components/ContactInfo';

export default function ExamplesPage() {
    const samplePrompts = [
        { category: 'Storytelling', text: 'Tell me a short sci-fi story.' },
        { category: 'Productivity', text: 'How can I improve my time management?' },
        { category: 'Writing', text: 'Write a haiku about autumn.' },
        { category: 'Images', text: 'Describe a futuristic cityscape.' }
    ];

    return (
        <div style={{ padding: '1rem' }}>
            <h1>Sample Prompts</h1>
            <Link to="/chat">← Back to Chat</Link>
            <ul style={{ marginTop: '1rem' }}>
                {samplePrompts.map((p, idx) => (
                    <li key={idx}><strong>{p.category}:</strong> {p.text}</li>
                ))}
            </ul>
            <hr style={{ margin: '1.5rem 0' }} />
            <ContactInfo />
        </div>
    );
}
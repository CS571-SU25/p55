import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PromptForm from '../components/PromptForm';
import ResponseView from '../components/ResponseView';
import ContactInfo from '../components/ContactInfo';
import { generateAI } from '../api';

export default function ChatPage() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleGenerate = async (prompt) => {
        setLoading(true);
        setError('');
        try {
            const data = await generateAI(prompt);
            setResponse(data);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div style={{ padding: '1rem' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Chat</h1>
            </header>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ flex: 1, border: '1px solid #ddd', padding: '1rem', borderRadius: '4px' }}>
                    <PromptForm onSubmit={handleGenerate} />
                </div>
                <div style={{ flex: 1, border: '1px solid #ddd', padding: '1rem', borderRadius: '4px' }}>
                    {loading && <p>Loading...</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <ResponseView response={response} />
                </div>
            </div>
            <hr style={{ margin: '1.5rem 0' }} />
            <ContactInfo />
        </div>
    );
}

import React from 'react';

export default function ResponseView({ response }) {
    if (!response) return null;
    const { ai_response, rating_feedback } = response;
    return (
        <div className="response-view">
            <section>
                <h2>AI Response</h2>
                <p>{ai_response}</p>
            </section>
            <section>
                <h3>Rating</h3>
                <p>{rating_feedback}</p>
            </section>
        </div>
    );
}
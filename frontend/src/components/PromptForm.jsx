import React, { useState } from 'react';

export default function PromptForm({ onSubmit }) {
    const [prompt, setPrompt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (prompt.trim()) onSubmit(prompt);
    };

    return (
        <form onSubmit={handleSubmit} className="prompt-form">
      <textarea
          rows={4}
          placeholder="Enter your prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="prompt-input"
      />
            <button type="submit" className="prompt-submit">Generate</button>
        </form>
    );
}
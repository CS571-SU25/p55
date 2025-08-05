import React, { useState } from 'react';

const templates = [
  prompt => `Write a short story about "${prompt}".`,  
  prompt => `Give me five tips on "${prompt}".`,      
  prompt => `Compose a haiku about "${prompt}".`,  
  prompt => `Describe a futuristic scene involving "${prompt}".`
];

export default function KeywordPrompt() {
  const [keyword, setKeyword] = useState('');
  const [generated, setGenerated] = useState('');

  const handleGenerate = () => {
    if (!keyword.trim()) return;
    const template = templates[Math.floor(Math.random() * templates.length)];
    setGenerated(template(keyword.trim()));
  };

  return (
    <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}>
      <h2>Generate by Keyword</h2>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="Enter keyword..."
          style={{ flex: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button onClick={handleGenerate} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
          Generate
        </button>
      </div>
      {generated && (
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>{generated}</p>
      )}
    </div>
  );
}
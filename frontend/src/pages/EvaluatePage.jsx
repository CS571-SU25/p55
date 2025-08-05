import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import StarRating from '../components/StarRating';
import PromptAdvice from '../components/PromptAdvice';
import ContactInfo from '../components/ContactInfo';

export default function EvaluatePage() {
  const [userText, setUserText] = useState('');
  const [rating, setRating] = useState(0);

  const handleTextSubmit = text => setUserText(text);
  const handleRating = star => setRating(star);

  return (
    <div style={{ padding: '1rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Evaluate Your Input</h1>
      </header>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {/* Left side: text input */}
        <div style={{ flex: 1, border: '1px solid #ddd', padding: '1rem', borderRadius: '4px' }}>
          <TextInput onSubmit={handleTextSubmit} />
        </div>
        {/* Right side: two rows */}
        <div style={{ flex: 1, border: '1px solid #ddd', padding: '1rem', borderRadius: '4px', display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Top row: star rating */}
          <div style={{ marginBottom: '1rem' }}>
            <h2>Rate this Input</h2>
            <StarRating rating={rating} onRate={handleRating} />
          </div>
          {/* Bottom row: advice */}
          <div style={{ flex: 1, overflow: 'auto' }}>
            <PromptAdvice text={userText} />
          </div>
        </div>
      </div>
      <hr style={{ margin: '1.5rem 0' }} />
      <ContactInfo />
    </div>
  );
}

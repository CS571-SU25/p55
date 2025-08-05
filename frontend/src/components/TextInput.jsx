// src/components/TextInput.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * TextInput component for multi-line user input and submission.
 *
 * Props:
 *  - onSubmit: callback(text: string)
 */
export default function TextInput({ onSubmit }) {
  const [text, setText] = useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        placeholder="Enter your text here..."
        style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button
        onClick={() => onSubmit(text)}
        style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
      >
        Submit
      </button>
    </div>
  );
}

TextInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
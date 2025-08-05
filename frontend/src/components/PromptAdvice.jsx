import React from 'react';
import PropTypes from 'prop-types';

/**
 * PromptAdvice shows AI-generated suggestions or advice for improving the prompt.
 * Props:
 *  - text: the user's input text
 */
export default function PromptAdvice({ text }) {
  if (!text) return <p style={{ fontStyle: 'italic' }}>No prompt submitted yet.</p>;
  return (
    <div style={{ width: '100%', padding: '0.5rem', border: '1px dashed #ccc', borderRadius: '4px' }}>
      {/* TODO: Replace with real AI advice */}
      <h3>Advice</h3>
      <p>If you want more detail, try adding context or specific constraints to your prompt.</p>
    </div>
  );
}
PromptAdvice.propTypes = { text: PropTypes.string.isRequired };
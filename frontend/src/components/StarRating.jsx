import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * StarRating component for capturing a 1–5 star rating.
 * 
 * Props:
 *  - rating: current selected rating (number)
 *  - onRate: callback(newRating: number)
 */
export default function StarRating({ rating = 0, onRate }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div style={{ display: 'flex', gap: '0.25rem' }}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= (hovered || rating);
        return (
          <span
            key={star}
            onClick={() => onRate(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            style={{
              cursor: 'pointer',
              fontSize: '1.5rem',
              color: filled ? '#FFC107' : '#E0E0E0',
              transition: 'color 0.2s',
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onRate: PropTypes.func.isRequired,
};

import React from 'react';

const EmptyListAnimation = () => {
  return (
    <div className="empty-list">
      <p>Your to-do list is empty!</p>
      <div className="animation">
        <span role="img" aria-label="confetti">🎉</span>
      </div>
    </div>
  );
};

export default EmptyListAnimation;

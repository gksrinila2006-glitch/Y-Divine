import React from 'react';

const GiftBox = ({ onClick }) => {
  return (
    <div className="gift-placeholder" onClick={onClick}>
      <img src="/heart.svg" alt="Heart" className="heart-image" />
    </div>
  );
};

export default GiftBox;

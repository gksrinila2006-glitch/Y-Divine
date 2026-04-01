import React from 'react';

const ChoiceIcons = ({ onMoonClick, onSunClick }) => {
  return (
    <div className="choices-container">
      <div className="choice-icon moon-icon" onClick={onMoonClick}>
        🌙
      </div>
      <div className="choice-icon sun-icon" onClick={onSunClick}>
        ☀️
      </div>
    </div>
  );
};

export default ChoiceIcons;

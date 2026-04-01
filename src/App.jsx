import React, { useState } from 'react';
import GiftBox from './components/GiftBox';
import ChoiceIcons from './components/ChoiceIcons';
import MessagePopup from './components/MessagePopup';
import ParticleEffect from './components/ParticleEffect';
import Greeting from './components/Greeting';

const App = () => {
  const [boxOpened, setBoxOpened] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [particles, setParticles] = useState([]);
  const [showTryAgain, setShowTryAgain] = useState(false);

  const handleGiftBoxClick = () => {
    setBoxOpened(true);
  };

  const handleMoonClick = () => {
    setSelectedChoice('moon');
    createLightParticles();
  };

  const handleSunClick = () => {
    setSelectedChoice('sun');
  };

  const createLightParticles = () => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: '✨',
      tx: (Math.random() - 0.5) * 500,
      ty: (Math.random() - 0.5) * 500 - 200,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setParticles(newParticles);
  };

  const handleReset = () => {
    setBoxOpened(false);
    setSelectedChoice(null);
    setParticles([]);
    setShowTryAgain(false);
  };

  const handleTryAgain = () => {
    setSelectedChoice(null);
    setShowTryAgain(false);
    setBoxOpened(false);
  };

  return (
    <div className="app-container">
      <ParticleEffect particles={particles} />
      <div className="dotted-patterns"></div>
      <Greeting />

      {!boxOpened ? (
        <GiftBox onClick={handleGiftBoxClick} />
      ) : !selectedChoice ? (
        <ChoiceIcons onMoonClick={handleMoonClick} onSunClick={handleSunClick} />
      ) : null}

      {selectedChoice && (
        <MessagePopup 
          choice={selectedChoice} 
          onClose={handleReset} 
          onTryAgain={handleTryAgain}
          showTryAgain={showTryAgain}
          setShowTryAgain={setShowTryAgain}
        />
      )}
    </div>
  );
};

export default App;

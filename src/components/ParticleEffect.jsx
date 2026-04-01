import React from 'react';

const ParticleEffect = ({ particles }) => {
  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            '--tx': `${particle.tx}px`,
            '--ty': `${particle.ty}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
};

export default ParticleEffect;

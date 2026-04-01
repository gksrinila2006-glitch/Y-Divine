import React, { useEffect } from 'react';

const MessagePopup = ({ choice, onClose, onTryAgain, showTryAgain, setShowTryAgain }) => {
  useEffect(() => {
    if (choice === 'sun') {
      const timer = setTimeout(() => {
        setShowTryAgain(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [choice, setShowTryAgain]);

  return (
    <div className={`message-popup ${choice}-popup`}>
      <div className="close-btn" onClick={onClose}>
        ✕
      </div>
      <div className="popup-content">
        {choice === 'moon' ? (
          <>
            <div className="popup-title">I'm Sorry</div>
            <div className="popup-message">
              From the depths of my heart, I apologize for my mistakes. You mean
              everything to me.
            </div>
            <div className="popup-quote">
              "Love isn't about finding someone perfect… it's about seeing
              someone imperfect, perfectly."
            </div>
          </>
        ) : (
          <>
            <div className="sun-message">I hate you — you did not choose me. 😢</div>
            <div className="boo-boo-message">Boo-Boo</div>
            {showTryAgain && (
              <>
                <button className="try-again-btn" onClick={onTryAgain}>
                  Try Again
                </button>
                <p className="try-again-text">I'll be waiting...</p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MessagePopup;

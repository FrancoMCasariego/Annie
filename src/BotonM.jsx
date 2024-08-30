import React, { useState, useEffect } from 'react';
import Heart from './Corazon'; 

const MovingButton = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '50px', left: '50px' });
  const [showHeart, setShowHeart] = useState(false);
  const [message, setMessage] = useState('¿Me amas? ❤️❤️');
  const [noButtonVisible, setNoButtonVisible] = useState(true);

  const handleNoHover = () => {
    const randomTop = Math.floor(Math.random() * 200) + 'px';
    const randomLeft = Math.floor(Math.random() * 200) + 'px';
    setNoButtonPosition({ top: randomTop, left: randomLeft });
  };

  const handleYesClick = () => {
    setMessage('¡Sabía que dirías que sí! ❤️');
    setTimeout(() => {
      setShowHeart(true);
    }, 3000);
  };

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      setMessage('Deja de intentar apretar el no, acepta tu destino');
    }, 20000);

    const noButtonFadeTimer = setTimeout(() => {
      setNoButtonVisible(false);
    }, 20000);

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(noButtonFadeTimer);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', position: 'relative', height: '300px', width: '600px', marginLeft: '20%' }}>
      {!showHeart ? (
        <>
          <p>{message}</p>
          <button onClick={handleYesClick} style={{ marginRight: '10px', width: '50px', height: '50px' }}>
            Sí
          </button>
          <button
            onMouseEnter={handleNoHover}
            style={{
              position: 'absolute',
              top: noButtonPosition.top,
              left: noButtonPosition.left,
              transition: 'top 0.2s, left 0.2s, opacity 5s ease-out',
              opacity: noButtonVisible ? 1 : 0,
            }}
          >
            No
          </button>
        </>
      ) : (
        <Heart />
      )}
    </div>
  );
};

export default MovingButton;
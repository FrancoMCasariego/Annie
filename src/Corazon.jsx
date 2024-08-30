import React, { useState } from 'react';

const Heart = () => {
  const [progress, setProgress] = useState(0);
  const [fill, setFill] = useState(0);
  const [buttonText, setButtonText] = useState("Apretame");
  const [isBeating, setIsBeating] = useState(false);

  const increaseFill = () => {
    if (progress < 100) {
      setProgress((prev) => Math.min(prev + 10, 100)); 
    } else if (fill < 100) {
      setFill((prev) => Math.min(prev + 10, 100));
    } else {
      setIsBeating(true);
    }

    if (progress === 100 && fill === 50) {
      setButtonText("Ya casi bebé! ❤️");
    }
    if (progress === 100 && fill === 90) {
      setButtonText("¡Me amas! ❤️");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <svg
        viewBox="0 0 24 24"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: 'block',
          margin: 'auto',
          transform: isBeating ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.4s ease-in-out',
        }}
        onClick={() => setIsBeating(!isBeating)}
      >
        <path
          d="M12 21C12 21 3 13.8 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 12 4.28 12 4.28C12 4.28 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 13.8 12 21 12 21Z"
          fill="none"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 100,
            strokeDashoffset: 100 - progress,
            transition: 'stroke-dashoffset 0.9s ease-out',
          }}
        />
        <path
          d="M12 21C12 21 3 13.8 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 12 4.28 12 4.28C12 4.28 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 13.8 12 21 12 21Z"
          fill="red"
          fillOpacity={fill / 100}
          style={{
            transition: 'fill-opacity 0.9s ease-out',
          }}
        />
      </svg>
      <button
        onClick={increaseFill}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Heart;
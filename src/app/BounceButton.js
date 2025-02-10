import React, { useState } from 'react';

const BounceButton = () => {
  const [bounce, setBounce] = useState(false);

  const handleClick = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 1000);
  };

  return (
    <button 
      onClick={handleClick}
      className={`bg-red-500 text-white px-6 py-3 rounded ${bounce ? 'animate-bounce' : ''}`}
    >
      Click me!
    </button>
  );
};

export default BounceButton;

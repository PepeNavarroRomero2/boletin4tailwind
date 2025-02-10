import React, { useState } from 'react';

const ImageCard = ({ src, alt }) => {
  const [bounce, setBounce] = useState(false);

  const handleClick = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 1000);
  };

  return (
    <div
      onClick={handleClick}
      className={`overflow-hidden cursor-pointer transform transition-transform hover:scale-105 animate-fade-in ${bounce ? 'animate-bounce' : ''}`}
    >
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </div>
  );
};

export default ImageCard;

import React from 'react';
import ImageCard from './ImageCard';

const Gallery = () => {
  const images = [
    { src: 'https://i.imgur.com/etL5wMb.jpeg', alt: 'Imagen 1' },
    { src: 'https://i.imgur.com/etL5wMb.jpeg', alt: 'Imagen 2' },
    { src: 'https://i.imgur.com/etL5wMb.jpeg', alt: 'Imagen 3' },
    { src: 'https://i.imgur.com/etL5wMb.jpeg', alt: 'Imagen 4' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((img, index) => (
        <ImageCard key={index} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
};

export default Gallery;

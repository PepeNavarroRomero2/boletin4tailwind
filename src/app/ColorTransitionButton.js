import React from 'react';

const ColorTransitionButton = () => {
  return (
    <button className="bg-blue-500 hover:bg-green-500 transition-colors duration-300 text-white px-4 py-2 rounded">
      Hover me
    </button>
  );
};

export default ColorTransitionButton;

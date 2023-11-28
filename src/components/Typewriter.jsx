import React, { useState, useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
 
const Typewriter = () => {
  
    const [text] = useTypewriter({
        words: ['A Software Developer', 'A Programmer', 'Your Friendly Neighborhood IT-Man'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,

    })

  return (
    <p className="font-bold text-white">
      {text}{' '}<Cursor cursorStyle="|" cursorBlinking/>
    </p>
  );
};

export default Typewriter;

// Matrix Brackets Component
// Handles bracket positioning and display

import React from 'react';

interface BracketDimensions {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface MatrixBracketsProps {
  leftBracket: BracketDimensions;
  rightBracket: BracketDimensions;
  className?: string;
}

const MatrixBrackets: React.FC<MatrixBracketsProps> = ({ 
  leftBracket, 
  rightBracket, 
  className = '' 
}) => {
  return (
    <>
      {/* Left Bracket */}
      <div 
        className={`absolute text-gray-600 font-bold text-2xl flex items-center justify-center ${className}`}
        style={{
          left: leftBracket.x,
          top: leftBracket.y,
          width: leftBracket.width,
          height: leftBracket.height
        }}
      >
        [
      </div>
      
      {/* Right Bracket */}
      <div 
        className={`absolute text-gray-600 font-bold text-2xl flex items-center justify-center ${className}`}
        style={{
          left: rightBracket.x,
          top: rightBracket.y,
          width: rightBracket.width,
          height: rightBracket.height
        }}
      >
        ]
      </div>
    </>
  );
};

export default MatrixBrackets;


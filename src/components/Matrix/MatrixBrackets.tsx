import React from 'react';

interface MatrixBracketsProps {
  side: 'left' | 'right';
  height: number;
  thickness: number;
}

const MatrixBrackets: React.FC<MatrixBracketsProps> = ({ side, height, thickness }) => {
  const isLeft = side === 'left';
  
  // Calculate bracket dimensions
  const bracketWidth = thickness * 3; // 3x thickness for visual weight
  const bracketHeight = height;
  
  // Bracket path - creates a curved bracket shape
  const getBracketPath = () => {
    if (isLeft) {
      // Left bracket: [ shape
      return `
        M ${bracketWidth} 0
        L 0 0
        L 0 ${bracketHeight}
        L ${bracketWidth} ${bracketHeight}
      `;
    } else {
      // Right bracket: ] shape  
      return `
        M 0 0
        L ${bracketWidth} 0
        L ${bracketWidth} ${bracketHeight}
        L 0 ${bracketHeight}
      `;
    }
  };

  return (
    <div 
      className="absolute top-0"
      style={{
        left: isLeft ? 0 : 'auto',
        right: isLeft ? 'auto' : 0,
        width: bracketWidth,
        height: bracketHeight
      }}
    >
      <svg
        width={bracketWidth}
        height={bracketHeight}
        viewBox={`0 0 ${bracketWidth} ${bracketHeight}`}
        className="fill-current text-gray-700"
      >
        <path d={getBracketPath()} />
      </svg>
    </div>
  );
};

export default MatrixBrackets;

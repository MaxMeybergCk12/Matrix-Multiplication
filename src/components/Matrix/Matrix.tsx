import React from 'react';
import MatrixCell from './MatrixCell';
import MatrixBrackets from './MatrixBrackets';

// Calculate optimal cell size based on matrix dimensions
const getCellSize = (rows: number, cols: number): number => {
  const maxDim = Math.max(rows, cols);
  // Target total matrix size: ~240x240px
  const targetSize = 240;
  const cellSize = Math.floor(targetSize / maxDim);
  
  // Ensure minimum readable size
  if (cellSize < 40) return 40;
  if (cellSize > 80) return 80;
  return cellSize;
};

interface MatrixProps {
  data: number[][];
  highlightRow?: number | null;
  highlightCol?: number | null;
  highlightColor?: string;
  className?: string;
}

const Matrix: React.FC<MatrixProps> = ({ 
  data, 
  highlightRow = null, 
  highlightCol = null, 
  highlightColor = "yellow",
  className = "" 
}) => {
  const rows = data.length;
  const cols = data[0]?.length || 0;
  const cellSize = getCellSize(rows, cols);
  
  // Calculate total matrix dimensions
  const matrixWidth = cols * cellSize + (cols - 1) * 8; // 8px gap
  const matrixHeight = rows * cellSize + (rows - 1) * 8;

  return (
    <div className={`relative ${className}`}>
      {/* Left Bracket */}
      <MatrixBrackets 
        side="left" 
        height={matrixHeight} 
        thickness={4}
      />
      
      {/* Matrix Grid */}
      <div 
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
          marginLeft: '20px',
          marginRight: '20px'
        }}
      >
        {data.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <MatrixCell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              size={cellSize}
              isHighlighted={
                highlightRow === rowIndex || 
                highlightCol === colIndex
              }
              highlightColor={highlightColor}
            />
          ))
        )}
      </div>
      
      {/* Right Bracket */}
      <MatrixBrackets 
        side="right" 
        height={matrixHeight} 
        thickness={4}
      />
    </div>
  );
};

export default Matrix;


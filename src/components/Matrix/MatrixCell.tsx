import React from 'react';

interface MatrixCellProps {
  value: number;
  size: number;
  isHighlighted: boolean;
  highlightColor: string;
}

const MatrixCell: React.FC<MatrixCellProps> = ({ 
  value, 
  size, 
  isHighlighted = false, 
  highlightColor = "yellow" 
}) => {
  // Calculate font size based on cell size
  const getFontSize = (cellSize: number): string => {
    if (cellSize >= 70) return 'text-xl';      // 20px
    if (cellSize >= 60) return 'text-lg';      // 18px  
    if (cellSize >= 50) return 'text-base';    // 16px
    return 'text-sm';                           // 14px
  };

  // Highlight color classes
  const getHighlightClasses = (color: string): string => {
    switch (color) {
      case 'yellow':
        return 'bg-yellow-200 border-yellow-500 text-yellow-900';
      case 'blue':
        return 'bg-blue-200 border-blue-500 text-blue-900';
      case 'green':
        return 'bg-green-200 border-green-500 text-green-900';
      case 'orange':
        return 'bg-orange-200 border-orange-500 text-orange-900';
      default:
        return 'bg-yellow-200 border-yellow-500 text-yellow-900';
    }
  };

  const baseClasses = `
    flex items-center justify-center 
    border-2 border-gray-300 
    rounded-lg font-mono font-semibold
    transition-all duration-200
  `;

  const highlightClasses = isHighlighted 
    ? getHighlightClasses(highlightColor)
    : 'bg-white text-gray-800 hover:bg-gray-50';

  return (
    <div
      className={`${baseClasses} ${highlightClasses}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: size >= 60 ? 'inherit' : `${Math.max(12, size * 0.4)}px`
      }}
    >
      {value}
    </div>
  );
};

export default MatrixCell;

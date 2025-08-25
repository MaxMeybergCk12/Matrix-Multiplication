// Matrix Input Component
// Individual input field for matrix values

import React from 'react';

interface MatrixInputProps {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  className?: string;
}

const MatrixInput: React.FC<MatrixInputProps> = ({ 
  value, 
  onChange, 
  disabled = false,
  className = ''
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || 0;
    if (newValue >= 0 && newValue <= 9) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="number"
      min="0"
      max="9"
      value={value}
      onChange={handleChange}
      disabled={disabled}
      className={`
        w-8 h-8 
        text-center 
        text-sm 
        font-mono 
        border 
        border-gray-300 
        rounded 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        focus:border-transparent
        disabled:bg-gray-100 
        disabled:text-gray-500
        ${className}
      `}
    />
  );
};

export default MatrixInput;


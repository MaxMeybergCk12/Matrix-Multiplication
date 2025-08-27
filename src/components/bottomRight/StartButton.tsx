import React from 'react';

interface StartButtonProps {
    onStart: () => void;
    isAnimating: boolean;
    disabled?: boolean;
    isVisible: boolean;
}

const StartButton: React.FC<StartButtonProps> = ({ 
    onStart, 
    isAnimating, 
    disabled = false,
    isVisible
}) => {
    if (!isVisible) return null;
    
    return (
        <button
            onClick={onStart}
            disabled={disabled || isAnimating}
            className={`
                px-6 py-3 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg
                ${isAnimating 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-green-500 hover:bg-green-600 hover:shadow-xl transform hover:scale-105'
                }
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                text-white
            `}
        >
            {isAnimating ? 'Calculating...' : 'Start Calculation'}
        </button>
    );
};

export default StartButton;

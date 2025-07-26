// src/template/Footer/buttons.jsx
import React from 'react';

function Buttons({ currentStep, totalSteps, onNext, onPrev }) {
  return (
    <div className="h-[10%] border-t border-gray-100 flex justify-end items-center px-8 gap-4">
      <button 
        onClick={onPrev}
        disabled={currentStep === 1}
        className="w-12 h-12 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-xl transition-colors"
      >
        ←
      </button>
      
      <button 
        onClick={onNext}
        disabled={currentStep === totalSteps}
        className="w-12 h-12 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-xl transition-colors"
      >
        →
      </button>
    </div>
  );
}

export default Buttons;

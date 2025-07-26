// src/template/Footer/buttons.jsx
import React from 'react';

function Buttons({ current_step, total_steps, on_next, on_prev }) {
  return (
    <div className="h-[10%] border-t border-gray-100 flex justify-end items-center px-8 gap-4">
      <button 
        onClick={on_prev}
        disabled={current_step === 1}
        className="w-12 h-12 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-xl transition-colors"
      >
        ←
      </button>
      
      <button 
        onClick={on_next}
        disabled={current_step === total_steps}
        className="w-12 h-12 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-xl transition-colors"
      >
        →
      </button>
    </div>
  );
}

export default Buttons;

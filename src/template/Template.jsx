import React, { useState, useEffect } from 'react';
import { Title } from './Header';
import Buttons from './Footer/buttons.jsx';
import Flexi from './assets/Flexi.js';

function Template({ title, current_step, total_steps, flexi_steps, on_next, on_prev, children }) {
  const [flexi, set_flexi] = useState(Flexi.confident);
  const [flexi_message, set_flexi_message] = useState("Ready to learn!");

  useEffect(() => {
    const step_data = flexi_steps[current_step - 1];
    set_flexi(step_data.pose);
    set_flexi_message(step_data.message);
  }, [current_step, flexi_steps]);

  return (
    <div className="w-screen h-screen bg-gray-50 flex items-center justify-center p-[2%]">
      <div className="w-full h-full bg-white rounded-2xl shadow-lg flex flex-col">
        <Title>{title}</Title>
        
        <div className="flex-1 p-8">
          {children}
        </div>

        
        <Buttons 
          current_step={current_step}
          total_steps={total_steps}
          on_next={on_next}
          on_prev={on_prev}
        />
        {/* Fixed Flexi - mobile-only with trimmed right side */}
        <div className="fixed bottom-4 left-4 md:hidden flex items-center gap-2 z-40">
          <img 
            src={flexi} 
            alt="Flexi" 
            className="w-20 h-20 flex-shrink-0"
          />
          <div className="flex flex-col justify-center h-20">
            <div className="bg-white rounded-lg p-2 shadow-lg text-xs border border-gray-200 max-w-[140px] leading-tight max-h-32 overflow-y-auto break-words hyphens-none">
              {flexi_message}
            </div>
          </div>
        </div>

        {/* Desktop version - original layout */}
        <div className="hidden md:block">
          {/* Put your original desktop Flexi layout here */}
        </div>
      </div>
    </div>
  );
}

export default Template;

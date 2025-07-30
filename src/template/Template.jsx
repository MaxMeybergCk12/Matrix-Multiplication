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
        
        <div className="h-[30%] p-6 pb-32 md:pb-6 bg-blue-50 border-t border-gray-100 flex items-center justify-center">
          <div className="flex items-center gap-6">
            <img 
              src={flexi} 
              alt="Flexi" 
              className="w-32 h-32"
            />
            <div className="bg-white rounded-xl p-4 shadow-lg text-sm md:text-lg max-w-md">
              {flexi_message}
            </div>
          </div>
        </div>
        
        <Buttons 
          current_step={current_step}
          total_steps={total_steps}
          on_next={on_next}
          on_prev={on_prev}
        />
      </div>
    </div>
  );
}

export default Template;

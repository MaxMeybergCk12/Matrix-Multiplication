import React, { useContext } from 'react';
import { Title } from './Header';
import Buttons from './Footer/buttons.jsx';
import { flexi_context } from '../context/flexi_context.js';

function Template({ title, current_step, total_steps, on_next, on_prev, children }) {
  const { flexi_state } = useContext(flexi_context);
  
  return (
    <div className="w-screen h-screen bg-gray-50 flex items-center justify-center p-[2%]">
      <div className="w-full h-full bg-white rounded-2xl shadow-lg flex flex-col">
        <Title>{title}</Title>
        
        {/* Main Content Area */}
        <div className="flex-1 p-8">
          {children}
        </div>
        
        {/* Flexi Area */}
        <div className="h-[20%] p-4 bg-blue-50 border-t border-gray-100 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <img 
              src={flexi_state.character} 
              alt="Flexi" 
              className="w-16 h-16"
            />
            <div className="bg-white rounded-lg p-3 shadow-sm">
              {flexi_state.message}
            </div>
          </div>
        </div>
        
        {/* Footer */}
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

import React from 'react';
import { Title } from './Header';
import Buttons from './Footer/buttons.jsx';

function Template({ title, children, currentStep, totalSteps, onNext, onPrev }) {
  return (
    <div className="w-screen h-screen bg-gray-50 flex items-center justify-center p-[2%]">
      <div className="w-full h-full bg-white rounded-2xl shadow-lg flex flex-col">
        <Title>{title}</Title>
        
        {/* Content Area - 80% height */}
        <div className="flex-1 p-8 overflow-auto">
          {children}
        </div>
        
        {/* Footer with Green Circle Buttons */}
        <Buttons 
          currentStep={currentStep}
          totalSteps={totalSteps}
          onNext={onNext}
          onPrev={onPrev}
        />
      </div>
    </div>
  );
}

export default Template;

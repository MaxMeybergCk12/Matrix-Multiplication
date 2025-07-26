import React from 'react';

function Title({ children }) {
  return (
    <div className="h-[10%] flex items-center justify-center border-b border-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold text-green-600">
        {children}
      </h1>
    </div>
  );
}

export default Title;

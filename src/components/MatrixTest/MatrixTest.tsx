import React from 'react';
import { Matrix } from '../Matrix';

const MatrixTest: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Matrix Component Test</h2>
      <p className="text-gray-600 mb-6">2x2 matrix with top row highlighted:</p>
      
      <Matrix 
        data={[[1, 2], [3, 4]]} 
        highlightRow={0} 
        highlightColor="yellow"
      />
    </div>
  );
};

export default MatrixTest;

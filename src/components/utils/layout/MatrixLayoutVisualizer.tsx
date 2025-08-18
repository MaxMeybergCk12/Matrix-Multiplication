// src/components/MatrixLayoutVisualizer.tsx
// Visual test component - shows colored boxes for matrix spaces

import React from 'react';
import { allocateMatrixSpace } from './layout';

interface MatrixLayoutVisualizerProps {
  matrixA: [number, number];
  matrixB: [number, number];
  totalWidth?: number;
  totalHeight?: number;
  margins?: number;
}

const MatrixLayoutVisualizer: React.FC<MatrixLayoutVisualizerProps> = ({
  matrixA,
  matrixB,
  totalWidth = 484,
  totalHeight = 404,
  margins = 15
}) => {
  const layout = allocateMatrixSpace(matrixA, matrixB, totalWidth, totalHeight, margins);

  return (
    <div 
      className="relative bg-gray-100"
      style={{ 
        width: layout.workingSpace.width, 
        height: layout.workingSpace.height,
        margin: '0 auto'
      }}
    >
      {/* Matrix A - Red */}
      <div 
        className="absolute border-2 border-red-600 bg-red-200 flex items-center justify-center text-red-800 font-bold"
        style={{
          left: 0,
          top: (layout.workingSpace.height / 4) - (layout.matrixA.height / 2),
          width: layout.matrixA.width,
          height: layout.matrixA.height
        }}
      >
        A
      </div>

      {/* × Symbol - Orange */}
      <div 
        className="absolute border-2 border-orange-600 bg-orange-200 flex items-center justify-center text-orange-800 font-bold text-xl"
        style={{
          left: layout.matrixA.width,
          top: (layout.workingSpace.height / 4) - (layout.symbols.width / 2),
          width: layout.symbols.width,
          height: layout.symbols.width
        }}
      >
        ×
      </div>

      {/* Matrix B - Yellow */}
      <div 
        className="absolute border-2 border-yellow-600 bg-yellow-200 flex items-center justify-center text-yellow-800 font-bold"
        style={{
          left: layout.matrixA.width + layout.symbols.width,
          top: (layout.workingSpace.height / 4) - (layout.matrixB.height / 2),
          width: layout.matrixB.width,
          height: layout.matrixB.height
        }}
      >
        B
      </div>

      {/* = Symbol - Green */}
      <div 
        className="absolute border-2 border-green-600 bg-green-200 flex items-center justify-center text-green-800 font-bold text-xl"
        style={{
          left: layout.matrixA.width + layout.symbols.width + layout.matrixB.width,
          top: (layout.workingSpace.height / 4) - (layout.symbols.width / 2),
          width: layout.symbols.width,
          height: layout.symbols.width
        }}
      >
        =
      </div>

      {/* Matrix C - Blue */}
      <div 
        className="absolute border-2 border-blue-600 bg-blue-200 flex items-center justify-center text-blue-800 font-bold"
        style={{
          left: layout.matrixA.width + layout.symbols.width + layout.matrixB.width + layout.symbols.width,
          top: (layout.workingSpace.height / 4) - (layout.matrixC.height / 2),
          width: layout.matrixC.width,
          height: layout.matrixC.height
        }}
      >
        C
      </div>
    </div>
  );
};

export default MatrixLayoutVisualizer;
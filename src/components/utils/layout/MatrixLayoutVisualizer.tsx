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
  // Use the real layout function
  const layout = allocateMatrixSpace(matrixA, matrixB, totalWidth, totalHeight, margins);

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Matrix Layout Visualizer</h3>
      
      {/* Layout Info */}
      <div className="mb-4 text-sm">
        <p>Matrix A: {matrixA[0]}×{matrixA[1]} → Width: {Math.round(layout.matrixA.width)}px, Height: {Math.round(layout.matrixA.height)}px</p>
        <p>Matrix B: {matrixB[0]}×{matrixB[1]} → Width: {Math.round(layout.matrixB.width)}px, Height: {Math.round(layout.matrixB.height)}px</p>
        <p>Matrix C: {matrixA[0]}×{matrixB[1]} → Width: {Math.round(layout.matrixC.width)}px, Height: {Math.round(layout.matrixC.height)}px</p>
        <p>Working Space: {layout.workingSpace.width}×{layout.workingSpace.height}px</p>
      </div>

      {/* Visual Layout */}
      <div 
        className="border-2 border-gray-400 relative bg-gray-100"
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
            top: 0,
            width: layout.matrixA.width,
            height: layout.matrixA.height
          }}
        >
          A
        </div>

        {/* × Symbol - Orange (inline between A and B) */}
        <div 
          className="absolute border-2 border-orange-600 bg-orange-200 flex items-center justify-center text-orange-800 font-bold text-xl"
          style={{
            left: layout.matrixA.width,
            top: (layout.workingSpace.height / 2) - (layout.matrixA.height / 2),
            width: layout.symbols.width,
            height: layout.matrixA.height
          }}
        >
          ×
        </div>

        {/* Matrix B - Yellow */}
        <div 
          className="absolute border-2 border-yellow-600 bg-yellow-200 flex items-center justify-center text-yellow-800 font-bold"
          style={{
            left: layout.matrixA.width + layout.symbols.width,
            top: 0,
            width: layout.matrixB.width,
            height: layout.matrixB.height
          }}
        >
          B
        </div>

        {/* = Symbol - Green (inline between B and C) */}
        <div 
          className="absolute border-2 border-green-600 bg-green-200 flex items-center justify-center text-green-800 font-bold text-xl"
          style={{
            left: layout.matrixA.width + layout.symbols.width + layout.matrixB.width,
            top: (layout.workingSpace.height / 2) - (layout.matrixC.height / 2),
            width: layout.symbols.width,
            height: layout.matrixC.height
          }}
        >
          =
        </div>

        {/* Matrix C - Blue */}
        <div 
          className="absolute border-2 border-blue-600 bg-blue-200 flex items-center justify-center text-blue-800 font-bold"
          style={{
            left: layout.matrixA.width + layout.symbols.width + layout.matrixB.width + layout.symbols.width,
            top: 0,
            width: layout.matrixC.width,
            height: layout.matrixC.height
          }}
        >
          C
        </div>
      </div>

      {/* Color Legend */}
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-red-200 border border-red-600"></div>
          <span>Matrix A</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-orange-200 border border-orange-600"></div>
          <span>× Symbol</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-yellow-200 border border-yellow-600"></div>
          <span>Matrix B</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-green-200 border border-green-600"></div>
          <span>= Symbol</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-blue-200 border border-blue-600"></div>
          <span>Matrix C</span>
        </div>
      </div>
    </div>
  );
};

export default MatrixLayoutVisualizer;
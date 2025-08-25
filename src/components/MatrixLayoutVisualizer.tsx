import React, { useState, useMemo } from "react";
import { createMatrices } from "./matrixOrchestrator";
import { allocateMatrixSpace } from "./layout";
import Tester from "./tester";


interface MatrixLayoutProps {
    matrixA: [number, number]; // Dimensions like [3, 3]
    matrixB: [number, number]; // Dimensions like [3, 3]
    totalWidth: number;
    totalHeight: number;
    currentStep: number;
}

const MatrixLayoutVisualizer: React.FC<MatrixLayoutProps> = ({
  matrixA,
  matrixB,
  totalWidth,
  totalHeight,
}) => {
  // Step 1: Generate matrices only when dimensions change
  const matrices = useMemo(() => createMatrices(matrixA, matrixB), [matrixA, matrixB]);

  // Step 2: Calculate layout only when matrices change
  const layout = useMemo(() => allocateMatrixSpace(
      matrices.matrixA.dimensions,
      matrices.matrixB.dimensions,
      matrices.matrixC.dimensions,
      totalWidth,
      totalHeight,
  ), [matrices, totalWidth, totalHeight]);




  // Step 3: Call Tester
  return (
    <div>
        {/* Top Half - Contains Tester */}
        <div style={{ height: totalHeight / 2 }}>
            <Tester layout={layout} matrices={matrices}/>
        </div>
        
        {/* Bottom Half - TODO Later */}
        <div style={{ height: totalHeight / 2, backgroundColor: 'lightgray' }}>
            {/* Left: Vector multiplication */}
          <div style={{ width: totalWidth / 2 }}>
              <BottomLeft 
                  matrixA={matrices.matrixA} 
                  matrixB={matrices.matrixB} 
                  currentStep={currentStep}
                  totalWidth={totalWidth / 2}  // ← Half of top half width
                  totalHeight={totalHeight / 2} // ← Half of total height
              />
          </div>
          {/* Right: Result display */}
          <div style={{ width: totalWidth / 2 }}>
              {/* Result content */}
          </div>
        </div>
    </div>
);
};

export default MatrixLayoutVisualizer;

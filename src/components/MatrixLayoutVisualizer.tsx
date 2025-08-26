import React, { useState, useMemo } from "react";
import { createMatrices } from "./matrixOrchestrator";
import { allocateMatrixSpace } from "./layout";
import Tester from "./tester";
import BottomLeft from "./bottomLeft";
import { calculateStepInfo } from './stepCalculator';

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
  currentStep,
}) => {
  

  
  // Step 1: Generate matrices only when dimensions change
  const matrices = useMemo(() => createMatrices(matrixA, matrixB), [matrixA, matrixB]);

  // Helper function - uses matrices from parent scope
  const getVectors = (i: number, j: number) => {
    const vectorU = matrices.matrixA.values[i];
    const vectorV = matrices.matrixB.values.map(row => row[j]);
    return { vectorU, vectorV };
  };

  // Calculate positions
  const { i, j, totalSteps } = calculateStepInfo(currentStep, matrices.matrixC);
  

  // Get vectors
  const { vectorU, vectorV } = getVectors(i, j);
  console.log(vectorU);
  console.log(vectorV);


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
        
        {/* Bottom Half - Vector multiplication and results */}
        <div style={{ height: totalHeight / 2, display: 'flex' }}>
            {/* Left: Vector multiplication */}
            <div style={{ width: totalWidth / 2 }}>
            <BottomLeft 
                vectorU={vectorU}               // ✅ The extracted row vector
                vectorV={vectorV}               // ✅ The extracted column vector
                totalWidth={totalWidth / 2}     // ✅ Layout width
                totalHeight={totalHeight / 2}   // ✅ Layout height
            />
            </div>
            {/* Right: Result display */}
            <div style={{ width: totalWidth / 2, backgroundColor: 'lightgray' }}>
                <div className="p-4 text-center">
                    <p>Result for step {currentStep}</p>
                </div>
            </div>
        </div>
    </div>
);
};

export default MatrixLayoutVisualizer;

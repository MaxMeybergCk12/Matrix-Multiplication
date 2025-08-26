import React, { useState, useMemo } from "react";
import { createMatrices } from "./matrixOrchestrator";
import { allocateMatrixSpace } from "./layout";
import Tester from "./tester";
import BottomLeft from "./bottomLeft";
import BottomRight from "./bottomRight/bottomRight";
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
    const matrices = useMemo(() => {
        const initialMatrices = createMatrices(matrixA, matrixB);
        return initialMatrices;
    }, []); // Empty dependency array - only create once
    
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

    // here to stop type issues:  
    const cleanVectorU = vectorU.filter((val): val is number => val !== null);
    const cleanVectorV = vectorV.filter((val): val is number => val !== null);

  // Step 3: Call Tester
  return (
    <div>
        {/* Top Half - Contains Tester */}
        <div style={{ height: totalHeight / 2 }}>
            <Tester 
                layout={layout} 
                matrices={matrices}
                highlightedRow={i}
                highlightedColumn={j}
            />
        </div>
        
        {/* Bottom Half - Vector multiplication and results */}
        <div style={{ height: totalHeight / 2, display: 'flex' }}>
            {/* Left: Vector multiplication */}
            <div style={{ width: totalWidth / 2 }}>
            <BottomLeft 
                vectorU={cleanVectorU}               // ✅ The extracted row vector
                vectorV={cleanVectorV}               // ✅ The extracted column vector
                totalWidth={totalWidth / 2}     // ✅ Layout width
                totalHeight={totalHeight / 2}   // ✅ Layout height
                highlightedRow={0}
                highlightedColumn={0}
            />
            </div>
            {/* Right: Result display */}
            <div style={{ width: totalWidth / 2 }}>
                <BottomRight 
                    vectorU={cleanVectorU}
                    vectorV={cleanVectorV}
                    matrixC={matrices.matrixC}
                    currentStep={currentStep}
                    onMatrixCUpdate={(updatedMatrixC) => {
                        // Update the matrices state with the new Matrix C
                        // This would need to be handled at a higher level
                        console.log('Matrix C updated:', updatedMatrixC);
                    }}
                />
            </div>
        </div>
    </div>
);
};

export default MatrixLayoutVisualizer;

import React from 'react';

interface BottomLeftProps {
    matrixA: any;
    matrixB: any;
    matrixC: any;
    currentStep: number;
    totalWidth: number;
    totalHeight: number;
}

const BottomLeft: React.FC<BottomLeftProps> = ({ 
    matrixA, 
    matrixB, 
    matrixC,
    currentStep, 
    totalWidth, 
    totalHeight 
}) => {
    // Calculate which [i,j] position this step represents
    const numColumns = matrixB.dimensions[1]; // Number of columns in B
    const i = Math.floor(currentStep / numColumns); // Which row
    const j = currentStep % numColumns;             // Which column
    
    return (
        <div className="p-4">
            <p>Step {currentStep}: Calculating C[{i},{j}]</p>
        </div>
    );
};

export default BottomLeft;
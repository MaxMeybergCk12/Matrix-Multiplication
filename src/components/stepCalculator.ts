export const calculateStepInfo = (step: number, matrixC: { dimensions: [number, number] }) => {
    const [rows, cols] = matrixC.dimensions;
    const totalSteps = (rows+1) * (cols+1);
    
    if (step === 0) {
        // Initial step - show empty matrices
        return { i: -1, j: -1, totalSteps };
    }
    
    // Matrix multiplication steps (1 to rows*cols)
    const adjustedStep = step - 1; // Subtract 1 because step 1 should give us i=0, j=0
    const i = Math.floor(adjustedStep / cols);
    const j = adjustedStep % cols;
    
    return { i, j, totalSteps };
};
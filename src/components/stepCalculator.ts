export const calculateStepInfo = (step: number, matrixC: { dimensions: [number, number] }) => {
    const [rows, cols] = matrixC.dimensions;
    const totalSteps = 1 + rows * cols;  // Add 1 for the extra step
    const i = Math.floor(step / cols);
    const j = step % cols;
    
    return { i, j, totalSteps };
};
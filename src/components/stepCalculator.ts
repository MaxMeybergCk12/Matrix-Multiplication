

export const calculateStepInfo = (step: number, matrixC: { dimensions: [number, number] }) => {
    const [rows, cols] = matrixC.dimensions;
    const totalSteps = rows * cols;
    const i = Math.floor(step / cols);
    const j = step % cols;
    
    return { i, j, totalSteps };
};
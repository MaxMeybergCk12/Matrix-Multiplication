export const calculateDotProduct = (vectorU: number[], vectorV: number[]): number => {
    let result = 0;
    for (let i = 0; i < vectorU.length; i++) {
        result += vectorU[i] * vectorV[i];
    }
    return result;
};

export const getMatrixPosition = (currentStep: number, matrixC: any) => {
    const rows = matrixC.dimensions[0];
    const cols = matrixC.dimensions[1];
    const currentRow = Math.floor((currentStep - 1) / cols);
    const currentCol = (currentStep - 1) % cols;
    
    return { currentRow, currentCol };
};

export const createUpdatedMatrixC = (matrixC: any, currentRow: number, currentCol: number, value: any) => {
    return {
        ...matrixC,
        values: matrixC.values.map((row: any[], rowIndex: number) =>
            row.map((cell: any, colIndex: number) =>
                rowIndex === currentRow && colIndex === currentCol ? value : cell
            )
        )
    };
};

// Tyoping for the matuix structure
interface MatrixData {
    dimensions: [number, number]; // [rows, cols]
    values: (number | null)[][]; // 2D array of numbers
}
/*
Given a matrix A and B which is like:

A = [3,3]
B = [3,1]

We output:

A (3×3)                       B (3×1)           C (3×1)
┌─────┬─────┬─────┐          ┌─────┐           ┌───────┐
│  7  │  2  │  5  │          │  2  │           │  null │
├─────┼─────┼─────┤          ├─────┤           ├───────┤
│  4  │  9  │  1  │    and   │  5  │    and    │  null │
├─────┼─────┼─────┤          ├─────┤           ├───────┤
│  3  │  6  │  8  │          │  7  │           │  null │
└─────┴─────┴─────┘          └─────┘           └───────┘


Assume the matrices are compatable by default due to the fact that im hard-coding them

We will find values in C later on. this is mainly used for visualzier which called matrixOrchestration.ts


*/
export function createMatrices(A: [number, number], B: [number, number]) {
    const matrixA = generateMatrix(A);

    const matrixB = generateMatrix(B);
    const matrixC = nullMatrix([A[0], B[1]]);
    
    // TODO: Make a  null matrix
    return { matrixA, matrixB, matrixC };
}

function nullMatrix(dimensions: [number, number]): MatrixData {
    const [rows, cols] = dimensions;

    // Create null values array
    const nullValues = Array(rows)
        .fill(null)
        .map(() => Array(cols).fill(null));

    return {
        dimensions,
        values: nullValues,
    };
}

// Generate a matrix with random values (for when we need actual values)
function generateMatrix(dimensions: [number, number]): MatrixData {
    const [rows, cols] = dimensions;

    const values: number[][] = [];
    for (let row = 0; row < rows; row++) {
        values[row] = [];
        for (let col = 0; col < cols; col++) {
            values[row][col] = Math.floor(Math.random() * 9) + 1; // ← Direct random 1-9
        }
    }

    return {
        dimensions,
        values,
    };
}

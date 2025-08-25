import { generateMatrix } from './matrixStates/generators/matrixGenerator';
import { MatrixData } from './matrixStates/types/matrixData';  // ← ADD THIS LINE

/*
Given a matrix A and B which is like:

A = [3,3]
B = [3,1]

Assume the matrices are compatable by default due to the fact that im hard-coding them
*/
export function createMatrices(A: [number, number], B: [number, number]) {
    const matrixA = generateMatrix(A)

    const matrixB = generateMatrix(B)

    console.log('✅ Matrix A:', matrixA);
    console.log('✅ Matrix B:', matrixB);
    
    // Matri dimensions in matrixData already
    matrixA.id = "A"
    matrixB.id = "B" 

    //TODO: make the answer for the C matrix
    const matrixC = multiplyMatrices(matrixA, matrixB);
    matrixC.id = "Answer"

    const matrixC2 = nullMatrix(matrixC);


    // TODO: Make a  null matrix
    return { matrixA, matrixB, matrixC, matrixC2}


}

// Basdic Matrix Multiplicaion, given 2 matrices
function multiplyMatrices(matrixA: MatrixData, matrixB: MatrixData): MatrixData {
    const [aRows, aCols] = matrixA.dimensions;
    const [bRows, bCols] = matrixB.dimensions;
    
    // Initialize result matrix
    const resultValues: number[][] = [];
    
    // Perform matrix multiplication
    for (let i = 0; i < aRows; i++) {
      resultValues[i] = [];
      for (let j = 0; j < bCols; j++) {
        let sum = 0;
        for (let k = 0; k < aCols; k++) {
          sum += (matrixA.values[i][k] as number) * (matrixB.values[k][j] as number);
        }
        resultValues[i][j] = sum;
      }
    }
    
    // Create result matrix
    const resultMatrix: MatrixData = {
      dimensions: [aRows, bCols],
      values: resultValues,
      id: "C"
    };
    
    return resultMatrix;
}

function nullMatrix(matrix: MatrixData): MatrixData {
    // Create a copy with null values
    const nullValues = matrix.values.map(row => 
        row.map(() => null)
    );
    
    return {
        dimensions: matrix.dimensions,
        values: nullValues,
        id: matrix.id + "C"
    };
}



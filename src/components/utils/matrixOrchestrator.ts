import { generateMatrix } from './matrixStates/generators/matrixGenerator';
import { multiplyMatrices } from './matrixStates/operations/matrixMultiplication';

export interface MatrixData {
    dimensions: [number, number];
    values: number[][];
    id: string;
}

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
    


    matrixA.id = "A"
    matrixA.dimensions = A;
    matrixB.id = "B" 
    matrixB.dimensions = B;
    //TODO: make the answer for the C matrix
    const matrixC = 


    // TODO: Make a  null matrix


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
          sum += matrixA.values[i][k] * matrixB.values[k][j];
        }
        resultValues[i][j] = sum;
      }
    }
    
    // Create result matrix
    const resultMatrix: MatrixData = {
      dimensions: [aRows, bCols],
      values: resultValues,
      id: `result_${Date.now()}`
    };
    
    return resultMatrix;
}



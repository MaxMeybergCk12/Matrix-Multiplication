// Matrix Math Operations
// Handles matrix multiplication and other mathematical operations

import { MatrixData} from '../types';

// Multiply two matrices
export function multiplyMatrices(matrixA: MatrixData, matrixB: MatrixData): MatrixData {
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

// Matrix Math Operations
// Handles matrix multiplication and other mathematical operations

import { MatrixData, MatrixOperationResult } from '../types';

// Multiply two matrices
export function multiplyMatrices(matrixA: MatrixData, matrixB: MatrixData): MatrixOperationResult {
  const [aRows, aCols] = matrixA.dimensions;
  const [bRows, bCols] = matrixB.dimensions;
  
  // Check if matrices can be multiplied
  if (aCols !== bRows) {
    return {
      success: false,
      error: `Cannot multiply ${aRows}×${aCols} matrix with ${bRows}×${bCols} matrix. Column count of A must equal row count of B.`
    };
  }
  
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
  
  return {
    success: true,
    result: resultMatrix
  };
}

// Validate matrix values (ensure they're within 0-9 range)
export function validateMatrix(matrix: MatrixData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  const [rows, cols] = matrix.dimensions;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const value = matrix.values[i][j];
      if (value < 0 || value > 9) {
        errors.push(`Value at position [${i}][${j}] (${value}) is outside valid range [0-9]`);
      }
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

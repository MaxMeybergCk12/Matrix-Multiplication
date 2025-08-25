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

// Calculate matrix determinant (for square matrices)
export function calculateDeterminant(matrix: MatrixData): number | null {
  const [rows, cols] = matrix.dimensions;
  
  if (rows !== cols) {
    return null; // Not a square matrix
  }
  
  if (rows === 1) {
    return matrix.values[0][0];
  }
  
  if (rows === 2) {
    return matrix.values[0][0] * matrix.values[1][1] - matrix.values[0][1] * matrix.values[1][0];
  }
  
  // For 3x3 and larger matrices, use cofactor expansion
  let determinant = 0;
  for (let j = 0; j < cols; j++) {
    determinant += matrix.values[0][j] * getCofactor(matrix, 0, j);
  }
  
  return determinant;
}

// Helper function to get cofactor
function getCofactor(matrix: MatrixData, row: number, col: number): number {
  const [rows, cols] = matrix.dimensions;
  const minor: number[][] = [];
  
  for (let i = 0; i < rows; i++) {
    if (i === row) continue;
    minor.push([]);
    for (let j = 0; j < cols; j++) {
      if (j === col) continue;
      minor[minor.length - 1].push(matrix.values[i][j]);
    }
  }
  
  const minorMatrix: MatrixData = {
    dimensions: [rows - 1, cols - 1],
    values: minor,
    id: `minor_${Date.now()}`
  };
  
  const minorDeterminant = calculateDeterminant(minorMatrix);
  return minorDeterminant !== null ? Math.pow(-1, row + col) * minorDeterminant : 0;
}


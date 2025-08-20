// Matrix Generator
// Creates random matrices with specified dimensions and value ranges

import { MatrixData, MatrixGenerationOptions, DEFAULT_MATRIX_OPTIONS } from '../types';

// Generate a random number between min and max (inclusive)
function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a unique ID for matrices
function generateMatrixId(): string {
  return `matrix_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Generate a matrix with random values
export function generateMatrix(
  dimensions: [number, number], 
  options: MatrixGenerationOptions = {}
): MatrixData {
  const [rows, cols] = dimensions;
  const opts = { ...DEFAULT_MATRIX_OPTIONS, ...options };
  
  // Create 2D array with random values
  const values: number[][] = [];
  
  for (let row = 0; row < rows; row++) {
    values[row] = [];
    for (let col = 0; col < cols; col++) {
      values[row][col] = generateRandomNumber(opts.minValue!, opts.maxValue!);
    }
  }
  
  return {
    dimensions,
    values,
    id: generateMatrixId()
  };
}

// Generate a pair of matrices for multiplication
export function generateMatrixPair(
  matrixA: [number, number],
  matrixB: [number, number],
  options: MatrixGenerationOptions = {}
): { matrixA: MatrixData; matrixB: MatrixData } {
  return {
    matrixA: generateMatrix(matrixA, options),
    matrixB: generateMatrix(matrixB, options)
  };
}

// Generate a complete matrix state (A, B, and calculated C)
export function generateCompleteMatrixState(
  matrixA: [number, number],
  matrixB: [number, number],
  options: MatrixGenerationOptions = {}
): { matrixA: MatrixData; matrixB: MatrixData; matrixC: MatrixData } {
  const pair = generateMatrixPair(matrixA, matrixB, options);
  
  // Calculate Matrix C dimensions: [aRows, bCols]
  const matrixCDimensions: [number, number] = [matrixA[0], matrixB[1]];
  const matrixC = generateMatrix(matrixCDimensions, options);
  
  return {
    matrixA: pair.matrixA,
    matrixB: pair.matrixB,
    matrixC
  };
}

// Validate that two matrices can be multiplied
export function canMultiply(matrixA: [number, number], matrixB: [number, number]): boolean {
  const [aRows, aCols] = matrixA;
  const [bRows, bCols] = matrixB;
  
  // For multiplication: A cols must equal B rows
  return aCols === bRows;
}

// Get the resulting matrix dimensions from multiplication
export function getResultMatrixDimensions(matrixA: [number, number], matrixB: [number, number]): [number, number] {
  const [aRows, aCols] = matrixA;
  const [bRows, bCols] = matrixB;
  
  // Result matrix: [aRows, bCols]
  return [aRows, bCols];
}

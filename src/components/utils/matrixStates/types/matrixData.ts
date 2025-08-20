// Matrix Data Types
// Defines interfaces for matrices with actual numerical values

import { MatrixInput } from '../../../types';

// A matrix with actual numerical values (1-9)
export interface MatrixData {
  dimensions: MatrixInput;  // [rows, cols]
  values: number[][];       // 2D array of numbers
  id: string;               // Unique identifier
}

// Complete matrix state for all three matrices
export interface MatrixState {
  matrixA: MatrixData;
  matrixB: MatrixData;
  matrixC: MatrixData | null;  // Result matrix (calculated)
}

// Matrix generation options
export interface MatrixGenerationOptions {
  minValue?: number;        // Minimum value (default: 1)
  maxValue?: number;        // Maximum value (default: 9)
  allowDuplicates?: boolean; // Allow duplicate values (default: true)
}

// Matrix operation result
export interface MatrixOperationResult {
  success: boolean;
  result?: MatrixData;
  error?: string;
}

// Matrix validation result
export interface MatrixValidationResult {
  isValid: boolean;
  errors: string[];
}

// Default generation options
export const DEFAULT_MATRIX_OPTIONS: MatrixGenerationOptions = {
  minValue: 1,
  maxValue: 9,
  allowDuplicates: true
};

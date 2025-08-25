// Matrix Data Types
// Defines interfaces for matrices with actual numerical values

import { MatrixInput } from '../../../types';

// A matrix with actual numerical values (1-9)
export interface MatrixData {
  dimensions: MatrixInput;  // [rows, cols]
  values: (number | null)[][];       // 2D array of numbers
  id?: string;               // Unique identifier
}

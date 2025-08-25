// Matrix Generator - Ultra Ultra Ultra Simplified
import { MatrixData } from '../types';

// Generate a matrix with random values (for when we need actual values)
export function generateMatrix(dimensions: [number, number]): MatrixData {
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
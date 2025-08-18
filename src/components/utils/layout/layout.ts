// src/components/utils/layout.ts
// Decides space allocation for each matrix in the 5-column grid

import { MatrixInput, MatrixSize } from '../../types';

// ===== HELPER FUNCTIONS =====

// Calculate working space (total - margins)
function calculateWorkingSpace(totalWidth: number, totalHeight: number, margins: number) {
  return {
    width: totalWidth - (margins * 2),
    height: totalHeight - (margins * 2)
  };
}

// Calculate Matrix C dimensions from A and B
function calculateMatrixCDimensions(matrixA: MatrixInput, matrixB: MatrixInput) {
  const [aRows, aCols] = matrixA;
  const [bRows, bCols] = matrixB;
  
  return {
    cRows: aRows,    // Matrix C rows = Matrix A rows
    cCols: bCols     // Matrix C cols = Matrix B cols
  };
}

// Calculate symbol widths (× and =)
function calculateSymbolWidths(availableWidth: number) {
  const symbolWidth = 40;  // Fixed width for × and = symbols
  const totalSymbolWidth = symbolWidth * 2;  // × and = combined
  
  return {
    symbolWidth,
    totalSymbolWidth,
    remainingWidth: availableWidth - totalSymbolWidth
  };
}

// Allocate matrix widths based on column counts
function allocateMatrixWidths(matrixA: MatrixInput, matrixB: MatrixInput, availableWidth: number) {
  const [aRows, aCols] = matrixA;
  const [bRows, bCols] = matrixB;
  const { cRows, cCols } = calculateMatrixCDimensions(matrixA, matrixB);
  
  const { totalSymbolWidth, remainingWidth } = calculateSymbolWidths(availableWidth);
  
  // Calculate total columns for all matrices (excluding symbols)
  const totalColumns = aCols + bCols + cCols;
  
  // Allocate width proportionally based on actual column counts
  // This gives us the most accurate visual representation
  const matrixAWidth = (aCols / totalColumns) * remainingWidth;
  const matrixBWidth = (bCols / totalColumns) * remainingWidth;
  const matrixCWidth = (cCols / totalColumns) * remainingWidth;
  
  return {
    matrixA: { width: matrixAWidth, height: 0 },
    matrixB: { width: matrixBWidth, height: 0 },
    matrixC: { width: matrixCWidth, height: 0 },
    symbolWidth: 40
  };
}

// ===== MAIN FUNCTION =====
function allocateMatrixSpace(
  matrixA: MatrixInput,    // [3, 3]
  matrixB: MatrixInput,    // [2, 1] 
  totalWidth: number,      // 484
  totalHeight: number,     // 404
  margins: number = 15     // Default margins
) {
  // 1. Calculate working space
  const workingSpace = calculateWorkingSpace(totalWidth, totalHeight, margins);
  
  // 2. Allocate matrix widths
  const matrixSizes = allocateMatrixWidths(matrixA, matrixB, workingSpace.width);
  
  // 3. Calculate heights (proportional to rows)
  const [aRows, aCols] = matrixA;
  const [bRows, bCols] = matrixB;
  const { cRows, cCols } = calculateMatrixCDimensions(matrixA, matrixB);
  
  // Height based on row count (top half of available space)
  const maxRows = Math.max(aRows, bRows, cRows);
  const heightPerRow = (workingSpace.height / 2) / maxRows;  // Top half only
  
  matrixSizes.matrixA.height = aRows * heightPerRow;
  matrixSizes.matrixB.height = bRows * heightPerRow;
  matrixSizes.matrixC.height = cRows * heightPerRow;
  
  // For square matrix cases, use min(width, height) to avoid rectangles
  if ((aRows === aCols && bRows === bCols) || (aRows === aCols && bRows === bCols)) {
    const minDimension = Math.min(matrixSizes.matrixA.width, matrixSizes.matrixA.height);
    matrixSizes.matrixA.width = minDimension;
    matrixSizes.matrixA.height = minDimension;
    
    const minDimensionB = Math.min(matrixSizes.matrixB.width, matrixSizes.matrixB.height);
    matrixSizes.matrixB.width = minDimensionB;
    matrixSizes.matrixB.height = minDimensionB;
    
    const minDimensionC = Math.min(matrixSizes.matrixC.width, matrixSizes.matrixC.height);
    matrixSizes.matrixC.width = minDimensionC;
    matrixSizes.matrixC.height = minDimensionC;
  }
  
  return {
    matrixA: matrixSizes.matrixA,
    matrixB: matrixSizes.matrixB,
    matrixC: matrixSizes.matrixC,
    symbols: { width: matrixSizes.symbolWidth },
    workingSpace
  };
}

export { allocateMatrixSpace };
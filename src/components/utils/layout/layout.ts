// src/components/utils/layout.ts
// Decides space allocation for each matrix in the 5-column grid

import { MatrixInput, MatrixSize } from '../../types';
import { createSpacingCalculator, SpacingConstraints } from '../spacing';

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
  // Create spacing calculator with custom configuration
  const spacingCalculator = createSpacingCalculator({
    margins,
    symbolWidth: 40,
    minCellSize: 20,
    maxCellSize: 80,
    cellPadding: 4
  });
  
  // Define constraints for the layout
  const constraints: SpacingConstraints = {
    maxWidth: totalWidth,
    maxHeight: totalHeight,
    minSpacing: 10,
    maintainAspectRatio: true
  };
  
  // Calculate optimal spacing using the new system
  const spacingResult = spacingCalculator.calculateSpacing(matrixA, matrixB, constraints);
  
  // Convert to the existing format for backward compatibility
  return {
    matrixA: {
      width: spacingResult.matrixA.width,
      height: spacingResult.matrixA.height
    },
    matrixB: {
      width: spacingResult.matrixB.width,
      height: spacingResult.matrixB.height
    },
    matrixC: {
      width: spacingResult.matrixC.width,
      height: spacingResult.matrixC.height
    },
    symbols: { width: spacingResult.symbols.multiply.width },
    workingSpace: {
      width: totalWidth - (margins * 2),
      height: totalHeight - (margins * 2)
    }
  };
}

export { allocateMatrixSpace };
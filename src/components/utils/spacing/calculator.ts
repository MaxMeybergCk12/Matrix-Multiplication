// Matrix Spacing Calculator
// Core logic for calculating optimal spacing between matrices

import { MatrixInput } from '../../types/matrix';
import { SpacingConfig, MatrixSpacing, SpacingAllocation, SpacingConstraints, DEFAULT_SPACING_CONFIG } from './types';

export class MatrixSpacingCalculator {
  private config: SpacingConfig;

  constructor(config: SpacingConfig = DEFAULT_SPACING_CONFIG) {
    this.config = config;
  }

  /**
   * Calculate optimal spacing for matrix multiplication layout: A × B = C
   */
  calculateSpacing(
    matrixA: MatrixInput,
    matrixB: MatrixInput,
    constraints: SpacingConstraints
  ): SpacingAllocation {
    const [aRows, aCols] = matrixA;
    const [bRows, bCols] = matrixB;
    const cRows = aRows;
    const cCols = bCols;

    // Calculate available space after margins and symbols
    const availableWidth = constraints.maxWidth - (this.config.margins * 2) - (this.config.symbolWidth * 2);
    const availableHeight = constraints.maxHeight - (this.config.margins * 2);

    // Distribute width proportionally based on column count
    const totalCols = aCols + bCols + cCols;
    const widthPerCol = availableWidth / totalCols;

    // Calculate individual matrix dimensions
    const matrixASpacing = this.calculateMatrixSpacing(aRows, aCols, widthPerCol * aCols, availableHeight);
    const matrixBSpacing = this.calculateMatrixSpacing(bRows, bCols, widthPerCol * bCols, availableHeight);
    const matrixCSpacing = this.calculateMatrixSpacing(cRows, cCols, widthPerCol * cCols, availableHeight);

    // Ensure consistent cell sizes if aspect ratio should be maintained
    if (constraints.maintainAspectRatio) {
      const minCellSize = Math.min(
        matrixASpacing.cellWidth, matrixASpacing.cellHeight,
        matrixBSpacing.cellWidth, matrixBSpacing.cellHeight,
        matrixCSpacing.cellWidth, matrixCSpacing.cellHeight
      );

      // Apply consistent cell size
      matrixASpacing.cellWidth = matrixASpacing.cellHeight = minCellSize;
      matrixBSpacing.cellWidth = matrixBSpacing.cellHeight = minCellSize;
      matrixCSpacing.cellWidth = matrixCSpacing.cellHeight = minCellSize;

      // Recalculate matrix dimensions
      matrixASpacing.width = aCols * minCellSize;
      matrixASpacing.height = aRows * minCellSize;
      matrixBSpacing.width = bCols * minCellSize;
      matrixBSpacing.height = bRows * minCellSize;
      matrixCSpacing.width = cCols * minCellSize;
      matrixCSpacing.height = cRows * minCellSize;
    }

    return {
      matrixA: matrixASpacing,
      matrixB: matrixBSpacing,
      matrixC: matrixCSpacing,
      symbols: {
        multiply: { width: this.config.symbolWidth, height: Math.max(matrixASpacing.height, matrixBSpacing.height) },
        equals: { width: this.config.symbolWidth, height: matrixCSpacing.height }
      },
      totalWidth: matrixASpacing.width + matrixBSpacing.width + matrixCSpacing.width + (this.config.symbolWidth * 2) + (this.config.margins * 2),
      totalHeight: Math.max(matrixASpacing.height, matrixBSpacing.height, matrixCSpacing.height) + (this.config.margins * 2)
    };
  }

  /**
   * Calculate spacing for a single matrix
   */
  private calculateMatrixSpacing(rows: number, cols: number, maxWidth: number, maxHeight: number): MatrixSpacing {
    // Calculate cell dimensions based on available space
    const cellWidth = Math.max(
      Math.min(maxWidth / cols, this.config.maxCellSize),
      this.config.minCellSize
    );
    
    const cellHeight = Math.max(
      Math.min(maxHeight / rows, this.config.maxCellSize),
      this.config.minCellSize
    );

    return {
      width: cols * cellWidth,
      height: rows * cellHeight,
      cellWidth,
      cellHeight,
      rows,
      cols
    };
  }

  /**
   * Update spacing configuration
   */
  updateConfig(newConfig: Partial<SpacingConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Get current configuration
   */
  getConfig(): SpacingConfig {
    return { ...this.config };
  }

  /**
   * Calculate minimum required space for given matrices
   */
  calculateMinimumSpace(matrixA: MatrixInput, matrixB: MatrixInput): { width: number; height: number } {
    const [aRows, aCols] = matrixA;
    const [bRows, bCols] = matrixB;
    const cRows = aRows;
    const cCols = bCols;

    const totalCols = aCols + bCols + cCols;
    const maxRows = Math.max(aRows, bRows, cRows);

    const minWidth = (totalCols * this.config.minCellSize) + (this.config.symbolWidth * 2) + (this.config.margins * 2);
    const minHeight = (maxRows * this.config.minCellSize) + (this.config.margins * 2);

    return { width: minWidth, height: minHeight };
  }
}

// Factory function for easy usage
export function createSpacingCalculator(config?: Partial<SpacingConfig>): MatrixSpacingCalculator {
  const finalConfig = config ? { ...DEFAULT_SPACING_CONFIG, ...config } : DEFAULT_SPACING_CONFIG;
  return new MatrixSpacingCalculator(finalConfig);
}

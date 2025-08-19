// Matrix Spacing Types
// Defines all interfaces and types for matrix spacing calculations

export interface SpacingConfig {
  margins: number;
  symbolWidth: number;
  minCellSize: number;
  maxCellSize: number;
  cellPadding: number;
}

export interface MatrixSpacing {
  width: number;
  height: number;
  cellWidth: number;
  cellHeight: number;
  rows: number;
  cols: number;
}

export interface SpacingAllocation {
  matrixA: MatrixSpacing;
  matrixB: MatrixSpacing;
  matrixC: MatrixSpacing;
  symbols: {
    multiply: { width: number; height: number };
    equals: { width: number; height: number };
  };
  totalWidth: number;
  totalHeight: number;
}

export interface SpacingConstraints {
  maxWidth: number;
  maxHeight: number;
  minSpacing: number;
  maintainAspectRatio: boolean;
}

// Default spacing configuration
export const DEFAULT_SPACING_CONFIG: SpacingConfig = {
  margins: 15,
  symbolWidth: 40,
  minCellSize: 20,
  maxCellSize: 80,
  cellPadding: 4
};

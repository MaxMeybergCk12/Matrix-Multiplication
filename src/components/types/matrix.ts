// Matrix types for layout calculations
// This file defines the data structures we'll use throughout the system

// Input format: [rows, cols] instead of string parsing
export type MatrixInput = [number, number];

// Matrix dimensions (parsed from input)
export interface MatrixDimensions {
  rows: number;
  cols: number;
}

// Matrix sizing results (width and height calculations)
export interface MatrixSize {
  width: number;
  height: number;
}

// Layout results for each column in the 5-column grid
export interface ColumnLayout {
  width: number;
  height: number;
  x: number;  // x coordinate for positioning
  y: number;  // y coordinate for positioning
}

// Final layout result for the entire system
export interface LayoutResult {
  topHalf: {
    column1: ColumnLayout;  // Matrix A
    column2: ColumnLayout;  // × symbol
    column3: ColumnLayout;  // Matrix B
    column4: ColumnLayout;  // = symbol
    column5: ColumnLayout;  // Matrix C (result)
  };
  bottomHalf: {
    width: number;
    height: number;
  };
}

// Test function to verify our types work
export function testMatrixTypes(): void {
  console.log('=== Testing Matrix Types ===');
  
  // Test MatrixInput type
  const testInput: MatrixInput = [3, 3];
  console.log('MatrixInput test:', testInput);
  
  // Test MatrixDimensions interface
  const testDimensions: MatrixDimensions = { rows: 3, cols: 3 };
  console.log('MatrixDimensions test:', testDimensions);
  
  // Test MatrixSize interface
  const testSize: MatrixSize = { width: 100, height: 100 };
  console.log('MatrixSize test:', testSize);
  
  // Test ColumnLayout interface
  const testColumn: ColumnLayout = { width: 100, height: 100, x: 0, y: 0 };
  console.log('ColumnLayout test:', testColumn);
  
  // Test LayoutResult interface
  const testLayout: LayoutResult = {
    topHalf: {
      column1: { width: 100, height: 100, x: 0, y: 0 },
      column2: { width: 40, height: 100, x: 100, y: 0 },
      column3: { width: 100, height: 100, x: 140, y: 0 },
      column4: { width: 40, height: 100, x: 240, y: 0 },
      column5: { width: 100, height: 100, x: 280, y: 0 }
    },
    bottomHalf: { width: 380, height: 200 }
  };
  console.log('LayoutResult test:', testLayout);
  
  console.log('=== Matrix Types Test Complete ===');
}

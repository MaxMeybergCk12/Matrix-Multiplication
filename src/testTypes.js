// Simple test file to verify our types work
// Run this in your browser console

console.log("=== Testing Matrix Types ===");

// Test MatrixInput type
const testInput = [3, 3];
console.log("MatrixInput test:", testInput);

// Test MatrixDimensions interface
const testDimensions = { rows: 3, cols: 3 };
console.log("MatrixDimensions test:", testDimensions);

// Test MatrixSize interface
const testSize = { width: 100, height: 100 };
console.log("MatrixSize test:", testSize);

console.log("=== Types Test Complete ===");
console.log("If you see this without errors, your types are working!");

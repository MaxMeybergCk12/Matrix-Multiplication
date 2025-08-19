# Matrix Spacing System

This folder contains the TypeScript modules responsible for calculating and allocating optimal spacing for matrix layouts in the multiplication visualization.

## Files Overview

### `types.ts`
Defines all TypeScript interfaces and types for the spacing system:
- `SpacingConfig`: Configuration options for spacing calculations
- `MatrixSpacing`: Individual matrix spacing properties
- `SpacingAllocation`: Complete spacing allocation for all matrices
- `SpacingConstraints`: Layout constraints and limitations

### `calculator.ts`
Contains the main `MatrixSpacingCalculator` class with methods for:
- Calculating optimal spacing for matrix multiplication layouts (A × B = C)
- Ensuring consistent cell sizes across matrices
- Handling responsive constraints
- Managing minimum and maximum spacing requirements

### `index.ts`
Main export file that provides easy access to all spacing functionality.

## Usage Example

```typescript
import { createSpacingCalculator, SpacingConstraints } from './spacing';

// Create a spacing calculator
const spacingCalculator = createSpacingCalculator({
  margins: 20,
  symbolWidth: 50,
  minCellSize: 25,
  maxCellSize: 100
});

// Define matrices and constraints
const matrixA: [number, number] = [3, 3];
const matrixB: [number, number] = [3, 2];
const constraints: SpacingConstraints = {
  maxWidth: 800,
  maxHeight: 600,
  minSpacing: 10,
  maintainAspectRatio: true
};

// Calculate spacing
const spacing = spacingCalculator.calculateSpacing(matrixA, matrixB, constraints);

console.log(spacing);
// Returns: SpacingAllocation with optimal dimensions for all matrices
```

## Key Features

1. **Proportional Width Distribution**: Matrices get width based on their column count
2. **Aspect Ratio Maintenance**: Option to keep cells square across all matrices
3. **Responsive Constraints**: Adapts to different screen sizes and container dimensions
4. **Symbol Handling**: Properly spaces multiplication (×) and equals (=) symbols
5. **Minimum/Maximum Limits**: Prevents cells from becoming too small or too large

## Integration

This spacing system is designed to work with:
- The existing layout system in `../layout/`
- Matrix type definitions in `../../types/`
- The main matrix visualization components

The spacing calculator provides the foundational measurements that other layout components can use to position and render matrices properly.

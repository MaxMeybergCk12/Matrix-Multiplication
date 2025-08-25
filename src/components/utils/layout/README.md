# Layout.ts - Matrix Space Allocation

**Purpose:** Calculates pixel space allocation for matrices in a 5-column grid layout.

## Function Breakdown

### `calculateWorkingSpace(totalWidth, totalHeight, margins)`

- **Inputs:**
    - `totalWidth`: Total available width (e.g., 484px)
    - `totalHeight`: Total available height (e.g., 404px)
    - `margins`: Pixel margin on each side (e.g., 15px)
- **Output:** `{width, height}` - Available space after removing margins
- **Example:** 484px width - (15×2) = 454px working width

### `calculateMatrixCDimensions(matrixA, matrixB)`

- **Inputs:**
    - `matrixA`: [rows, cols] format (e.g., [3, 3])
    - `matrixB`: [rows, cols] format (e.g., [2, 1])
- **Output:** `{cRows, cCols}` - Matrix C dimensions
- **Math:** Matrix C = [aRows, bCols] (matrix multiplication rule)
- **Example:** [3, 3] × [3, 1] = [3, 1] result matrix

### `calculateSymbolWidths(availableWidth)`

- **Inputs:** `availableWidth` - Width after margins removed
- **Output:** `{symbolWidth, totalSymbolWidth, remainingWidth}`
- **Purpose:** Reserves space for × and = symbols (40px each)
- **Example:** 454px - 80px = 374px remaining for matrices

### `allocateMatrixWidths(matrixA, matrixB, availableWidth)`

- **Inputs:** Matrix dimensions and available width
- **Output:** Width allocation for all 3 matrices
- **Logic:** 3-column matrices get more width than 1-column matrices
- **Example:** 3×3 matrix gets 60% of space, 1×1 gets 40%

### `allocateMatrixSpace(matrixA, matrixB, totalWidth, totalHeight, margins)`

- **Main function** - Coordinates all calculations
- **Inputs:** Matrix dimensions, total space, margins
- **Output:** Complete space allocation for all matrices and symbols
- **Returns:** `{matrixA, matrixB, matrixC, symbols, workingSpace}`

## Usage Example

```typescript
const result = allocateMatrixSpace(
    [3, 3], // Matrix A: 3 rows × 3 columns
    [3, 1], // Matrix B: 3 rows × 1 column
    484, // Total width available
    404, // Total height available
    15, // Margin on each side
);
```

## Key Concepts

- **5-Column Grid:** [Matrix A] [×] [Matrix B] [=] [Matrix C]
- **Proportional Sizing:** Matrices with more columns get more width
- **Top Half Only:** Matrices occupy top 50% of available height
- **Symbol Spacing:** × and = symbols get fixed 40px width each

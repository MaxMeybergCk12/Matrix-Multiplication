export function allocateMatrixSpace(
    dimA: [number, number],
    dimB: [number, number],
    dimC: [number, number],
    totalWidth: number,
    totalHeight: number,
) {
    // Fixed spacing requirements
    const ELEMENT_SPACING = 3;           // 3px between elements
    const SYMBOL_WIDTH = 20;             // × and = symbols
    const BRACKET_WIDTH = 10;            // Left and right brackets
    const BRACKET_HEIGHT = totalHeight * 0.8;  // 80% of total height
    
    // Calculate total fixed space
    const totalFixedWidth = (BRACKET_WIDTH * 6) + (SYMBOL_WIDTH * 2) + (ELEMENT_SPACING * 10);
    const availableWidth = totalWidth - totalFixedWidth;

    // Matrix dimensions
    const [aRows, aCols] = dimA;
    const [bRows, bCols] = dimB;
    const [cRows, cCols] = dimC;

    const totalColumns = aCols + bCols + cCols;

    // Matrix sizes
    const a_w = Math.floor((availableWidth * aCols) / totalColumns);
    const b_w = Math.floor((availableWidth * bCols) / totalColumns);
    const c_w = Math.floor((availableWidth * cCols) / totalColumns);

    const a_h = Math.floor((a_w / aCols) * aRows);
    const b_h = Math.floor((b_w / bCols) * bRows);
    const c_h = Math.floor((c_w / cCols) * cRows);

    return {
        matrixA: { dimensions: dimA, width: a_w, height: a_h },
        matrixB: { dimensions: dimB, width: b_w, height: b_h },
        matrixC: { dimensions: dimC, width: c_w, height: c_h },
        symbols: { x: { width: 20 }, equals: { width: 20 } },
        brackets: { width: BRACKET_WIDTH, height: BRACKET_HEIGHT },
        spacing: { elementGap: ELEMENT_SPACING, totalFixedWidth, availableWidth }
    };
}
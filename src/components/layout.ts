export function allocateMatrixSpace(
    dimA: [number, number],
    dimB: [number, number],
    dimC: [number, number],
    totalWidth: number,
    totalHeight: number,
) {
    // Fixed spacing requirements
    const ELEMENT_SPACING = 5;
    const TOTAL_FIXED_SPACING = 20;
    const SYMBOL_WIDTH = 20;

    // Calculate available width for the 3 matrices
    const width = totalWidth - TOTAL_FIXED_SPACING - SYMBOL_WIDTH * 2;

    // Extract dimensions
    const [aRows, aCols] = dimA;
    const [bRows, bCols] = dimB;
    const [cRows, cCols] = dimC;

    // Total columns across all matrices
    const totalColumns = aCols + bCols + cCols;

    // Distribute width proportionally based on column count
    const a_w = Math.floor((width * aCols) / totalColumns);
    const b_w = Math.floor((width * bCols) / totalColumns);
    const c_w = Math.floor((width * cCols) / totalColumns);

    // Calculate height to maintain aspect ratio
    const a_h = Math.floor((a_w / aCols) * aRows);
    const b_h = Math.floor((b_w / bCols) * bRows);
    const c_h = Math.floor((c_w / cCols) * cRows);

    return {
        matrixA: {
            dimensions: dimA,
            width: a_w,
            height: a_h,
        },
        matrixB: {
            dimensions: dimB,
            width: b_w,
            height: b_h,
        },
        matrixC: {
            dimensions: dimC,
            width: c_w,
            height: c_h,
        },
        symbols: {
            multiply: { width: SYMBOL_WIDTH },
            equals: { width: SYMBOL_WIDTH },
        },
        spacing: {
            elementGap: ELEMENT_SPACING,
            totalFixedSpacing: TOTAL_FIXED_SPACING,
            width: width,
        },
    };
}

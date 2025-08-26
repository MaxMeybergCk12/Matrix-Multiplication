export function allocateVectorSpace(
    dimU: [number, number],  // Always [1, n] - row vector
    dimV: [number, number],  // Always [n, 1] - column vector
    totalWidth: number,
    totalHeight: number,
) {
    // Fixed spacing requirements (same as layout.ts but for 7 columns)
    const ELEMENT_SPACING = 1;           // 1px between elements
    const SYMBOL_WIDTH = 20;             // × symbol
    const BRACKET_WIDTH = 10;            // Left and right brackets
    const BRACKET_HEIGHT = totalHeight;  // Full height
    
    // Calculate total fixed space (6 brackets + 1 symbol + 6 spacing gaps)
    const totalFixedWidth = (BRACKET_WIDTH * 6) + SYMBOL_WIDTH + (ELEMENT_SPACING * 6);
    const availableWidth = totalWidth - totalFixedWidth;

    // Vector dimensions (same logic as layout.ts)
    const [uRows, uCols] = dimU;  // [1, n] - row vector
    const [vRows, vCols] = dimV;  // [n, 1] - column vector

    const totalColumns = uCols + vCols;  // n + 1

    // Vector sizes - PROPORTIONAL to their column count (same as layout.ts)
    const u_w = Math.floor((availableWidth * uCols) / totalColumns);  // n/(n+1) of space
    const v_w = Math.floor((availableWidth * vCols) / totalColumns);  // 1/(n+1) of space

    const u_h = Math.floor((u_w / uCols) * uRows);
    const v_h = Math.floor((v_w / vCols) * vRows);

    return {
        vectorU: { 
            dimensions: dimU, 
            width: u_w, 
            height: u_h, 
            cellWidth: u_w / uCols,
            cellHeight: u_h / uRows
        },
        vectorV: { 
            dimensions: dimV, 
            width: v_w, 
            height: v_h, 
            cellWidth: v_w / vCols,
            cellHeight: v_h / vRows
        },
        symbol: { width: SYMBOL_WIDTH },
        brackets: { width: BRACKET_WIDTH, height: BRACKET_HEIGHT },
        spacing: { elementGap: ELEMENT_SPACING, totalFixedWidth, availableWidth }
    };
}
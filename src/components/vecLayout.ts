export function allocateVectorSpace(
    dimU: [number, number],  // e.g., [1, 3] for row vector
    dimV: [number, number],  // e.g., [3, 1] for column vector
    totalWidth: number,
    totalHeight: number,
) {
    // Fixed spacing requirements (same as layout.ts)
    const ELEMENT_SPACING = 1;           // 1px between elements
    const SYMBOL_WIDTH = 20;             // × symbol
    const BRACKET_WIDTH = 10;            // Left and right brackets
    const BRACKET_HEIGHT = totalHeight;  // Full height
    
    // Calculate total fixed space (4 brackets + 1 symbol + 2 spacing gaps)
    const totalFixedWidth = (BRACKET_WIDTH * 4) + SYMBOL_WIDTH + (ELEMENT_SPACING * 2);
    const availableWidth = totalWidth - totalFixedWidth;

    // Vector dimensions
    const [uRows, uCols] = dimU;
    const [vRows, vCols] = dimV;

    // Vector sizes (divide available space equally)
    const u_w = Math.floor(availableWidth / 2);
    const v_w = Math.floor(availableWidth / 2);

    const u_h = Math.floor((u_w / uCols) * uRows);
    const v_h = Math.floor((v_w / vCols) * vRows);

    return {
        vectorU: { 
            dimensions: dimU, 
            width: u_w, 
            height: u_h, 
            cellWidth: u_w / uCols,    // ← Added this
            cellHeight: u_h / uRows    // ← Added this
        },
        vectorV: { 
            dimensions: dimV, 
            width: v_w, 
            height: v_h, 
            cellWidth: v_w / vCols,    // ← Added this
            cellHeight: v_h / vRows    // ← Added this
        },
        symbol: { width: SYMBOL_WIDTH },
        brackets: { width: BRACKET_WIDTH, height: BRACKET_HEIGHT },
        spacing: { elementGap: ELEMENT_SPACING, totalFixedWidth, availableWidth }
    };
}
// src/components/utils/layout/matrixStructure.ts
// Handles internal matrix structure: grid layout, element positioning, brackets

import { MatrixInput } from "../../types";

// ===== CONSTANTS =====
const BRACKET_WIDTH = 8; // 8px for each bracket

// ===== TYPES =====

interface MatrixGrid {
    elementSize: number;
    gap: number;
    padding: number;
    positions: Array<{ x: number; y: number }>;
    bracketDimensions: {
        left: { x: number; y: number; width: number; height: number };
        right: { x: number; y: number; width: number; height: number };
    };
}

interface ContainerDimensions {
    width: number;
    height: number;
}

// ===== HELPER FUNCTIONS =====

// Calculate optimal element size and spacing for a matrix grid
function calculateElementSpacing(
    rows: number,
    cols: number,
    containerWidth: number,
    containerHeight: number,
) {
    // Reserve space for brackets (left and right)
    const bracketWidth = BRACKET_WIDTH; // 8px for each bracket
    const availableWidth = containerWidth - bracketWidth * 2;
    const availableHeight = containerHeight;

    // Calculate element size based on available space and grid dimensions
    const maxElementWidth = availableWidth / cols;
    const maxElementHeight = availableHeight / rows;

    // Use the smaller dimension to maintain square elements
    const elementSize = Math.min(maxElementWidth, maxElementHeight);

    // Calculate gaps to center the grid
    const gridWidth = cols * elementSize;
    const gridHeight = rows * elementSize;

    const horizontalGap = (availableWidth - gridWidth) / (cols + 1);
    const verticalGap = (availableHeight - gridHeight) / (rows + 1);

    return {
        elementSize,
        horizontalGap,
        verticalGap,
        padding: Math.min(horizontalGap, verticalGap) / 2,
    };
}

// Calculate positions for each element in the grid
function calculateElementPositions(
    rows: number,
    cols: number,
    elementSize: number,
    horizontalGap: number,
    verticalGap: number,
    padding: number,
) {
    const positions: Array<{ x: number; y: number }> = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x =
                padding +
                BRACKET_WIDTH +
                horizontalGap +
                col * (elementSize + horizontalGap);
            const y = padding + verticalGap + row * (elementSize + verticalGap);

            positions.push({ x, y });
        }
    }

    return positions;
}

// Calculate bracket positioning
function calculateBrackets(containerWidth: number, containerHeight: number) {
    const bracketWidth = BRACKET_WIDTH;
    const bracketHeight = containerHeight * 0.8; // Brackets are 80% of container height

    const leftBracket = {
        x: 0,
        y: (containerHeight - bracketHeight) / 2,
        width: bracketWidth,
        height: bracketHeight,
    };

    const rightBracket = {
        x: containerWidth - bracketWidth,
        y: (containerHeight - bracketHeight) / 2,
        width: bracketWidth,
        height: bracketHeight,
    };

    return { left: leftBracket, right: rightBracket };
}

// ===== MAIN FUNCTION =====

function calculateMatrixStructure(
    matrixDimensions: MatrixInput,
    containerDimensions: ContainerDimensions,
): MatrixGrid {
    const [rows, cols] = matrixDimensions;
    const { width: containerWidth, height: containerHeight } =
        containerDimensions;

    // Calculate spacing and element size
    const { elementSize, horizontalGap, verticalGap, padding } =
        calculateElementSpacing(rows, cols, containerWidth, containerHeight);

    // Calculate element positions
    const positions = calculateElementPositions(
        rows,
        cols,
        elementSize,
        horizontalGap,
        verticalGap,
        padding,
    );

    // Calculate bracket positioning
    const bracketDimensions = calculateBrackets(
        containerWidth,
        containerHeight,
    );

    return {
        elementSize,
        gap: Math.min(horizontalGap, verticalGap),
        padding,
        positions,
        bracketDimensions,
    };
}

// ===== EXPORTS =====

export {
    calculateMatrixStructure,
    MatrixGrid,
    ContainerDimensions,
    calculateElementSpacing,
    calculateElementPositions,
    calculateBrackets,
};

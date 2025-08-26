import React from 'react';

interface MatrixRendererProps {
    matrixData: {
        dimensions: [number, number];
        values: (number | null)[][];
    };
    layout: {
        cellWidth: number;
        cellHeight: number;
    };
    matrixType: 'A' | 'B' | 'C';
    highlightedRow?: number;
    highlightedColumn?: number;
}

const MatrixRenderer: React.FC<MatrixRendererProps> = ({ 
    matrixData, 
    layout, 
    matrixType,
    highlightedRow,
    highlightedColumn
}) => {
    const [rows, cols] = matrixData.dimensions;

   
    // CSS Grid setup - this creates the actual grid structure
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${layout.cellWidth}px)`, // Creates 3 columns for 2×3 matrix
        gridTemplateRows: `repeat(${rows}, ${layout.cellHeight}px)`,   // Creates 2 rows for 2×3 matrix
    };

    // Generate cells in grid order (row by row, column by column)
    const cells: any[] = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const value = matrixData.values[row][col];
            
            let cellClasses = 'bg-white border-gray-300 flex items-center justify-center text-sm font-bold';
            
            // Apply highlighting based on row and column selection
            if (highlightedRow !== undefined && row === highlightedRow) {
                // Highlighted row - yellow background
                cellClasses = 'bg-yellow-200 border-yellow-400 flex items-center justify-center text-sm font-bold text-yellow-800';
            } else if (highlightedColumn !== undefined && col === highlightedColumn) {
                // Highlighted column - blue background
                cellClasses = 'bg-blue-200 border-blue-400 flex items-center justify-center text-sm font-bold text-blue-800';
            }
            
            if (matrixType === 'C' && value === null) {
                cellClasses = 'bg-yellow-100 border-yellow-400 flex items-center justify-center text-sm font-bold text-yellow-800';
            }
            
            cells.push(
                <div 
                    key={`${row}-${col}`} 
                    className={cellClasses}
                    style={{
                        width: layout.cellWidth,
                        height: layout.cellHeight
                    }}
                >
                    {value === null ? '?' : value}
                </div>
            );
        }
    }

    return (
        <div className="relative">
            {/* This div creates the actual grid structure */}
            <div style={gridStyle}>
                {cells}
            </div>
        </div>
    );
};
export default MatrixRenderer;
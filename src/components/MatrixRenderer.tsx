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
}

const MatrixRenderer: React.FC<MatrixRendererProps> = ({ 
    matrixData, 
    layout, 
    matrixType
}) => {
    const [rows, cols] = matrixData.dimensions;

    // CSS Grid setup - this creates the actual grid structure
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${layout.cellWidth}px)`, // Creates 3 columns for 2×3 matrix
        gridTemplateRows: `repeat(${rows}, ${layout.cellHeight}px)`,   // Creates 2 rows for 2×3 matrix
        gap: '1px',
        backgroundColor: '#e5e7eb',
        padding: '2px',
        border: '2px solid #374151',
        borderRadius: '4px'
    };

    // Generate cells in grid order (row by row, column by column)
    const cells: any[] = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const value = matrixData.values[row][col];
            
            let cellClasses = 'bg-white border-gray-300 flex items-center justify-center text-sm font-bold';
            
            if (matrixType === 'C' && value === null) {
                cellClasses = 'bg-yellow-100 border-yellow-400 text-yellow-800';
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
            <div className="absolute -top-6 left-0 text-xs font-bold text-gray-600">
                Matrix {matrixType}
            </div>
            
            {/* This div creates the actual grid structure */}
            <div style={gridStyle}>
                {cells}
            </div>
        </div>
    );
};
export default MatrixRenderer;
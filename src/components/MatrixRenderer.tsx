import React, { useState } from 'react';

interface MatrixRendererProps {
    matrixData: {
        dimensions: [number, number];
        values: (number | null)[][];
    };
    layout: {
        cellWidth: number;   // ← Only this
        cellHeight: number;  // ← And this
    };
    matrixType: 'A' | 'B' | 'C';
    onColumnSelect?: (colIndex: number) => void;
    onRowSelect?: (rowIndex: number) => void;
    selectedColumn?: number;
    selectedRow?: number;
}

const MatrixRenderer: React.FC<MatrixRendererProps> = ({ 
    matrixData, 
    layout, 
    matrixType,
    onColumnSelect,
    onRowSelect,
    selectedColumn,
    selectedRow
}) => {
    const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);
    
    const [rows, cols] = matrixData.dimensions;

    // Handle column click
    const handleColumnClick = (colIndex: number) => {
        if (onColumnSelect) {
            onColumnSelect(colIndex);
        }
    };

    // Handle row click
    const handleRowClick = (rowIndex: number) => {
        if (onRowSelect) {
            onRowSelect(rowIndex);
        }
    };

    // Get cell styling with selection highlighting
    const getCellStyle = (row: number, col: number) => {
        let baseClasses = 'bg-white border-gray-300';
        
        // Highlight selected column
        if (selectedColumn === col) {
            baseClasses = 'bg-blue-100 border-blue-400 border-2 shadow-md';
        }
        
        // Highlight selected row
        if (selectedRow === row) {
            baseClasses = 'bg-green-100 border-green-400 border-2 shadow-md';
        }
        
        // Highlight hovered column
        if (hoveredColumn === col) {
            baseClasses += ' bg-blue-50 border-blue-300';
        }
        
        // Highlight hovered row
        if (hoveredRow === row) {
            baseClasses += ' bg-green-50 border-green-300';
        }
        
        // Special styling for matrix C (result matrix)
        if (matrixType === 'C') {
            const value = matrixData.values[row][col];
            if (value === null) {
                baseClasses = 'bg-yellow-100 border-yellow-400 text-yellow-800';
            }
        }
        
        return baseClasses;
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${layout.cellWidth}px)`,
        gridTemplateRows: `repeat(${rows}, ${layout.cellHeight}px)`,
        width: layout.width,
        height: layout.height,
        gap: '1px',
        backgroundColor: '#e5e7eb',
        padding: '2px',
        border: '2px solid #374151',
        borderRadius: '4px',
        cursor: 'pointer' // Show it's clickable
    };

    // Generate all cells with interactive features
    const cells = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const value = matrixData.values[row][col];
            const cellStyle = getCellStyle(row, col);
            
            cells.push(
                <div 
                    key={`${row}-${col}`} 
                    className={`${cellStyle} flex items-center justify-center text-sm font-bold transition-all duration-200`}
                    style={{
                        width: layout.cellWidth,
                        height: layout.cellHeight
                    }}
                    onClick={() => {
                        handleColumnClick(col);
                        handleRowClick(row);
                    }}
                    onMouseEnter={() => {
                        setHoveredColumn(col);
                        setHoveredRow(row);
                    }}
                    onMouseLeave={() => {
                        setHoveredColumn(null);
                        setHoveredRow(null);
                    }}
                >
                    {value === null ? '?' : value}
                </div>
            );
        }
    }

    return (
        <div className="relative">
            {/* Matrix Label */}
            <div className="absolute -top-6 left-0 text-xs font-bold text-gray-600">
                Matrix {matrixType}
            </div>
            
            {/* Selection Info */}
            {(selectedColumn !== undefined || selectedRow !== undefined) && (
                <div className="absolute -top-6 right-0 text-xs text-blue-600">
                    {selectedRow !== undefined && `Row ${selectedRow}`}
                    {selectedColumn !== undefined && selectedRow !== undefined && ' + '}
                    {selectedColumn !== undefined && `Col ${selectedColumn}`}
                </div>
            )}
            
            {/* Matrix Grid */}
            <div style={gridStyle}>
                {cells}
            </div>
        </div>
    );
};

export default MatrixRenderer;
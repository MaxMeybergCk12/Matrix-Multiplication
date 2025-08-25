// Matrix Grid Component
// Displays a matrix with input fields using existing layout logic

import React from "react";
import MatrixInput from "./MatrixInput";
import { MatrixData } from "../matrixStates/types";

interface MatrixGridProps {
    matrix: MatrixData;
    onValueChange: (row: number, col: number, value: number) => void;
    disabled?: boolean;
    className?: string;
}

const MatrixGrid: React.FC<MatrixGridProps> = ({
    matrix,
    onValueChange,
    disabled = false,
    className = "",
}) => {
    const { dimensions, values } = matrix;
    const [rows, cols] = dimensions;

    return (
        <div
            className={`grid gap-1 ${className}`}
            style={{
                gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            }}
        >
            {values.map((row, rowIndex) =>
                row.map((value, colIndex) => (
                    <MatrixInput
                        key={`${rowIndex}-${colIndex}`}
                        value={value}
                        onChange={(newValue) =>
                            onValueChange(rowIndex, colIndex, newValue)
                        }
                        disabled={disabled}
                        className="w-8 h-8"
                    />
                )),
            )}
        </div>
    );
};

export default MatrixGrid;

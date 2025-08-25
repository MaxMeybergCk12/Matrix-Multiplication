// Matrix Symbols Component
// Displays multiplication and equals symbols

import React from "react";

interface MatrixSymbolsProps {
    className?: string;
}

const MatrixSymbols: React.FC<MatrixSymbolsProps> = ({ className = "" }) => {
    return (
        <div className={`flex items-center justify-center gap-4 ${className}`}>
            {/* × Symbol */}
            <div className="text-2xl font-bold text-gray-600">×</div>

            {/* = Symbol */}
            <div className="text-2xl font-bold text-gray-600">=</div>
        </div>
    );
};

export default MatrixSymbols;

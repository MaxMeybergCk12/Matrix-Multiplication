import React, { useMemo } from 'react';
import { allocateVectorSpace } from './vecLayout';

interface BottomLeftProps {
    vectorU: number[];        // Row vector from Matrix A
    vectorV: number[];        // Column vector from Matrix B
    totalWidth: number;       // Layout width
    totalHeight: number;      // Layout height
}

const BottomLeft: React.FC<BottomLeftProps> = ({ 
    vectorU, 
    vectorV, 
    totalWidth, 
    totalHeight 
}) => {

    // Use vecLayout.ts for consistent spacing and layout
    const vectorLayout = useMemo(() => allocateVectorSpace(
        [1, vectorU.length],    // U as row vector [1, n]
        [vectorV.length, 1],    // V as column vector [n, 1]
        totalWidth,
        totalHeight
    ), [vectorU.length, vectorV.length, totalWidth, totalHeight]);
    
    return (
        <div className="p-4">
            <h3 className="text-lg font-bold mb-4">Vector Multiplication</h3>
            
            {/* Vector U (row from A) */}
            <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Row from Matrix A:</p>
                <div className="flex justify-center">
                    <div className="matrix-bracket">[</div>
                    {vectorU.map((val, index) => (
                        <div key={index} className="px-2 py-1 border border-gray-300 bg-blue-100">
                            {val}
                        </div>
                    ))}
                    <div className="matrix-bracket">]</div>
                </div>
            </div>
            
            {/* Vector V (column from B) */}
            <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Column from Matrix B:</p>
                <div className="flex flex-col items-center">
                    <div className="matrix-bracket">[</div>
                    {vectorV.map((val, index) => (
                        <div key={index} className="px-2 py-1 border border-gray-300 bg-green-100">
                            {val}
                        </div>
                    ))}
                    <div className="matrix-bracket">]</div>
                </div>
            </div>
        </div>
    );
};

export default BottomLeft;
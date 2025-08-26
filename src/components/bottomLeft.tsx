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

    console.log('Vector Layout:', vectorLayout);
    console.log('Vector U dimensions:', [1, vectorU.length]);
    console.log('Vector V dimensions:', [vectorV.length, 1]);
    return (
        <div className="relative border-2 border-gray-400 bg-gray-100" style={{ width: totalWidth, height: totalHeight }}>
            <div className="grid grid-cols-7 items-center" style={{
                gridTemplateColumns: `
                    ${vectorLayout.brackets.width}px      // 1. Left bracket U
                    ${vectorLayout.vectorU.width}px       // 2. Vector U
                    ${vectorLayout.brackets.width}px      // 3. Right bracket U
                    ${vectorLayout.symbol.width}px        // 4. × symbol
                    ${vectorLayout.brackets.width}px      // 5. Left bracket V
                    ${vectorLayout.vectorV.width}px       // 6. Vector V
                    ${vectorLayout.brackets.width}px      // 7. Right bracket V
                `
            }}>
                {/* Column 1: Left Bracket U */}
                <div className="matrix-bracket" style={{ height: vectorLayout.vectorU.height }}>[</div>
    
                {/* Column 2: Vector U */}
                <div style={{ height: vectorLayout.vectorU.height }}>
                    {/* Vector U content */}
                </div>
    
                {/* Column 3: Right Bracket U */}
                <div className="matrix-bracket" style={{ height: vectorLayout.vectorU.height }}>]</div>
    
                {/* Column 4: × Symbol */}
                <div className="bg-green-200 border-2 border-green-500 flex items-center justify-center text-lg font-bold">×</div>
    
                {/* Column 5: Left Bracket V */}
                <div className="matrix-bracket" style={{ height: vectorLayout.vectorV.height }}>[</div>
    
                {/* Column 6: Vector V */}
                <div style={{ height: vectorLayout.vectorV.height }}>
                    {/* Vector V content */}
                </div>
    
                {/* Column 7: Right Bracket V */}
                <div className="matrix-bracket" style={{ height: vectorLayout.vectorV.height }}>]</div>
            </div>
        </div>
    );
};

export default BottomLeft;
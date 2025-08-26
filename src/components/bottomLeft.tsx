import React, { useMemo } from 'react';
import { allocateVectorSpace } from './vecLayout';
import MatrixRenderer from './MatrixRenderer';

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
            <div className="grid items-center" style={{
                    display: 'grid',
                    gridTemplateColumns: `10px ${vectorLayout.vectorU.width}px 10px 20px 10px ${vectorLayout.vectorV.width}px 10px`,
                    alignItems: 'center',
                    gap: '0', // Remove any gaps
                    overflow: 'hidden' // Prevent overflow
                }}>
                {/* Column 1: Left Bracket U */}
                <div className="matrix-bracket" style={{ height: vectorLayout.vectorU.height }}>[</div>
    
                {/* Column 2: Vector U */}
                <div style={{ width: vectorLayout.vectorU.height }}>
                    <MatrixRenderer 
                        matrixData={{ dimensions: [1, vectorU.length], values: [vectorU] }}
                        layout={vectorLayout.vectorU}
                        matrixType="A"
                    />
                </div>
    
                {/* Column 3: Right Bracket U */}
                <div className="matrix-bracket" style={{ height: vectorLayout.vectorU.height }}>]</div>
    
                {/* Column 4: × Symbol */}
                <div className="bg-green-200 border-2 border-green-500 flex items-center justify-center text-lg font-bold">×</div>
    
                {/* Column 5: Left Bracket V */}
                <div className="matrix-bracket" style={{ height: vectorLayout.vectorV.height }}>[</div>
    
                {/* Column 6: Vector V */}
                <div style={{ height: vectorLayout.vectorV.height }}>
                    <MatrixRenderer 
                        matrixData={{ dimensions: [vectorV.length, 1], values: vectorV.map(val => [val]) }}
                        layout={vectorLayout.vectorV}
                        matrixType="B"
                    />
                </div>
    
                {/* Column 7: Right Bracket V */}
                <div className="matrix-bracket" style={{ height: vectorLayout.vectorV.height }}>]</div>
            </div>
        </div>
    );
};

export default BottomLeft;
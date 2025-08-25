import React from 'react';
import '../index.css'; // ← IMPORTANT: Import your custom CSS

interface TesterProps {
    layout: any;
}

const Tester: React.FC<TesterProps> = ({ layout }) => {
    const totalGridWidth = (
        layout.brackets.width * 6 + layout.matrixA.width + layout.matrixB.width + 
        layout.matrixC.width + layout.symbols.x.width + layout.symbols.equals.width
    );

    const availableWidth = 484;
    const remainingWidth = availableWidth - totalGridWidth;

    const a_extra = Math.floor((remainingWidth * layout.matrixA.width) / (layout.matrixA.width + layout.matrixB.width + layout.matrixC.width));
    const b_extra = Math.floor((remainingWidth * layout.matrixB.width) / (layout.matrixA.width + layout.matrixB.width + layout.matrixC.width));
    const c_extra = Math.floor((remainingWidth * layout.matrixC.width) / (layout.matrixA.width + layout.matrixB.width + layout.matrixC.width));

    return (
        <div className="relative border-2 border-gray-400 bg-gray-100" style={{ width: 484, height: 202 }}>
            <div className="grid grid-cols-11 items-center" style={{
                gridTemplateColumns: `
                    ${layout.brackets.width}px
                    ${layout.matrixA.width + a_extra}px
                    ${layout.brackets.width}px
                    ${layout.symbols.x.width}px
                    ${layout.brackets.width}px
                    ${layout.matrixB.width + b_extra}px
                    ${layout.brackets.width}px
                    ${layout.symbols.equals.width}px
                    ${layout.brackets.width}px
                    ${layout.matrixC.width + c_extra}px
                    ${layout.brackets.width}px
                `
            }}>
                {/* Column 1: Left Bracket A */}
                <div className="matrix-bracket" style={{ height: layout.matrixA.height }}>[</div>

                {/* Column 2: Matrix A */}
                <div className="matrix-box bg-blue-200 border-blue-500" style={{ height: layout.matrixA.height }}>
                    A ({layout.matrixA.width}×{layout.matrixA.height})
                </div>

                {/* Column 3: Right Bracket A */}
                <div className="matrix-bracket" style={{ height: layout.matrixA.height }}>]</div>

                {/* Column 4: × Symbol */}
                <div className="bg-green-200 border-2 border-green-500 flex items-center justify-center text-lg font-bold" style={{ height: 40 }}>×</div>

                {/* Column 5: Left Bracket B */}
                <div className="matrix-bracket" style={{ height: layout.matrixB.height }}>[</div>

                {/* Column 6: Matrix B */}
                <div className="matrix-box bg-purple-200 border-purple-500" style={{ height: layout.matrixB.height }}>
                    B ({layout.matrixB.width}×{layout.matrixB.height})
                </div>

                {/* Column 7: Right Bracket B */}
                <div className="matrix-bracket" style={{ height: layout.matrixB.height }}>]</div>

                {/* Column 8: = Symbol */}
                <div className="bg-orange-200 border-2 border-orange-500 flex items-center justify-center text-lg font-bold" style={{ height: 40 }}>=</div>

                {/* Column 9: Left Bracket C */}
                <div className="matrix-bracket" style={{ height: layout.matrixC.height }}>[</div>

                {/* Column 10: Matrix C */}
                <div className="matrix-box bg-red-200 border-red-500" style={{ height: layout.matrixC.height }}>
                    C ({layout.matrixC.width}×{layout.matrixC.height})
                </div>

                {/* Column 11: Right Bracket C */}
                <div className="matrix-bracket" style={{ height: layout.matrixA.height }}>]</div>
            </div>
        </div>
    );
};

export default Tester;
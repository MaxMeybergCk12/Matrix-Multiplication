import React from 'react';
import '../index.css'; // ← IMPORTANT: Import your custom CSS
import MatrixRenderer from './MatrixRenderer';

interface TesterProps {
    layout: any;
    matrices: any;
}

const Tester: React.FC<TesterProps> = ({ layout, matrices}) => {
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
        <div className="relative border-2 border-gray-400 bg-gray-100" style={{ width: availableWidth, height: 202 }}>
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
                    ${layout.matrixC.width}px
                    ${layout.brackets.width}px
                `
            }}>
                {/* Column 1: Left Bracket A */}
                <div className="matrix-bracket" style={{ height: layout.matrixA.height }}>[</div>

                {/* Column 2: Matrix A */}
                <div style={{ height: layout.matrixA.height }}>
                    <MatrixRenderer 
                        matrixData={matrices.matrixA} 
                        layout={layout.matrixA}
                        matrixType="A"
                    />
                </div>

                {/* Column 3: Right Bracket A */}
                <div className="matrix-bracket" style={{ height: layout.matrixA.height }}>]</div>

                {/* Column 4: × Symbol */}
                <div className="bg-green-200 border-2 border-green-500 flex items-center justify-center text-lg font-bold" style={{ height: 40 }}>×</div>

                {/* Column 5: Left Bracket B */}
                <div className="matrix-bracket" style={{ height: layout.matrixB.height }}>[</div>

                {/* Column 6: Matrix B */}
                <div style={{ height: layout.matrixB.height }}>
                    <MatrixRenderer 
                        matrixData={matrices.matrixB} 
                        layout={layout.matrixB}
                        matrixType="B"
                    />
                </div>

                {/* Column 7: Right Bracket B */}
                <div className="matrix-bracket" style={{ height: layout.matrixB.height }}>]</div>

                {/* Column 8: = Symbol */}
                <div className="bg-orange-200 border-2 border-orange-500 flex items-center justify-center text-lg font-bold" style={{ height: 40 }}>=</div>

                {/* Column 9: Left Bracket C */}
                <div className="matrix-bracket" style={{ height: layout.matrixC.height }}>[</div>

                {/* Column 10: Matrix C */}
                <div style={{ height: layout.matrixC.height }}>
                    <MatrixRenderer 
                        matrixData={matrices.matrixC} 
                        layout={layout.matrixC}
                        matrixType="C"
                    />
                </div>

                {/* Column 11: Right Bracket C */}
                <div className="matrix-bracket" style={{ height: layout.matrixA.height }}>]</div>
            </div>
        </div>
    );
};

export default Tester;
import React from 'react';

interface TesterProps {
    layout: any;
}

const Tester: React.FC<TesterProps> = ({ layout }) => {
    // Calculate total grid width
    const totalGridWidth = (
        layout.brackets.width * 6 +           // 6 brackets
        layout.matrixA.width +                // Matrix A
        layout.matrixB.width +                // Matrix B  
        layout.matrixC.width +                // Matrix C
        layout.symbols.x.width +              // × symbol
        layout.symbols.equals.width            // = symbol
    );

    //   // ADD THIS NEW CODE HERE - Calculate how to use full budget
    const availableWidth = 484;
    const remainingWidth = availableWidth - totalGridWidth;

    // Distribute remaining width to matrices proportionally
    const a_extra = Math.floor((remainingWidth * layout.matrixA.width) / (layout.matrixA.width + layout.matrixB.width + layout.matrixC.width));
    const b_extra = Math.floor((remainingWidth * layout.matrixB.width) / (layout.matrixA.width + layout.matrixB.width + layout.matrixC.width));
    const c_extra = Math.floor((remainingWidth * layout.matrixC.width) / (layout.matrixA.width + layout.matrixB.width + layout.matrixC.width));

    // Remove the old leftMargin calculation since we're using full width now
    // const leftMargin = (484 - totalGridWidth) / 2;  // ← DELETE THIS LINE

    return (
        <div className="relative border-2 border-gray-400 bg-gray-100" style={{ width: 484, height: 202 }}>
            {/* CSS Grid Container - Now uses full width */}
            <div 
                className="grid grid-cols-11 items-center"
                style={{
                    // Remove position: absolute and left: leftMargin
                    // position: 'absolute',  ← DELETE THIS
                    // left: leftMargin,      ← DELETE THIS
                    gridTemplateColumns: `
                        ${layout.brackets.width}px                    /* Left Bracket A */
                        ${layout.matrixA.width + a_extra}px          /* Matrix A (expanded) */
                        ${layout.brackets.width}px                    /* Right Bracket A */
                        ${layout.symbols.x.width}px                   /* × Symbol */
                        ${layout.brackets.width}px                    /* Left Bracket B */
                        ${layout.matrixB.width + b_extra}px          /* Matrix B (expanded) */
                        ${layout.brackets.width}px                    /* Right Bracket B */
                        ${layout.symbols.equals.width}px              /* = Symbol */
                        ${layout.brackets.width}px                    /* Left Bracket C */
                        ${layout.matrixC.width + c_extra}px          /* Matrix C (expanded) */
                        ${layout.brackets.width}px                    /* Right Bracket C */
                    `
                }}
            >
                {/* Column 1: Left Bracket A */}
                <div 
                    className="bg-yellow-200 border-2 border-yellow-500 flex items-center justify-center text-xl font-bold"
                    style={{ height: layout.matrixA.height }}
                >
                    [
                </div>

                {/* Column 2: Matrix A */}
                <div 
                    className="bg-blue-200 border-2 border-blue-500 flex items-center justify-center text-sm font-bold"
                    style={{ height: layout.matrixA.height }}
                >
                    A ({layout.matrixA.width}×{layout.matrixA.height})
                </div>

                {/* Column 3: Right Bracket A */}
                <div 
                    className="bg-yellow-200 border-2 border-yellow-500 flex items-center justify-center text-xl font-bold"
                    style={{ height: layout.matrixA.height }}
                >
                    ]
                </div>

                {/* Column 4: × Symbol */}
                <div 
                    className="bg-green-200 border-2 border-green-500 flex items-center justify-center text-lg font-bold"
                    style={{ height: 40 }}
                >
                    ×
                </div>

                {/* Column 5: Left Bracket B */}
                <div 
                    className="bg-yellow-200 border-2 border-yellow-500 flex items-center justify-center text-xl font-bold"
                    style={{ height: layout.matrixB.height }}
                >
                    [
                </div>

                {/* Column 6: Matrix B */}
                <div 
                    className="bg-purple-200 border-2 border-purple-500 flex items-center justify-center text-sm font-bold"
                    style={{ height: layout.matrixB.height }}
                >
                    B ({layout.matrixB.width}×{layout.matrixB.height})
                </div>

                {/* Column 7: Right Bracket B */}
                <div 
                    className="bg-yellow-200 border-2 border-yellow-500 flex items-center justify-center text-xl font-bold"
                    style={{ height: layout.matrixB.height }}
                >
                    ]
                </div>

                {/* Column 8: = Symbol */}
                <div 
                    className="bg-orange-200 border-2 border-orange-500 flex items-center justify-center text-lg font-bold"
                    style={{ height: 40 }}
                >
                    =
                </div>

                {/* Column 9: Left Bracket C */}
                <div 
                    className="bg-yellow-200 border-2 border-yellow-500 flex items-center justify-center text-xl font-bold"
                    style={{ height: layout.matrixC.height }}
                >
                    [
                </div>

                {/* Column 10: Matrix C */}
                <div 
                    className="bg-red-200 border-2 border-red-500 flex items-center justify-center text-sm font-bold"
                    style={{ height: layout.matrixC.height }}
                >
                    C ({layout.matrixC.width}×{layout.matrixC.height})
                </div>

                {/* Column 11: Right Bracket C */}
                <div 
                    className="bg-yellow-200 border-2 border-yellow-500 flex items-center justify-center text-xl font-bold"
                    style={{ height: layout.matrixC.height }}
                >
                    ]
                </div>
            </div>
        </div>
    );
};

export default Tester;
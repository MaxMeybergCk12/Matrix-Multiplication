import React from 'react';

interface TesterProps {
    layout: any;
}

const Tester: React.FC<TesterProps> = ({ layout }) => {
    return (
        <div className="relative border-2 border-gray-400 bg-gray-100" style={{ width: 484, height: 404 }}>
            {/* Matrix A */}
            <div 
                className="absolute bg-blue-200 border-2 border-blue-500 flex items-center justify-center text-sm font-bold"
                style={{
                    left: 0,
                    top: 50,
                    width: layout.matrixA.width,
                    height: layout.matrixA.height
                }}
            >
                A ({layout.matrixA.width}×{layout.matrixA.height})
            </div>

            {/* × Symbol */}
            <div 
                className="absolute bg-green-200 border-2 border-green-500 flex items-center justify-center text-lg font-bold"
                style={{
                    left: layout.matrixA.width + 20,
                    top: 80,
                    width: layout.symbols.x.width,
                    height: 40
                }}
            >
                ×
            </div>

            {/* Matrix B */}
            <div 
                className="absolute bg-purple-200 border-2 border-purple-500 flex items-center justify-center text-sm font-bold"
                style={{
                    left: layout.matrixA.width + layout.symbols.x.width + 40,
                    top: 50,
                    width: layout.matrixB.width,
                    height: layout.matrixB.height
                }}
            >
                B ({layout.matrixB.width}×{layout.matrixB.height})
            </div>

            {/* = Symbol */}
            <div 
                className="absolute bg-orange-200 border-2 border-orange-500 flex items-center justify-center text-lg font-bold"
                style={{
                    left: layout.matrixA.width + layout.symbols.x.width + layout.matrixB.width + 60,
                    top: 80,
                    width: layout.symbols.equals.width,
                    height: 40
                }}
            >
                =
            </div>

            {/* Matrix C */}
            <div 
                className="absolute bg-red-200 border-2 border-red-500 flex items-center justify-center text-sm font-bold"
                style={{
                    left: layout.matrixA.width + layout.symbols.x.width + layout.matrixB.width + layout.symbols.equals.width + 80,
                    top: 50,
                    width: layout.matrixC.width,
                    height: layout.matrixC.height
                }}
            >
                C ({layout.matrixC.width}×{layout.matrixC.height})
            </div>

            {/* Left Brackets */}
            <div 
                className="absolute bg-yellow-200 border-2 border-yellow-500 flex items-center justify-center text-xl font-bold"
                style={{
                    left: 0,
                    top: 50,
                    width: 10,
                    height: layout.matrixA.height
                }}
            >
                [
            </div>

            <div 
                className="absolute bg-yellow-200 border-2 border-yellow-500 flex items-center justify-center text-xl font-bold"
                style={{
                    left: layout.matrixA.width + layout.symbols.x.width + 30,
                    top: 50,
                    width: 10,
                    height: layout.matrixB.height
                }}
            >
                [
            </div>

            <div 
                className="absolute bg-yellow-200 border-2 border-yellow-500 flex items-center justify-center text-xl font-bold"
                style={{
                    left: layout.matrixA.width + layout.symbols.x.width + layout.matrixB.width + layout.symbols.equals.width + 70,
                    top: 50,
                    width: 10,
                    height: layout.matrixC.height
                }}
            >
                [
            </div>

            {/* Right Brackets */}
            <div 
                className="absolute bg-yellow-200 border-2 border-yellow-500 flex items-center justify-center text-xl font-bold"
                style={{
                    left: layout.matrixA.width - 10,
                    top: 50,
                    width: 10,
                    height: layout.matrixA.height
                }}
            >
                ]
            </div>

            <div 
                className="absolute bg-yellow-200 border-2 border-yellow-500 flex items-center justify-center text-xl font-bold"
                style={{
                    left: layout.matrixA.width + layout.symbols.x.width + layout.matrixB.width + 30,
                    top: 50,
                    width: 10,
                    height: layout.matrixB.height
                }}
            >
                ]
            </div>

            <div 
                className="absolute bg-yellow-200 border-2 border-yellow-500 flex items-center justify-center text-xl font-bold"
                style={{
                    left: layout.matrixA.width + layout.symbols.x.width + layout.matrixB.width + layout.symbols.equals.width + layout.matrixC.width + 70,
                    top: 50,
                    width: 10,
                    height: layout.matrixC.height
                }}
            >
                ]
            </div>
        </div>
    );
};

export default Tester;
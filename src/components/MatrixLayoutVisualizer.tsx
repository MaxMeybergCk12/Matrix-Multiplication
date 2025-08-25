import React, { useMemo } from "react";
import { createMatrices } from "./matrixOrchestrator";
import { allocateMatrixSpace } from "./layout";
import Tester from "./tester";


interface MatrixLayoutProps {
    matrixA: [number, number]; // Dimensions like [3, 3]
    matrixB: [number, number]; // Dimensions like [3, 3]
    totalWidth: number;
    totalHeight: number;
}

const MatrixLayoutVisualizer: React.FC<MatrixLayoutProps> = ({
  matrixA,
  matrixB,
  totalWidth,
  totalHeight,
}) => {
  // Step 1: Generate matrices only when dimensions change
  const matrices = useMemo(() => createMatrices(matrixA, matrixB), [matrixA, matrixB]);

  // Step 2: Calculate layout only when matrices change
  const layout = useMemo(() => allocateMatrixSpace(
      matrices.matrixA.dimensions,
      matrices.matrixB.dimensions,
      matrices.matrixC.dimensions,
      totalWidth,
      totalHeight,
  ), [matrices, totalWidth, totalHeight]);


  

  // Step 3: Call Tester
  return (
    <div>
        {/* Top Half - Contains Tester */}
        <div style={{ height: totalHeight / 2 }}>
            <Tester layout={layout} matrices={matrices}/>
        </div>
        
        {/* Bottom Half - TODO Later */}
        <div style={{ height: totalHeight / 2, backgroundColor: 'lightgray' }}>
            <p className="text-center text-gray-600 mt-4">TODO: Bottom Half Content</p>
        </div>
    </div>
);
};

export default MatrixLayoutVisualizer;

// interface MatrixLayoutVisualizerProps {
//   matrixA: [number, number];
//   matrixB: [number, number];
//   totalWidth?: number;
//   totalHeight?: number;
//   margins?: number;
// }

// const MatrixLayoutVisualizer: React.FC<MatrixLayoutVisualizerProps> = ({
//   matrixA,
//   matrixB,
//   totalWidth = 484,
//   totalHeight = 404,
//   margins = 15
// }) => {
//   // 1. Get container dimensions from layout.ts
//   const layout = allocateMatrixSpace(matrixA, matrixB, totalWidth, totalHeight, margins);

//   // 2. Get internal structure for each matrix from matrixStructure.ts
//   const matrixAStructure = calculateMatrixStructure(
//     matrixA,
//     { width: layout.matrixA.width, height: layout.matrixA.height }
//   );

//   const matrixBStructure = calculateMatrixStructure(
//     matrixB,
//     { width: layout.matrixB.width, height: layout.matrixB.height }
//   );

//   const matrixCStructure = calculateMatrixStructure(
//     [matrixA[0], matrixB[1]], // Matrix C dimensions: [aRows, bCols]
//     { width: layout.matrixC.width, height: layout.matrixC.height }
//   );

//   return (
//     <div className="flex items-center justify-center gap-4">
//       {/* Matrix A */}
//       <div
//         className="relative border-2 border-gray-600 bg-gray-50"
//         style={{
//           width: layout.matrixA.width,
//           height: layout.matrixA.height
//         }}
//       >
//         {/* Left Bracket */}
//         <div
//           className="absolute text-gray-600 font-bold text-2xl flex items-center justify-center"
//           style={{
//             left: matrixAStructure.bracketDimensions.left.x,
//             top: matrixAStructure.bracketDimensions.left.y,
//             width: matrixAStructure.bracketDimensions.left.width,
//             height: matrixAStructure.bracketDimensions.left.height
//           }}
//         >
//           [
//         </div>

//         {/* Matrix Elements Grid */}
//         {matrixAStructure.positions.map((pos, index) => (
//           <div
//             key={index}
//             className="absolute bg-gray-200 border border-gray-400"
//             style={{
//               left: pos.x,
//               top: pos.y,
//               width: matrixAStructure.elementSize,
//               height: matrixAStructure.elementSize
//             }}
//           ></div>
//         ))}

//         {/* Right Bracket */}
//         <div
//           className="absolute text-gray-600 font-bold text-2xl flex items-center justify-center"
//           style={{
//             left: matrixAStructure.bracketDimensions.right.x,
//             top: matrixAStructure.bracketDimensions.right.y,
//             width: matrixAStructure.bracketDimensions.right.width,
//             height: matrixAStructure.bracketDimensions.right.height
//           }}
//         >
//           ]
//         </div>
//       </div>

//       {/* × Symbol */}
//       <div className="text-2xl font-bold text-gray-600">×</div>

//       {/* Matrix B */}
//       <div
//         className="relative border-2 border-gray-600 bg-gray-50"
//         style={{
//           width: layout.matrixB.width,
//           height: layout.matrixB.height
//         }}
//       >
//         {/* Left Bracket */}
//         <div
//           className="absolute text-gray-600 font-bold text-2xl flex items-center justify-center"
//           style={{
//             left: matrixBStructure.bracketDimensions.left.x,
//             top: matrixBStructure.bracketDimensions.left.y,
//             width: matrixBStructure.bracketDimensions.left.width,
//             height: matrixBStructure.bracketDimensions.left.height
//           }}
//         >
//           [
//         </div>

//         {/* Matrix Elements Grid */}
//         {matrixBStructure.positions.map((pos, index) => (
//           <div
//             key={index}
//             className="absolute bg-gray-200 border border-gray-400"
//             style={{
//               left: pos.x,
//               top: pos.y,
//               width: matrixBStructure.elementSize,
//               height: matrixBStructure.elementSize
//             }}
//           ></div>
//         ))}

//         {/* Right Bracket */}
//         <div
//           className="absolute text-gray-600 font-bold text-2xl flex items-center justify-center"
//           style={{
//             left: matrixBStructure.bracketDimensions.right.x,
//             top: matrixBStructure.bracketDimensions.right.y,
//             width: matrixBStructure.bracketDimensions.right.width,
//             height: matrixBStructure.bracketDimensions.right.height
//           }}
//         >
//           ]
//         </div>
//       </div>

//       {/* = Symbol */}
//       <div className="text-2xl font-bold text-gray-600">=</div>

//       {/* Matrix C */}
//       <div
//         className="relative border-2 border-gray-600 bg-gray-50"
//         style={{
//           width: layout.matrixC.width,
//           height: layout.matrixC.height
//         }}
//       >
//         {/* Left Bracket */}
//         <div
//           className="absolute text-gray-600 font-bold text-2xl flex items-center justify-center"
//           style={{
//             left: matrixCStructure.bracketDimensions.left.x,
//             top: matrixCStructure.bracketDimensions.left.y,
//             width: matrixCStructure.bracketDimensions.left.width,
//             height: matrixCStructure.bracketDimensions.left.height
//           }}
//         >
//           [
//         </div>

//         {/* Matrix Elements Grid */}
//         {matrixCStructure.positions.map((pos, index) => (
//           <div
//             key={index}
//             className="absolute bg-gray-200 border border-gray-400"
//             style={{
//               left: pos.x,
//               top: pos.y,
//               width: matrixCStructure.elementSize,
//               height: matrixCStructure.elementSize
//             }}
//           ></div>
//         ))}

//         {/* Right Bracket */}
//         <div
//           className="absolute text-gray-600 font-bold text-2xl flex items-center justify-center"
//           style={{
//             left: matrixCStructure.bracketDimensions.right.x,
//             top: matrixCStructure.bracketDimensions.right.y,
//             width: matrixCStructure.bracketDimensions.right.width,
//             height: matrixCStructure.bracketDimensions.right.height
//           }}
//         >
//           ]
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MatrixLayoutVisualizer;

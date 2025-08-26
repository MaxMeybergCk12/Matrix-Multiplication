import React, { useState } from "react";
import Template from "./template/Template.jsx";
import Flexi from "./template/assets/Flexi.js";
import MatrixLayoutVisualizer from "./components/MatrixLayoutVisualizer";

function App() {
    const [current_step, set_current_step] = useState(1);

    // ==========================================
    // 🔴 DO NOT MODIFY ANYTHING ABOVE THIS LINE
    // ==========================================

    // ==========================================
    // 🟢 MODIFY THE SECTION BELOW THIS LINE
    // ==========================================

    // Generate random matrix dimensions (1-3 for each dimension)
    const generateRandomMatrices = () => {
        const a = Math.floor(Math.random() * 2) + 2; // 1-3
        const b = Math.floor(Math.random() * 2) + 2; // 1-3
        const c = Math.floor(Math.random() * 2) + 2; // 1-3
        
        return {
            matrixA: [a, b],
            matrixB: [b, c],
            matrixC: [a, c]
        };
    };

    // Generate matrices once when component mounts
    const [matrices] = useState(() => generateRandomMatrices());
    const { matrixA, matrixB, matrixC } = matrices;
    
    // Calculate dynamic total_steps based on matrix dimensions
    const total_steps = matrixC[0] * matrixC[1];

    // Generate dynamic flexi_steps based on matrix dimensions
    const generateFlexiSteps = () => {
        const steps = [];
        
        // Add steps for each matrix element calculation
        for (let i = 1; i <= total_steps; i++) {
            steps.push({
                pose: Flexi.pointing,
                message: `Step ${i}: Calculate element ${i}`,
            });
        }
        
        return steps;
    };
    
    const flexi_steps = generateFlexiSteps();

    // ==========================================
    // 🟢 MODIFY THE SECTION ABOVE THIS LINE
    // ==========================================

    // ==========================================
    // 🔴 DO NOT MODIFY ANYTHING BELOW THIS LINE
    // ==========================================

    return (
        <Template
            current_step={current_step}
            total_steps={total_steps}
            flexi_steps={flexi_steps}
            on_next={() => set_current_step((prev) => prev + 1)}
            on_prev={() => set_current_step((prev) => prev - 1)}
        >
            {/* ================================================= */}
            {/* 🟢 HEY CURSUR! VIBE CODE INSIDE THIS AREA BELOW! */}
            {/* ================================================= */}

            {/*TODO: Random numebr generator for # of steps a = 1-3, b  1-3, c = 1-3, then from there its [a,b] and [b,c*/}
  
            <MatrixLayoutVisualizer
                matrixA={matrixA}
                matrixB={matrixB}
                totalWidth={484}
                totalHeight={404}
                currentStep={current_step}
            />
             {/*TODO:inside matrix visualizer make a final step to go t omake a new one*/}

             
        

            {/* ================================================= */}
            {/* 🟢 HEY CURSUR! VIBE CODE INSIDE THIS AREA ABOVE! */}
            {/* ================================================= */}
        </Template>
    );
}

// ==========================================
// 🔴 DO NOT MODIFY ANYTHING BELOW THIS LINE
// ==========================================

export default App;

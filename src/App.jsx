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

    const total_steps = 5; // Change me, How many Steps do you want?

    const flexi_steps = [
        {
            pose: Flexi.excited,
            message: "Matrix A: 3×3, Matrix B: 3×3, Matrix C: 3×3",
        },
        {
            pose: Flexi.teacher,
            message: "Matrix A: 2×2, Matrix B: 2×1, Matrix C: 2×1",
        },
        {
            pose: Flexi.thumbs_up,
            message: "Matrix A: 3×2, Matrix B: 2×3, Matrix C: 3×3",
        },
        {
            pose: Flexi.pointing,
            message: "Matrix A: 2×1, Matrix B: 1×2, Matrix C: 2×2",
        },
        {
            pose: Flexi.pointing,
            message: "Matrix A: 1×3, Matrix B: 3×1, Matrix C: 1×1",
        },
    ];

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
                matrixA={[2, 1]}
                matrixB={[2, 3]}
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

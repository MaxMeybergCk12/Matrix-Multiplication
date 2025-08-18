import React, { useState } from 'react';
import Template from './template/Template.jsx';
import Flexi from './template/assets/Flexi.js';
import MatrixLayoutVisualizer from './components/utils/layout/MatrixLayoutVisualizer';


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
    { pose: Flexi.excited, message: "Matrix A: 3×3, Matrix B: 3×3, Matrix C: 3×3" },
    { pose: Flexi.teacher, message: "Matrix A: 2×2, Matrix B: 2×1, Matrix C: 2×1" },
    { pose: Flexi.thumbs_up, message: "You can also change my poses" },
    { pose: Flexi.pointing, message: "Dont forget to use the .mdc file to get the code to work better" },
    { pose: Flexi.pointing, message: "I have an extra slide" }
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
      on_next={() => set_current_step(prev => prev + 1)}
      on_prev={() => set_current_step(prev => prev - 1)}
    >
      
      {/* ================================================= */}
      {/* 🟢 HEY CURSUR! VIBE CODE INSIDE THIS AREA BELOW! */}
      {/* ================================================= */}
      
      {current_step === 1 && (
        <MatrixLayoutVisualizer 
          matrixA={[3, 3]} 
          matrixB={[3, 3]} 
          totalWidth={484} 
          totalHeight={404} 
          margins={15} 
        />
      )}

      {current_step === 2 && (
        <MatrixLayoutVisualizer 
          matrixA={[2, 2]} 
          matrixB={[2, 1]} 
          totalWidth={484} 
          totalHeight={404} 
          margins={15} 
        />
      )}
      
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
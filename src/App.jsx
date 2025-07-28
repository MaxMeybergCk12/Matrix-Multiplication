import React, { useState } from 'react';
import Template from './template/Template.jsx';
import Flexi from './template/assets/Flexi.js';

function App() {
  const [current_step, set_current_step] = useState(1);

// ==========================================
// 🔴 DO NOT MODIFY ANYTHING ABOVE THIS LINE
// ==========================================

  // ==========================================
  // 🟢 MODIFY THE SECTION BELOW THIS LINE
  // ==========================================
  
  const total_steps = 3; // Change me, How many Steps do you want?
  const project_title = "Distributive Property"; // MODIFY THIS FOR YOUR PROJECT
  
  const flexi_steps = [
    { pose: Flexi.confident, message: "I'm confident we'll learn!" },
    { pose: Flexi.teacher, message: "Now let me teach!" },
    { pose: Flexi.thumbs_up, message: "Great job!" }
  ];

  // ➕ ADD: Debug line to check flexi_steps
  console.log("Flexi steps:", flexi_steps);

  // ==========================================
  // 🟢 MODIFY THE SECTION ABOVE THIS LINE
  // ==========================================

// ==========================================
// 🔴 DO NOT MODIFY ANYTHING BELOW THIS LINE  
// ==========================================
  
  return (
    <Template 
      title={project_title}
      current_step={current_step}
      total_steps={total_steps}
      flexi_steps={flexi_steps}
      on_next={() => set_current_step(prev => prev + 1)}
      on_prev={() => set_current_step(prev => prev - 1)}
    >
      
      {/* ================================================= */}
      {/* 🟢 HEY INTERN! VIBE CODE INSIDE THIS AREA BELOW! */}
      {/* ================================================= */}
      
      {/* Your interactive content goes here! */}
      
      {/* ================================================= */}
      {/* 🟢 HEY INTERN! VIBE CODE INSIDE THIS AREA ABOVE! */}
      {/* ================================================= */}

    </Template>
  );
}

// ==========================================
// 🔴 DO NOT MODIFY ANYTHING BELOW THIS LINE  
// ==========================================

export default App;
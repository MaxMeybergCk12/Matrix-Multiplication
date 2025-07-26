import React, { useState } from 'react';
import Template from './template/Template.jsx';

function App() {
  const [current_step, set_current_step] = useState(1);
  const total_steps = 3;
  
  return (
    <Template 
      title="Distributive Property"
      current_step={current_step}
      total_steps={total_steps}
      on_next={() => set_current_step(prev => prev + 1)}
      on_prev={() => set_current_step(prev => prev - 1)}
    >
      {/* Content */}
    </Template>
  );
}

export default App;
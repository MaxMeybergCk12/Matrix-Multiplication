import React, { useState, useEffect } from "react";
import Buttons from "./Footer/buttons.jsx";
import Flexi from "./assets/Flexi.js";

function Template({
    current_step,
    total_steps,
    flexi_steps,
    on_next,
    on_prev,
    children,
}) {
    const [flexi, set_flexi] = useState(Flexi.confident);
    const [flexi_message, set_flexi_message] = useState("Ready to learn!");

    useEffect(() => {
        const step_data = flexi_steps[current_step - 1];
        set_flexi(step_data.pose);
        set_flexi_message(step_data.message);
    }, [current_step, flexi_steps]);

    return (
        <div className="w-screen h-screen bg-gray-50 flex items-center justify-center p-1 sm:p-2 overflow-hidden">
            <div className="w-full h-full bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
                <div className="flex-1 p-1 sm:p-2 overflow-hidden">
                    <div className="w-full h-full overflow-auto">
                        {children}
                    </div>
                </div>

                <div className="h-[12%] min-h-[80px] p-2 sm:p-4 bg-blue-50 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-4 w-[70%]">
                        <img
                            src={flexi}
                            alt="Flexi"
                            className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0"
                        />
                        <div className="bg-white rounded-xl p-2 sm:p-3 shadow-lg text-sm sm:text-base max-w-sm">
                            {flexi_message}
                        </div>
                    </div>

                    <div className="w-[30%] flex justify-end items-center">
                        <Buttons
                            current_step={current_step}
                            total_steps={total_steps}
                            on_next={on_next}
                            on_prev={on_prev}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template;

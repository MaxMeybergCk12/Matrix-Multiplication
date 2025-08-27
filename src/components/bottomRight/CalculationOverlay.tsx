import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CalculationOverlayProps {
    isVisible: boolean;
    onReveal: () => void;
    children: React.ReactNode;
}

const CalculationOverlay: React.FC<CalculationOverlayProps> = ({
    isVisible,
    onReveal,
    children
}) => {
    return (
        <div className="relative w-full h-full">
            {/* Red Overlay */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-red-500 flex items-center justify-center cursor-pointer z-10"
                        onClick={onReveal}
                    >
                        <div className="text-white text-center">
                            <div className="text-4xl font-bold mb-4">?</div>
                            <div className="text-lg">Click to reveal calculation</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Calculation Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default CalculationOverlay;

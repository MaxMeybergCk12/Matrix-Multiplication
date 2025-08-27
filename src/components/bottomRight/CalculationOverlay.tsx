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
            {/* White Overlay */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-white flex items-center justify-center z-10"
                    >
                        <button
                            onClick={onReveal}
                            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105"
                        >
                            Click to calculate
                        </button>
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

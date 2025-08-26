import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BottomRightProps {
    vectorU: number[];
    vectorV: number[];
    matrixC: any;
    currentStep: number;
    onMatrixCUpdate?: (updatedMatrixC: any) => void;
}

const BottomRight: React.FC<BottomRightProps> = ({ 
    vectorU, 
    vectorV, 
    matrixC,
    currentStep,
    onMatrixCUpdate
}) => {
    const [dotProductResult, setDotProductResult] = useState<number | null>(null);
    const [showCalculation, setShowCalculation] = useState(false);
    const [currentAnimationStep, setCurrentAnimationStep] = useState(0);

    useEffect(() => {
        if (vectorU.length > 0 && vectorV.length > 0) {
            setShowCalculation(true);
            setCurrentAnimationStep(0);
            calculateDotProduct();
            
            // Reset animation after a short delay to ensure it starts fresh
            setTimeout(() => {
                setCurrentAnimationStep(0);
            }, 100);
        }
    }, [vectorU, vectorV]);

    const calculateDotProduct = () => {
        let result = 0;
        for (let i = 0; i < vectorU.length; i++) {
            result += vectorU[i] * vectorV[i];
        }
        setDotProductResult(result);

        // Update Matrix C
        if (onMatrixCUpdate) {
            const rows = matrixC.dimensions[0];
            const cols = matrixC.dimensions[1];
            const currentRow = Math.floor((currentStep - 1) / cols);
            const currentCol = (currentStep - 1) % cols;
            
            const updatedMatrixC = {
                ...matrixC,
                values: matrixC.values.map((row: any[], rowIndex: number) =>
                    row.map((cell: any, colIndex: number) =>
                        rowIndex === currentRow && colIndex === currentCol ? result : cell
                    )
                )
            };
            
            onMatrixCUpdate(updatedMatrixC);
        }
    };

    // Start animation sequence
    useEffect(() => {
        if (showCalculation) {
            const totalSteps = vectorU.length * 6 + 2; // Each pair: 4 elements + final result
            
            const timer = setInterval(() => {
                setCurrentAnimationStep(prev => {
                    if (prev >= totalSteps - 1) {
                        clearInterval(timer);
                        return totalSteps - 1; // Ensure we reach the final step
                    }
                    return prev + 1;
                });
            }, 600); // Reduced to 600ms for faster completion

            return () => clearInterval(timer);
        }
    }, [showCalculation, vectorU.length]);

    const renderCalculationSteps = () => {
        const elements: React.ReactElement[] = [];
        let elementIndex = 0;
        
        console.log('Current animation step:', currentAnimationStep);
        console.log('Vector lengths:', vectorU.length, vectorV.length);

        for (let i = 0; i < vectorU.length; i++) {
            const product = vectorU[i] * vectorV[i];
            
            if (i === 0) {
                // First pair: no + symbol
                if (currentAnimationStep >= elementIndex++) {
                    elements.push(
                        <motion.div
                            key={`u-${i}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-10 h-10 bg-yellow-200 border-2 border-yellow-400 flex items-center justify-center font-bold text-yellow-800"
                        >
                            {vectorU[i]}
                        </motion.div>
                    );
                }
                
                if (currentAnimationStep >= elementIndex++) {
                    elements.push(
                        <motion.span
                            key={`mult-${i}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-lg font-bold text-gray-600"
                        >
                            ×
                        </motion.span>
                    );
                }
                
                if (currentAnimationStep >= elementIndex++) {
                    elements.push(
                        <motion.div
                            key={`v-${i}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-10 h-10 bg-blue-200 border-2 border-blue-400 flex items-center justify-center font-bold text-blue-800"
                        >
                            {vectorV[i]}
                        </motion.div>
                    );
                }
                
                if (currentAnimationStep >= elementIndex++) {
                    elements.push(
                        <motion.span
                            key={`equals-${i}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-lg font-bold text-gray-600"
                        >
                            =
                        </motion.span>
                    );
                }
                
                if (currentAnimationStep >= elementIndex++) {
                    elements.push(
                        <motion.div
                            key={`result-${i}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-10 h-10 bg-green-200 border-2 border-green-400 flex items-center justify-center font-bold text-green-800"
                        >
                            {product}
                        </motion.div>
                    );
                }
            } else {
                // Subsequent pairs: start with + symbol
                if (currentAnimationStep >= elementIndex++) {
                    elements.push(
                        <motion.span
                            key={`plus-${i}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-lg font-bold text-gray-600"
                        >
                            +
                        </motion.span>
                    );
                }
                
                if (currentAnimationStep >= elementIndex++) {
                    elements.push(
                        <motion.div
                            key={`u-${i}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-10 h-10 bg-yellow-200 border-2 border-yellow-400 flex items-center justify-center font-bold text-yellow-800"
                        >
                            {vectorU[i]}
                        </motion.div>
                    );
                }
                
                if (currentAnimationStep >= elementIndex++) {
                    elements.push(
                        <motion.span
                            key={`mult-${i}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-lg font-bold text-gray-600"
                        >
                            ×
                        </motion.span>
                    );
                }
                
                if (currentAnimationStep >= elementIndex++) {
                    elements.push(
                        <motion.div
                            key={`v-${i}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-10 h-10 bg-blue-200 border-2 border-blue-400 flex items-center justify-center font-bold text-blue-800"
                        >
                            {vectorV[i]}
                        </motion.div>
                    );
                }
                
                if (currentAnimationStep >= elementIndex++) {
                    elements.push(
                        <motion.span
                            key={`equals-${i}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-lg font-bold text-gray-600"
                        >
                            =
                        </motion.span>
                    );
                }
                
                if (currentAnimationStep >= elementIndex++) {
                    elements.push(
                        <motion.div
                            key={`result-${i}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-10 h-10 bg-green-200 border-2 border-green-400 flex items-center justify-center font-bold text-green-800"
                        >
                            {product}
                        </motion.div>
                    );
                }
            }
        }

        // Final equals and result
        if (currentAnimationStep >= elementIndex++) {
            elements.push(
                <motion.span
                    key="final-equals"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-lg font-bold text-gray-600"
                >
                    =
                </motion.span>
            );
        }
        
        if (currentAnimationStep >= elementIndex++) {
            elements.push(
                <motion.div
                    key="final-result"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-12 h-12 bg-green-300 border-2 border-green-500 flex items-center justify-center font-bold text-green-800 text-lg"
                >
                    {dotProductResult}
                </motion.div>
            );
        }

        console.log('Total elements to show:', elements.length);
        console.log('Current step:', currentAnimationStep);
        return elements;
    };

    return (
        <div className="p-4 flex flex-col items-center justify-center h-full">
            <div className="flex items-center gap-2 flex-wrap justify-center">
                {renderCalculationSteps()}
            </div>
        </div>
    );
};

export default BottomRight;

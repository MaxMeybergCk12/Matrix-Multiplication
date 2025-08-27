import React from 'react';
import { motion } from 'framer-motion';

interface CalculationDisplayProps {
    vectorU: number[];
    vectorV: number[];
    currentAnimationStep: number;
    dotProductResult: number;
}

const CalculationDisplay: React.FC<CalculationDisplayProps> = ({
    vectorU,
    vectorV,
    currentAnimationStep,
    dotProductResult
}) => {
    const renderCalculationSteps = () => {
        const elements: React.ReactElement[] = [];
        let elementIndex = 0;

        for (let i = 0; i < vectorU.length; i++) {
            const product = vectorU[i] * vectorV[i];
            
            if (i === 0) {
                // First pair: no + symbol
                elements.push(...renderCalculationPair(i, product, elementIndex));
                elementIndex += 5; // 5 elements: u, ×, v, =, result
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
                elements.push(...renderCalculationPair(i, product, elementIndex));
                elementIndex += 5; // 5 elements: u, ×, v, =, result
            }
        }

        // Final equals and result - keep inline
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
                    className="w-10 h-10 bg-green-300 border-2 border-green-500 flex items-center justify-center font-bold text-green-800 text-lg"
                >
                    {dotProductResult}
                </motion.div>
            );
        }

        return elements;
    };

    const renderCalculationPair = (index: number, product: number, startIndex: number) => {
        const elements: React.ReactElement[] = [];
        
        // u value
        if (currentAnimationStep >= startIndex++) {
            elements.push(
                                        <motion.div
                            key={`u-${index}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-10 h-10 bg-yellow-200 border-2 border-yellow-400 flex items-center justify-center font-bold text-yellow-800"
                        >
                            {vectorU[index]}
                        </motion.div>
            );
        }
        
        // × symbol
        if (currentAnimationStep >= startIndex++) {
            elements.push(
                <motion.span
                    key={`mult-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-lg font-bold text-gray-600"
                >
                    ×
                </motion.span>
            );
        }
        
        // v value
        if (currentAnimationStep >= startIndex++) {
            elements.push(
                                        <motion.div
                            key={`v-${index}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-10 h-10 bg-blue-200 border-2 border-blue-400 flex items-center justify-center font-bold text-blue-800"
                        >
                            {vectorV[index]}
                        </motion.div>
            );
        }
        
        // = symbol
        if (currentAnimationStep >= startIndex++) {
            elements.push(
                <motion.span
                    key={`equals-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-lg font-bold text-gray-600"
                >
                    =
                </motion.span>
            );
        }
        
        // result
        if (currentAnimationStep >= startIndex++) {
            elements.push(
                                        <motion.div
                            key={`result-${index}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-10 h-10 bg-green-200 border-2 border-green-400 flex items-center justify-center font-bold text-green-800"
                        >
                            {product}
                        </motion.div>
            );
        }
        
        return elements;
    };

    return (
        <div className="flex items-center gap-2 flex-wrap justify-center max-w-full overflow-hidden">
            {renderCalculationSteps()}
        </div>
    );
};

export default CalculationDisplay;

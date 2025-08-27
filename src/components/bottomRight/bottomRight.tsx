import React, { useState, useEffect, useCallback } from 'react';
import { useAnimationController } from './AnimationController';
import { calculateDotProduct, getMatrixPosition, createUpdatedMatrixC } from './DotProductCalculator';
import CalculationDisplay from './CalculationDisplay';
import CalculationOverlay from './CalculationOverlay';

interface BottomRightProps {
    vectorU: number[];
    vectorV: number[];
    matrixC: any;
    currentStep: number;
    totalWidth: number;
    totalHeight: number;
    onMatrixCUpdate?: (updatedMatrixC: any) => void;
}

const BottomRight: React.FC<BottomRightProps> = ({ 
    vectorU, 
    vectorV, 
    matrixC,
    currentStep,
    totalWidth,
    totalHeight,
    onMatrixCUpdate
}) => {
    const [dotProductResult, setDotProductResult] = useState<number | null>(null);
    const [isOverlayVisible, setIsOverlayVisible] = useState(true);
    
    // Function declarations first - using useCallback to avoid dependency issues
    const handleAnimationComplete = React.useCallback(() => {
        if (onMatrixCUpdate) {
            const result = calculateDotProduct(vectorU, vectorV);
            setDotProductResult(result);
            
            const { currentRow, currentCol } = getMatrixPosition(currentStep, matrixC);
            const updatedMatrixC = createUpdatedMatrixC(matrixC, currentRow, currentCol, result);
            onMatrixCUpdate(updatedMatrixC);
        }
    }, [onMatrixCUpdate, vectorU, vectorV, currentStep, matrixC]);



    // Use the modular animation controller
    const {
        currentAnimationStep,
        isAnimating,
        startAnimation,
        resetAnimation
    } = useAnimationController({
        vectorLength: vectorU.length,
        onAnimationComplete: handleAnimationComplete,
        autoStart: false // Don't auto-start, wait for button click
    });

    // Show "?" immediately when step changes
    useEffect(() => {
        if (vectorU.length > 0 && vectorV.length > 0) {
            showQuestionMark();
            resetAnimation();
            setIsOverlayVisible(true); // Show overlay again for new step
        }
    }, [currentStep]);

    const showQuestionMark = () => {
        if (onMatrixCUpdate) {
            const { currentRow, currentCol } = getMatrixPosition(currentStep, matrixC);
            const updatedMatrixC = createUpdatedMatrixC(matrixC, currentRow, currentCol, "?");
            onMatrixCUpdate(updatedMatrixC);
        }
    };

    // Handle overlay reveal to start animation
    const handleOverlayReveal = useCallback(() => {
        if (vectorU.length > 0 && vectorV.length > 0) {
            setIsOverlayVisible(false); // Hide the overlay when clicked
            startAnimation();
        }
    }, [vectorU.length, vectorV.length, startAnimation]);

    return (
        <div 
            className="p-2 flex flex-col items-center justify-center h-full overflow-hidden" 
            style={{ width: totalWidth, height: totalHeight }}
        >
            {/* Calculation Display with Overlay */}
            <div className="w-full h-full">
                <CalculationOverlay
                    isVisible={isOverlayVisible}
                    onReveal={handleOverlayReveal}
                >
                    <CalculationDisplay
                        vectorU={vectorU}
                        vectorV={vectorV}
                        currentAnimationStep={currentAnimationStep}
                        dotProductResult={dotProductResult || 0}
                    />
                </CalculationOverlay>
            </div>
        </div>
    );
};

export default BottomRight;

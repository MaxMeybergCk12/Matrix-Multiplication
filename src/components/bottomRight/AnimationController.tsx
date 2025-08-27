import { useState, useEffect, useCallback } from 'react';

interface AnimationControllerProps {
    vectorLength: number;
    onAnimationComplete: () => void;
    autoStart?: boolean;
}

export const useAnimationController = ({ 
    vectorLength, 
    onAnimationComplete, 
    autoStart = false 
}: AnimationControllerProps) => {
    const [currentAnimationStep, setCurrentAnimationStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const totalSteps = vectorLength * 6 + 2; // Each pair: 4 elements + final result
    
    const startAnimation = useCallback(() => {
        setIsAnimating(true);
        setCurrentAnimationStep(0);
        
        const timer = setInterval(() => {
            setCurrentAnimationStep(prev => {
                if (prev >= totalSteps - 1) {
                    clearInterval(timer);
                    setIsAnimating(false);
                    onAnimationComplete();
                    return totalSteps - 1;
                }
                return prev + 1;
            });
        }, 600);
        
        return () => clearInterval(timer);
    }, [totalSteps, onAnimationComplete]);
    
    const stopAnimation = useCallback(() => {
        setIsAnimating(false);
        setCurrentAnimationStep(0);
    }, []);
    
    const resetAnimation = useCallback(() => {
        setCurrentAnimationStep(0);
        setIsAnimating(false);
    }, []);
    
    // Auto-start if enabled
    useEffect(() => {
        if (autoStart && vectorLength > 0) {
            startAnimation();
        }
    }, [autoStart, vectorLength, startAnimation]);
    
    return {
        currentAnimationStep,
        isAnimating,
        totalSteps,
        startAnimation,
        stopAnimation,
        resetAnimation
    };
};

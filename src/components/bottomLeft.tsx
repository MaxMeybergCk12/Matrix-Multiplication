import React from 'react';

interface BottomLeftProps {
    totalWidth: number;
    totalHeight: number;
}

const BottomLeft: React.FC<BottomLeftProps> = ({ 
    totalWidth, 
    totalHeight 
}) => {

    return (
        <div className="p-4">
            <p>Step</p>
        </div>
    );
};

export default BottomLeft;
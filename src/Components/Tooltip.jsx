import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ title, message }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    };

    return (
        <span className="tooltip-container">
            <span className="tooltip-icon" onClick={toggleTooltip} onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
                (?)
            </span>
            {showTooltip && (
                <div className="tooltip-text">
                    <p><strong>{title}:</strong></p>
                    {message.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            )}
        </span>
    );
}


export default Tooltip;

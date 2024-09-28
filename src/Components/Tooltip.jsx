import React, { useState } from 'react';
import './Tooltip.css';

function Tooltip() {
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
                    <p><strong>Cifrado César:</strong> Ingresa el mensaje y el desplazamiento (número de posiciones para cambiar cada letra). Luego, haz clic en "Cifrar" o "Descifrar" para convertir tu mensaje.</p>
                    <p><strong>Cifrado Escítala:</strong> Ingresa el mensaje y el número de columnas. La aplicación reorganizará el mensaje en columnas para cifrar y descifrar. Cabe recalcar que el número de columnas debe ser menor al largo de caracteres del mensaje a encriptar</p>
                </div>
            )}
        </span>
    );
}

export default Tooltip;

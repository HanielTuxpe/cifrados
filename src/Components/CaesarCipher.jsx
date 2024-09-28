import React, { useState } from 'react';
import ErrorHandling from './ErrorHandling';

function CaesarCipher() {
    const [message, setMessage] = useState('');
    const [shift, setShift] = useState(0);
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handleEncrypt = () => {
        if (!message || shift === 0) {
            setError('Por favor, ingrese un mensaje válido y un desplazamiento mayor a 0.');
            return;
        }
        setError('');

        const encrypted = message
            .split('')
            .map(char => String.fromCharCode((char.charCodeAt(0) + parseInt(shift) - 65) % 26 + 65))
            .join('');
        setResult(encrypted);
    };

    const handleDecrypt = () => {
        if (!message || shift === 0) {
            setError('Por favor, ingrese un mensaje válido y un desplazamiento mayor a 0.');
            return;
        }
        setError('');

        const decrypted = message
            .split('')
            .map(char => String.fromCharCode((char.charCodeAt(0) - parseInt(shift) - 65 + 26) % 26 + 65))
            .join('');
        setResult(decrypted);
    };

    return (
        <div className="cipher-container">
            <div className='info-cipher'>
                <h2>Cifrado César</h2>
                <p>El Cifrado César es uno de los métodos más antiguos y sencillos de cifrado. Fue utilizado por el emperador romano Julio César para enviar mensajes secretos. Funciona desplazando cada letra del mensaje original un número fijo de posiciones en el alfabeto.</p>
                <p>El cifrado César es fácil de implementar, pero su simplicidad también lo hace vulnerable a ataques, ya que un atacante solo necesita probar 25 posibles desplazamientos para romper el cifrado..</p>
                <p>Funcionamiento:</p>
                <ul>
                    <li>Se elige un número de desplazamiento (por ejemplo, 3).</li>
                    <li>Cada letra del mensaje es reemplazada por la letra que se encuentra "X" posiciones más adelante en el alfabeto, donde "X" es el número de desplazamiento.
                        Por ejemplo, con un desplazamiento de 3, la letra A se convierte en D, B en E, y así sucesivamente.</li>
                    <li>El proceso inverso también es sencillo: para descifrar el mensaje, se desplazan las letras en dirección contraria.</li>
                </ul>
                <p>Ejemplo:</p>
                <ul>
                    <li>Mensaje original: "HOLA".</li>
                    <li>Desplazamiento: 3</li>
                    <li>Mensaje cifrado: "KROD"</li>
                </ul>

            </div>
            <div className='info-cipher'>
                <h2>Try it Out!</h2>
                <ErrorHandling error={error} />
                <div className="grid-container">
                    <label>
                        Mensaje:
                    </label>
                    <input
                        type="text"
                        placeholder="Mensaje"
                        value={message}
                        onChange={(e) => setMessage(e.target.value.toUpperCase())}
                    />
                    <label>
                        Desplazamiento:
                    </label>
                    <input
                        type="number"
                        placeholder="Desplazamiento"
                        value={shift}
                        onChange={(e) => setShift(Number(e.target.value))}
                    />
                </div>

                <div>
                    <button onClick={handleEncrypt}>Cifrar</button>
                    <button onClick={handleDecrypt}>Descifrar</button>
                </div>
                <p>Resultado: {result}</p>
            </div>
        </div>
    );
}

export default CaesarCipher;

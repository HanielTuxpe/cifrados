import React, { useState } from 'react';
import Tooltip from './Tooltip';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CaesarCipher() {
    const [message, setMessage] = useState('');
    const [shift, setShift] = useState(0);
    const [result, setResult] = useState('');

    const cifrado = "Cifrado César"
    const text = 'Ingresa el mensaje y el desplazamiento (número de posiciones para cambiar cada letra). \n Luego, haz clic en "Cifrar" o "Descifrar" para convertir tu mensaje.'

    const handleEncrypt = () => {
        if (!message) {
            toast.error('Por favor, ingrese un mensaje válido.');
            return;
        }
        if (shift === 0) {
            toast.error('Por favor, ingrese un desplazamiento mayor a 0.');
            return;
        }

        const encrypted = message
            .split('')
            .map(char => String.fromCharCode((char.charCodeAt(0) + parseInt(shift) - 65) % 26 + 65))
            .join('');
        setResult(encrypted);
    };

    const handleDecrypt = () => {
        if (!message) {
            toast.error('Por favor, ingrese un mensaje válido.');
            return;
        }
        if (shift === 0) {
            toast.error('Por favor, ingrese un desplazamiento mayor a 0.');
            return;
        }

        const decrypted = message
            .split('')
            .map(char => String.fromCharCode((char.charCodeAt(0) - parseInt(shift) - 65 + 26) % 26 + 65))
            .join('');
        setResult(decrypted);
    };

    const handleCopy = () => {
        if (result) {
            navigator.clipboard.writeText(result)
                .then(() => {
                    toast.success('¡Copiado al portapapeles!');
                })
                .catch((err) => {
                    toast.error('Error al copiar, por favor inténtalo de nuevo.');
                });
        }
    };

    return (
        <div id="Caesar-section">
            <div className='marc'>
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
                        <p>
                            Para saber cómo funciona utilizar este cifrado, pulsa el <Tooltip title={cifrado} message={text} />.
                        </p>
                    </div>
                    <div className='info-cipher'>
                        <h2>Try it Out!</h2>
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
                        {result && (
                            <div>
                                <button onClick={handleCopy}>Copiar al portapapeles</button>
                            </div>
                        )}
                    </div>
                </div>
                <div class="back-to-top">
                    <a href="#top">Volver al inicio ↑</a>
                </div>
            </div>
        </div>
    );
}

export default CaesarCipher;

import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tooltip from './Tooltip';

function AESCipher() {
    const [message, setMessage] = useState('');
    const [publicKey, setPublicKey] = useState('');
    const [result, setResult] = useState('');
    const [key, setKey] = useState(null);

    const cifrado = "Cifrado AES"
    const text = "Primero genera la clave, después ingresa el mensaje y el código copiado. Luego haz clic en Cifrar. \n Para revertir el proceso, debes dejar pegada la clave, copiar el resultado cifrado y pegarlo como un nuevo mensaje. Una vez hecho eso, podrás Descrifrar el mensaje."

    const handleKeyGeneration = async () => {
        const key = await crypto.subtle.generateKey(
            {
                name: "AES-GCM",
                length: 128,
            },
            true,
            ["encrypt", "decrypt"]
        );

        const exportedKey = await crypto.subtle.exportKey("raw", key);
        const keyArray = new Uint8Array(exportedKey);
        const keyHex = Array.from(keyArray)
            .map(b => ('0' + b.toString(16)).slice(-2))
            .join('');

        setKey(keyHex);
    };

    const handleEncrypt = () => {
        if (!message || !key) {
            toast.error('Por favor, ingrese un mensaje y genere una clave.');
            return;
        }

        const ciphertext = CryptoJS.AES.encrypt(message, key).toString();
        setResult(ciphertext);
    };

    const handleDecrypt = () => {
        if (!message || !key) {
            toast.error('Por favor, ingrese un mensaje y genere una clave.');
            return
        }

        const bytes = CryptoJS.AES.decrypt(message, key);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        setResult(originalText);
    };

    const handleCopy = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                toast.success('¡Copiado al portapapeles!');
            })
            .catch((err) => {
                toast.error('Error al copiar, por favor inténtalo de nuevo.');
            });
    };

    return (
        <div id="AES-section">
            <div className='marc'>
                <div className="cipher-container">
                    <div className='info-cipher'>
                        <h2>Cifrado AES</h2>
                        <p>
                            AES (Advanced Encryption Standard) es un algoritmo de cifrado simétrico que se utiliza para proteger datos. Fue establecido como estándar de cifrado por el Instituto Nacional de Estándares y Tecnología (NIST) en 2001. AES es ampliamente utilizado en todo el mundo para la protección de datos debido a su seguridad y eficiencia.
                        </p>
                        <h3>Características del AES:</h3>
                        <ul>
                            <li><strong>Algoritmo Simétrico</strong>: Utiliza la misma clave para cifrar y descifrar datos.</li>
                            <li><strong>Longitud de Clave</strong>: Admite claves de 128, 192 y 256 bits.</li>
                            <li><strong>Modo de Operación</strong>: Se puede implementar en varios modos (ECB, CBC, GCM, etc.).</li>
                            <li><strong>Eficiencia</strong>: Rápido y eficiente en términos de tiempo de procesamiento.</li>
                        </ul>
                        <h3>Usos Comunes de AES:</h3>
                        <ul>
                            <li>Protección de datos en reposo.</li>
                            <li>Cifrado de datos en tránsito.</li>
                            <li>Protección de información sensible en aplicaciones móviles y web.</li>
                        </ul>
                        <p>
                            Para saber cómo funciona utilizar este cifrado, pulsa el <Tooltip title={cifrado} message={text} />.
                        </p>
                    </div>
                    <div className='info-cipher'>
                        <h2>Try It Out!</h2>
                        <div className="grid-container">
                            <label>
                                Mensaje:
                            </label>
                            <input
                                type="text"
                                placeholder="Mensaje"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <label>
                                Ingresa la Clave:
                            </label>
                            <input
                                type="text"
                                placeholder="Mensaje"
                                value={publicKey}
                                onChange={(e) => setPublicKey(e.target.value)}
                            />
                        </div>
                        <div>
                            <button onClick={handleKeyGeneration}>Generar Clave AES</button>
                            <button onClick={handleEncrypt}>Cifrar</button>
                            <button onClick={handleDecrypt}>Descifrar</button>
                        </div>
                        {key && (
                            <div>
                                <p>Clave AES: {key}</p>
                                <button onClick={() => handleCopy(key)}>Copiar clave pública</button>
                            </div>
                        )}
                        <p>Resultado:</p>
                        {result && (
                            <textarea
                                value={result}
                                readOnly
                                rows={4}
                                cols={50}
                                style={{
                                    width: '300px',
                                    height: '50px',
                                    resize: 'none'
                                }}
                            />
                        )}
                        {result && (
                            <div>
                                <button onClick={() => handleCopy(result)}>Copiar al portapapeles</button>
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

export default AESCipher;

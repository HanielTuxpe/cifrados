import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tooltip from './Tooltip';

function MD5Cipher() {
    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');

    const cifrado = "Cifrado MD5"
    const text = 'Para usar este cifrado, solo ingresa el mensaje y haz clic en Cifrar, este proceso es irreversible.'

    const handleEncrypt = () => {
        if (!message) {
            toast.error('Por favor, ingrese un mensaje.');
            return;
        }
        const md5Hash = CryptoJS.MD5(message).toString();
        setResult(md5Hash);
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
        <div id="MD5-section">
            <div className='marc'>
                <div className="cipher-container">
                    <div className='info-cipher'>
                        <h2>Cifrado de Hash MD5</h2>

                        <p>
                            MD5 (Message Digest Algorithm 5) es un algoritmo de hash criptográfico desarrollado por Ronald Rivest en 1991.
                            Se utiliza para convertir datos de cualquier tamaño en un resumen de 128 bits (16 bytes) o una huella digital.
                            El resultado es una cadena de longitud fija, generalmente representada como un valor hexadecimal de 32 caracteres.
                            Además de que el cifrado no se puede revertir una vez convertido.
                        </p>
                        <p>Usos Comunes de MD5:</p>
                        <ul>
                            <li>Verificación de integridad de archivos</li>
                            <li>Identificación de datos</li>
                            <li>Firmas digitales</li>
                        </ul>
                        <p>Ejemplo:</p>
                        <ul>
                            <li>Mensaje original: "HOLA"</li>
                            <li>Cifrado: c6f00988430dbc8e83a7bc7ab5256346</li>
                        </ul>
                        <p>
                            Para saber cómo funciona utilizar este cifrado, pulsa el <Tooltip title={cifrado} message={text} />.
                        </p>
                    </div>
                    <div className='info-cipher'>
                        <h2>¡Pruébalo!</h2>
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
                        </div>
                        <div>
                            <button onClick={handleEncrypt}>Cifrar</button>
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

export default MD5Cipher;

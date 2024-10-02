import React, { useState } from 'react';
import Tooltip from './Tooltip';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ScytaleCipher() {
    const [message, setMessage] = useState('');
    const [columns, setColumns] = useState(0);
    const [result, setResult] = useState('');

    const cifrado = "Cifrado Escítala"
    const text = 'Ingresa el mensaje y el número de columnas. La aplicación reorganizará el mensaje en columnas para cifrar y descifrar. \n Cabe recalcar que el número de columnas debe ser menor al largo de caracteres del mensaje a encriptar'

    const handleEncrypt = () => {
        if (!message) {
            toast.error('Por favor, ingrese un mensaje y el número correcto de columnas.');
            return;
        }
        if (columns >= message.length || columns === 0) {
            toast.error('Por favor, un número de columnas que sea menor al número de caracteres en su mensaje y diferente de 0.');
            return;
        }

        let encrypted = '';
        const cleanMessage = message.replace(/\s+/g, '');

        for (let i = 0; i < columns; i++) {
            for (let j = i; j < cleanMessage.length; j += columns) {
                encrypted += cleanMessage[j];
            }
        }

        setResult(encrypted);
    };

    const handleDecrypt = () => {
        if (!message || columns <= 0) {
            toast.error('Por favor, ingrese un mensaje y/o el número correcto de columnas.');
            return;
        }


        let decrypted = new Array(message.length).fill('');
        let position = 0;
        for (let i = 0; i < columns; i++) {
            for (let j = i; j < message.length && position < message.length; j += columns) {
                decrypted[j] = message[position];
                position++;
            }
        }
        setResult(decrypted.join(''));
    };

    const handleCopy = () => {
        if (result) {
            navigator.clipboard.writeText(result)
                .then(() => {
                    toast.success('¡Copiado al portapapeles!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
                .catch((err) => {
                    toast.error('Error al copiar, por favor inténtalo de nuevo.', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
        }
    };

    return (
        <div id="Scytale-section">
            <div className='marc'>
                <div className="cipher-container">
                    <div className='info-cipher'>
                        <h2>Cifrado Escítala</h2>

                        <p>El Cifrado Escítala es un método de cifrado por transposición utilizado por los antiguos griegos. A diferencia del Cifrado César, que cambia las letras por otras, el Cifrado Escítala reorganiza las letras del mensaje según una disposición en forma de columnas.</p>

                        <p>Funcionamiento:</p>
                        <ul>
                            <li>Se elige un número de columnas para organizar el mensaje.</li>
                            <li>El mensaje se escribe en filas, organizando las letras en una tabla de un número determinado de columnas.</li>
                            <li>Para cifrar, se lee el mensaje en columna, de arriba a abajo.</li>
                            <li>Para descifrar, se vuelve a organizar el texto en filas utilizando el mismo número de columnas.</li>
                        </ul>
                        <p>Ejemplo:</p>
                        <ul>
                            <li>Mensaje original: "DOCENTE"</li>
                            <li>
                                El mensaje se organiza en una tabla de 3 columnas:
                                <table border="1" className='tbl'>
                                    <tr>
                                        <td>D</td>
                                        <td>O</td>
                                        <td>C</td>
                                    </tr>
                                    <tr>
                                        <td>E</td>
                                        <td>N</td>
                                        <td>T</td>
                                    </tr>
                                    <tr>
                                        <td>E</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                            </li>
                            <li>
                                Luego, se lee el mensaje por columnas:
                                {" D -> E -> E -> O -> N -> C -> T"}
                            </li>
                            <li>
                                Cifrado: "DEEONCT"
                            </li>
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
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <label>
                                Desplazamiento:
                            </label>
                            <input
                                type="number"
                                placeholder="Número de columnas"
                                value={columns}
                                onChange={(e) => setColumns(Number(e.target.value))}
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
        </div >
    );
}

export default ScytaleCipher;

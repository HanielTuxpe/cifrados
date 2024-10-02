import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JSEncrypt from 'jsencrypt';
import Tooltip from './Tooltip';

function RSACipher() {
    const [message, setMessage] = useState('');
    const [messageD, setMessageD] = useState('');
    const [publicKeyIn, setPublicKeyIn] = useState('');
    const [privateKeyIn, setPrivateKeyIn] = useState('');
    const [publicKey, setPublicKey] = useState('');
    const [privateKey, setPrivateKey] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');


    const cifrado = "Cifrado RSA"
    const text = 'Inicia generando las llaves, una vez que las tengas, ingresa tu mensaje a cifrar y pega la clave pública para poder cifrar tu mensaje. \n Para descifrar el mensaje, copia el mensaje cifrado, pégalo en como mensaje a decriptar y por último pega tu clave privada. De esta manera obtendrás el mensaje original.'

    // Generar claves RSA
    const handleKeyGeneration = () => {
        const encryptor = new JSEncrypt();
        encryptor.getKey();
        setPublicKey(encryptor.getPublicKey());
        setPrivateKey(encryptor.getPrivateKey());
    }

    const handleEncrypt = () => {
        if (!message) {
            toast.error('Por favor, ingrese un mensaje.');
            return;
        }
        if (!publicKey) {
            toast.error('Por favor, ingrese la clave pública. Caso contrario, genere las claves ');
            return;
        }

        const encryptor = new JSEncrypt();
        encryptor.setPublicKey(publicKey);
        const encrypted = encryptor.encrypt(message);
        setEncryptedText(encrypted);
    };

    const handleDecrypt = () => {
        if (!messageD) {
            toast.error('Por favor, ingrese un mensaje.');
            return;
        }
        if (!publicKey) {
            toast.error('Por favor, ingrese la clave privada.');
            return;
        }

        const decryptor = new JSEncrypt();
        decryptor.setPrivateKey(privateKey);
        const decrypted = decryptor.decrypt(encryptedText);
        setDecryptedText(decrypted);
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
        <div id="RSA-section">
            <div className="RSAcipher-container">
                <div>
                    <h2>Cifrado RSA</h2>
                    <p>
                        RSA (Rivest-Shamir-Adleman) es un algoritmo de cifrado asimétrico ampliamente utilizado en la criptografía moderna para la protección de datos y la autenticación. Fue desarrollado en 1977 por Ron Rivest, Adi Shamir y Leonard Adleman. RSA se basa en la dificultad de factorizar grandes números primos.
                    </p>
                    <h3>Características del RSA:</h3>
                    <ul>
                        <li><strong>Cifrado Asimétrico</strong>: Utiliza un par de claves, pública y privada.</li>
                        <li><strong>Seguridad Basada en la Factorización</strong>: La seguridad se basa en la dificultad de factorizar el producto de dos números primos grandes.</li>
                        <li><strong>Longitud de Clave</strong>: Usa longitudes de clave que varían desde 1024 hasta 4096 bits.</li>
                    </ul>
                    <h3>Usos Comunes de RSA:</h3>
                    <ul>
                        <li>Cifrado de datos.</li>
                        <li>Autenticación a través de firmas digitales.</li>
                        <li>Intercambio seguro de claves en protocolos de seguridad.</li>
                    </ul>
                    <p>
                        Para saber cómo funciona utilizar este cifrado, pulsa el <Tooltip title={cifrado} message={text} />.
                    </p>
                </div>
                <h2>Try It Out!</h2>
                <div className='keys'>
                    <button onClick={handleKeyGeneration}>Generar Clave RSA</button>
                    {publicKey && (
                        <div>
                            <input type='text' value={publicKey} />
                            <button onClick={() => handleCopy(publicKey)}>Copiar clave pública</button>
                        </div>
                    )}
                    {privateKey && (
                        <div>
                            <input type='text' value={privateKey} />
                            <button onClick={() => handleCopy(privateKey)}>Copiar clave pública</button>
                        </div>
                    )}
                </div>
                <div className='form-cipher'>
                    <div className='division'>
                        <div className="grid-container">
                            <label>
                                Mensaje a Cifrar:
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
                                value={publicKeyIn}
                                onChange={(e) => setPublicKeyIn(e.target.value)}
                            />
                        </div>
                        <div>
                            <button onClick={handleEncrypt}>Cifrar</button>
                        </div>
                        <br></br>
                        <label>
                            Resultado:
                        </label>
                        <br></br>
                        {encryptedText && (
                            <textarea
                                value={encryptedText}
                                readOnly
                                rows={4}
                                cols={50}
                                style={{
                                    width: '200px',
                                    height: '100px',
                                    resize: 'none'
                                }}
                            />
                        )}
                        <br></br>
                        {encryptedText && (
                            <div>
                                <button onClick={() => handleCopy(encryptedText)}>Copiar</button>
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="grid-container">
                            <label>
                                Mensaje a Descifrar:
                            </label>
                            <input
                                type="text"
                                placeholder="Mensaje"
                                value={messageD}
                                onChange={(e) => setMessageD(e.target.value)}
                            />
                            <label>
                                Ingresa la Clave:
                            </label>
                            <input
                                type="text"
                                placeholder="Mensaje"
                                value={privateKeyIn}
                                onChange={(e) => setPrivateKeyIn(e.target.value)}
                            />
                        </div>
                        <div>
                            <button onClick={handleDecrypt}>Descifrar</button>
                        </div>
                        <p>Resultado: {decryptedText}</p>
                        {decryptedText && (
                            <div>
                                <button onClick={() => handleCopy(decryptedText)}>Copiar</button>
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

export default RSACipher;

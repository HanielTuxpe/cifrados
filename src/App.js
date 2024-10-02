import React, { useState } from 'react';
import CaesarCipher from './Components/CaesarCipher';
import ScytaleCipher from './Components/ScytaleCipher';
import MD5Cipher from './Components/MD5Cipher';
import Header from './Components/Header';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import AESCipher from './Components/AESCipher';
import RSACipher from './Components/RSACipher';
import { ToastContainer} from 'react-toastify';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <CaesarCipher />
        <ScytaleCipher />
        <AESCipher />
        <RSACipher />
        <MD5Cipher />
      </main>
      <footer className="App-footer">
        <h3>Haniel Antonio Tuxpeño González & Raúl Crescencio Hernández</h3>
        <h3>Ing. Desarrollo y Gestión de Software 7° B</h3>
      </footer>
      <ToastContainer
                position="top-right"         // Posiciona el toast en la esquina superior derecha
                autoClose={2000}             // Cierra automáticamente después de 3 segundos
                hideProgressBar={true}       // Oculta la barra de progreso
                closeOnClick={true}          // Cierra la notificación con un clic
                rtl={false}                  // Deshabilita el modo de lectura de derecha a izquierda
                pauseOnFocusLoss={false}     // No pausa el temporizador cuando se pierde el foco
                draggable={false}            // Evita que el toast sea arrastrable
                pauseOnHover={true}          // Pausa el temporizador mientras se está en hover
                limit={1}                    // Limita el número de toasts visibles a 1
            />
    </div>
  );
}

export default App;

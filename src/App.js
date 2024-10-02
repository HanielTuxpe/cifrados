import React, { useState } from 'react';
import CaesarCipher from './Components/CaesarCipher';
import ScytaleCipher from './Components/ScytaleCipher';
import MD5Cipher from './Components/MD5Cipher';
import Header from './Components/Header';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AESCipher from './Components/AESCipher';

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
        <MD5Cipher />

      </main>
      <footer className="App-footer">
        <h3>Haniel Antonio Tuxpeño González & Raúl Crescencio Hernández</h3>
        <h3>Ing. Desarrollo y Gestión de Software 7° B</h3>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default App;

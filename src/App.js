import React, { useState } from 'react';
import CaesarCipher from './Components/CaesarCipher';
import ScytaleCipher from './Components/ScytaleCipher';
import Tooltip from './Components/Tooltip';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <header className="App-header">
        <div className="header-title">
          <h1>Cifrados: César y Escítala</h1>
          <h2>Cifrado por método de desplazamiento y transposición</h2>
        </div>
        <div className='darkmodeS'>
          <label className="switch">
            <input
              type="checkbox"
              className="input__check"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider"></span>
          </label>
        </div>
      </header>
      <main>
        <div className="info-container">
          <p>
            Para saber cómo funciona cada uno de los cifrados, pulsa el <Tooltip />.
          </p>
        </div>
        <CaesarCipher />
        <ScytaleCipher />
      </main>
      <footer className="App-footer">
        <h3>Haniel Antonio Tuxpeño González</h3>
        <h3>Ing. Desarrollo y Gestión de Software 7° B</h3>
      </footer>
    </div>
  );
}

export default App;

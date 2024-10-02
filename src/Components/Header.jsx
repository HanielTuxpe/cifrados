import React from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header id="top" className="App-header">
      <div >
        <div className="header-title">
          <h1>Métodos de Cifrado</h1>
          <h4>Simétricos, Asimétricos, Hash, de desplazamiento y de transposición </h4>
        </div>
        <div className='darkmodeS'>
          <label>Modo Oscuro&nbsp;&nbsp;</label>
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
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#Caesar-section">Cifrado César</a></li>
          <li><a href="#Scytale-section">Cifrado Escítala</a></li>
          <li><a href="#AES-section">Cifrado AES</a></li>
          <li><a href="#RSA-section">Cifrado RSA</a></li>
          <li><a href="#MD5-section">MD5</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

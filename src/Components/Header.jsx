import React from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="App-header">
      <div className="header-title">
        <h1>Métodos de Cifrado</h1>
        <h4>Simétricos, Asimétricos, Hash, de desplazamiento y de transposición </h4>
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
  );
};

export default Header;

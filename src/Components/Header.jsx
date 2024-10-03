import React from 'react';
import { jsPDF } from "jspdf";
import { toast } from 'react-toastify';

const Header = ({ darkMode, toggleDarkMode }) => {

  const generarPDF = () => {
    const doc = new jsPDF();

    doc.setFont('Typo Formal Bold Italic Demo');

    // Agregar el título
    doc.setFontSize(20);
    doc.text(`Re`, doc.internal.pageSize.getWidth() / 2, 15, { align: 'center' });

    doc.save(`reporte_.pdf`);
    toast.success('Generando reporte PDF de los últimos estados...');
  };

  return (
    <header id="top" className="App-header">
      <div>
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
          <li id="Reporte"><a href="#Reporte" onClick={generarPDF}>Reporte</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

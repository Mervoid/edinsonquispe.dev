// src/components/react/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="hero">
      <div className="container">
        <h1>Edinson Quispe</h1>
        <p className="subtitle">Desarrollador Full Stack</p>
        <p className="tagline">Transformo ideas en soluciones digitales innovadoras</p>
        <a href="#proyectos" className="btn btn-primary">
          Ver Mis Proyectos
        </a>
      </div>
    </header>
  );
};

export default Header;
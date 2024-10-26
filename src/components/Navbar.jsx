// src/components/Navbar.jsx
import React from 'react';
import {ItemNavbar} from './ItemNavbar';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <ItemNavbar to="/" label="Quién Soy" />
        <ItemNavbar to="/projects" label="Mis Proyectos" />
        <ItemNavbar to="/education" label="Mis Estudios" />
      </ul>
    </nav>
  );
}



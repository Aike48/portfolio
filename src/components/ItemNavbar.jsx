// src/components/ItemNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const ItemNavbar = ({ to, label }) => {
  return <li><Link to={to}>{label}</Link></li>;
}



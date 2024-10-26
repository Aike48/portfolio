
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header} from './components/Header';
import {About} from './pages/About';
import {Education} from './pages/Education';
import {Projects} from './pages/Projects';

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}





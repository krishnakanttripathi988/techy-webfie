import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import MotherboardBackground from './components/MotherboardBackground';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Freelance from './components/freelance/Freelance';
import Profile from './components/profile/Profile';
import Techplay from './components/techplay/TechPlay';

import './App.css';

function App() {
  return (
    <>
      <MotherboardBackground />

      <nav className="nav">
        <NavLink to="/profile">🏠 Home</NavLink>
        <NavLink to="/about">👨‍🦱 About Me</NavLink>
        <NavLink to="/techplay">🗂️ My Projects</NavLink>
        <NavLink to="/freelance">🤑 Freelancing</NavLink>
        <NavLink to="/contact">🤙 Contact Me!</NavLink>
      </nav>

      <div className="screen-container">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/techplay" element={<Techplay />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

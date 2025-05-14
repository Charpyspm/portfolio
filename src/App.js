import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HOME from './pages/home.jsx';
import SERVICES from './pages/services.jsx';
import PORTFOLIO from './pages/portfolio.jsx';
import CONTACT from './pages/contact.jsx';
import MENTIONS_LEGALES from './pages/mentions.jsx';


export default function App() {
  return (
    <div className="Portfolio">
      <nav>
        <p>JOHN DOE</p>
        <Link to='/'>HOME</Link>
        <Link to='/services'>SERVICES</Link>
        <Link to='/portfolio'>PORTFOLIO</Link>
        <Link to='/contact'>CONTACT</Link>
        <Link to='/mentions'>MENTIONS LEGALES</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/services" element={<SERVICES />} />
        <Route path="/portfolio" element={<PORTFOLIO />} />
        <Route path="/contact" element={<CONTACT />} />
        <Route path="/mentions" element={<MENTIONS_LEGALES />} />
      </Routes>
    </div>
  );
}



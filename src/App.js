import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import HOME from './pages/home.jsx';
import SERVICES from './pages/services.jsx';
import PORTFOLIO from './pages/portfolio.jsx';
import CONTACT from './pages/contact.jsx';
import MENTIONS_LEGALES from './pages/mentions.jsx';


export default function App() {
  return (
    <div className="App">
      <div className="header text-left ">
      <nav className='d-flex justify-content-between align-items-center p-3'> 
        <p className='mb-0' id='header-name'>JOHN DOE</p>
        <div className='ms-auto d-flex'>
        <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "mx-2 active text-uppercase text-decoration-underline header-link" : "mx-2 text-uppercase text-decoration-none header-link"}
            >
              home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => isActive ? "mx-1 active text-uppercase text-decoration-underline header-link" : "mx-1 text-uppercase text-decoration-none header-link"}
            >
              services
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => isActive ? "mx-1 active text-uppercase text-decoration-underline header-link" : "mx-1 text-uppercase text-decoration-none header-link"}
            >
              portfolio
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "mx-1 active text-uppercase text-decoration-underline header-link" : "mx-1 text-uppercase text-decoration-none header-link"}
            >
              contact
            </NavLink>
            <NavLink 
              to="/mentions" 
              className={({ isActive }) => isActive ? "mx-1 active text-uppercase text-decoration-underline header-link" : "mx-1 text-uppercase text-decoration-none header-link"}
            >
              mentions légales
            </NavLink>
        </div>
      </nav>
    </div>
    <div className="content">
      <Routes>
        <Route path='/' element={<HOME />} />
        <Route path='/services' element={<SERVICES />} />
        <Route path='/portfolio' element={<PORTFOLIO />} />
        <Route path='/contact' element={<CONTACT />} />
        <Route path='/mentions' element={<MENTIONS_LEGALES />} />
      </Routes>
    </div>
    </div>
  );
}

// terminer le header
// ajouter un footer


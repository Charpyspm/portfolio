import React, { useState} from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import HOME from './pages/home.jsx';
import SERVICES from './pages/services.jsx';
import PORTFOLIO from './pages/portfolio.jsx';
import CONTACT from './pages/contact.jsx';
import MENTIONS_LEGALES from './pages/mentions.jsx';


export default function App() {

const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <div className="header text-left ">
      <nav className='d-flex justify-content-between align-items-center p-3'> 
        <p className='mb-0' id='header-name'>JOHN DOE</p>
        <button
          className="burger-btn d-md-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          <span className="burger-icon"></span>
        </button>

        <div className={`nav-burger ms-auto ${menuOpen ? 'open' : ''}`}>
        <NavLink 
              to="/" 
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "mx-2 active text-uppercase text-decoration-underline header-link" : "mx-2 text-uppercase text-decoration-none header-link"}
            >
              home
            </NavLink>
            <NavLink 
              to="/services" 
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "mx-1 active text-uppercase text-decoration-underline header-link" : "mx-1 text-uppercase text-decoration-none header-link"}
            >
              services
            </NavLink>
            <NavLink 
              to="/portfolio"
              onClick={() => setMenuOpen(false)} 
              className={({ isActive }) => isActive ? "mx-1 active text-uppercase text-decoration-underline header-link" : "mx-1 text-uppercase text-decoration-none header-link"}
            >
              portfolio
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "mx-1 active text-uppercase text-decoration-underline header-link" : "mx-1 text-uppercase text-decoration-none header-link"}
            >
              contact
            </NavLink>
            <NavLink 
              to="/mentions" 
              onClick={() => setMenuOpen(false)}
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
    <div className="footer">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 col-md-4 text-start">
            <h3 className="mb-0 col mt-4">John Doe</h3>
            <p className="mb-0 col mt-2">40 rue Laure Diebold</p>
            <p className="mb-0 col">69009 Lyon, France</p>
            <p className="mb-0 col">10 20 30 40 50</p>
            <p className="mb-0 col">john.doe@gmail.com</p>
            <div className="d-flex gap-4 mt-2">
              <a href='https://www.github.com/john-doe' target='_blank' className='text-white fs-4 icon' rel='nofollow noopener noreferrer'>
                <i className='bi bi-github'></i>
              </a>
              <a href='https://www.twitter.com/john-doe' target='_blank' className='text-white fs-4 icon' rel='nofollow noopener noreferrer'>
                <i className='bi bi-twitter'></i>
              </a>
              <a href='https://www.linkedin.com/john-doe' target='_blank' className='text-white fs-4 icon' rel='nofollow noopener noreferrer'>
                <i className='bi bi-linkedin'></i>
               </a>
            </div>
          </div>
          <div className="col-12 col-md-4 text-start">
            <h3 className="mb-0 col mt-4">Liens utiles</h3>
            <div className="d-flex flex-column mt-3 ">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "mx-1 active  text-decoration-none footer-link" : "mx-1  text-decoration-none footer-link"}
              >
                home
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => isActive ? "mx-1 active  text-decoration-none footer-link" : "mx-1  text-decoration-none footer-link"}
              >
                services
              </NavLink>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => isActive ? "mx-1 active  text-decoration-none footer-link" : "mx-1  text-decoration-none footer-link"}
              >
                portfolio
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? "mx-1 active  text-decoration-none footer-link" : "mx-1  text-decoration-none footer-link"}
              >
                contact
              </NavLink>
              <NavLink 
                to="/mentions" 
                className={({ isActive }) => isActive ? "mx-1 active  text-decoration-none footer-link" : "mx-1  text-decoration-none footer-link"}
              >
                mentions légales
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-md-4 text-start">
            <h3 className="mb-0 col mt-4">Mes dernières réalisations</h3>
            <div className="d-flex flex-column mt-3 ">
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => isActive ? "mx-1 active  text-decoration-none footer-link" : "mx-1  text-decoration-none footer-link"}
              >
                Fresh Food
              </NavLink>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => isActive ? "mx-1 active  text-decoration-none footer-link" : "mx-1  text-decoration-none footer-link"}
              >
                Restaurant Akira
              </NavLink>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => isActive ? "mx-1 active  text-decoration-none footer-link" : "mx-1  text-decoration-none footer-link"}
              >
                Espace bien-être
              </NavLink>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => isActive ? "mx-1 active  text-decoration-none footer-link" : "mx-1  text-decoration-none footer-link"}
              >
                SEO
              </NavLink>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => isActive ? "mx-1 active  text-decoration-none footer-link" : "mx-1  text-decoration-none footer-link"}
              >
                Création d'une API
              </NavLink>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => isActive ? "mx-1 active  text-decoration-none footer-link" : "mx-1  text-decoration-none footer-link"}
              >
                Maquette d'un site
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}




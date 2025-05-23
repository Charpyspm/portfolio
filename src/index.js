import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);




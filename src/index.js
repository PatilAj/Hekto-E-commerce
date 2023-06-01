import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import React from 'react';
import './index.css';
import {createRoot} from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
const container = document.getElementById ('root');
const root = createRoot (container);
root.render (
  <App />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

reportWebVitals ();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "modern-normalize";
import 'bootstrap/dist/css/bootstrap.css';
import "flag-icons/css/flag-icons.min.css";
import './index.css';
// import reportWebVitals from './reportWebVitals';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);

// reportWebVitals();

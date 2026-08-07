import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga4';

// Initialize Google Analytics
ReactGA.initialize('G-6VBRLSQTZ5');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Send page view
ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
});

reportWebVitals();
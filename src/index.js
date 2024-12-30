import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the `react-dom/client` package for React 18+
import './index.css';
import App from './App';

// Create the root and render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

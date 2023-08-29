import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/styles/main.scss';
import App from './App.jsx';
import './i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

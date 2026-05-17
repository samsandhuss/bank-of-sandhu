import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { BrandProvider } from './lib/BrandContext.jsx';
import { ModeProvider } from './lib/ModeContext.jsx';
import './styles/base.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BrandProvider>
        <ModeProvider>
          <App />
        </ModeProvider>
      </BrandProvider>
    </BrowserRouter>
  </React.StrictMode>
);

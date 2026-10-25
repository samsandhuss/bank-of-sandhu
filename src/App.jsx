import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useBrand } from './lib/BrandContext.jsx';
import { useMode } from './lib/ModeContext.jsx';

import Landing from './pages/Landing.jsx';
import ModePicker from './pages/ModePicker.jsx';
import JurisdictionPicker from './pages/JurisdictionPicker.jsx';
import Products from './pages/Products.jsx';
import OpenAccount from './pages/OpenAccount.jsx';
import Lease from './pages/Lease.jsx';
import Chat from './pages/Chat.jsx';
import CookieBanner from './components/CookieBanner.jsx';

export default function App() {
  const brand = useBrand();
  const mode = useMode();

  return (
    <div className="app-shell">
      <header className="app-header">
        <Link to="/" className="logo">{brand.identity.logoText}</Link>
        <nav className="nav">
          {mode.isComplete && <Link to="/products">Products</Link>}
          <Link to="/chat">Help</Link>
          {mode.isComplete && (
            <button onClick={mode.reset} className="btn btn-ghost" style={{ color: 'white', padding: '0.2rem 0.5rem' }}>
              Reset
            </button>
          )}
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/mode" element={<ModePicker />} />
          <Route path="/jurisdiction" element={<JurisdictionPicker />} />
          <Route path="/products" element={<Products />} />
          <Route path="/account/open" element={<OpenAccount />} />
          <Route path="/lease" element={<Lease />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <div>
          {brand.entities.uk && (
            <>
              <strong>{brand.entities.uk.legalName}</strong> · {brand.entities.uk.regulatorReference}
            </>
          )}
          {brand.entities.uk && brand.entities.uae && <> · </>}
          {brand.entities.uae && (
            <>
              <strong>{brand.entities.uae.legalName}</strong> · {brand.entities.uae.regulatorReference}
            </>
          )}
        </div>
        <div className="small muted" style={{ marginTop: '0.5rem' }}>
          Demo prototype — not a real bank. No real money, no real accounts.
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
}

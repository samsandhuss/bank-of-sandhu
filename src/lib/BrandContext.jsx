import React, { createContext, useContext, useEffect, useState } from 'react';

// BrandContext — fetches the active brand config from /api/brand and exposes it
// to the whole app. Also applies brand colours as CSS variables on the root.
//
// TEACH inline (Checkpoint 2): every visible string and colour in the app
// comes through this context. To launch a new brand, you don't fork React —
// you change a config file. This is what makes the platform white-labelable.

const BrandContext = createContext(null);

export function BrandProvider({ children }) {
  const [brand, setBrand] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/brand')
      .then(r => r.ok ? r.json() : Promise.reject(new Error(`Brand fetch failed: ${r.status}`)))
      .then(cfg => {
        setBrand(cfg);
        applyTheme(cfg);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading brand…</div>;
  }
  if (error) {
    return (
      <div style={{ padding: '2rem', color: '#b00' }}>
        <strong>Brand load error:</strong> {error}
        <br />
        Is the BFF running on <code>localhost:3001</code>?
      </div>
    );
  }

  return <BrandContext.Provider value={brand}>{children}</BrandContext.Provider>;
}

function applyTheme(cfg) {
  const root = document.documentElement;
  root.setAttribute('data-brand', cfg.brand.id);
  root.style.setProperty('--brand-primary', cfg.identity.primaryColor);
  root.style.setProperty('--brand-accent', cfg.identity.accentColor);
  root.style.setProperty('--brand-background', cfg.identity.background);
  root.style.setProperty('--brand-font', cfg.identity.fontFamily);
  document.title = cfg.brand.displayName;
}

export function useBrand() {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error('useBrand must be used within BrandProvider');
  return ctx;
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBrand } from '../lib/BrandContext.jsx';
import { useMode } from '../lib/ModeContext.jsx';

const FLAG = { uk: '🇬🇧', uae: '🇦🇪' };
const LABEL = { uk: 'United Kingdom', uae: 'United Arab Emirates' };

export default function JurisdictionPicker() {
  const brand = useBrand();
  const mode = useMode();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!mode.mode) navigate('/mode', { replace: true });
  }, [mode.mode]);

  const entries = Object.entries(brand.entities);

  React.useEffect(() => {
    if (entries.length === 1 && !mode.jurisdiction) {
      mode.setJurisdiction(entries[0][0]);
      navigate('/products', { replace: true });
    }
  }, [entries.length]);

  const pick = (key) => {
    mode.setJurisdiction(key);
    navigate('/products');
  };

  return (
    <div>
      <div className="steps">
        <span className="step" data-done="true">1. Mode</span>
        <span className="step" data-active="true">2. Location</span>
        <span className="step">3. Products</span>
      </div>

      <h2>Where are you based?</h2>
      <p className="muted">
        This determines which regulator covers your account, the currency you'll see, and any local disclosures we're required to show.
      </p>

      <div className="choice-grid">
        {entries.map(([key, entity]) => (
          <button
            key={key}
            className="choice"
            aria-pressed={mode.jurisdiction === key}
            onClick={() => pick(key)}
          >
            <h3>{FLAG[key]} {LABEL[key] || key.toUpperCase()}</h3>
            <div className="sub">{entity.legalName}</div>
            <ul>
              <li>Regulator: <strong>{entity.regulator}</strong></li>
              <li>Currency: <strong>{entity.currency}</strong></li>
              <li>{entity.regulatorReference}</li>
            </ul>
          </button>
        ))}
      </div>

      <div className="inline-disclosure">
        <strong>Cross-border note:</strong> If you live in one jurisdiction but want products in another, our cross-border data transfer notice applies under UAE PDPL and UK GDPR.
        {' '}<a href="/chat">Ask our chatbot</a> about the details.
      </div>
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBrand } from '../lib/BrandContext.jsx';
import { useMode } from '../lib/ModeContext.jsx';

// ModePicker — Checkpoint 7 in TEACH.md.
//
// The user picks neutral or Islamic. This is where the Sharia Ruleset Engine
// idea becomes a visible UI choice. Downstream, every product, every
// contract, every disclosure responds to this single flag.

export default function ModePicker() {
  const brand = useBrand();
  const mode = useMode();
  const navigate = useNavigate();

  const modes = Object.entries(brand.modes);

  // If brand only has one mode (e.g. Mal), auto-select and skip the picker.
  React.useEffect(() => {
    if (modes.length === 1 && !mode.mode) {
      mode.setMode(modes[0][0]);
      navigate('/jurisdiction', { replace: true });
    }
  }, [modes.length]);

  const pick = (key) => {
    mode.setMode(key);
    navigate('/jurisdiction');
  };

  return (
    <div>
      <div className="steps">
        <span className="step" data-active="true">1. Mode</span>
        <span className="step">2. Location</span>
        <span className="step">3. Products</span>
      </div>

      <h2>How would you like to bank?</h2>
      <p className="muted">
        Choose how you'd like {brand.brand.displayName} to work for you. You can change this later.
      </p>

      <div className="choice-grid">
        {modes.map(([key, m]) => (
          <button
            key={key}
            className="choice"
            aria-pressed={mode.mode === key}
            onClick={() => pick(key)}
          >
            <h3>{m.label}</h3>
            <div className="sub">{m.subLabel}</div>
            <ul>
              <li>Accounts: <strong>{m.productTerminology.account}</strong></li>
              <li>Auto finance: <strong>{m.productTerminology.lease}</strong></li>
              <li>Fee structure: <strong>{m.productTerminology.feeShortLabel}</strong></li>
            </ul>
            <div className="disclosure-pills" aria-label="Compliance regimes shown in this mode">
              {m.disclosureSet.map(d => (
                <span key={d} className="disclosure-pill">{d.toUpperCase()}</span>
              ))}
            </div>
          </button>
        ))}
      </div>

      <div className="inline-disclosure">
        <strong>About this choice:</strong> Neutral mode shows conventional banking products with interest-based pricing and FCA / CBUAE / GDPR disclosures.
        Islamic mode swaps to AAOIFI-aligned products with profit-rate pricing, a Sharia Supervisory Board sign-off, and no interest charges anywhere in the flow.
        Both modes are available to anyone — regardless of faith.
      </div>
    </div>
  );
}

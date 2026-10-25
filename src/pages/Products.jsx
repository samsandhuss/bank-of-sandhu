import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMode } from '../lib/ModeContext.jsx';
import { useBrand } from '../lib/BrandContext.jsx';

export default function Products() {
  const brand = useBrand();
  const mode = useMode();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!mode.isComplete) return;
    fetch(`/api/products?mode=${mode.mode}&jurisdiction=${mode.jurisdiction}`)
      .then(r => r.ok ? r.json() : Promise.reject(new Error(r.statusText)))
      .then(setData)
      .catch(e => setError(e.message));
  }, [mode.mode, mode.jurisdiction]);

  if (!mode.isComplete) {
    return (
      <div className="card">
        <p>Please <Link to="/mode">pick a mode and jurisdiction</Link> first.</p>
      </div>
    );
  }

  if (error) return <div className="card" style={{ color: '#b00' }}>Error: {error}</div>;
  if (!data) return <div className="card">Loading products…</div>;

  const products = data.products || {};
  const sharia = mode.modeConfig.sharia;
  const fmt = (n) => `${data.entity.currencySymbol}${n.toLocaleString()}`;

  return (
    <div>
      <div className="steps">
        <span className="step" data-done="true">1. Mode</span>
        <span className="step" data-done="true">2. Location</span>
        <span className="step" data-active="true">3. Products</span>
      </div>

      <h2>Your products</h2>
      <p className="muted">
        Showing <strong>{mode.modeConfig.label}</strong> products for <strong>{data.entity.legalName}</strong>.
        All amounts in <strong>{data.entity.currency}</strong>.
      </p>

      {sharia && (
        <div className="inline-disclosure">
          <strong>{sharia.supervisoryBoardLabel}:</strong> {sharia.complianceStatement}
        </div>
      )}

      <div className="card-row" style={{ marginTop: '1.5rem' }}>
        {products.currentAccount && (
          <div className="card">
            <h3>{products.currentAccount.name}</h3>
            <p className="muted small">
              Monthly fee: <strong>{products.currentAccount.monthlyFee === 0 ? 'Free' : fmt(products.currentAccount.monthlyFee)}</strong>
            </p>
            {products.currentAccount.overdraftAPR != null && (
              <p className="muted small">Overdraft {data.terminology.feeShortLabel}: <strong>{products.currentAccount.overdraftAPR}%</strong></p>
            )}
            {products.currentAccount.overdraftAPR === null && (
              <p className="muted small">No interest-based overdraft (Sharia-compliant).</p>
            )}
            <ul className="muted small">
              {products.currentAccount.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <Link to="/account/open" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
              Open this account
            </Link>
          </div>
        )}

        {products.leasing && (
          <div className="card">
            <h3>{products.leasing.name}</h3>
            <p className="muted small">{products.leasing.structureLabel}</p>
            <p className="muted small">
              Example {data.terminology.feeShortLabel}: <strong>{products.leasing.exampleAPR ?? products.leasing.exampleProfitRate}%</strong>
            </p>
            <p className="muted small">
              Terms available: {products.leasing.termMonths.join(', ')} months
            </p>
            <Link to="/lease" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
              Get a lease quote
            </Link>
          </div>
        )}
      </div>

      <div className="card" style={{ marginTop: '1.5rem' }}>
        <h3>Compliance shown in this view</h3>
        <p className="small muted">
          The disclosures below apply to your current mode and jurisdiction. Each is summarised in our compliance docs and queryable via the chatbot.
        </p>
        <div className="disclosure-pills">
          {data.disclosureSet.map(d => (
            <span key={d} className="disclosure-pill">{d.toUpperCase()}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

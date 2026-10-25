import React from 'react';
import { Link } from 'react-router-dom';
import { useBrand } from '../lib/BrandContext.jsx';
import { useMode } from '../lib/ModeContext.jsx';

export default function Landing() {
  const brand = useBrand();
  const mode = useMode();

  return (
    <div>
      <section className="hero">
        <h1>{brand.brand.displayName}</h1>
        <p className="tagline">{brand.brand.tagline}</p>
      </section>

      <div className="card" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Banking that fits how you live.</h2>
        <p className="muted">
          Open a current account or lease a vehicle — in the UK or the UAE, on conventional or Islamic terms.
          Your choice, your contract, your language.
        </p>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {mode.isComplete ? (
            <Link to="/products" className="btn btn-primary">View your products</Link>
          ) : (
            <Link to="/mode" className="btn btn-primary">Get started</Link>
          )}
          <Link to="/chat" className="btn btn-secondary">Ask a question</Link>
        </div>
      </div>

      <div className="card-row" style={{ marginTop: '2rem' }}>
        <div className="card">
          <h3>UK + UAE in one app</h3>
          <p className="muted small">
            FCA-regulated entity in the UK, CBUAE-licensed entity in the UAE. Pick where you live and we adjust currency, regulator references, and contracts accordingly.
          </p>
        </div>
        <div className="card">
          <h3>Conventional or Islamic</h3>
          <p className="muted small">
            Pick Islamic mode and we swap to AAOIFI-aligned products — Ijara instead of conventional leases, Wadiah instead of interest-bearing accounts — all reviewed by a Sharia Supervisory Board.
          </p>
        </div>
      </div>
    </div>
  );
}

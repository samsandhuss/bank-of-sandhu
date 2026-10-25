import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useBrand } from '../lib/BrandContext.jsx';
import { useMode } from '../lib/ModeContext.jsx';

// Blocks C + D — leasing journey with mode-appropriate contract template,
// scroll-to-bottom e-sign (the "trust ceremony" — Checkpoint 11),
// and a contract download.

export default function Lease() {
  const brand = useBrand();
  const mode = useMode();
  const [step, setStep] = useState('quote');
  const [vehiclePrice, setVehiclePrice] = useState(100000);
  const [termMonths, setTermMonths] = useState(36);
  const [quote, setQuote] = useState(null);
  const [signatureName, setSignatureName] = useState('');
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [contract, setContract] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const contractRef = useRef(null);

  if (!mode.isComplete) {
    return <div className="card"><p>Please <Link to="/mode">pick a mode and jurisdiction</Link> first.</p></div>;
  }

  const fmt = (n) => `${brand.entities[mode.jurisdiction].currencySymbol} ${n.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

  const getQuote = async () => {
    setBusy(true); setError(null);
    try {
      const r = await fetch('/api/leasing/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: mode.mode, vehiclePrice, termMonths }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || 'Quote failed');
      setQuote(d);
      setStep('preview');
    } catch (e) { setError(e.message); } finally { setBusy(false); }
  };

  const handleScroll = () => {
    const el = contractRef.current;
    if (!el) return;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 20;
    if (atBottom) setScrolledToBottom(true);
  };

  const sign = async () => {
    setBusy(true); setError(null);
    try {
      const r = await fetch('/api/leasing/sign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quoteId: quote.quoteId, signatureName }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || 'Sign failed');
      setContract(d);
      setStep('done');
    } catch (e) { setError(e.message); } finally { setBusy(false); }
  };

  return (
    <div>
      <h2>{mode.modeConfig.productTerminology.lease}</h2>
      <p className="muted">
        {mode.mode === 'islamic'
          ? 'A Sharia-compliant lease-to-own (Ijara wa Iqtina). No interest. Profit-rate based.'
          : 'A conventional auto lease. Interest-based (APR).'}
      </p>

      {error && <div className="card" style={{ color: '#b00' }}>Error: {error}</div>}

      {step === 'quote' && (
        <div className="card">
          <h3>Get a quote</h3>
          <div className="field-row">
            <div className="field">
              <label>Vehicle price ({brand.entities[mode.jurisdiction].currency})</label>
              <input type="number" value={vehiclePrice} onChange={e => setVehiclePrice(Number(e.target.value))} />
            </div>
            <div className="field">
              <label>Term (months)</label>
              <select value={termMonths} onChange={e => setTermMonths(Number(e.target.value))}>
                {brand.products.leasing.variants[mode.mode].termMonths.map(t =>
                  <option key={t} value={t}>{t}</option>
                )}
              </select>
            </div>
          </div>
          <button className="btn btn-primary" disabled={busy} onClick={getQuote}>
            {busy ? 'Calculating…' : 'Get my quote'}
          </button>
        </div>
      )}

      {step === 'preview' && quote && (
        <>
          <div className="card">
            <h3>Your quote</h3>
            <p><strong>{quote.productName}</strong> · {quote.structureLabel}</p>
            <div className="card-row">
              <div>
                <p className="muted small">Monthly payment</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>{fmt(quote.monthlyPayment)}</p>
              </div>
              <div>
                <p className="muted small">Total payable</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>{fmt(quote.totalPayable)}</p>
              </div>
            </div>
            <p className="small muted">
              {quote.rateLabel}: <strong>{quote.ratePct}%</strong> · Term: {quote.termMonths} months · Vehicle: {fmt(quote.vehiclePrice)}
            </p>
            <div className="inline-disclosure">
              <strong>Early settlement:</strong> {quote.earlySettlementRules}
            </div>
            <button className="btn btn-primary" onClick={() => setStep('contract')}>Continue to contract</button>
          </div>
        </>
      )}

      {step === 'contract' && quote && (
        <div className="card">
          <h3>Review your contract</h3>
          <p className="small muted">Scroll to the bottom to enable the signature box.</p>

          <div
            ref={contractRef}
            onScroll={handleScroll}
            style={{
              border: '1px solid var(--line)',
              borderRadius: '8px',
              padding: '1.25rem',
              height: '320px',
              overflowY: 'auto',
              background: '#fafafa',
              fontFamily: 'Georgia, serif',
              fontSize: '0.92rem',
              lineHeight: 1.6,
            }}
          >
            <ContractBody brand={brand} mode={mode} quote={quote} />
          </div>

          <div className="field" style={{ marginTop: '1rem' }}>
            <label>Type your full name to sign</label>
            <input
              value={signatureName}
              onChange={e => setSignatureName(e.target.value)}
              placeholder="Your legal name"
              disabled={!scrolledToBottom}
            />
          </div>

          {!scrolledToBottom && (
            <p className="small muted">Scroll to the bottom of the contract to enable signature.</p>
          )}

          <button
            className="btn btn-primary"
            disabled={!scrolledToBottom || !signatureName.trim() || busy}
            onClick={sign}
          >
            {busy ? 'Signing…' : 'Sign and execute'}
          </button>
        </div>
      )}

      {step === 'done' && contract && (
        <div className="card">
          <h3>Contract executed ✓</h3>
          <p>Contract ID: <code>{contract.contractId}</code></p>
          <p className="small muted">Signed at {new Date(contract.signedAt).toLocaleString()}</p>
          <a
            href={`/api/contracts/${contract.contractId}/download`}
            className="btn btn-primary"
            target="_blank" rel="noreferrer"
          >
            Download contract
          </a>{' '}
          <Link to="/chat" className="btn btn-secondary">Ask a question</Link>
        </div>
      )}
    </div>
  );
}

// ContractBody — Checkpoint 10. One template, mode flag picks the clauses.
function ContractBody({ brand, mode, quote }) {
  const entity = brand.entities[mode.jurisdiction];
  const isIslamic = mode.mode === 'islamic';

  return (
    <article>
      <h4 style={{ marginTop: 0 }}>{quote.productName}</h4>
      <p><strong>Lessor:</strong> {entity.legalName}<br />
      <strong>Lessee:</strong> [Your name on signature]<br />
      <strong>Regulator reference:</strong> {entity.regulatorReference}</p>

      <h4>1. Subject of the agreement</h4>
      {isIslamic ? (
        <p>This is an <strong>Ijara wa Iqtina</strong> (lease ending in ownership) agreement under AAOIFI Sharia Standards.
        The Lessor purchases the asset (Vehicle, valued at {entity.currencySymbol}{quote.vehiclePrice.toLocaleString()}) and leases it to the Lessee for {quote.termMonths} months,
        with title transferring at the end of the term subject to the terms herein.</p>
      ) : (
        <p>This is a conventional auto lease agreement governed by the law of {mode.jurisdiction === 'uk' ? 'England and Wales' : 'the United Arab Emirates'}.
        The Lessor leases the Vehicle (valued at {entity.currencySymbol}{quote.vehiclePrice.toLocaleString()}) to the Lessee for {quote.termMonths} months,
        with optional purchase at the end of the term per clause 6.</p>
      )}

      <h4>2. Payments</h4>
      <p>The Lessee shall pay the Lessor <strong>{entity.currencySymbol}{quote.monthlyPayment.toLocaleString()}</strong> per month for {quote.termMonths} months.</p>
      {isIslamic
        ? <p><strong>Profit rate:</strong> {quote.ratePct}% per annum. This is not interest (riba); it is a pre-agreed profit component approved by the {brand.modes.islamic.sharia.supervisoryBoardLabel}.</p>
        : <p><strong>APR:</strong> {quote.ratePct}%. Calculation method: monthly compounding, annual basis.</p>}

      <h4>3. Early settlement</h4>
      <p>{quote.earlySettlementRules}</p>

      <h4>4. Compliance and disclosures</h4>
      <p>This agreement is made in compliance with:</p>
      <ul>
        {mode.modeConfig.disclosureSet.map(d => <li key={d}>{d.toUpperCase()}</li>)}
      </ul>

      {isIslamic && (
        <>
          <h4>5. Sharia governance</h4>
          <p>This product structure has been reviewed and approved by the {brand.modes.islamic.sharia.supervisoryBoardLabel} prior to execution.
          Any dispute regarding Sharia compliance shall be referred to the Board before any conventional dispute resolution.</p>
        </>
      )}

      <h4>{isIslamic ? '6' : '5'}. Governing law and jurisdiction</h4>
      <p>This agreement shall be governed by the laws of {mode.jurisdiction === 'uk' ? 'England and Wales' : 'the United Arab Emirates'} and subject to the jurisdiction of its courts{isIslamic ? ', save for Sharia-specific disputes as per clause 5' : ''}.</p>

      <h4>{isIslamic ? '7' : '6'}. Data protection</h4>
      <p>Your personal data is processed under {mode.jurisdiction === 'uk' ? 'the UK Data Protection Act 2018' : 'UAE Federal Decree-Law No. 45 of 2021 (PDPL)'}.
      Lawful basis: Article 6(1)(b) — performance of a contract.</p>

      <h4>End of agreement</h4>
      <p>You may now sign above. Your typed name acts as your signature and will be timestamped with the moment of submission.</p>
    </article>
  );
}

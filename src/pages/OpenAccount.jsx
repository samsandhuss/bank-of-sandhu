import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBrand } from '../lib/BrandContext.jsx';
import { useMode } from '../lib/ModeContext.jsx';

// Block B — account opening with KYC + inline AML disclosure (Checkpoint 9).

export default function OpenAccount() {
  const brand = useBrand();
  const mode = useMode();
  const [step, setStep] = useState('init'); // init -> kyc -> kyc-result -> done
  const [applicationId, setApplicationId] = useState(null);
  const [identity, setIdentity] = useState({ fullName: '', dob: '', address: '', idNumber: '' });
  const [kycResult, setKycResult] = useState(null);
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Start application immediately on mount, prefill in demo mode.
  useEffect(() => {
    if (!mode.isComplete) return;
    fetch('/api/onboarding/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode: mode.mode, jurisdiction: mode.jurisdiction }),
    })
      .then(r => r.json())
      .then(d => {
        setApplicationId(d.applicationId);
        if (d.prefilledUser) {
          setIdentity({
            fullName: d.prefilledUser.name || '',
            dob: d.prefilledUser.dob || '1985-06-15',
            address: mode.jurisdiction === 'uk'
              ? d.prefilledUser.ukAddress || ''
              : d.prefilledUser.uaeAddress || '',
            idNumber: mode.jurisdiction === 'uk' ? 'NINO QQ 12 34 56 D' : 'EID 784-1985-1234567-1',
          });
        }
        setStep('kyc');
      })
      .catch(e => setError(e.message));
  }, [mode.mode, mode.jurisdiction]);

  if (!mode.isComplete) {
    return <div className="card"><p>Please <Link to="/mode">pick a mode and jurisdiction</Link> first.</p></div>;
  }

  const submitKyc = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const r = await fetch('/api/kyc/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId, identity }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || 'KYC failed');
      setKycResult(d);
      setStep('kyc-result');
    } catch (e) {
      setError(e.message);
    } finally {
      setSubmitting(false);
    }
  };

  const openAccount = async () => {
    setSubmitting(true);
    try {
      const r = await fetch('/api/accounts/open', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || 'Open failed');
      setAccount(d);
      setStep('done');
    } catch (e) {
      setError(e.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Open your {mode.modeConfig.productTerminology.account.toLowerCase()}</h2>
      <p className="muted">
        With {brand.entities[mode.jurisdiction].legalName}. Currency: {brand.entities[mode.jurisdiction].currency}.
      </p>

      {error && <div className="card" style={{ color: '#b00' }}>Error: {error}</div>}

      {step === 'init' && <div className="card">Preparing your application…</div>}

      {step === 'kyc' && (
        <div className="card">
          <h3>Verify your identity</h3>
          <p className="muted small">Demo mode — fields are prefilled. You can edit before submitting.</p>

          <div className="field">
            <label>Full name</label>
            <input value={identity.fullName} onChange={e => setIdentity({ ...identity, fullName: e.target.value })} />
          </div>

          <div className="field-row">
            <div className="field">
              <label>Date of birth</label>
              <input type="date" value={identity.dob} onChange={e => setIdentity({ ...identity, dob: e.target.value })} />
            </div>
            <div className="field">
              <label>{mode.jurisdiction === 'uk' ? 'National Insurance Number' : 'Emirates ID'}</label>
              <input value={identity.idNumber} onChange={e => setIdentity({ ...identity, idNumber: e.target.value })} />
            </div>
          </div>

          <div className="field">
            <label>Address</label>
            <input value={identity.address} onChange={e => setIdentity({ ...identity, address: e.target.value })} />
          </div>

          {/* Checkpoint 9 — inline disclosure at the decision point. */}
          <div className="inline-disclosure">
            <strong>What happens when you submit:</strong> We screen your details against sanctions, PEP and watchlists in line with{' '}
            {mode.jurisdiction === 'uae'
              ? 'UAE Federal Decree-Law 20 of 2018 (AML/CFT)'
              : 'the UK Money Laundering Regulations 2017'}
            {' '}and the FATF Recommendations. Lawful basis: <strong>Article 6(1)(c) — legal obligation</strong>.
            <details>
              <summary>Show full regulatory wording</summary>
              <p className="small">
                Reference: <code>docs/compliance/{mode.jurisdiction === 'uae' ? 'cbuae.md' : 'fca.md'}</code>. Full Customer Due Diligence (CDD) procedures apply.
                We may request additional documents if your initial screening returns ambiguous results.
              </p>
            </details>
          </div>

          <button className="btn btn-primary" disabled={submitting} onClick={submitKyc}>
            {submitting ? 'Submitting…' : 'Submit and verify'}
          </button>
        </div>
      )}

      {step === 'kyc-result' && kycResult && (
        <div className="card">
          <h3>Identity verified ✓</h3>
          <p className="status-good">KYC result: pass</p>
          <div className="inline-disclosure">
            <strong>{kycResult.amlDisclosure.short}</strong>
            <br />
            <span className="small muted">Lawful basis: {kycResult.amlDisclosure.lawfulBasis}</span>
          </div>
          <button className="btn btn-primary" disabled={submitting} onClick={openAccount}>
            {submitting ? 'Opening…' : 'Open my account'}
          </button>
        </div>
      )}

      {step === 'done' && account && (
        <div className="card">
          <h3>You're all set.</h3>
          <p>Your new <strong>{mode.modeConfig.productTerminology.account}</strong> is open.</p>
          <p className="small">Account number: <code>{account.accountNumber}</code></p>
          <div className="inline-disclosure">
            <strong>Cooling-off period:</strong> You can close this account without charge within 14 days under
            {mode.jurisdiction === 'uae' ? ' CBUAE Consumer Protection Standards' : ' the UK Distance Marketing Regulations'}.
          </div>
          <Link to="/products" className="btn btn-secondary">Back to products</Link>{' '}
          <Link to="/lease" className="btn btn-primary">Now lease a car</Link>
        </div>
      )}
    </div>
  );
}

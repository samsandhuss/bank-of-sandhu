import React, { useState, useEffect } from 'react';

const KEY = 'sandhu.cookie-consent.v1';

export default function CookieBanner() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored) setConsent(JSON.parse(stored));
    } catch (_) { /* ignore */ }
  }, []);

  if (consent) return null;

  const decide = (choice) => {
    const value = { ...choice, ts: new Date().toISOString() };
    try { localStorage.setItem(KEY, JSON.stringify(value)); } catch (_) {}
    setConsent(value);
  };

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p>
        We use strictly necessary cookies to make this prototype work. Analytics and marketing cookies are off by default and require your opt-in.
        Your choice is recorded under <strong>UK GDPR / UAE PDPL</strong> with timestamp.
      </p>
      <div className="actions">
        <button className="btn btn-ghost" onClick={() => decide({ necessary: true, analytics: false, marketing: false })}>
          Necessary only
        </button>
        <button className="btn btn-primary" onClick={() => decide({ necessary: true, analytics: true, marketing: true })}>
          Accept all
        </button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useBrand } from '../lib/BrandContext.jsx';

// Block E — chat grounded in docs/compliance/.
// Shows the user's question, the bot's answer, the citations, and (optionally)
// the chunks that were retrieved. The retrieval panel is gold for interview
// demos: it makes RAG visible and explains the answer's provenance.

export default function Chat() {
  const brand = useBrand();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [showRetrieval, setShowRetrieval] = useState(false);
  const samples = brand.demoMode?.chatbotSampleQuestions || [];

  const send = async (q) => {
    if (!q.trim()) return;
    setMessages(m => [...m, { role: 'user', text: q }]);
    setInput('');
    setBusy(true);
    try {
      const r = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q }),
      });
      const d = await r.json();
      setMessages(m => [...m, {
        role: 'bot',
        text: d.answer,
        citations: d.citations || [],
        retrieved: d.retrieved || [],
        refused: d.refused,
        noApiKey: d.noApiKey,
        topScore: d.topScore,
      }]);
    } catch (e) {
      setMessages(m => [...m, { role: 'bot', text: `Error: ${e.message}`, citations: [] }]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <h2>Ask {brand.brand.shortName}</h2>
      <p className="muted small">
        Questions about your products, contracts, fees, or how we handle your data — grounded in our compliance docs.
        Answers cite their source. If a question isn't covered, the assistant says so.
      </p>

      <div className="card" style={{ minHeight: '300px' }}>
        {messages.length === 0 && (
          <>
            <p className="muted small">Try one of these:</p>
            <ul style={{ paddingLeft: '1.2rem' }}>
              {samples.map(q => (
                <li key={q} style={{ marginBottom: '0.4rem' }}>
                  <button className="btn btn-ghost" style={{ padding: '0.2rem 0.4rem', textAlign: 'left' }} onClick={() => send(q)}>
                    {q}
                  </button>
                </li>
              ))}
            </ul>
            <p className="muted small" style={{ marginTop: '1rem' }}>
              Or try something off-topic (e.g. "what's the weather?") to see the refusal in action.
            </p>
          </>
        )}
        {messages.map((m, i) => (
          <div key={i} style={{
            marginBottom: '0.8rem',
            padding: '0.75rem 1rem',
            background: m.role === 'user' ? 'rgba(27, 58, 87, 0.06)' : '#f7f7f3',
            borderRadius: '8px',
          }}>
            <strong>{m.role === 'user' ? 'You' : brand.brand.shortName}:</strong>{' '}
            <span style={{ whiteSpace: 'pre-wrap' }}>{m.text}</span>

            {m.role === 'bot' && m.refused && (
              <div className="small muted" style={{ marginTop: '0.4rem', fontStyle: 'italic' }}>
                Refusal triggered — question scored too low against the compliance corpus.
              </div>
            )}

            {m.role === 'bot' && m.noApiKey && (
              <div className="small muted" style={{ marginTop: '0.4rem', fontStyle: 'italic', color: '#a06000' }}>
                No ANTHROPIC_API_KEY configured — showing top retrieved chunk only.
              </div>
            )}

            {m.citations?.length > 0 && (
              <div className="small muted" style={{ marginTop: '0.4rem' }}>
                Sources:{' '}
                {m.citations.map(c => (
                  <code key={c} style={{ marginRight: '0.4rem', padding: '0.1rem 0.3rem', background: '#eee', borderRadius: '3px' }}>
                    docs/compliance/{c}
                  </code>
                ))}
              </div>
            )}

            {m.retrieved?.length > 0 && showRetrieval && (
              <div className="small muted" style={{ marginTop: '0.4rem', padding: '0.5rem', background: '#f0f0e8', borderRadius: '4px' }}>
                <strong>Retrieval debug:</strong>
                <ul style={{ margin: '0.2rem 0', paddingLeft: '1.2rem' }}>
                  {m.retrieved.map((r, ri) => (
                    <li key={ri}>{r.source} <span className="muted">(score {r.score})</span></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="field" style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            placeholder="Ask anything…"
            style={{ flex: 1 }}
            disabled={busy}
          />
          <button className="btn btn-primary" disabled={busy || !input.trim()} onClick={() => send(input)}>
            {busy ? 'Thinking…' : 'Send'}
          </button>
        </div>
        <label className="small muted" style={{ marginTop: '0.4rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
          <input type="checkbox" checked={showRetrieval} onChange={e => setShowRetrieval(e.target.checked)} />
          Show retrieval debug (which chunks were matched)
        </label>
      </div>
    </div>
  );
}

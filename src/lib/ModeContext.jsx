import React, { createContext, useContext, useEffect, useState } from 'react';
import { useBrand } from './BrandContext.jsx';

// ModeContext — owns the user's "neutral or Islamic" choice plus their
// jurisdiction (UK or UAE). These two flags drive every product variant,
// fee label, contract template, and disclosure set in the app.
//
// TEACH inline (Checkpoint 7): this is the Sharia Ruleset Engine in
// miniature. Flip the mode flag → terminology changes, products change,
// disclosures change, contract templates change. One flag, end-to-end effect.

const ModeContext = createContext(null);

const STORAGE_KEY = 'sandhu.mode.v1';

export function ModeProvider({ children }) {
  const brand = useBrand();
  const [state, setState] = useState(() => {
    // Restore from localStorage if we have consent. For now we always restore
    // since the prototype declares this as essential UX state (not analytics).
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch (_) { /* ignore */ }
    return { mode: null, jurisdiction: null };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) { /* ignore */ }
  }, [state]);

  const availableModes = Object.keys(brand.modes || {});
  const availableJurisdictions = Object.keys(brand.entities || {});

  const setMode = (mode) => setState(s => ({ ...s, mode }));
  const setJurisdiction = (jurisdiction) => setState(s => ({ ...s, jurisdiction }));
  const reset = () => setState({ mode: null, jurisdiction: null });

  // Convenience accessors
  const modeConfig = state.mode ? brand.modes[state.mode] : null;
  const entity = state.jurisdiction ? brand.entities[state.jurisdiction] : null;
  const isComplete = Boolean(state.mode && state.jurisdiction);

  return (
    <ModeContext.Provider value={{
      ...state,
      modeConfig,
      entity,
      isComplete,
      availableModes,
      availableJurisdictions,
      setMode,
      setJurisdiction,
      reset,
    }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error('useMode must be used within ModeProvider');
  return ctx;
}

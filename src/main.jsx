import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

// Hydrate the server-rendered HTML (if SSG pre-rendered it)
// or do a fresh client-side render in development.
// Using hydrateRoot preserves the SSG HTML and attaches React events to it.
const rootEl = document.getElementById('root');

if (rootEl.hasChildNodes()) {
  // SSG pre-rendered HTML exists → hydrate (attach React to existing DOM)
  ReactDOM.hydrateRoot(
    rootEl,
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  // No SSR content (dev mode) → normal client render
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}

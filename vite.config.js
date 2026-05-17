import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Vite config — frontend serves on 5173, API calls proxy to BFF on 3001.
//
// TEACH inline: the proxy is the BFF pattern in practice. Frontend never calls
// external APIs directly. Everything goes through `/api/*` → BFF → outside world.
// This is what lets you (a) hide API keys, (b) normalise contracts, (c) swap
// vendors without changing the frontend.

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const brand = env.VITE_BRAND || env.BRAND || 'sandhu';

  return {
    plugins: [react()],
    define: {
      // Make the active brand visible to the frontend at build time.
      __BRAND__: JSON.stringify(brand),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@brands': path.resolve(__dirname, 'brands'),
        '@docs': path.resolve(__dirname, 'docs'),
      },
    },
    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
  };
});

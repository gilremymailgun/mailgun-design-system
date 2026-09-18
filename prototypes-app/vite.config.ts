import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

// @ds points at the Storybook design system's src/ so prototype pages can
// import real components/tokens directly (e.g. '@ds/components/Button/Button').
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ds': path.resolve(dirname, '../src'),
    },
  },
  server: {
    port: 5173,
  },
});

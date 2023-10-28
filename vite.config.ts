import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), eslint()],
  resolve: {
    alias: [
      { find: '@core', replacement: path.resolve(__dirname, 'src', '_core') },
      { find: '@src', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  define: {
    'process.env': {},
  },
});

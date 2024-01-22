import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tsconfigPaths(), svgr()],
  resolve: {
    alias: {
      '@icons': resolve(__dirname, './src/assets/icons'),
      '@components': resolve(__dirname, './src/components'),
    },
  },
});

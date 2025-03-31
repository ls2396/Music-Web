import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  // base: process.env.NODE_ENV === "production" ? "/Music-Web/" : "/",
  base: "/Music-Web/",
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  async closeBundle() {
    copyFileSync('dist/index.html', 'dist/404.html')
  },
});

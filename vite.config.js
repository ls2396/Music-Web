import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Music-Web/",
  plugins: [react()],
  build: {
    outDir: "dist",
  }
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // base: process.env.NODE_ENV === "production" ? "/Music-Web/" : "/",
  base: "/Music-Web/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});

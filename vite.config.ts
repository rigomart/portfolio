import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@honkhonk/vite-plugin-svgr";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@sections": path.resolve(__dirname, "./src/sections"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@typing": path.resolve(__dirname, "./src/typing"),
      "@config": path.resolve(__dirname, "./src/config"),
    },
  },
  plugins: [svgr(), react()],
});

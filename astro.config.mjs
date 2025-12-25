// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://rigos.dev",
  experimental: {
    fonts: [
      {
        name: "Open Sans",
        cssVariable: "--font-open-sans",
        provider: fontProviders.google(),
        subsets: ["latin"],
        weights: [400, 500],
        styles: ["normal"],
      },
      {
        name: "Geist Mono",
        cssVariable: "--font-geist-mono",
        provider: fontProviders.google(),
        subsets: ["latin"],
        weights: ["100 900"],
        styles: ["normal"],
        fallbacks: ["monospace"],
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

// @ts-check

import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://rigos.dev",

  experimental: {
    fonts: [
      {
        name: "Open Sans",
        cssVariable: "--font-open-sans",
        fallbacks: ["sans-serif"],
        provider: fontProviders.google(),
        subsets: ["latin"],
        weights: ["400 600"],
        styles: ["normal"],
      },
      {
        name: "Geist Mono",
        cssVariable: "--font-geist-mono",
        fallbacks: ["monospace"],
        provider: fontProviders.google(),
        subsets: ["latin"],
        weights: ["100 500"],
        styles: ["normal"],
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24 * 7, // 1 week
    }
  }),
});

import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://devlog-jose.vercel.app",
  integrations: [svelte(), tailwind()],
  image: {
    domains: ["firebasestorage.googleapis.com"],
    remotePatterns: [{ protocol: "https", hostname: "firebasestorage.googleapis.com" }],
  },
});

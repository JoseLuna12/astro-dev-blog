import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
// firebasestorage.googleapis.com

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  image: {
    domains: ["firebasestorage.googleapis.com"],
    remotePatterns: [{ protocol: "https" }]
  }
});
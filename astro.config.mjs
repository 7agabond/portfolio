import tokencss from "@tokencss/astro";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tokencss()]
});
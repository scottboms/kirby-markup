// kirbyup.config.js
import { defineConfig } from "kirbyup/config";

export default defineConfig({
  vite: {
    build: {
      // easiest debugging path:
      minify: true, // esbuild
      sourcemap: false,
    },
  },
});

import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';
import tailwindcss from '@tailwindcss/vite';
import globs from 'rollup-plugin-globlin';
import cleanup from '@by-association-only/vite-plugin-shopify-clean';

export default defineConfig({
  esbuild: {
    drop: ['console', 'debugger'],
  },
  plugins: [
    cleanup(),
    shopify(),
    tailwindcss(),
    globs.default({
      globs: ['frontend/web/**/sections/*.liquid'],
      dest: 'sections',
      clean: false,
    }),
    globs.default({
      globs: ['frontend/web/**/snippets/*.liquid'],
      dest: 'snippets',
      clean: false,
    }),
  ],
  css: {
    devSourcemap: true,
  },
  build: {
    emptyOutDir: false,
  },
});

import { defineConfig, transformWithEsbuild } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: "../dist",
    emptyOutDir: true,  // remove dist folder contents at each save
  },
});
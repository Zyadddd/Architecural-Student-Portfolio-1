import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        a2project: 'src/a2project.html',
        a3project: 'src/a3project.html' // Reverted to the previous state
      }
    }
  }
});

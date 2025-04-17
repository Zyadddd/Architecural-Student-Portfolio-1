import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        a2project: 'src/a2project.html',
        a3project: 'src/a3project.html', // Ensure this file exists
        a4project: 'src/a4project.html',  // Add a4project to the build
        a5project: 'src/a5project.html'  // Add a5project to the build
      }
    }
  }
});

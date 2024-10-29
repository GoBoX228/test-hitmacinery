import { defineConfig } from 'vite';
import vitePugPlugin from 'vite-plugin-pug-transformer';

export default defineConfig({
  base: '',
  outDir: 'dist',
  assetsDir: 'assets',
  plugins: [vitePugPlugin()],
  server: {
    watch: {
      ignored: [
        '!src/components/**/*.pug'
      ]
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        second: './second.html'
      }
    }
  }
});

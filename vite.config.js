import { defineConfig } from 'vite'
import 'url-polyfill';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['source-map-js', 'url'],
    },
  },
})

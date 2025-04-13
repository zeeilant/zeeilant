import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      '003c-49-36-26-12.ngrok-free.app',
      '.ngrok-free.app',
      'localhost',
      '127.0.0.1',
      'zeeilant.com',
      'https://zeeilant.github.io/zeeilant/'
    ]
  },
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})

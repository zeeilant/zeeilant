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
      '.ngrok-free.app' // This will allow all ngrok-free.app subdomains
    ]
  },
  base: '/zeeilant-website/', // Replace with your repository name
})

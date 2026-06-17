import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/nodejs_backend_devoloper_cv/',
  build: {
    outDir: './build',
    emptyOutDir: true
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Relative base so the static build runs from any Hostinger subfolder or root.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        services: resolve(process.cwd(), 'services/index.html'),
        projects: resolve(process.cwd(), 'projects/index.html'),
        financial: resolve(process.cwd(), 'financial-statements/index.html'),
        privacy: resolve(process.cwd(), 'privacy-policy/index.html'),
        contact: resolve(process.cwd(), 'contact/index.html'),
      },
    },
  },
})

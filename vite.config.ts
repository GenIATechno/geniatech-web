import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern browsers for smaller output
    target: 'es2020',
    // Enable CSS code splitting
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Manual chunk splitting to avoid large bundles blocking render
        manualChunks: {
          // React core — tiny, always needed
          'vendor-react': ['react', 'react-dom'],
          // Router — loaded on every page
          'vendor-router': ['react-router-dom'],
          // Framer Motion is heavy (~100KB gzip) — isolate it
          'vendor-framer': ['framer-motion'],
          // Icons bundle
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
})

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change base to '/your-repo-name/' for GitHub Pages
  // or leave as '/' for custom domain / Vercel / Netlify
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
      },
    },
  },
})

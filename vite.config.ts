import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base works for GitHub project Pages and Netlify (root) previews.
// Expected GH Pages URL after rename:
// https://Dylan-PacittoPotapczuk.github.io/Dylan-Pacitto-Potapczuk-Portfolio/
export default defineConfig({
  plugins: [react()],
  base: './',
})

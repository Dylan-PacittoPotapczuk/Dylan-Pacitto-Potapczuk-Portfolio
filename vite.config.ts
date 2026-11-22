import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project Pages URL: https://Dylan-PacittoPotapczuk.github.io/Dylan-Pacitto-Potapczuk-Portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/Dylan-Pacitto-Potapczuk-Portfolio/',
})

import { defineConfig } from 'vite'
import react from '@reactjs/vite-plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
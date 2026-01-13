import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Importa aqui

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  
  ],
  server: {
    host: true, // Ou '0.0.0.0' (você já fez isso com o --host)
    port: 5173,
    watch: {
      usePolling: true, // <--- ISSO ativa o Hot Reload no Docker
    },
  },
})

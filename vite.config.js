// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  esbuild: {
    loader: 'jsx', // Cargar archivos `.js` como `.jsx`
    include: [
      'src/**/*.js', // Incluir todos los archivos `.js` en `src`
    ],
    exclude: [],
  },
})

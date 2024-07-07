import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  esbuild: {
    loader: 'jsx',
    include: [
      'src/**/*.jsx', // Incluir todos los archivos `.jsx` en `src`
    ],
    exclude: [],
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Only split chunks for client build — SSR externalizes these anyway
        ...(isSsrBuild
          ? {}
          : {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              helmet: ['react-helmet-async'],
            },
          }),
      },
    },
    // Enable minification for client builds
    minify: isSsrBuild ? false : 'terser',
    terserOptions: isSsrBuild
      ? {}
      : {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    chunkSizeWarningLimit: 600,
  },
}))

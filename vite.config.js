import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // ─── Dev Server ───────────────────────────────────────────────────────────
  server: {
    watch: {
      ignored: [
        '**/.bg-shell/**',
        '**/.gsd/**',
        '**/*.md',
        '**/public/videos fita/**',
        '**/public/videoshome*',
        '**/public/events/**',
      ],
    },
  },

  // ─── Production Build Optimizations ──────────────────────────────────────
  build: {
    // Target modern browsers (smaller output, no legacy polyfills)
    target: 'es2020',

    // Warn when a chunk exceeds 500 kB
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        // Manual chunk splitting — keeps vendor code out of the app chunk
        manualChunks: {
          // React runtime
          'vendor-react': ['react', 'react-dom'],
          // Routing
          'vendor-router': ['react-router-dom'],
          // Animation library (heaviest dep)
          'vendor-framer': ['framer-motion'],
          // UI icons
          'vendor-icons': ['lucide-react'],
          // SEO
          'vendor-helmet': ['react-helmet-async'],
        },
        // Stable file names with content hash for long-term caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },

    // Generate sourcemaps for production debugging (set to false to reduce size)
    sourcemap: false,

    // Enable CSS code-splitting (each chunk gets its own CSS file)
    cssCodeSplit: true,

    // Minify with esbuild (default, fastest)
    minify: 'esbuild',
  },
})

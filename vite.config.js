import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    nodePolyfills({
      // To add polyfills for Node.js built-in modules
      include: ['crypto', 'stream', 'util'],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
  define: {
    // Define global replacements for build time
    global: 'globalThis',
    'process.env': process.env,
  },
  resolve: {
    alias: {
      // Add alias for crypto if needed
      crypto: 'crypto-browserify',
    },
  },
  build: {
    target: 'es2020', // Target modern ES for better compatibility
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
})
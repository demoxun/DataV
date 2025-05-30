import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // Make sure path is imported

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, 'src/index.ts'), // Entry point for the library
      name: 'DataV', // Global variable name when used in a UMD build
      formats: ['es', 'umd', 'cjs'], // Specify output formats
      fileName: (format) => `datav.${format}.js` // Output file names (e.g., datav.es.js, datav.umd.js)
    },
    rollupOptions: {
      // Ensure Vue is externalized and not bundled into the library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized dependencies
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

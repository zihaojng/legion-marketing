import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const targetPackage = process.env.TARGET_PACKAGE || 'brochure-2025';
  console.log(`Vite is targeting package: ${targetPackage}`);

  return {
    publicDir: path.resolve(__dirname, `../packages/${targetPackage}/public`),
    resolve: {
      alias: {
        '@current-package': path.resolve(__dirname, `../packages/${targetPackage}`),
      },
    },
    plugins: [react()],
    define: {
      'process.env.TARGET_PACKAGE': JSON.stringify(targetPackage),
    }
  }
})

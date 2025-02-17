import { defineConfig } from 'vite'

export default defineConfig(async () => {
  const tailwindcss = (await import('@tailwindcss/vite')).default
  return {
    root: 'client',
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      exclude: ['@tailwindcss/vite']
    }
  }
})
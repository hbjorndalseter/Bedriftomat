import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    proxy: {
      "/api": "http://localhost:3000" // This makes API calls work in local development
    }
  },
  build: {
    outDir: "dist" // Ensures Vercel knows where to find the frontend build
  }
});
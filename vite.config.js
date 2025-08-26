import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/Matrix-Multiplication/',
    build: {
        outDir: 'docs', // Build to docs folder for GitHub Pages
    }
});

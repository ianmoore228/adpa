import { defineConfig } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths';
import path from "path";
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "images": path.resolve(__dirname, "src", "assets", "images"),
    },
  },
  plugins: [react(), tsconfigPaths()],
});
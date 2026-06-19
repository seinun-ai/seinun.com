import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Respect the PORT assigned by the preview harness; fall back to Vite's default.
    port: Number(process.env.PORT) || 5173,
    host: "localhost",
  },
});

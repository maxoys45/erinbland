import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tailwindcss()],
  // For working while on VPN.
  server: {
    host: "0.0.0.0", // Bind to all available network interfaces
    port: 3000, // Default port, change if necessary
  },
});

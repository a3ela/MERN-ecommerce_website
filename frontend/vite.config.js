import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
// The Vite configuration file is where you can configure the development server and plugins. In this case, we're using the react plugin and setting up a proxy for the API requests. This is necessary because the frontend and backend are running on different ports. The proxy will forward requests from /api to the backend server running on port 5000. This way, we can avoid CORS issues when making API requests from the frontend.

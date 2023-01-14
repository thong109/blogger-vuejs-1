import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";

// https://vitejs.dev/config/const 
const path = require("path");
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [
      ".mjs",
      ".js",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
      ".vue",
      ".scss",
    ],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      json2csv: "json2csv/dist/json2csv.umd.js",
      '~bootstrap': 'bootstrap'
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});

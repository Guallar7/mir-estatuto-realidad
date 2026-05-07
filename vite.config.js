import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: "/mir-estatuto-realidad/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, "index.html"),
        infografia: resolve(rootDir, "infografia.html"),
      },
    },
  },
});

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
        reivindicaciones: resolve(rootDir, "reivindicaciones.html"),
        anteproyecto: resolve(rootDir, "anteproyecto.html"),
        mir: resolve(rootDir, "mir.html"),
        noticias: resolve(rootDir, "noticias.html"),
        fuentes: resolve(rootDir, "fuentes.html"),
        argumentario: resolve(rootDir, "argumentario.html"),
        infografia: resolve(rootDir, "infografia.html"),
      },
    },
  },
});

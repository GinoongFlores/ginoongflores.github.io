import { defineConfig } from "astro/config";

// Root user site (ginoongflores.github.io) -> served at "/", no base needed.
// Static output lands in ./dist, which the existing Pages workflow uploads.
export default defineConfig({
	site: "https://ginoongflores.github.io",
});

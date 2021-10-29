require("esbuild").build({
  entryPoints: ["src/index.js"],
  bundle: true,
  loader: { ".js": "jsx" },
  outdir: "dist",
  minify: true,
});

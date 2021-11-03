const fs = require("fs/promises");
const { Buffer } = require("buffer");

require("esbuild")
  .build({
    entryPoints: ["src/index.js"],
    bundle: true,
    loader: { ".js": "jsx" },
    outdir: "dist",
    minify: true,
  })
  .then(async () => {
    const buffer = await fs.readFile("./dist/index.js");
    fs.writeFile(
      "./dist/script.html",
      Buffer.concat([
        Buffer.from("<script>\n"),
        buffer,
        Buffer.from("\n</script>"),
      ])
    );
  });

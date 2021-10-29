require("esbuild")
  .serve(
    { servedir: "dist" },
    {
      entryPoints: ["src/index.js"],
      bundle: true,
      loader: { ".js": "jsx" },
      outdir: "dist",
    }
  )
  // .then((server) => {
  //   server.stop();
  // });

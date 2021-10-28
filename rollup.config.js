import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import serve from "rollup-plugin-serve";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "esm",
    compact: true,
  },
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
    serve({
      contentBase: "dist",
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
  ],
};

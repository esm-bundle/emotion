import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

function createConfig(format, options = {}) {
  const dir = format === "module" ? "esm" : format;
  const { min = false } = options;

  return {
    input: `src/index.js`,
    output: {
      file: `${dir}/emotion${min ? ".min" : ""}.js`,
      sourcemap: true,
      format,
    },
    plugins: [
      nodeResolve(),
      replace({
        values: {
          "process.env.NODE_ENV": JSON.stringify(
            min ? "production" : "development"
          ),
        },
      }),
      min && terser(),
    ],
  };
}

export default [
  createConfig("module"),
  createConfig("module", { min: true }),
  createConfig("system"),
  createConfig("system", { min: true }),
];

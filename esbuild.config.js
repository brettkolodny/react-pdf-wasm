import * as esbuild from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

await esbuild.build({
	entryPoints: ["src/pdf.jsx"],
	bundle: true,
	jsx: "automatic",
	platform: "browser",
	format: "esm",
	outfile: "build/pdf.js",
	plugins: [
		polyfillNode({
			// Options (optional)
		}),
	],
});

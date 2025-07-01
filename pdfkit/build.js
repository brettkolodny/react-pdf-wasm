import * as esbuild from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

await esbuild.build({
	entryPoints: ["pdfkit/index.js"],
	bundle: true,
	jsx: "automatic",
	platform: "browser",
	format: "esm",
	outfile: "build/pdfkit.js",
	plugins: [
		polyfillNode({
			// Options (optional)
		}),
	],
});

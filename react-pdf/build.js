import * as esbuild from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

await esbuild.build({
	entryPoints: ["react-pdf/index.jsx"],
	bundle: true,
	jsx: "automatic",
	platform: "node",
	format: "esm",
	outfile: "build/pdf.js",
	plugins: [
		polyfillNode({
			polyfills: {
				"fs": true,
				"fs/promises": true,
			}
		}),
	],
	inject: ["react-pdf/stubs.js"],
});

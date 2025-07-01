import PDFDocument from "pdfkit";
import stream from "node:stream";

class WritableBufferStream extends stream.Writable {
	constructor(options) {
		super(options);
		this._chunks = [];
	}

	_write(chunk, enc, callback) {
		this._chunks.push(chunk);
		return callback(null);
	}

	_destroy(err, callback) {
		this._chunks = null;
		return callback(null);
	}

	toBuffer() {
		return Buffer.concat(this._chunks);
	}
}

export const pdfkit = {
	async render() {
		const stream = new WritableBufferStream();

		// Create a document
		const doc = new PDFDocument();
		doc.pipe(stream);

		// Add another page
		doc
			.addPage()
			.fontSize(25)
			.text("Here is some vector graphics...", 100, 100);

		// Draw a triangle
		doc
			.save()
			.moveTo(100, 150)
			.lineTo(100, 250)
			.lineTo(200, 250)
			.fill("#FF3300");

		// Apply some transforms and render an SVG path with the 'even-odd' fill rule
		doc
			.scale(0.6)
			.translate(470, -380)
			.path("M 250,75 L 323,301 131,161 369,161 177,301 z")
			.fill("red", "even-odd")
			.restore();

		// Add some text with annotations
		doc
			.addPage()
			.fillColor("blue")
			.text("Here is a link!", 100, 100)
			.underline(100, 100, 160, 27, { color: "#0000FF" })
			.link(100, 100, 160, 27, "http://google.com/");

		// Finalize PDF file
		doc.end();

		const promise = new Promise((r) => {

			stream.on("finish", () => {
				console.log("finish");
				const buffer = stream.toBuffer();
				r(buffer);
			});
		});

		const buffer = await promise;
		console.log(buffer);

		return buffer;
	},
};

pdfkit.render();

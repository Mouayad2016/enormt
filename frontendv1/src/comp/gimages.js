const fs = require("fs");
const path = require("path");
// The directory containing the image folders
const baseDirectory = "../../.././public/images";

// Read all folders within the base directory
fs.readdir(baseDirectory, { withFileTypes: true }, (err, folders) => {
	if (err) {
		return console.error("Failed to read directory:", err);
	}

	const slidesData = folders
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => {
			const folderPath = path.join(baseDirectory, dirent.name);
			// Read all files in the folder
			const files = fs
				.readdirSync(folderPath)
				.filter((file) => /\.(png|jpg|jpeg)$/i.test(file)) // Filter for image files only
				.map((file) => path.join(folderPath, file));

			return files;
		});

	console.log("const slidesData = ", JSON.stringify(slidesData, null, 2));
});

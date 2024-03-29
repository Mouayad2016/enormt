module.exports = {
	plugins: [
		// restore the Next.js default behavior
		"postcss-flexbugs-fixes",
		[
			"postcss-preset-env",
			{
				autoprefixer: {
					flexbox: "no-2009",
				},
				stage: 3,
				features: {
					"custom-properties": false,
				},
			},
		],
		[
			// configure PurgeCSSW
			"@fullhuman/postcss-purgecss",
			{
				content: [
					"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
					"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
				],
				defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
				safelist: {
					standard: ["html", "body"],
				},
			},
		],
	],
};

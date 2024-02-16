const withSvgr = require("next-svgr");

const nextConfig = {
	// Enables React strict mode for development
	reactStrictMode: true,

	// Disables the "Powered by Vercel" header in the server response (for security reasons)
	poweredByHeader: false,

	async headers() {
		return [
			{
				source: "/assets/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=604800, must-revalidate", // Set a max-age appropriate for your assets
					},
				],
			},
		];
	},
};

module.exports = withSvgr(nextConfig);

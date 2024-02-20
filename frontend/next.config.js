// const withSvgr = require("next-svgr");

// const nextConfig = {
// 	// Enables React strict mode for development
// 	reactStrictMode: true,

// 	// Disables the "Powered by Vercel" header in the server response (for security reasons)
// 	poweredByHeader: false,

// 	async headers() {
// 		return [
// 			{
// 				// Applying cache control to all assets under the /assets directory
// 				source: "/assets/:path*",
// 				headers: [
// 					{
// 						key: "Cache-Control",
// 						// Setting cache control for immutable assets to 1 year
// 						value: "public, max-age=31536000, immutable",
// 					},
// 				],
// 			},
// 			{
// 				// Extend this pattern to other asset directories as needed, for example, for SVG assets handled by SVGR
// 				source: "/images/:path*",
// 				headers: [
// 					{
// 						key: "Cache-Control",
// 						value: "public, max-age=31536000, immutable",
// 					},
// 				],
// 			},
// 			// Add more patterns here if you have other asset types or directories
// 			{
// 				// Cache policy for SSR pages
// 				// Apply this pattern to the specific paths you want to cache, or use '/:path*' for all pages
// 				source: "/:path*",
// 				headers: [
// 					{
// 						key: "Cache-Control",
// 						// This example sets a cache duration of 1 minute with stale-while-revalidate for 59 minutes
// 						value: "public, max-age=60, stale-while-revalidate=3540",
// 					},
// 				],
// 			},
// 		];
// 	},
// };

// module.exports = withSvgr(nextConfig);

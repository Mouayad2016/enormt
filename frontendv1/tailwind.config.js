module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				slideUpDown: "slideUpDown 3s ease-in-out infinite",
			},
			fontFamily: {
				archivo: ["Archivo Black", "sans-serif"],
				caveat: ["Caveat", "cursive"],
				sans: ["Poppins", "sans-serif"],
				kanit: ["Kanit", "sans-serif"],
				notokufi: ["Noto Kufi Arabic", "sans-serif"],
			},
			fontSize: {
				xs: [".75rem", { lineHeight: "1rem" }], // 12px
				sm: [".875rem", { lineHeight: "1.25rem" }], // 14px
				base: ["1rem", { lineHeight: "1.5rem" }], // 16px
				lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
				xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
				"2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
				"3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
				"4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
				"5xl": ["3rem", { lineHeight: "1" }], // 48px
				"6xl": ["4rem", { lineHeight: "1" }], // 64px
				"7xl": ["5rem", { lineHeight: "1" }], // 80px
			},
			keyframes: {
				slideUpDown: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(10px)" },
				},
			},
			writingMode: {
				"vertical-rl": "vertical-rl",
				"vertical-lr": "vertical-lr",
			},
			boxShadow: {
				"custom-inset":
					"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
			},
			colors: {
				"custom-pink": "#faefef",
				"custom-gray": "rgba(209, 213, 219, 0.75)",
				"custom-blue-light-shade": "#e1e1f0",
				"custom-brown": "#b99970",
				"custom-light-brown": "#ecdccc",
				border: "#8697a5",
				"custom-green": "#bcffa5",
				"subtle-white": "rgba(255, 255, 255, 0.5))",
				mulberry: "#7b578d",
				thistle: "#d7c2dc",
			},
			objectPosition: {
				"center-top": "center top",
			},
			transitionProperty: {
				width: "width", // Ensure width transition is available
			},
			scale: {
				0: "0",
				100: "1",
			},
		},
	},
	plugins: [
		require("tailwindcss-rtl"),
		function ({ addUtilities }) {
			addUtilities({
				".vertical-rl": {
					"writing-mode": "vertical-rl",
				},
				".vertical-lr": {
					"writing-mode": "vertical-lr",
				},
			});
		},
	],
};

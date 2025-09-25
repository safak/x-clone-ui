import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xsm: "500px",
				sm: "600px",
				md: "690px",
				lg: "988px",
				xl: "1078px",
				xxl: "1265px",
			},
			colors: {
				textGray: "#71767b",
				textGrayLIGHT: "#e7e9ea",
				borderGray: "#2f3336",
				textBlue: "1d9bf0",
				textGreen: "00ba7c",
				textPink: "f91880",
			},
		},
	},
	plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"custom-black": "var(--black)",
				"custom-orange": "var(--orange)",
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		"./node_modules/flowbite-react/**/*.js",
		"./public/**/*.html",
	],
	theme: {
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
}
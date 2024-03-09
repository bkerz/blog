/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"accent-hover": "rgba(173, 201, 225, 0.15)",
				"accent": "#38709F",
				"dark": "#04111B",
				"light": "#B8D1E5",
				"text": "#B8D1E5",
				"secondary": "#ADC9E1",
			}
		},
	},
	plugins: [],
}

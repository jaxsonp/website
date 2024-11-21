import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			white: '#e5eaff',
			'light-gray': '#b2b6cf',
			primary: 'dodgerblue',
			secondary: '#709775',
			black: '#101010',
			transparent: 'transparent',
		},
		fontFamily: {
			mono: ['monospace'],
			serif: ['serif'],
		},
		screens: {
			sm: '414px',
			md: '768px',
			lg: '1024px',
			xl: '1366px',
		},
		extend: {
			boxShadow: {
				light: '0 6px 32px -12px rgb(255, 255, 255)',
			},
			dropShadow: {
				light: '0 6px 32px -12px rgb(255, 255, 255)',
			},
			borderWidth: {
				'1': '1px',
			},
		},
	},

	plugins: [],
} satisfies Config;

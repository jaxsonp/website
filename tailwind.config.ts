import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			white: '#e5eaff',
			'light-gray': '#c4ceff',
			blue: 'dodgerblue',
			black: '#101010'
		},
		/*fontFamily: {
			mono: ['var(--font-consolas)', 'mono']
		},*/
		screens: {
			sm: '414px',
			md: '768px',
			lg: '1024px',
			xl: '1366px'
		},
		extend: {
			boxShadow: {
				light: '0 6px 32px -12px rgb(255, 255, 255)'
			},
			dropShadow: {
				light: '0 6px 32px -12px rgb(255, 255, 255)'
			},
			borderWidth: {
				'1': '1px'
			}
		}
	},

	plugins: []
} satisfies Config;

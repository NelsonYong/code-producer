import { defineConfig } from 'umi'

export default defineConfig({
	npmClient: 'pnpm',
	tailwindcss: {},
	base: '/code-producer/site/',
	publicPath: '/code-producer/site/',
	plugins: ['@umijs/plugins/dist/tailwindcss'],
	outputPath: 'site',
	history: {
		type: 'browser',
	},
	routes: [
		{
			path: '/',
			name: 'product-view',
			icon: 'home',
			component: './ProductView',
		},
	],
})

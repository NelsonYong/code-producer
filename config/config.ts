import { defineConfig } from 'umi'

export default defineConfig({
	npmClient: 'pnpm',
	tailwindcss: {},
	base: '/code-producer/protable/',
	publicPath: '/code-producer/protable/',
	plugins: ['@umijs/plugins/dist/tailwindcss'],
	outputPath: 'protable',
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

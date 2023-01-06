import { defineConfig } from 'umi'

export default defineConfig({
	npmClient: 'pnpm',
	tailwindcss: {},
	base: '/site/',
	plugins: ['@umijs/plugins/dist/tailwindcss'],
	outputPath: 'site',
	routes: [
		{
			path: '/product-view',
			name: 'product-view',
			icon: 'home',
			component: './ProductView',
		},
	],
})

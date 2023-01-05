import { defineConfig } from 'umi'

export default defineConfig({
	npmClient: 'pnpm',
	tailwindcss: {},
	plugins: ['@umijs/plugins/dist/tailwindcss'],
	routes: [
		{
			path: '/product-view',
			name: 'product-view',
			icon: 'home',
			component: './ProductView',
		},
	],
})

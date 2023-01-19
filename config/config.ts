import { defineConfig } from 'umi'
const { NODE_ENV } = process.env

const config = defineConfig({
	npmClient: 'pnpm',
	tailwindcss: {},
	// base: NODE_ENV === 'production' ? '/code-producer/site/' : '',
	// publicPath: '/code-producer/site/',
	plugins: ['@umijs/plugins/dist/tailwindcss'],
	outputPath: 'site',
	history: {
		type: 'browser',
	},
	define: {
		NODE_ENV,
	},
})

export default NODE_ENV === 'production'
	? Object.assign(
			{},
			{
				...config,
				mpa: {
					template: './docment.html',
					entry: {
						json2ts: 'Json2ProTable/index.tsx',
						json2protable: 'Json2Ts/index.tsx',
						guide: 'Guide/index.tsx',
					},
				},
			}
	  )
	: Object.assign(
			{},
			{
				...config,
				routes: [
					{
						path: '/guide',
						name: '首页',
						icon: 'home',
						component: './Guide',
					},
					{
						path: '/json2ts',
						name: 'json2ts',
						icon: 'home',
						component: './Json2Ts',
					},
					{
						path: '/json2protable',
						name: 'json2protable',
						icon: 'home',
						component: './Json2ProTable',
					},
				],
			}
	  )

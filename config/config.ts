import { defineConfig } from 'umi'

export default defineConfig({
	npmClient: 'pnpm',
	tailwindcss: {},
	base: '/code-producer/site/',
	publicPath: '/code-producer/site/',
	plugins: ['@umijs/plugins/dist/tailwindcss'],
	outputPath: 'site',
	favicons: [
		'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
		'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
		'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
	],
	history: {
		type: 'browser',
	},
	mpa: {
		entry: {
			json2ts: 'Json2ProTable/index.tsx',
			json2protable: 'Json2Ts/index.tsx',
			guide: 'Guide/index.tsx',
		},
	},
})

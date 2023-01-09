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
	mpa: {
		// configFromEntryFile: true,
		// layout: string,
		entry: {
			json2ts: 'Json2ProTable/index.tsx',
			json2protable: 'Json2Ts/index.tsx',
		},
	},
})

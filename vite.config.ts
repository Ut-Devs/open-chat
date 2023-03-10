import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { InlineConfig } from 'vitest'
import type { UserConfig } from 'vite'

interface VitestConfigExport extends UserConfig {
	test: InlineConfig
}

import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			reporter: ['text', 'lcov'],
		},
	},
	publicPath:
		process.env.NODE_ENV === 'production'
			? '/my-project/' // note the trailing slash
			: '/',
	plugins: [vue(), eslintPlugin()],
	base: './',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@views': path.resolve(__dirname, './src/Views'),
			'@router': path.resolve(__dirname, './src/router'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@models': path.resolve(__dirname, './src/models'),
			'@store': path.resolve(__dirname, './src/store'),
		},
	},
} as VitestConfigExport)

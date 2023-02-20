/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: (tag) => {
						return tag.startsWith('router-') // (return true)
					},
				},
			},
		}),
		eslintPlugin(),
	],
	test: {
		globals: true,
		environment: 'jsdom',
	},
	base: process.env.NODE_ENV === 'production' ? '/open-chat/' : './',
	publicDir: 'public',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@views': path.resolve(__dirname, './src/Views'),
			'@router': path.resolve(__dirname, './src/router'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@models': path.resolve(__dirname, './src/models'),
		},
	},
})

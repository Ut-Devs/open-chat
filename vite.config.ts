import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), eslintPlugin()],
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

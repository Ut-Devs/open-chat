module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/base',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	overrides: [{
		files: '*.ts',
		parser: '@typescript-eslint/parser',
	},
	{
		files: '*.vue',
		parser: 'vue-eslint-parser'
	}],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'vue/require-default-prop': 'off',
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'vue/multi-word-component-names': 'off',
	},
}

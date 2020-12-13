module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module', // Allows for the use of imports
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
	}, // to enable features such as async/await
	ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
	extends: ['eslint:recommended'],
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			parser: '@typescript-eslint/parser',
			settings: {
				'import/parsers': {
					'@typescript-eslint/parser': ['.ts', '.tsx'],
				},
				'import/internal-regex': '^@',
				'import/resolver': {
					typescript: {
						alwaysTryTypes: true,
					},
				},
				react: { version: 'detect' },
			},
			env: {
				browser: true,
				node: true,
				es6: true,
			},
			extends: [
				`eslint:recommended`,
				`plugin:@typescript-eslint/recommended`, // TypeScript rules
				`plugin:react/recommended`, // React rules
				`plugin:react-hooks/recommended`, // React hooks rules
				// `plugin:jsx-a11y/recommended`, // Accessibility rules
				`plugin:import/typescript`,
				`prettier/@typescript-eslint`, // Prettier plugin
				`plugin:prettier/recommended`, // Prettier recommended rules
			],
			plugins: [`react-hooks`, `@emotion`, `import`],
			rules: {
				'react/prop-types': 'off', // We will use TypeScript's types for component props instead
				'react/react-in-jsx-scope': 'off', // No need to import React with Next.js
				// 'jsx-a11y/anchor-is-valid': 'off', // This rule is not compatible with how Next.js's <Link />
				'@typescript-eslint/no-unused-vars': ['error'],
				'@typescript-eslint/explicit-function-return-type': [
					// I suggest this setting for requiring return types on functions only where usefull
					'warn',
					{
						allowExpressions: true,
						allowConciseArrowFunctionExpressionsStartingWithVoid: true,
					},
				],

				'import/no-unresolved': ['error', { ignore: ['^@'] }],
				'import/extensions': 'off',
				'import/namespace': ['error', { allowComputed: true }],
				'import/no-extraneous-dependencies': 'off', // It would be better to enable this rule.
				'import/order': [
					'error',
					{
						groups: [['index', 'sibling', 'parent', 'internal', 'external', 'builtin']],
						'newlines-between': 'never',
					},
				],

				'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
			},
		},
	],
}

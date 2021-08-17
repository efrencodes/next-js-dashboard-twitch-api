module.exports = {
	parser: "babel-eslint",
	extends: [
		//...
		'plugin:@next/next/recommended',
		'prettier'
	],
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	rules: {},
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
		  jsx: true, // Allows for the node of JSX
		},
	},
}

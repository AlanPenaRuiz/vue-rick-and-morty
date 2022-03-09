module.exports = {
	root: true,

	env: {
		node: true
	},

	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"plugin:prettier/recommended"
	],

	parserOptions: {
		parser: "@babel/eslint-parser"
	},

	rules: {
		"no-console": "off",
		"no-debugger": "off",
		quotes: [0, "double"],
		"prettier/prettier": ["error", { singleQuote: false }]
	}
};

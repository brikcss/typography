// Setup.
const env = process.env.NODE_ENV;
const isProd = ['production', 'prod', 'test'].includes(env);
const loadPostcssPlugins = require('./.postcssrc.js');

// Config export object.
let config = {
	css: {
		source: 'src/typography.css',
		output: './dist/typography.css',
		bundlers: [
			{
				run: '@brikcss/stakcss-bundler-postcss',
				options: { skipConfig: true },
				plugins: loadPostcssPlugins(
					'postcss-font-magician',
					'postcss-apply',
					'postcss-pxtorem',
					'autoprefixer',
					'postcss-reporter'
				)
			}
		]
	}
};

if (isProd) {
	config.css_min = Object.assign({}, config.css, {
		output: 'dist/typography.min.css',
		bundlers: [
			{
				run: '@brikcss/stakcss-bundler-postcss',
				options: { skipConfig: true },
				plugins: loadPostcssPlugins(
					'postcss-font-magician',
					'postcss-apply',
					'postcss-pxtorem',
					'autoprefixer',
					'postcss-csso'
				)
			}
		]
	});
}

module.exports = config;

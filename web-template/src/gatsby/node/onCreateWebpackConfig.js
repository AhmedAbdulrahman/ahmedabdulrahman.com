const path = require(`path`)

module.exports = ({ actions, loaders, stage }) => {
	let exclude = null
	if (stage === `build-html`) {
		exclude = {
			module: {
				rules: [
					{
						test: /locomotive-scroll/,
						use: loaders.null(),
					},
				],
			},
		}
	}
	actions.setWebpackConfig({
		...exclude,
		resolve: {
			alias: {
				'@components': path.resolve(__dirname, `../../components/`),
				'@icons': path.resolve(__dirname, `../../icons/`),
				'@styles': path.resolve(__dirname, `../../styles/`),
				'@utils': path.resolve(__dirname, `../../utils/`),
				'@types': path.resolve(__dirname, `../../types/`),
				'@hooks': path.resolve(__dirname, `../../hooks/`),
				'@sections': path.resolve(__dirname, `../../sections/`),
				'@theme': path.resolve(__dirname, `../../gatsby-plugin-theme-ui/`),
			},
			extensions: [`.js`, `.json`, `.ts`, `.tsx`],
		},
	})
}

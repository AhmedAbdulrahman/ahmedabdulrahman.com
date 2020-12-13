const fs = require(`fs-extra`) // eslint-disable-line import/no-extraneous-dependencies

module.exports = async ({ reporter }, themeOptions) => {
	const authorsPath = themeOptions.contentAuthors || `content/authors`
	const postsPath = themeOptions.contentPosts || `content/posts`
	const workshopsPath = themeOptions.workshopsPath || `content/workshops`

	if (!fs.existsSync(authorsPath)) {
		reporter.warn(`
      Missing directory for Authors.
      We are creating the "${authorsPath}" directory for you.
      Please ensure you add your authors within "${authorsPath}"
    `)

		fs.mkdirSync(authorsPath, { recursive: true })
	}

	if (!fs.existsSync(postsPath)) {
		reporter.warn(`
      Missing directory for Posts.
      We are creating the "${postsPath}" directory for you.
      Please ensure you add your posts within "${postsPath}"
    `)

		fs.mkdirSync(postsPath, { recursive: true })
	}

	if (!fs.existsSync(workshopsPath)) {
		reporter.warn(`
      Missing directory for Reading.
      We are creating the "${workshopsPath}" directory for you.
      Please ensure you add your posts within "${workshopsPath}"
    `)

		fs.mkdirSync(workshopsPath, { recursive: true })
	}
}

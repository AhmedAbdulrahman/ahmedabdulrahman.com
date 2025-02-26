module.exports = ({ actions }) => {
	actions.createTypes(`
    type Article implements Node {
      id: ID!
      slug: String!
      title: String!
      date: Date! @dateformat
      author: String!
      excerpt(pruneLength: Int = 140): String!
      body: String!
      hero: File @fileByRelativePath
      timeToRead: Int
      canonical_url: String
    }

    type Workshop implements Node {
      id: ID!
      slug: String!
      title: String!
      instructor: String!
      tech: String!
      date: Date! @dateformat
      excerpt(pruneLength: Int = 140): String!
      body: String!
      hero: File @fileByRelativePath
      thumbnail: File @fileByRelativePath
      timeToRead: Int
    }
  `)
}

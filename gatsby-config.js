module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/index`,
        parseWikiLinks: true,
      },
    },
  ],
  siteMetadata: {
    title: `Waytrue' Roam`,
  },
}

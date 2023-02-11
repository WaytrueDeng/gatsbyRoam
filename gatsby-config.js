module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/hello`,
        parseWikiLinks: true,
      },
    },
  ],
  siteMetadata: {
    title: `Waytrue' Roam`,
  },
}

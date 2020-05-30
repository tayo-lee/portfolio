require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Jai Harie`,
    siteTitleAlt: `Jai Harie, Portfolio`,
    siteHeadline: `Jai Harie, Portfolio`,
    siteUrl: `https://tayo-lee.github.io`,
    siteDescription: `A minimal portfolio and blog site for my personal use and serves as showcase to my projects and resume in this digital playground.`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    author: `@tayo-lee`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/jai-harie-65614b1ab/`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/tayo-lee`,
          },
          {
            name: `Resume`,
            url: ``
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jai Harie | Portfolio`,
        short_name: `jaiharie`,
        description: `A minimal portfolio and blog site for my personal use and serves as showcase to my projects and resume in this digital playground.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon-196x196.png`,
            sizes: `196x196`,
            type: `image/png`,
          },
          {
            src: `/favicon-196x196.png`,
            sizes: `196x196`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-theme-ui`,
  ],
}
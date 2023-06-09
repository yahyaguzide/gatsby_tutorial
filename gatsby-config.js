/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: 'Simple Recipes',
    description: 'Nice and Clean rexcipes site',
    author: '@maxMusterman',
    person: { name: 'Max', age: 45 },
    simpleData: ['Item1', 'Item2'],
    complexData: [
      { name: 'Max', age: 45 },
      { name: 'Susan Anna', age: 60 }
    ]
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mz10d8tdkwik`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY
      }
    }
  ]
}

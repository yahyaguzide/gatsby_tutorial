/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata:{
    title: 'Simple Recipes',
    description: 'Nice and Clean rexcipes site',
    author: '@maxMusterman',
    person: {name:'Max', age: 45},
    simpleData: ['Item1', 'Item2'],
    complexData: [
      {name: 'Max', age: 45},
      {name: 'Susan Anna', age: 60}
    ]
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata:{
    title:`Fanhole`,
    description:`
    18禁繪師，目前主畫原神色圖和漫畫，
    尻派！！
    胸部只不過是屁股的替代品而已！
    然後會時時更新、謝謝(⁠｡⁠･⁠ω⁠･⁠｡⁠)⁠ﾉ⁠♡`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name:`src`,
        path:`${__dirname}/src/`
      }
    }
  ],
}

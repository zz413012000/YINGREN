/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const description=`
18禁繪師，目前主畫原神色圖和漫畫，
尻派！！
胸部只不過是屁股的替代品而已！
然後會時時更新、謝謝(⁠｡⁠･⁠ω⁠･⁠｡⁠)⁠ﾉ⁠♡
`
module.exports = {
  siteMetadata:{
    title: `Fanhole`,
    description:description,
    image:`src/image/10.jpeg`,
    url: `https://zz413012000.github.io/Fanhole.github.io/`,
    author:`Fanhole`,
    ogType:`website`,
    twitterCard:`summary`, // Twitter Card 類型
    twitterSite:`@wengyingren1`

  },
  pathPrefix: '/Fanhole.github.io',
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Need for dymamic images
    `gatsby-background-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fanhole's Site`,
        short_name:`Fanhole's Site`,
        description:description,
        start_url:`/`,
        display: 'standalone',
        icon:`src/image/10.jpeg`
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options:{
        precachePages: [
          '/',
        ],
      }
    },
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
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
       // usePathPrefix: optional, if you are using pathPrefix above
        usePathPrefix: '/Fanhole.github.io',
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}

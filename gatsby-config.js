/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const description=`
          努力畫圖的肥宅
          主推
          鬼滅 /童磨x猗窩座
          一拳超人 / 傑諾斯x琦玉
          路人超能100 / 影山茂夫x靈幻新隆 酒窩靈、芹靈
          時不時發個鬼滅全員歡樂向漫畫
          喜歡歡迎追追^^
`
module.exports = {
  siteMetadata:{
    title: `YINGREN`,
    description:description,
    image:`src/image/10.jpeg`,
    url: `https://zz413012000.github.io/Fanhole.github.io/`,
    author:`YINGREN`,
    ogType:`website`,
    twitterCard:`summary`, // Twitter Card 類型
    twitterSite:`@wengyingren1`

  },
  pathPrefix: '/YINGREN.github.io/',
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Need for dymamic images
    `gatsby-background-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `YINGREN's Site`,
        short_name:`YINGREN's Site`,
        description:description,
        start_url:`/`,
        display: 'standalone',
        icon:`src/image/_01.jpg`
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
        usePathPrefix: '/YINGREN.github.io',
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}

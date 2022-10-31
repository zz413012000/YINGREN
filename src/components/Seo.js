import React from "react";
import PropTypes from "prop-types"; // 型別檢查
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            url
            author
            ogType
            twitterCard
            twitterSite
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
            property: `og:image`,
            content: site.siteMetadata.image
        },
        {
            property: `og:url`,
            content: site.siteMetadata.url
        },
        {
          property: `og:type`,
          content: site.siteMetadata.ogType,
        },
        {
          name: `twitter:card`,
          content: site.siteMetadata.twitterCard,
        },
        {
            name: `twitter:site`, // 放網站作者的 Twitter 帳號
            content: site.siteMetadata.twitterSite
        },
        {
          name: `twitter:creator`,  // 放文章作者的 Twitter 帳號
          content: site.siteMetadata.twitterSite,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
import React from "react"
import { graphql } from "gatsby"
import './index.css'
import "normalize.css"
import styled from "@emotion/styled"
import { StaticImage } from 'gatsby-plugin-image'
import Container from "../components/Container"
import EnterAnime from "../components/EnterAnime"
import Seo from "../components/Seo"

const IndexContainer = styled.div`
  background-color:#fff;
  `
const Banner = styled.div`
`
const Content = styled.div`
`
const Title = styled.div`
  text-align:center;
`
const Description = styled.div`
  text-align:center;
`


export default function Home({ data, location }) {
  return (
    <Container location={location} crumbLabel={"首頁"}>
      <IndexContainer>
        <Seo title={data.site.siteMetadata.title}/>
       <EnterAnime data={data}/>
       <Content>
          <Title>{data.site.siteMetadata.title}'s Site</Title>
          <Description>{data.site.siteMetadata.description}</Description>
        </Content>
        <Banner>
            <StaticImage // gatsby-plugin-image
            src='../image/10.jpeg'
            placeholder="blurred"
            // aspectRatio={16/9}
            layout="fullWidth"
            alt='Barbara'
            // width={100%}
            // height={auto}
            />
        </Banner>
       
      </IndexContainer>
    </Container>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "image/11.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 4000, maxHeight: 2800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`


// export const query = graphql`
//   query {
//     file(relativePath: { eq: "image/sample.png" }) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }

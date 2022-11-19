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
  white-space: pre-line;
  line-height: 1.5em;
  `
  // white-space: pre-line


export default function Home({ data, location }) {
  console.log(data.site.siteMetadata.description)
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
            src='../image/20220320_3.jpeg'
            placeholder="blurred"
            // aspectRatio={16/9}
            layout="fullWidth"
            alt='路人超能 酒窩'
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
    file(relativePath: { eq: "image/20220415第一次畫墮姬妓夫太郎完整-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, maxHeight: 2800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgImage:file(relativePath: { eq: "image/20221015.jpg" }) {
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

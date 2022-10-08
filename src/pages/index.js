import React from "react"
import Container from "../components/Container"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import './index.css'
import Img from "gatsby-image"

const IndexContainer = styled.div`
  background-color:#fff;
`
const Banner = styled.div`
  max-width: 2000px; 
`
const Content = styled.div`

`
const Title =styled.div`
  text-align:center;
`
const Description =styled.div`
  text-align:center;
`
let imgStyle = {
  display:'block',
  objectFit: "cover",
  objectPosition:"50% 50%"
}
export default function Home ({ data }){
  return (
      <Container>
        <IndexContainer>
          <Banner>
            <Img 
            fluid={data.file.childImageSharp.fluid}
            imgStyle={imgStyle}
            />
          </Banner>
          <Content>
            <Title>{data.site.siteMetadata.title}'s Site</Title>
            <Description>{data.site.siteMetadata.description}</Description>
          </Content>
        </IndexContainer>
      </Container>
  )
}
export const query = graphql`
  query {
    file(relativePath: { eq: "image/10.jpeg" }) {
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

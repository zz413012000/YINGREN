import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/Container'
const about = ({data,location}) => {
    return (
        <Container location={location} crumbLabel={'關於我'}>
            <div>
                <h1>關於我</h1>
                <p>{data.site.siteMetadata.description}</p>
            </div>
        </Container>
    )
}
export default about
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
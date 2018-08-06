import React from 'react'
import { graphql } from 'gatsby'
import PostListing from '../components/Posts/PostListing'

import Layout from '../components/layout'

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <h1>Hi people</h1>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
          }
        }
      }
    }
  }
`

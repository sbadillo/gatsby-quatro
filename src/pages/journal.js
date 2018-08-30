import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import PostListing from '../components/Posts/PostListing'

const Journal = ({ data, location }) => (
  <Layout location={location}>
    <div>
      <h1>Journal</h1>
      <p>
        Consequat elit aliqua veniam exercitation consequat consectetur. Do ea
        non irure proident sunt mollit nostrud consequat sit enim et et. Anim et
        ea fugiat do sint. Et sint amet aute consequat laboris.
      </p>
    </div>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </Layout>
)

export default Journal

export const query = graphql`
  query {
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

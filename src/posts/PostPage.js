import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default class PostPage extends Component {
  render() {
    const { data } = this.props
    return (
      // passing the location to the layout component
      <Layout location={this.props.location}>
        <div>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <span>{data.markdownRemark.frontmatter.date}</span>
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`

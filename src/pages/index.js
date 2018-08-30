import React from 'react'
// import { graphql } from 'gatsby'

import LifeGrid from '../components/LifeGrid'

import Layout from '../components/layout'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <h1>Text</h1>
    <LifeGrid />
  </Layout>
)

export default IndexPage

// export const query = graphql`
//   query SiteMeta {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `

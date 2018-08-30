import React, { Component } from 'react'
import Layout from '../components/layout'

class Photography extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div>
          <h1>Photo Gallery</h1>
          <p>bla.</p>
        </div>
      </Layout>
    )
  }
}

export default Photography

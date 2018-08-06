import React, { Component } from 'react'
import Layout from '../components/layout'

class About extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div>
          <h1>About Me</h1>
          <p>
            Consequat elit aliqua veniam exercitation consequat consectetur. Do
            ea non irure proident sunt mollit nostrud consequat sit enim et et.
            Anim et ea fugiat do sint. Et sint amet aute consequat laboris.
          </p>
        </div>
      </Layout>
    )
  }
}

export default About

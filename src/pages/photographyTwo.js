import React, { Component } from 'react'
import Layout from '../components/layout'
import axios from 'axios'

import ImgList from '../components/Gallery/ImgList'

const APP_ID =
  'a3d5445956ac65719cd806b9722c0973d94e2a9765784fc22e02ff43e155d079'

class PhotographyTwo extends Component {
  constructor() {
    super()
    this.state = {
      imgs: [],
      currentImage: 0,
    }
  }

  componentDidMount() {
    axios
      .get(
        'https://api.unsplash.com/users/sbadillo/photos/?client_id=' + APP_ID
      )
      .then(data => {
        this.setState({ imgs: data.data })
        console.log(data.data)
      })
      .catch(err => {
        console.log('Error happened during fetching!', err)
      })
  }

  render() {
    return (
      <Layout>
        <ImgList data={this.state.imgs} />
      </Layout>
    )
  }
}

export default PhotographyTwo

import React, { Component } from 'react'
import Layout from '../components/layout'
import { Parallax } from 'react-spring'

// Little helpers ...
const randomUnsplashUrl = () =>
  'https://source.unsplash.com/random/' + Math.floor(Math.random() * 100 + 1)

const sbadilloUnsplashUrl = () =>
  'https://source.unsplash.com/user/sbadillo/' + Math.floor(Math.random() * 100 + 1)

const randomSpeed = () => Math.random() * (0.2 - 0) + 0

const ParallaxPhoto = ({ page = page }) => (
  <Parallax.Layer offset={page} speed={randomSpeed()}>
    <img src={sbadilloUnsplashUrl()} style={{ height: '80%' }} />
  </Parallax.Layer>
)

class Photography extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Parallax ref={ref => (this.parallax = ref)} pages={7}>
          <ParallaxPhoto page="0" />
          <ParallaxPhoto page="1" />
          <ParallaxPhoto page="2" />
          <ParallaxPhoto page="3" />
          <ParallaxPhoto page="4" />
          <ParallaxPhoto page="5" />
          <ParallaxPhoto page="6" />
        </Parallax>
      </Layout>
    )
  }
}

export default Photography

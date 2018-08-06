import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import logo from '../../images/logo.svg'

const HeaderWrapper = styled.div`
  background: indianred;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? '70vh' : '20vh')};
  h1 {
    img {
      height: 80px;
    }
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        color: white;
        &:hover {
          border-bottom: 3px solid firebrick;
        }
      }
    }
  }
`

export default class Header extends Component {
  componentDidMount = () => {
    if (this.props.location.pathname === '/') {
      this.wrapper.animate([{ height: '30vh' }, { height: '70vh' }], {
        duration: 300,
        fill: 'forwards', // stick and stay at end frame
        easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
        iterations: 1,
      })
    } else {
      this.wrapper.animate([{ height: '70vh' }, { height: '30vh' }], {
        duration: 300,
        fill: 'forwards', // stick and stay at end frame
        easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
        iterations: 1,
      })
    }
  }

  render() {
    const { data, location } = this.props
    return (
      <HeaderWrapper
        isHome={location.pathname === '/'}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <img src={logo} alt="The new site numero cuatro" />
            </Link>
          </h1>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
        <Img
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            opacity: 0.3,
            width: '100%',
            height: '100%',
          }}
          sizes={data.background.childImageSharp.sizes}
        />
      </HeaderWrapper>
    )
  }
}

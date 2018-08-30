import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  /* background: indianred; */
  /* border: 1px solid black; */
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  justify-content: center;
  display: flex;
`

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: auto;
    li {
      margin-left: 15px;
      margin-right: 15px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        color: gray;
        &:hover {
          border-bottom: 1px dashed lightgray;
        }
      }
    }
  }
`

export default class Header extends Component {
  render() {
    const { location } = this.props
    return (
      <HeaderWrapper
        isHome={location.pathname === '/'}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <HeaderContainer>
          <MainNav>
            <ul>
              <li>
                <Link to="/">sbad.io</Link>
              </li>
              <li>
                <Link to="/journal/">journal</Link>
              </li>
              <li>
                <Link to="/photography/">photography</Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
      </HeaderWrapper>
    )
  }
}

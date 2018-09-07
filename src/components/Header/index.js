import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.5rem 1.0875rem;
  border-bottom: 1px dashed gray;
  position: relative;
  z-index: 2;
  justify-content: center;
  display: flex;
`

const MainNav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    li {
      margin: auto 15px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        color: gray;
        &:hover {
          color: slategray;
        }
      }
    }
  }
`

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
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
              <li>
                <Link to="/photographyTwo/">photographyTwo</Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
      </HeaderWrapper>
    )
  }
}

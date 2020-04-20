import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    color: #fff;
  }
  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => (
  <header
    css={css`
      display: flex;
      justify-content: flex-end;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
      margin-right: 0.5rem;
      @media (min-width: 768px) {
        margin-right: 0;
      }
    `}
  >
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/work" activeClassName="current-page">
        Work
      </NavLink>
      <NavLink to="/blog" activeClassName="current-page">
        Blog
      </NavLink>
      <NavLink to="/about" activeClassName="current-page">
        About me
      </NavLink>
    </nav>
  </header>
)

export default Header

import styled from "styled-components"
import { Link } from "react-router-dom"
import theme from "theme"

export const PageWrap = styled.div`
  display: flex;
  height: 100vh;
`
export const Sidebar = styled.div`
  background: ${theme.colors.primary};
  width: 200px;
  flex-shrink: 0;
`
export const StyledSection = styled.div`
  padding: 20px;
  text-align: center;
  border-bottom: black 1px solid;
  h4 {
    margin: 20px auto 0;
    color: ${theme.colors.secondary};
  }
`
export const Img = styled.img`
  width: 100px;
  height: 100px;
`

export const Nav = styled.nav`
  padding: 10px 0;
`
export const NavItem = styled(Link)`
  text-transform: uppercase;
  font-weight: 300;
  padding: 0 20px;
  line-height: 30px;
  color: ${theme.colors.secondary};
  text-decoration: none;
  display: block;
  transition: all 0.25s ease;
  &:hover {
    background: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  }
`

export const Body = styled.div`
  background: ${theme.colors.secondary};
  padding: 20px 10px;
  flex-grow: 1;
  overflow-y: auto;
`
export const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

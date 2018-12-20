import React from "react"
import { user } from "data/auth/mock"
import {
  PageWrap,
  Sidebar,
  StyledSection,
  Img,
  Nav,
  NavItem,
  Body,
  Inner
} from "./styled"
import { getName } from "data/auth/helpers"

const Page = props => (
  <PageWrap>
    <Sidebar>
      <StyledSection>
        <Img src={user.avatar} />
        <h4>{getName(user)}</h4>
      </StyledSection>
      <Nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/profile">Profile</NavItem>
        <NavItem to="/todos">Todos</NavItem>
      </Nav>
    </Sidebar>
    <Body>
      <Inner>{props.children}</Inner>
    </Body>
  </PageWrap>
)

export default Page

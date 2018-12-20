import React from "react"
import Button from "components/Button"
import Input from "components/Input"
import { StyledForm, StyledField, Label } from "styled/Forms"
import { StyledPage } from "styled/Page"
import { StyledTitle } from "styled/Typography"
import withState from "hocs/withState"

const Login = props => (
  <StyledPage>
    <StyledForm text="Sign-In" onSubmit={e => e.preventDefault()}>
      <StyledTitle>Sign-In</StyledTitle>
      <StyledField>
        <Label>Username:</Label>
        <Input
          type="text"
          value={props.v.username}
          onChange={x => props.setV({ ...props.v, username: x })}
        />
      </StyledField>

      <StyledField>
        <Label>Password</Label>
        <Input
          type="password"
          value={props.v.pw}
          onChange={x => props.setV({ ...props.v, pw: x })}
        />
      </StyledField>
      <Button type="button" secondary full text="Sign-in" />
    </StyledForm>
  </StyledPage>
)

export default withState("v", "setV", {
  username: "",
  pw: ""
})(Login)

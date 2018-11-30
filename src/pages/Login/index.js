import React from "react"
import Button from "components/Button"
import Input from "components/Input"
import { StyledForm, Field, Label } from "styled/Forms"
import { StyledPage } from "styled/Page"
import { StyledTitle } from "styled/Typography"

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      pw: ""
    }
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <StyledPage>
        <StyledForm text="Sign-In" onSubmit={this.handleSubmit}>
          <StyledTitle>Sign-In</StyledTitle>
          <Field>
            <Label>Username:</Label>
            <Input
              type="text"
              value={this.state.username}
              onChange={x => this.setState({ username: x })}
            />
          </Field>

          <Field>
            <Label>Password</Label>
            <Input
              type="password"
              value={this.state.pw}
              onChange={x => this.setState({ pw: x })}
            />
          </Field>
          <Button type="button" secondary full text="Sign-in" />
        </StyledForm>
      </StyledPage>
    )
  }
}

export default Login

import React from "react"
import Button from "components/Button"
import Input from "components/Input"
import { StyledPage } from "styled/Page"
import { StyledForm, Field, Label } from "styled/Forms"
import { StyledTitle } from "styled/Typography"

class Registration extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      pw: "",
      confPw: ""
    }
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <StyledPage>
        <StyledForm text="Registration form" onSubmit={this.handleSubmit}>
          <StyledTitle>Registration Form</StyledTitle>
          <Field>
            <Label>First Name:</Label>
            <Input
              type="text"
              value={this.state.firstName}
              onChange={v => this.setState({ firstName: v })}
            />
          </Field>
          <Field>
            <Label>Last Name:</Label>

            <Input
              type="text"
              value={this.state.lastName}
              onChange={v => this.setState({ lastName: v })}
            />
          </Field>
          <Field>
            <Label>Username:</Label>

            <Input
              type="text"
              value={this.state.username}
              onChange={v => this.setState({ username: v })}
            />
          </Field>
          <Field>
            <Label>E-mail:</Label>

            <Input
              type="email"
              placeholder="xxxxx@xx.xx"
              value={this.state.email}
              onChange={v => this.setState({ email: v })}
            />
          </Field>
          <Field>
            <Label>Password: </Label>

            <Input
              type="password"
              placeholder="Must be at least 8 characters long"
              value={this.state.pw}
              onChange={v => this.setState({ pw: v })}
            />
          </Field>
          <Field>
            <Label>Confirm password: </Label>

            <Input
              type="password"
              value={this.state.confPw}
              onChange={v => this.setState({ confPw: v })}
            />
          </Field>
          <Button secondary full type="button" text="Sign up" />
        </StyledForm>
      </StyledPage>
    )
  }
}

export default Registration

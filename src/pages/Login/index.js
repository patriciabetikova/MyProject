import React from "react"
import Button from "components/Button"
import Input from "components/Input"
import { StyledForm } from "./styled"

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      pw: ""
    }
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <StyledForm onSubmit={this.handleSubmit}>
          <Input
            type="email"
            placeholder="email@xx.xx"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          <Input
            type="password"
            placeholder="*****"
            value={this.state.pw}
            onChange={e => this.setState({ pw: e.target.value })}
          />{" "}
          <br />
          <Button type="button" text="Submit" />
        </StyledForm>
      </div>
    )
  }
}

export default Login

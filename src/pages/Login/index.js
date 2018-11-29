import React from "react"
import Button from "components/Button"

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
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="email@xx.xx"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          <input
            type="password"
            placeholder="*****"
            value={this.state.pw}
            onChange={e => this.setState({ pw: e.target.value })}
          />{" "}
          <br />
          <Button type="button" text="Submit" />
        </form>
      </div>
    )
  }
}

export default Login

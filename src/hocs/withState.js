import React from "react"

const withState = (name, setName, initialValue) => Component =>
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        v: initialValue
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          {...{
            [name]: this.state.v,
            [setName]: v => this.setState({ v })
          }}
        />
      )
    }
  }

export default withState

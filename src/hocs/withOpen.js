import React from "react"

const withOpen = Component =>
  class extends React.Component {
    constructor() {
      super()
      this.state = {
        isOpen: false
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          isOpen={this.state.isOpen}
          open={() => this.setState({ isOpen: true })}
          close={() => this.setState({ isOpen: false })}
          toggle={() => this.setState({ isOpen: !this.state.isOpen })}
        />
      )
    }
  }

export default withOpen

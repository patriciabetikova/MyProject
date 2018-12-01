import React from "react"
import Page from "components/Page"
import { todos } from "data/todos/mock"
import { Li, TodoWrap } from "./styled"
import { StyledTitle } from "styled/Typography"
import Input from "components/Input"

class Todos extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: "",
      done: false
    }
  }
  render() {
    return (
      <Page>
        <StyledTitle>To dos</StyledTitle>
        <TodoWrap>
          <h3>Add ToDo</h3>
          <Input
            type="text"
            value={this.state.todo}
            onChange={v => this.setState({ todo: v })}
          />
        </TodoWrap>
        <ul>
          {todos.map((x, i) => (
            <TodoWrap Item>
              <Li style={{ textDecoration: x.done ? "line-through" : "none" }}>
                {x.text}
              </Li>
              <button>x</button>
            </TodoWrap>
          ))}
        </ul>
      </Page>
    )
  }
}

export default Todos

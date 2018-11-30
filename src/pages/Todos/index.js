import React from "react"
import Page from "components/Page"
import { todos } from "data/todos/mock"
import { Li, TodoWrap } from "./styled"
import { StyledTitle } from "styled/Typography"

class Todos extends React.Component {
  render() {
    return (
      <Page>
        <StyledTitle>To dos</StyledTitle>
        <ul>
          {todos.map((x, i) => (
            <TodoWrap>
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

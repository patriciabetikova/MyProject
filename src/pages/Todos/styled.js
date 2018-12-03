import styled, { css } from "styled-components"
import theme from "theme"

export const TodoWrap = styled.span`
  display: flex;
  justify-content: space-between;
  width: max-content;
  transition: all 0.3s ease;
  align-items: center;

  button {
    padding: 0;
    height: auto;
    width: 15px;
  }
  input {
    height: 30px;
    width: 300px;
    background: lightsalmon;
  }
  h3 {
    width: 80px;
  }

  ${p =>
    p.Item &&
    css`
      width: 300px;
      &:hover {
        background: rgba(51, 38, 0, 0.5);
        color: #e6ccb3;
      }
    `}
`
export const Li = styled.p`
  text-transform: uppercase;
  margin: 0 0 0 20px;
`

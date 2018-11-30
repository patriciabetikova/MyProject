import styled from "styled-components"

export const TodoWrap = styled.span`
  display: flex;
  justify-content: space-between;
  width: 300px;
  transition: all 0.3s ease;
  align-items: center;
  button {
    padding: 0;

    height: auto;
    width: 15px;
  }
  &:hover {
    background: rgba(51, 38, 0, 0.5);
    color: #e6ccb3;
  }
`

export const Li = styled.p`
  text-transform: uppercase;
  margin: 0 0 0 20px;
`

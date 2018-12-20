import styled, { css } from "styled-components"

export const StyledButton = styled.button`
  background-color: papayawhip;
  color: #d254b3;
  font-weight: 300;
  border: none;
  line-height: 25px;
  text-transform: uppercase;
  font-size: 20px;
  padding: 8px 20px;
  transition: all 0.25s ease;
  &:hover {
  }

  ${p =>
    p.secondary &&
    css`
      background: rgba(185, 76, 24, 1);
      color: #fff;

      &:hover {
        background: rgba(233, 0, 170, 1);
      }
    `}
  ${p =>
    p.full &&
    css`
      width: 100%;
    `}
  ${p =>
    p.disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}
`

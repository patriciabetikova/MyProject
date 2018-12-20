import styled, { css } from "styled-components/macro"

export const StyledTerms = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

const center = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const CheckBox = styled.div`
  width: 15px;
  height: 15px;
  background: white;
  margin-right: 15px;
  position: relative;
  ${p =>
    p.checked &&
    css`
      &::after {
        content: "✓";
        color: green;
        font-weight: bold;
        font-size: 15px;
        ${center};
      }
    `}
`

export const Text = styled.p`
  font-size: 13px;
`

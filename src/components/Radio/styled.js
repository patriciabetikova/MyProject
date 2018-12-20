import styled, { css } from "styled-components/macro"

export const StyledRadio = styled.div`
  display: flex;

  @media screen and (min-width: 800px) {
    flex-direction: column;
  }
`
export const StyledRadioOption = styled.div`
  display: flex;

  margin-right: 15px;
  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
  @media screen and (min-width: 800px) {
    margin-bottom: 3px;
  }
`
export const StyledRadioButton = styled.div`
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 100%;
  position: relative;
  ${p =>
    p.active &&
    css`
      &::after {
        content: "";
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        background: rgba(185, 76, 24, 1);
        width: 8px;
        height: 8px;
        border-radius: 100%;
      }
    `}
`
export const StyledRadioItem = styled.div`
  font-size: 14px;
  padding-left: 3px;
`

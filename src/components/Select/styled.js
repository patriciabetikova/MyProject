import styled, { css } from "styled-components/macro"

export const StyledSelect = styled.div`
  position: relative;
`
export const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`
export const StyledInput = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  color: #d9bfbf;
  border: 0;
  width: 100%;
  font-size: 16px;
  height: 40px;
  padding: 0 10px;
  margin: 0;
  line-height: 40px;
  text-transform: none;
  position: relative;
  ${p =>
    p.empty &&
    css`
      color: grey;
    `}
`
export const StyledMenu = styled.div`
  font-size: 14px;
  line-height: 20px;
  padding: auto;
  position: absolute;
  top: 100%;
  width: 100%;
`
export const StyledOption = styled.div`
  border-bottom: 1px solid #b5b5b5;
  color: #333;
  background: #fff;
  line-height: 25px;
  padding: 0 10px;
  &:hover {
    background: rgba(185, 76, 24, 1);
    color: #fff;
  }
`

import styled from "styled-components/macro"
import { StyledTitle } from "styled/Typography"

export const ModalLayout = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  margin-top: 0;
  z-index: 1;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`

export const ModalWrapper = styled.div`
  width: 600px;
  height: 500px;
  color: black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  text-transform: none;
  overflow-y: auto;
`
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ModalTitle = styled(StyledTitle)`
  color: black;
  font-size: 20px;
  font-weight: 300;
`
export const ModalButton = styled.div`
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 18px;
  background: red;
  color: white;
  border-radius: 25%;
`
export const ModalBody = styled.div`
  color: black;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
`

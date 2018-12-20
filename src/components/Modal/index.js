import React from "react"
import {
  ModalLayout,
  ModalWrapper,
  ModalTitle,
  ModalBody,
  ModalHeader,
  ModalButton
} from "./styled"

const Modal = ({ children, title, close }) => (
  <ModalLayout>
    <ModalWrapper>
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <ModalButton onClick={close}>X</ModalButton>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </ModalWrapper>
  </ModalLayout>
)

export default Modal

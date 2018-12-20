import React from "react"
import { StyledInput } from "./styled"

const Input = ({ value = "", onChange, ...rest }) => (
  <StyledInput
    {...rest}
    onChange={e => onChange(e.target.value)}
    value={value}
  />
)
export default Input

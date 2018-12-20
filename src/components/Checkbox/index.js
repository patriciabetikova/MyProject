import React from "react"
import { Text, CheckBox, StyledTerms } from "./styled"

const Checkbox = ({ onChange, ...props }) => {
  return (
    <StyledTerms onClick={() => onChange(!props.value)}>
      <CheckBox checked={props.value} />
      <Text>{props.text || props.children}</Text>
    </StyledTerms>
  )
}

export default Checkbox

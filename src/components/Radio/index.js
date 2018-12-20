import React from "react"
import {
  StyledRadio,
  StyledRadioButton,
  StyledRadioItem,
  StyledRadioOption
} from "./styled"

const Radio = ({ onChange, ...props }) => {
  return (
    <StyledRadio>
      {props.options.map((x, i) => (
        <StyledRadioOption key={i} onClick={() => onChange(x)}>
          <StyledRadioButton active={props.value && props.value.id === x.id} />
          <StyledRadioItem>{x.name}</StyledRadioItem>
        </StyledRadioOption>
      ))}
    </StyledRadio>
  )
}

export default Radio

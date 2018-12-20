import React from "react"
import withOpenBetter from "hocs/withOpenBetter"

import {
  StyledSelect,
  StyledMenu,
  StyledOption,
  StyledInput,
  StyledOverlay
} from "./styled"

const Select = ({ onChange, ...props }) => (
  <StyledSelect>
    {props.isOpen && <StyledOverlay onClick={props.toggle} />}
    <StyledInput empty={!props.value} onClick={props.toggle}>
      {props.value ? props.value.name : props.placeholder}
    </StyledInput>
    {props.isOpen && (
      <StyledMenu>
        {props.options.map((x, i) => (
          <StyledOption
            key={i}
            onClick={e => {
              props.close()
              onChange(x)
            }}
          >
            {x.name}
          </StyledOption>
        ))}
      </StyledMenu>
    )}
  </StyledSelect>
)

export default withOpenBetter(Select)

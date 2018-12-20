import { withState, withHandlers, compose } from "recompose"

const withOpenBetter = compose(
  withState("isOpen", "setOpen", false),
  withHandlers({
    open: props => () => props.setOpen(true),
    close: props => () => props.setOpen(false),
    toggle: props => () => props.setOpen(!props.isOpen)
  })
)

export default withOpenBetter

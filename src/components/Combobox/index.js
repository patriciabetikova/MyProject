import React from "react"
import Checkbox from "components/Checkbox"

const Combobox = ({ value = [], onChange, options }) => (
  <div>
    {options.map((x, i) => {
      const checked = value.find(y => y.id === x.id)
      return (
        <Checkbox
          text={x.name}
          key={i}
          value={checked}
          onChange={v =>
            onChange(checked ? value.filter(y => y.id !== x.id) : [...value, x])
          }
        />
      )
    })}
  </div>
)

export default Combobox

import React from "react"
import { Field } from "formik"
import { StyledError } from "./styled"

const FormikField = ({ name, Component, blur, ...rest }) => (
  <Field
    name={name}
    render={p => {
      console.log(p)
      const error = p.form.errors[name]
      const showError = p.form.touched[name] || p.form.submitCount > 0
      return (
        <div>
          <Component
            {...rest}
            value={p.field.value}
            onChange={v => {
              p.form.setFieldValue(name, v)
              if (!blur) {
                p.form.setFieldTouched(name, true)
              }
            }}
            onBlur={() => {
              if (blur) p.form.setFieldTouched(name, true)
            }}
          />
          {showError && error && <StyledError>{error}</StyledError>}
        </div>
      )
    }}
  />
)

export default FormikField

import * as yup from "yup"

export const stringRequired = yup
  .string()
  .nullable()
  .required("Field is required")

export const optionRequired = yup
  .mixed()
  .nullable()
  .required("Field is required")

export const emailRequired = stringRequired.email("Must be valid email")

export const lengthRequired = p =>
  stringRequired.test(
    "length",
    `Must be at least ${p} characters long`,
    val => val && val.length >= p
  )

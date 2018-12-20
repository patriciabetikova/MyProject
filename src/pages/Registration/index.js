//pridat checkbox, i agree to terms and shit, inak disabled sign up btn
//pridat checkbox group  na interest

import React from "react"
import Button from "components/Button"
import Input from "components/Input"
import Select from "components/Select"
import Radio from "components/Radio"
import Checkbox from "components/Checkbox"
import Combobox from "components/Combobox"
import { StyledPage } from "styled/Page"
import {
  StyledForm,
  StyledField,
  Label,
  InlineField,
  StyledLink
} from "styled/Forms"
import { StyledTitle } from "styled/Typography"
import { interests } from "data/interests/interests"
import { genders } from "data/genders/genders"
import { countries } from "data/countries/countries"
import { withFormik } from "formik"
import * as yup from "yup"
import FormikField from "components/FormikField"
import {
  stringRequired,
  optionRequired,
  emailRequired,
  lengthRequired
} from "forms/validators"
import { compose } from "recompose"
import withOpenBetter from "hocs/withOpenBetter.js"
import Terms from "./TermsModal"

const Registration = props => (
  <StyledPage>
    <StyledForm onSubmit={props.handleSubmit}>
      <StyledTitle>Registration Form</StyledTitle>
      <StyledField>
        {console.log(props)}
        <Label>First Name:</Label>
        <FormikField name="firstName" Component={Input} />
        {/* <Input
          name="firstName"
          type="text"
          value={props.values.firstName}
          onChange={props.handleChange}
        /> */}
      </StyledField>
      <StyledField>
        <Label>Last Name:</Label>
        <FormikField name="lastName" Component={Input} />
      </StyledField>
      <StyledField>
        <Label>Gender:</Label>
        <FormikField name="gender" Component={Radio} options={genders} />
        {/* // onChange={v => p.form.setFieldValue("gender", v)}
        // value={props.value.gender}
        // onSelect={v => props.setValue({ ...props.value, gender: v })} */}
      </StyledField>
      <StyledField>
        <Label>Country:</Label>
        <FormikField
          name="country"
          Component={Select}
          options={countries}
          placeholder="Select countries"
        />
      </StyledField>
      <StyledField>
        <Label>Username:</Label>
        <FormikField name="userName" Component={Input} />
      </StyledField>
      <StyledField>
        <Label>E-mail:</Label>
        <FormikField
          blur
          name="email"
          Component={Input}
          placeholder="Email"
          type="email"
        />
      </StyledField>
      <StyledField>
        <Label>Password: </Label>
        <FormikField
          blur
          name="pw"
          Component={Input}
          placeholder="Must be at least 8 characters long"
          type="password"
        />
      </StyledField>
      <StyledField>
        <Label>Confirm password: </Label>
        <FormikField
          name="confPw"
          Component={Input}
          placeholder="Same password"
          type="password"
        />
      </StyledField>
      <StyledField>
        <Label>Interests:</Label>
        <FormikField
          name="interests"
          Component={Combobox}
          options={interests}
        />
      </StyledField>
      <InlineField>
        <FormikField name="terms" Component={Checkbox}>
          I have read and agree to
          <StyledLink onClick={props.open}>
            the Terms and Conditions and Privacy Policy
          </StyledLink>
        </FormikField>
      </InlineField>
      <Button
        secondary
        full
        type="submit"
        text="Sign up"
        disabled={!props.values.terms}
      />
    </StyledForm>{" "}
    {props.isOpen && <Terms close={props.close} />}
  </StyledPage>
)

export default compose(
  withOpenBetter,
  withFormik({
    validationSchema: yup.object().shape({
      firstName: stringRequired,
      lastName: stringRequired,
      userName: stringRequired,
      gender: optionRequired,
      email: emailRequired,
      pw: lengthRequired(5),
      terms: optionRequired
    }),

    handleSubmit: (values, { setSubmitting }) => {
      console.log(values)
    }
  })
)(Registration)

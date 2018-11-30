import styled from "styled-components"

export const StyledForm = styled.form`
  background-color: rgba(50, 50, 50, 0.8);
  padding: 10px;
  text-transform: uppercase;
  border-radius: 2px;
  color: #d9bfbf;
  width: 100%;
  max-width: 600px;
  & > *:last-child {
    margin-top: 30px;
  }
  @media screen and (min-width: 800px) {
    padding: 20px 40px;
  }
`
export const Field = styled.label`
  margin-bottom: 10px;
  display: block;
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    input {
      width: 250px;
    }
  }
`
export const Label = styled.h4`
  font-weight: 500;
  font-size: 14px;
  margin: 0 0 5px;
`

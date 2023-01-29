import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  background-color: transparent;
`

export const LoginFormWrapper = styled.div`
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  background-color: rgba(255, 255, 255, 0.13);
  z-index: 1000;
  position: relative;
`

export const SubmitButton = styled.input`
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.4rem;
  background-color: white;
  width: 20rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
  cursor: pointer;
`

export const InputLabel = styled.label`
  display: grid;
  grid-auto-flow: row;
  row-gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  background-color: transparent;
`

export const CredentialInput = styled.input`
  padding: 1rem 1rem;
  border-radius: 0.25rem;
  border: none;
  color: white;
  background-color: rgba(255, 255, 255, 0.07);

  &:focus-visible {
    outline: none;
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const LoginForm = styled.form`
  display: grid;
  grid-auto-flow: row;
  row-gap: 2rem;
  background-color: transparent;
`

export const Label = styled.span`
  background-color: transparent;
`

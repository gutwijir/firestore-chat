import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'

import { useFirebaseContext } from '@/contexts/firebase'
import { Background } from '@/styles/background'

import {
  SubmitButton,
  InputLabel,
  LoginForm,
  LoginFormWrapper,
  CredentialInput,
  H1,
  Label,
} from './styled'

type UserCredentials = {
  email: string
  password: string
}

export const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email: '',
    password: '',
  })

  const { auth } = useFirebaseContext()

  const handleSignIn = (e: React.SyntheticEvent): void => {
    e.preventDefault()

    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userInfo) => {
        //TODO Commit to context the const user = userInfo.user
        alert('Successful login ' + String(userInfo.user.displayName))
      })
      .catch((err) => {
        alert('Errored login: ' + String(err))
        //TODO Handle error
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value })
  }

  return (
    <Background>
      <LoginFormWrapper>
        <H1>Login here</H1>
        <LoginForm onSubmit={handleSignIn}>
          <InputLabel>
            <Label>Email</Label>
            <CredentialInput type="text" name="email" onChange={handleChange} />
          </InputLabel>
          <InputLabel>
            <Label>Password</Label>
            <CredentialInput
              type="password"
              name="password"
              autoComplete="on"
              onChange={handleChange}
            />
          </InputLabel>
          <SubmitButton type="submit" value="Sign in" />
        </LoginForm>
      </LoginFormWrapper>
    </Background>
  )
}

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'

type UserCredentials = {
  email: string
  password: string
}

export const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email: '',
    password: '',
  })

  const handleSignIn = (e: React.SyntheticEvent): void => {
    e.preventDefault()

    const auth = getAuth()

    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        //TODO Commit to context the const user = userCredential.user
        alert('Successful login ' + String(userCredential.user.displayName))
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
    <form onSubmit={handleSignIn}>
      <label>
        <span>Email:</span>
        <input type="text" name="email" onChange={handleChange} />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          name="password"
          autoComplete="on"
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Sign in" />
    </form>
  )
}

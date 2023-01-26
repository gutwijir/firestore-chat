import type { FirebaseApp } from 'firebase/app'
import { initializeApp } from 'firebase/app'
import type { Auth } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import type { Firestore } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import type { FC, ReactNode } from 'react'
import { createContext, useContext, useMemo } from 'react'

import { firebaseConfig } from '@/config/firebase.config'

export type FirebaseContextType = {
  app: FirebaseApp
  auth: Auth
  firestore: Firestore
}

export const FirebaseContext = createContext<FirebaseContextType>({
  app: initializeApp(firebaseConfig),
  auth: getAuth(),
  firestore: getFirestore(),
})

export const useFirebaseContext = () => {
  return useContext(FirebaseContext)
}

export const FirebaseAuthContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  // always memo the context value to avoid re-rendering all the time
  const value = useMemo(
    () => ({
      app: initializeApp(firebaseConfig),
      auth: getAuth(),
      firestore: getFirestore(),
    }),
    []
  )

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
}

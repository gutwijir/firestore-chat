//import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
//import { getFirestore } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

//import { firebaseConfig } from '@/config/firebase.config'
import styles from '@/styles/Home.module.css'

import { ChatRoom } from '../ChatRoom'
import { SignIn } from '../SignIn'

export const HomePage = () => {
  //const app = initializeApp(firebaseConfig)
  const auth = getAuth()

  const [user] = useAuthState(auth)

  return (
    <main className={styles.main}>
      <h1>firebase app</h1>
      {user ? <ChatRoom firestore={firestore} /> : <SignIn />}
    </main>
  )
}

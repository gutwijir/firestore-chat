import { useAuthState } from 'react-firebase-hooks/auth'

import { useFirebaseContext } from '@/contexts/firebase'
import styles from '@/styles/Home.module.css'

import { ChatRoom } from '../ChatRoom'
import { SignIn } from '../SignIn'

export const HomePage = () => {
  const { auth, firestore } = useFirebaseContext()

  const [user] = useAuthState(auth)

  return (
    <main className={styles.main}>
      <h1>firebase app</h1>
      {user ? <ChatRoom firestore={firestore} /> : <SignIn />}
    </main>
  )
}

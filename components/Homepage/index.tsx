import { useAuthState } from 'react-firebase-hooks/auth'

import { useFirebaseContext } from '@/contexts/firebase'

import { StyledMain } from './styled'

import { ChatRoom } from '../ChatRoom'
import { SignIn } from '../SignIn'

export const HomePage = () => {
  const { auth } = useFirebaseContext()

  const [user] = useAuthState(auth)

  return <StyledMain>{user ? <ChatRoom /> : <SignIn />}</StyledMain>
}

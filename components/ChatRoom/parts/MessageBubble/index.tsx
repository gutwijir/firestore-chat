import { useFirebaseContext } from '@/contexts/firebase'
import type { Message } from '@/types/MessageType'

import { StyledMessageBubble } from './styled'

type PropsType = {
  message: Message
}

export const MessageBubble = ({ message }: PropsType) => {
  const { auth } = useFirebaseContext()

  return (
    <StyledMessageBubble fromMe={message.uid === auth.currentUser?.uid}>
      {message.text}
    </StyledMessageBubble>
  )
}

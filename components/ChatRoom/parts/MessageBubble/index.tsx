import type { Message } from '@/types/MessageType'

import { StyledMessageBubble } from './styled'

type PropsType = {
  message: Message
}

export const MessageBubble = ({ message }: PropsType) => {
  return (
    //fromMe TO BE DONE BETTER! USING CURRENT USER (no state needed I guess)
    <StyledMessageBubble
      fromMe={message.uid === '0ENWu752B1fpLuBxisZh5Ne7oFl2'}
    >
      {message.text}
    </StyledMessageBubble>
  )
}

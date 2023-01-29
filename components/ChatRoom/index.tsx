import {
  collection,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
  addDoc,
} from 'firebase/firestore'
import { useEffect, useRef, useState } from 'react'

import { useFirebaseContext } from '@/contexts/firebase'
import { Background } from '@/styles/background'
import type { Message } from '@/types/MessageType'

import { MessageBubble } from './parts/MessageBubble'
import {
  ChatMessageForm,
  ChatWrapper,
  SendButton,
  SignoutButton,
  NewMessageInput,
} from './styled'

import { InputLabel } from '../SignIn/styled'

export const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const { auth, firestore } = useFirebaseContext()

  const [newMessage, setNewMessage] = useState('')

  const lastMessageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const messagesRef = collection(firestore, 'messages') //TO BE CHANGED DYNAMICALLY?
    const q = query(messagesRef, orderBy('createdAt'))

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messageArr: Message[] = []
      querySnapshot.forEach((doc) => {
        const mes = {
          ...doc.data(),
          id: doc.id,
        }
        messageArr.push(mes as Message)
      })
      setMessages(messageArr)
    })

    return () => unsubscribe()
  }, [firestore])

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSignout = () => {
    void auth.signOut()
  }

  const handleMessageSent = (e: React.SyntheticEvent): void => {
    e.preventDefault()

    const docData = {
      text: newMessage,
      createdAt: Timestamp.now(),
      uid: auth.currentUser?.uid,
    }

    void addDoc(collection(firestore, 'messages'), docData)

    setNewMessage('')
  }

  return (
    <Background>
      <SignoutButton onClick={handleSignout} type="button">
        Sign out
      </SignoutButton>
      <ChatWrapper>
        {messages.map((message) => {
          return <MessageBubble key={message.id} message={message} />
        })}
        <div ref={lastMessageRef} />
      </ChatWrapper>
      <ChatMessageForm onSubmit={handleMessageSent}>
        <InputLabel>
          <NewMessageInput
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </InputLabel>
        <SendButton type="submit" value="Send" />
      </ChatMessageForm>
    </Background>
  )
}

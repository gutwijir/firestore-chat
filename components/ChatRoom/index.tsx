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
import type { Message } from '@/types/MessageType'

import { MessageBubble } from './parts/MessageBubble'
import { ChatMessageForm, ChatWrapper, SendButton } from './styled'

import { CredentialInput, InputLabel } from '../SignIn/styled'

export const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const { auth, firestore } = useFirebaseContext()

  const [newMessage, setNewMessage] = useState('')

  const chatWrapperRef = useRef<HTMLDivElement | null>(null)
  const dummy = useRef<HTMLDivElement | null>()

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

  const handleSignout = () => {
    void auth.signOut()
  }

  const handleMessageSent = (e: React.SyntheticEvent): void => {
    e.preventDefault()

    const docData = {
      text: newMessage,
      createdAt: Timestamp.fromDate(new Date()),
      uid: '0ENWu752B1fpLuBxisZh5Ne7oFl2', //me, to be changed!
    }

    void addDoc(collection(firestore, 'messages'), docData)

    setNewMessage('')

    //TODO enable scrolling right after message is sent - empty div trick does not work apparently
    chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight
    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <button onClick={handleSignout} type="button">
        Sign out
      </button>
      <ChatWrapper ref={chatWrapperRef}>
        {messages.map((message) => {
          return <MessageBubble key={message.id} message={message} />
        })}
        <div ref={dummy} />
      </ChatWrapper>
      <ChatMessageForm onSubmit={handleMessageSent}>
        <InputLabel>
          <CredentialInput
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </InputLabel>
        <SendButton type="submit" value="Send" />
      </ChatMessageForm>
    </>
  )
}

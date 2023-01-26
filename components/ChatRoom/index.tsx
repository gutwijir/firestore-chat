import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import type { Firestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { useFirebaseContext } from '@/contexts/firebase'
import type { Message } from '@/types/MessageType'

type PropsType = {
  firestore: Firestore
}

export const ChatRoom = ({ firestore }: PropsType) => {
  const [messages, setMessages] = useState<Message[]>([])
  const { auth } = useFirebaseContext()

  useEffect(() => {
    const messagesRef = collection(firestore, 'messages')
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

  return (
    <>
      <button onClick={handleSignout} type="button">
        Sign out
      </button>
      <div>chat room</div>
      {messages.map((message) => {
        return (
          <p key={message.id}>
            {message.uid}: {message.text}
          </p>
        )
      })}
    </>
  )
}

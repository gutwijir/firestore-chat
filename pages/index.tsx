import Head from 'next/head'

import { HomePage } from '@/components/Homepage'
import { FirebaseAuthContextProvider } from '@/contexts/firebase'

export default function Home() {
  return (
    <>
      <Head>
        <title>Firestore chat</title>
        <meta
          name="description"
          content="Simple chat application using Firestore realtime DB"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirebaseAuthContextProvider>
        <HomePage />
      </FirebaseAuthContextProvider>
    </>
  )
}

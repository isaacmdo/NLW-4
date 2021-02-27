import '../styles/global.css'

import { ChallengesProvider } from '../components/contexts/ChallengesContatext'
import { useState } from 'react'
import { CountdownProvider } from '../components/contexts/CountdownContext'

function MyApp({ Component, pageProps }) {


  return (

        <Component {...pageProps} />
  
  )
}

export default MyApp

import React from 'react'
import { Global } from '@emotion/react'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/Header'

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header />
    </>
  )
}

export default App

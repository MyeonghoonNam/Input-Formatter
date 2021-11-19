import React from 'react'
import { Global } from '@emotion/react'
import { GlobalStyles } from './styles/GlobalStyles'
import FormatterTemplate from './components/FormatterTemplate'

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <FormatterTemplate></FormatterTemplate>
    </>
  )
}

export default App

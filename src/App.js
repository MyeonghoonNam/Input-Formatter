import React, { useState } from 'react'
import { Global } from '@emotion/react'
import { GlobalStyles } from './styles/GlobalStyles'
import FormatterTemplate from './components/FormatterTemplate'
import FormatterList from './components/FormatterList'

function App() {
  const InitialList = [
    {
      id: 1,
      type: 'creditCard',
      title: 'Credit card number formatting',
      message: 'Enter credit card number...',
    },
    {
      id: 2,
      type: 'phone',
      title: 'Phone number formatting',
      message: 'Enter phone number...',
    },
    {
      id: 3,
      type: 'date',
      title: 'Date formatting',
      message: 'YYYY-MM-DD',
    },
    {
      id: 4,
      type: 'time',
      title: 'Time formatting',
      message: 'hh:mm:ss',
    },
  ]

  return (
    <>
      <Global styles={GlobalStyles} />
      <FormatterTemplate>
        <FormatterList list={InitialList} />
      </FormatterTemplate>
    </>
  )
}

export default App

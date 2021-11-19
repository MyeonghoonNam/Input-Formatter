import React from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'
import { GlobalStyles } from './styles/GlobalStyles'

const Header = styled.div`
  padding-top: 10%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

const Title = styled.div`
  font-size: 148px;
  font-family: 'Pathway Gothic One', sans-serif;
`

const Description = styled.div`
  margin-top: 30px;
  font-size: 22px;

  span {
    color: green;
  }
`

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header>
        <Title>Formatter</Title>
        <Description>
          Format your &lt;<span>input</span>/&gt; content when you are typing
        </Description>
      </Header>
    </>
  )
}

export default App

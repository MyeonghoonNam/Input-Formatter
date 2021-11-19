import React from 'react'
import styled from '@emotion/styled'
import Header from './Header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.main`
  display: flex;
`

const FormatterTemplate = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  )
}

export default FormatterTemplate

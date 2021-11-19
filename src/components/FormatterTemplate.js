import styled from '@emotion/styled'
import Header from './Header'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Content = styled.main`
  display: flex;
  justify-content: center;
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

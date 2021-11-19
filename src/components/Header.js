import styled from '@emotion/styled'

const Container = styled.header`
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

const Header = () => {
  return (
    <Container>
      <Title>Formatter</Title>
      <Description>
        Format your &lt;<span>input</span>/&gt; content when you are typing
      </Description>
    </Container>
  )
}

export default Header

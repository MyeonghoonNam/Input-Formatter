import React from 'react'
import styled from '@emotion/styled'
import Formatter from './Formatter'

const Container = styled.section`
  max-width: 640px;
  display: flex;
  flex-direction: column;
`

const FormatterList = ({ list }) => {
  return (
    <Container>
      {list.map((el) => (
        <Formatter key={el.id} formatter={el} />
      ))}
    </Container>
  )
}

export default FormatterList

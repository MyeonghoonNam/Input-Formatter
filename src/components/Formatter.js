import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'

const Container = styled.article`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Title = styled.div`
  padding-bottom: 30px;
  font-size: 36px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: #272822;
  text-align: center;
`

const Input = styled.input`
  border: 3px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  line-height: 60px;
  vertical-align: middle;
  height: 66px;
  font-size: 32px;
  padding: 0 15px;
  font-family: 'Pathway Gothic One', sans-serif;
`

const Formatter = ({ formatter }) => {
  const { type, title, message } = formatter

  const [value, setValue] = useState('')

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  return (
    <Container>
      <Title>{title}</Title>
      <Input placeholder={message} onChange={onChange} value={value} />
    </Container>
  )
}

export default Formatter

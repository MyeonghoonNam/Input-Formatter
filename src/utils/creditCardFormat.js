export const creditCardFormat = (value) => {
  if (value.length > 19) {
    return value.substr(0, 19)
  }

  let newValue = value.replace(/[^0-9]/g, '')
  let temp = ''

  for (let i = 0; i < newValue.length; i++) {
    if (i > 0 && i % 4 === 0) {
      temp += ' '
    }

    temp += newValue[i]
  }

  newValue = temp

  return newValue
}

export const dateFormat = (value) => {
  if (value.length > 10) {
    return value.substring(0, 10)
  }

  let newValue = value.replace(/[^0-9]/g, '')
  let temp = ''

  if (value.length < 5) {
    return newValue
  } else if (value.length < 8) {
    temp += newValue.substring(0, 4)
    temp += '-'
    temp += newValue.substring(4)
  } else {
    temp += newValue.substring(0, 4)
    temp += '-'
    temp += newValue.substring(4, 6)
    temp += '-'
    temp += newValue.substring(6)
  }

  newValue = temp

  return newValue
}

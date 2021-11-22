export const phoneFormat = (value) => {
  if (value.length > 13) {
    return value.substring(0, 13)
  }

  let newValue = value.replace(/[^0-9]/g, '')
  let temp = ''

  if (value.length < 4) {
    return newValue
  } else if (value.length < 7) {
    temp += newValue.substring(0, 3)
    temp += '-'
    temp += newValue.substring(3)
  } else if (newValue.length < 11) {
    temp += newValue.substring(0, 3)
    temp += '-'
    temp += newValue.substring(3, 6)
    temp += '-'
    temp += newValue.substring(6)
  } else {
    temp += newValue.substring(0, 3)
    temp += '-'
    temp += newValue.substring(3, 7)
    temp += '-'
    temp += newValue.substring(7)
  }

  newValue = temp

  return newValue
}

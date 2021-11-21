export const phoneFormat = (value) => {
  if (value.length > 13) {
    return value.substr(0, 13)
  }

  let newValue = value.replace(/[^0-9]/g, '')
  let temp = ''

  if (value.length < 4) {
    return newValue
  } else if (value.length < 7) {
    temp += newValue.substr(0, 3)
    temp += '-'
    temp += newValue.substr(3)
  } else if (newValue.length < 11) {
    temp += newValue.substr(0, 3)
    temp += '-'
    temp += newValue.substr(3, 3)
    temp += '-'
    temp += newValue.substr(6)
  } else {
    temp += newValue.substr(0, 3)
    temp += '-'
    temp += newValue.substr(3, 4)
    temp += '-'
    temp += newValue.substr(7)
  }

  newValue = temp

  return newValue
}

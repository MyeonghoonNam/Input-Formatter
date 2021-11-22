export const timeFormat = (value) => {
  if (value.length > 8) {
    return value.substring(0, 8)
  }

  let newValue = value.replace(/[^0-9]/g, '')
  let temp = ''

  if (value.length < 3) {
    const hour = newValue

    if (hour > '23') {
      temp += '23'
    } else {
      temp = hour
    }
  } else if (value.length < 6) {
    const hour = newValue.substring(0, 2)
    const minute = newValue.substring(2)

    if (minute > '59') {
      temp += hour
      temp += ':'
      temp += '59'
    } else {
      temp += hour
      temp += ':'
      temp += minute
    }
  } else {
    const hour = newValue.substring(0, 2)
    const minute = newValue.substring(2, 4)
    const second = newValue.substring(4)

    if (second > '59') {
      temp += hour
      temp += ':'
      temp += minute
      temp += ':'
      temp += '59'
    } else {
      temp += hour
      temp += ':'
      temp += minute
      temp += ':'
      temp += second
    }
  }

  newValue = temp

  return newValue
}

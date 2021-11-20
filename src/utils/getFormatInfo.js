import { creditCardFormat } from '../utils/creditCardFormat'

export const getFormatInfo = (type, value) => {
  switch (type) {
    case 'creditCard':
      return creditCardFormat(value)
    case 'phone':
      break
    case 'date':
      break
    case 'time':
      break
    default:
  }
}

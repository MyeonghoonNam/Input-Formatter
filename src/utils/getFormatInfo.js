import { creditCardFormat } from '../utils/creditCardFormat'
import { phoneFormat } from './phoneFormat'

export const getFormatInfo = (type, value) => {
  switch (type) {
    case 'creditCard':
      return creditCardFormat(value)
    case 'phone':
      return phoneFormat(value)
    case 'date':
      break
    case 'time':
      break
    default:
  }
}

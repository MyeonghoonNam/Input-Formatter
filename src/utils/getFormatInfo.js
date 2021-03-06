import { creditCardFormat } from '../utils/creditCardFormat'
import { phoneFormat } from './phoneFormat'
import { dateFormat } from './dateFormat'
import { timeFormat } from './timeFormat'

export const getFormatInfo = (type, value) => {
  switch (type) {
    case 'creditCard':
      return creditCardFormat(value)
    case 'phone':
      return phoneFormat(value)
    case 'date':
      return dateFormat(value)
    case 'time':
      return timeFormat(value)
    default:
  }
}

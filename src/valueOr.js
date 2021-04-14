import { curry2 } from './curry2.js'
import { setName } from './internal/setName.js'

const valueOrU = (defaultValue, value) =>
  value === undefined ? defaultValue : value

export const valueOr = setName(curry2(valueOrU), 'valueOr')

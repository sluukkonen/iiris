import { curry3 } from './curry3.js'
import { setName } from './internal/setName.js'

const maybeU = (defaultValue, fn, value) =>
  value === undefined ? defaultValue : fn(value)

export const maybe = setName(curry3(maybeU), 'maybe')

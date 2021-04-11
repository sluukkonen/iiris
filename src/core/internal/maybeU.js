import { isUndefined } from '../isUndefined.js'

export const maybeU = (defaultValue, fn, value) =>
  isUndefined(value) ? defaultValue : fn(value)

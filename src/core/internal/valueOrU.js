import { isUndefined } from '../isUndefined.js'

export const valueOrU = (defaultValue, value) =>
  isUndefined(value) ? defaultValue : value

import { isUndefined } from '../isUndefined'

export const maybeU = (defaultValue, fn, value) =>
  isUndefined(value) ? defaultValue : fn(value)

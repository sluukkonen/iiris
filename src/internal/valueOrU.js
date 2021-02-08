import { isUndefined } from '../isUndefined'

export const valueOrU = (defaultValue, value) =>
  isUndefined(value) ? defaultValue : value

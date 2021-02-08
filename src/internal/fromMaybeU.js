import { isUndefined } from '../isUndefined'
export const fromMaybeU = (defaultValue, value) =>
  isUndefined(value) ? defaultValue : value

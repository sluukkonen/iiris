import { isUndefined } from '../../core/index.js'

export const propOrU = (defaultValue, key, object) => {
  const maybeValue = object[key]
  return isUndefined(maybeValue) ? defaultValue : maybeValue
}

import { isUndefined } from '../isUndefined'
import { copyObject } from './copyObject'

export const modifyPropU = (key, fn, object) => {
  const result = copyObject(object)
  const value = fn(object[key])

  if (isUndefined(value)) {
    delete result[key]
  } else {
    result[key] = value
  }

  return result
}

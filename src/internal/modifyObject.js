import { isObject } from '../isObject'
import { isUndefined } from '../isUndefined'
import { copyObject } from './copyObject'

export const modifyObject = (key, fn, object) => {
  const result = isObject(object) ? copyObject(object) : {}
  const value = fn(result[key])

  if (isUndefined(value)) {
    delete result[key]
  } else {
    result[key] = value
  }

  return result
}

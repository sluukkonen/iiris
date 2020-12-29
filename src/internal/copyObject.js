import { isObject } from '../isObject'

export const copyObject = (object) => {
  if (!isObject(object)) {
    throw new TypeError('Expected an object')
  }
  return { ...object }
}

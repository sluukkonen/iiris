import { isArray } from '../isArray'

export const copyArray = (array) => {
  if (!isArray(array)) {
    throw new TypeError('Expected an array')
  }
  return array.slice()
}

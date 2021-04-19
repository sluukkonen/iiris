import { copyArray } from './copyArray.js'

export const setArrayIndex = (index, value, array) => {
  const result = copyArray(array)
  result[index] = value
  return result
}

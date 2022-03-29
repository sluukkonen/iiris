import { builtinArray } from '../../core/internal/builtins.js'

export const mapU = (fn, array) => {
  const length = array.length
  const result = new builtinArray(length)

  for (let i = 0; i < length; i++) {
    result[i] = fn(array[i])
  }

  return result
}

import { builtinArray } from '../../core/internal/index.js'

export const mapWithIndexU = (fn, array) => {
  const length = array.length
  const result = new builtinArray(length)

  for (let i = 0; i < length; i++) {
    result[i] = fn(i, array[i])
  }

  return result
}

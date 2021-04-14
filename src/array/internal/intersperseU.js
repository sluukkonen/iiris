import { builtinArray } from '../../core/internal/builtins.js'

export const intersperseU = (separator, array) => {
  const length = array.length
  if (length === 0) return []
  const result = new builtinArray(length * 2 - 1)

  for (let i = 0; i < length - 1; i++) {
    result[i * 2] = array[i]
    result[i * 2 + 1] = separator
  }

  result[result.length - 1] = array[length - 1]

  return result
}

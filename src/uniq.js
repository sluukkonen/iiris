import { uniqByU } from './internal/uniqByU'
import { identity } from './identity'
import { includesU } from './internal/includesU'

export const uniq = (array) => {
  // Not quite sure what the "correct" threshold should be, but this seems to be
  // in the ballpark.
  if (array.length > 100) return uniqByU(identity, array)

  // Use a simpler implementation for small arrays.
  const result = []

  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    if (!includesU(value, result)) {
      result.push(value)
    }
  }

  return result
}

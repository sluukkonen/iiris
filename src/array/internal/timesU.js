import { builtinArray } from '../../core/internal/builtins.js'
import { maxU } from '../../core/internal/maxU.js'

export const timesU = (fn, n) => {
  const result = new builtinArray(maxU(n, 0))

  for (let i = 0; i < n; i++) {
    result[i] = fn(i)
  }

  return result
}

import { maxU } from './maxU'
import { builtinArray } from './builtins'

export const timesU = (fn, n) => {
  const result = new builtinArray(maxU(n, 0))

  for (let i = 0; i < n; i++) {
    result[i] = fn(i)
  }

  return result
}

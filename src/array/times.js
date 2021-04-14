import { curry2 } from '../curry2.js'
import { builtinArray } from '../internal/builtins.js'
import { setName } from '../internal/setName.js'
import { maxU } from '../max.js'

export const timesU = (fn, n) => {
  const result = new builtinArray(maxU(n, 0))

  for (let i = 0; i < n; i++) {
    result[i] = fn(i)
  }

  return result
}

export const times = setName(curry2(timesU), 'times')

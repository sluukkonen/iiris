import { curry2 } from './internal/curry2'
import { copyName } from './internal/copyName'

export const arityN = curry2(function arityN(n, fn) {
  switch (n) {
    case 0:
      return copyName(() => fn(), fn)
    case 1:
      return copyName((a1) => fn(a1), fn)
    case 2:
      return copyName((a1, a2) => fn(a1, a2), fn)
    case 3:
      return copyName((a1, a2, a3) => fn(a1, a2, a3), fn)
    case 4:
      return copyName((a1, a2, a3, a4) => fn(a1, a2, a3, a4), fn)
    case 5:
      return copyName((a1, a2, a3, a4, a5) => fn(a1, a2, a3, a4, a5), fn)
    default:
      throw new RangeError('arityN: arities higher than 5 are not supported')
  }
})

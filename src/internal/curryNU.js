import { curry2 } from './curry2'
import { curry3 } from './curry3'

export const curryNU = function curryN(n, fn) {
  switch (n) {
    case 0:
    case 1:
      return fn
    case 2:
      return curry2(fn)
    case 3:
      return curry3(fn)
    default:
      // FIXME: Implement the general case
      throw new Error('Not implemented!')
  }
}

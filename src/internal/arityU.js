import { minU } from './minU'
import { arity0 } from './arity0'
import { arity1 } from './arity1'
import { arity2 } from './arity2'
import { arity3 } from './arity3'

export const arityU = (n, fn) => {
  switch (n) {
    case 0:
      return arity0(fn)
    case 1:
      return arity1(fn)
    case 2:
      return arity2(fn)
    case 3:
      return arity3(fn)
    default:
      return function arityN() {
        const args = new Array(minU(arguments.length, n))
        for (let i = 0; i < args.length; i++) {
          args[i] = arguments[i]
        }
        return fn.apply(null, args)
      }
  }
}

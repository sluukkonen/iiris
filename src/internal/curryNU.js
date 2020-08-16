import { curry2 } from './curry2'
import { curry3 } from './curry3'
import { clampU } from './clampU'
import { arity0 } from './arity0'
import { arity1 } from './arity1'

export const curryNU = (n, fn) => {
  switch (n) {
    case 0:
      return arity0(fn)
    case 1:
      return arity1(fn)
    case 2:
      return curry2(fn)
    case 3:
      return curry3(fn)
    default:
      return curryNGeneric(n, fn, null)
  }
}

const curryNGeneric = (left, fn, _args) =>
  function curryN() {
    const args = _args || new Array(left)
    const n = args.length
    const argCount = clampU(1, left, arguments.length)
    const stillLeft = left - argCount

    for (let i = 0; i < argCount; i++) {
      args[i + n - left] = arguments[i]
    }

    return stillLeft > 0
      ? curryNGeneric(stillLeft, fn, args)
      : fn.apply(null, args)
  }

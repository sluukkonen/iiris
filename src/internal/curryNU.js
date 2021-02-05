import { curry2 } from './curry2'
import { curry3 } from './curry3'
import { curry4 } from './curry4'
import { maxU } from './maxU'

export const curryNU = (n, fn) => {
  switch (n) {
    case 0:
    case 1:
      return fn
    case 2:
      return curry2(fn)
    case 3:
      return curry3(fn)
    case 4:
      return curry4(fn)
    default:
      return curryNGeneric(n, fn, null)
  }
}

const curryNGeneric = (left, fn, _args) =>
  function curryN() {
    const args = _args || new Array(left)
    const n = args.length
    const argCount = maxU(1, arguments.length)
    const stillLeft = left - argCount

    for (let i = 0; i < argCount; i++) {
      args[i + n - left] = arguments[i]
    }

    return stillLeft > 0 ? curryNGeneric(stillLeft, fn, args) : fn(...args)
  }

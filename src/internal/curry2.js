import { copyName } from './copyName'

export const curry2 = (fn) =>
  copyName(function curry2(a1, a2) {
    return arguments.length < 2 ? curry2Got1(fn, a1) : fn(a1, a2)
  }, fn)

const curry2Got1 = (fn, a1) =>
  copyName(function curry2(a2) {
    return fn(a1, a2)
  }, fn)

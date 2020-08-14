import { copyName } from './copyName'

export const curry3 = (fn) =>
  copyName(function curry3(a1, a2, a3) {
    const length = arguments.length
    return length < 3
      ? length === 2
        ? curry3Got2(fn, a1, a2)
        : curry3Got1(fn, a1)
      : fn(a1, a2, a3)
  }, fn)

const curry3Got2 = (fn, a1, a2) =>
  copyName(function curry3(a3) {
    return fn(a1, a2, a3)
  }, fn)

const curry3Got1 = (fn, a1) =>
  copyName(function curry3(a2, a3) {
    return arguments.length < 2 ? curry3Got2(fn, a1, a2) : fn(a1, a2, a3)
  }, fn)

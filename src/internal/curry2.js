export const curry2 = (fn) =>
  function curry2(a1, a2, ...rest) {
    return arguments.length < 2 ? curry21(fn, a1) : fn(a1, a2, ...rest)
  }

const curry21 = (fn, a1) =>
  function curry21(a2, ...rest) {
    return fn(a1, a2, ...rest)
  }

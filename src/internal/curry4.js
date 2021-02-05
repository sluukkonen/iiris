export const curry4 = (fn) =>
  function curry4(a1, a2, a3, a4, ...rest) {
    const length = arguments.length
    return length < 4
      ? length === 3
        ? curry43(fn, a1, a2, a3, ...rest)
        : length === 2
        ? curry42(fn, a1, a2)
        : curry41(fn, a1)
      : fn(a1, a2, a3, a4)
  }

const curry43 = (fn, a1, a2, a3) =>
  function curry43(a4, ...rest) {
    return fn(a1, a2, a3, a4, ...rest)
  }

const curry42 = (fn, a1, a2) =>
  function curry42(a3, a4, ...rest) {
    return arguments.length < 2
      ? curry43(fn, a1, a2, a3)
      : fn(a1, a2, a3, a4, ...rest)
  }

const curry41 = (fn, a1) =>
  function curry41(a2, a3, a4, ...rest) {
    const length = arguments.length
    return length < 3
      ? length === 2
        ? curry43(fn, a1, a2, a3)
        : curry42(fn, a1, a2)
      : fn(a1, a2, a3, a4, ...rest)
  }

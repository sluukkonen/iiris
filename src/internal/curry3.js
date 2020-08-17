export const curry3 = (fn) =>
  function curry3(a1, a2, a3, ...rest) {
    const length = arguments.length
    return length < 3
      ? length === 2
        ? curry32(fn, a1, a2)
        : curry31(fn, a1)
      : fn(a1, a2, a3, ...rest)
  }

const curry32 = (fn, a1, a2) =>
  function curry32(a3, ...rest) {
    return fn(a1, a2, a3, ...rest)
  }

const curry31 = (fn, a1) =>
  function curry31(a2, a3, ...rest) {
    return arguments.length < 2 ? curry32(fn, a1, a2) : fn(a1, a2, a3, ...rest)
  }

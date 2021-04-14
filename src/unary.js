export const unary = (fn) =>
  function unary1(a) {
    return fn(a)
  }

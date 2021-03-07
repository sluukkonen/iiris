export const flip = (fn) =>
  function flip1(a, b) {
    return fn(b, a)
  }

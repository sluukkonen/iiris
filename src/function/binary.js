export const binary = (fn) =>
  function binary1(a, b) {
    return fn(a, b)
  }

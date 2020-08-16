export const arity3 = (fn) =>
  function arity3(a1, a2, a3) {
    return fn(a1, a2, a3)
  }

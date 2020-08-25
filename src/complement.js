export const complement = (fn) =>
  function complement1() {
    return !fn.apply(this, arguments)
  }

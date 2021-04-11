export const tap = (fn) =>
  function tap1(value) {
    fn(value)
    return value
  }

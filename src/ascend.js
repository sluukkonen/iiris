export const ascend = (fn) =>
  function ascend1(a, b) {
    const aa = fn(a)
    const bb = fn(b)
    return aa > bb ? 1 : aa < bb ? -1 : 0
  }

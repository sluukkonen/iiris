export function seq(initial) {
  switch (arguments.length) {
    case 0:
    case 1:
      return initial
    default: {
      let acc = initial

      for (let i = 1; i < arguments.length; i++) {
        const fn = arguments[i]
        acc = fn(acc)
      }

      return acc
    }
  }
}

export function compose(...fns) {
  switch (fns.length) {
    case 0:
      throw new TypeError('compose: empty argument list!')
    case 1:
      return fns[0]
    case 2: {
      const [fn1, fn2] = fns
      return function compose2(...args) {
        return fn1(fn2(...args))
      }
    }
    case 3: {
      const [fn1, fn2, fn3] = fns
      return function compose3(...args) {
        return fn1(fn2(fn3(...args)))
      }
    }
    default: {
      return function composeN(...args) {
        let i = fns.length - 1
        let fn = fns[i]
        let acc = fn(...args)

        while (i--) {
          fn = fns[i]
          acc = fn(acc)
        }

        return acc
      }
    }
  }
}

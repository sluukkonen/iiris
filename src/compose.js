export function compose(fn1) {
  switch (arguments.length) {
    case 0:
      throw new TypeError('compose: empty argument list!')
    case 1:
      return fn1
    case 2: {
      const fn2 = arguments[1]
      return function compose1() {
        return fn1(fn2.apply(this, arguments))
      }
    }
    case 3: {
      const fn2 = arguments[1]
      const fn3 = arguments[2]
      return function compose1() {
        return fn1(fn2(fn3.apply(this, arguments)))
      }
    }
    default: {
      const length = arguments.length
      const fns = new Array(length)
      for (let i = 0; i < length; i++) {
        fns[i] = arguments[i]
      }

      return function compose1() {
        let fn = fns[length - 1]
        let acc = fn.apply(this, arguments)

        for (let i = length - 2; i >= 0; i--) {
          fn = fns[i]
          acc = fn(acc)
        }

        return acc
      }
    }
  }
}

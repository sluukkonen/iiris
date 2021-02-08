import { copyArray } from './copyArray'
import { includesBy } from './includesBy'

export const unionWithU = (eq, xs, ys) => {
  const result = copyArray(xs)

  for (let i = 0; i < ys.length; i++) {
    const value = ys[i]
    if (!includesBy(eq, value, xs)) {
      result.push(value)
    }
  }

  return result
}

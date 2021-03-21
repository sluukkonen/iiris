import { copyArray } from './copyArray'
import { includesBy } from './includesBy'

export const unionWithU = (eq, xs, ys) => {
  const result = copyArray(xs)

  for (const value of ys) {
    if (!includesBy(eq, value, result)) {
      result.push(value)
    }
  }

  return result
}

import { copyArray } from './copyArray.js'
import { includesBy } from './includesBy.js'

export const unionWithU = (eq, xs, ys) => {
  const result = copyArray(xs)

  for (const value of ys) {
    if (!includesBy(eq, value, result)) {
      result.push(value)
    }
  }

  return result
}

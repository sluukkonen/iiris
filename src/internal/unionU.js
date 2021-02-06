import { copyArray } from './copyArray'
import { includesU } from './includesU'

export const unionU = (xs, ys) => {
  const result = copyArray(xs)

  for (let i = 0; i < ys.length; i++) {
    const value = ys[i]
    if (!includesU(value, xs)) {
      result.push(value)
    }
  }

  return result
}

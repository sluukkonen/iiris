import { includesU } from './includesU'

export const intersectionDifference = (intersection, xs, ys) => {
  const result = []

  for (let i = 0; i < xs.length; i++) {
    const value = xs[i]
    const isIncluded = includesU(value, ys)
    if (intersection ? isIncluded : !isIncluded) {
      result.push(value)
    }
  }

  return result
}

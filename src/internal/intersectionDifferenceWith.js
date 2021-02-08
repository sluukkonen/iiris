import { includesBy } from './includesBy'

export const intersectionDifferenceWith = (intersection, eq, xs, ys) => {
  const result = []

  for (let i = 0; i < xs.length; i++) {
    const value = xs[i]
    const isIncluded = includesBy(eq, value, ys)
    if (intersection ? isIncluded : !isIncluded) {
      result.push(value)
    }
  }

  return result
}

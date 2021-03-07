import { includesBy } from './includesBy'

export const intersectionDifferenceWith = (intersection, eq, xs, ys) => {
  const result = []

  for (const value of xs) {
    const isIncluded = includesBy(eq, value, ys)
    if (intersection ? isIncluded : !isIncluded) {
      result.push(value)
    }
  }

  return result
}

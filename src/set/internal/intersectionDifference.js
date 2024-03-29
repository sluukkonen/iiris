import { empty } from '../empty.js'
import { hasU } from '../has.js'

export const intersectionDifference = (xs, ys, intersection) => {
  const result = empty()

  for (const x of xs) {
    const isIncluded = hasU(x, ys)
    if (intersection ? isIncluded : !isIncluded) {
      result.add(x)
    }
  }

  return result
}

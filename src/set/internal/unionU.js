import { copySet } from './copySet.js'

export const unionU = (xs, ys) => {
  const result = copySet(xs)

  for (const y of ys) {
    result.add(y)
  }

  return result
}

import { sortU } from './sortU'

export const sortWithU = (comparators, array) =>
  sortU((a, b) => {
    let result = 0

    for (const comparator of comparators) {
      result = comparator(a, b)
      if (result !== 0) break
    }

    return result
  }, array)

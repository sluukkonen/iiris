export const combineComparators = (comparators) => {
  switch (comparators.length) {
    case 1:
      return comparators[0]
    case 2: {
      const [cmp1, cmp2] = comparators
      return function comparator(a, b) {
        return cmp1(a, b) || cmp2(a, b)
      }
    }
    case 3: {
      const [cmp1, cmp2, cmp3] = comparators
      return function comparator(a, b) {
        return cmp1(a, b) || cmp2(a, b) || cmp3(a, b)
      }
    }
    default: {
      return function comparator(a, b) {
        let result = 0

        for (const comparator of comparators) {
          result = comparator(a, b)
          if (result !== 0) break
        }

        return result
      }
    }
  }
}

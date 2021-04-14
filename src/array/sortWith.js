import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { sortU } from './sort.js'

const sortWithU = (comparators, array) =>
  sortU((a, b) => {
    let result = 0

    for (const comparator of comparators) {
      result = comparator(a, b)
      if (result !== 0) break
    }

    return result
  }, array)

export const sortWith = setName(curry2(sortWithU), 'sortWith')

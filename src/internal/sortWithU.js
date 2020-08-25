import { combineComparators } from './combineComparators'
import { sortU } from './sortU'

export const sortWithU = (comparators, array) =>
  sortU(combineComparators(comparators), array)

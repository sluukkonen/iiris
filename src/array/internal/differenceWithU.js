import { intersectionDifferenceWith } from './intersectionDifferenceWith.js'

export const differenceWithU = (eq, xs, ys) =>
  intersectionDifferenceWith(false, eq, xs, ys)

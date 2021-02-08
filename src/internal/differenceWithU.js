import { intersectionDifferenceWith } from './intersectionDifferenceWith'

export const differenceWithU = (eq, xs, ys) =>
  intersectionDifferenceWith(false, eq, xs, ys)

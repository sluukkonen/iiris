import { intersectionDifferenceWith } from './intersectionDifferenceWith.js'

export const intersectionWithU = (eq, xs, ys) =>
  intersectionDifferenceWith(true, eq, xs, ys)

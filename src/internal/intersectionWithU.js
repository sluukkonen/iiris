import { intersectionDifferenceWith } from './intersectionDifferenceWith'

export const intersectionWithU = (eq, xs, ys) =>
  intersectionDifferenceWith(true, eq, xs, ys)

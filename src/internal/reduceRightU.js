import { flip } from '../flip'

export const reduceRightU = (fn, initial, array) =>
  array.reduceRight(flip(fn), initial)

import { takeDropWhile } from './takeOrDropWhile'

export const takeLastWhileU = (fn, array) =>
  takeDropWhile(array, fn, true, true)

import { takeDropWhile } from './takeOrDropWhile'

export const dropLastWhileU = (fn, array) =>
  takeDropWhile(array, fn, false, true)

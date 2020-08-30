import { takeDropWhile } from './takeDropWhile'

export const takeLastWhileU = (fn, array) =>
  takeDropWhile(fn, array, true, true)

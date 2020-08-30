import { takeDropWhile } from './takeDropWhile'

export const dropLastWhileU = (fn, array) =>
  takeDropWhile(fn, array, false, true)

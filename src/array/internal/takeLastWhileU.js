import { takeDropWhile } from './takeDropWhile.js'

export const takeLastWhileU = (fn, array) =>
  takeDropWhile(fn, array, true, true)

import { takeDropWhile } from './takeDropWhile.js'

export const dropLastWhileU = (fn, array) =>
  takeDropWhile(fn, array, false, true)

import { takeDropWhile } from './takeDropWhile.js'

export const takeWhileU = (fn, array) => takeDropWhile(fn, array, true, false)

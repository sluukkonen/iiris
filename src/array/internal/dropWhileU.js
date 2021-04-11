import { takeDropWhile } from './takeDropWhile.js'

export const dropWhileU = (fn, array) => takeDropWhile(fn, array, false, false)

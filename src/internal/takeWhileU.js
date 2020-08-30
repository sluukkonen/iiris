import { takeDropWhile } from './takeDropWhile'

export const takeWhileU = (fn, array) => takeDropWhile(fn, array, true, false)

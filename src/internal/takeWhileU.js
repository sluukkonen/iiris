import { takeDropWhile } from './takeOrDropWhile'

export const takeWhileU = (fn, array) => takeDropWhile(array, fn, true)

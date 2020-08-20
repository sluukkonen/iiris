import { takeDropWhile } from './takeOrDropWhile'

export const dropWhileU = (fn, array) => takeDropWhile(array, fn, false)

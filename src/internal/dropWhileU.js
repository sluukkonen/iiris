import { takeDropWhile } from './takeDropWhile'

export const dropWhileU = (fn, array) => takeDropWhile(fn, array, false, false)

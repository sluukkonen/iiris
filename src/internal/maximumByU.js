import { maxByU } from './maxByU'
import { reduce1 } from './reduce1'

export const maximumByU = (fn, array) =>
  array.length === 0 ? undefined : reduce1((a, b) => maxByU(fn, a, b), array)

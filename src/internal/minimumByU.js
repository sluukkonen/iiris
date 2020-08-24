import { minByU } from './minByU'
import { reduce1 } from './reduce1'

export const minimumByU = (fn, array) =>
  array.length === 0 ? undefined : reduce1((a, b) => minByU(fn, a, b), array)

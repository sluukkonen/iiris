import { minByU } from './minByU'
import { reduce1 } from './reduce1'

export const minimumByU = (fn, array) =>
  reduce1((a, b) => minByU(fn, a, b), array)

import { minByU } from '../../core/internal/minByU.js'
import { reduce1 } from './reduce1.js'

export const minimumByU = (fn, array) =>
  reduce1((a, b) => minByU(fn, a, b), array)

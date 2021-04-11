import { minByU } from '../../core/internal/index.js'
import { reduce1 } from './reduce1.js'

export const minimumByU = (fn, array) =>
  reduce1((a, b) => minByU(fn, a, b), array)

import { maxByU } from '../../core/internal/index.js'
import { reduce1 } from './reduce1.js'

export const maximumByU = (fn, array) =>
  reduce1((a, b) => maxByU(fn, a, b), array)

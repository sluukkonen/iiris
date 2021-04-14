import { minU } from '../internal/minU.js'
import { reduce1 } from './internal/reduce1.js'

export const minimum = (array) => reduce1(minU, array)

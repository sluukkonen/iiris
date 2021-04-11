import { minU } from '../core/internal/index.js'
import { reduce1 } from './internal/index.js'

export const minimum = (array) => reduce1(minU, array)

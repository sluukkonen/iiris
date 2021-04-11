import { maxU } from '../core/internal/index.js'
import { reduce1 } from './internal/index.js'

export const maximum = (array) => reduce1(maxU, array)

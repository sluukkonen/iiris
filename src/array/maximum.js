import { maxU } from '../internal/maxU.js'
import { reduce1 } from './internal/reduce1.js'

export const maximum = (array) => reduce1(maxU, array)

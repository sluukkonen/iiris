import { maxU } from './internal/maxU'
import { reduce1 } from './internal/reduce1'

export const maximum = (array) => reduce1(maxU, array)

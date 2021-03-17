import { minU } from './internal/minU'
import { reduce1 } from './internal/reduce1'

export const minimum = (array) => reduce1(minU, array)

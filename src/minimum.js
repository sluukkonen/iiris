import { reduce1 } from './internal/reduce1'
import { minU } from './internal/minU'

export const minimum = (array) => reduce1(minU, array)

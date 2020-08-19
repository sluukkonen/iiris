import { maxU } from './maxU'
import { minU } from './minU'

export const clampU = (low, high, n) => minU(high, maxU(low, n))

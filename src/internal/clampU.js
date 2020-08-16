import { maxU } from './maxU'
import { minU } from './minU'

export const clampU = (low, high, n) => maxU(low, minU(high, n))

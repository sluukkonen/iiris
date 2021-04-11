import { maxU } from './maxU.js'
import { minU } from './minU.js'

export const clampU = ([low, high], n) => minU(high, maxU(low, n))

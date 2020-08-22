import { maximumMinimum } from './maximumMinimum'
import { minU } from './minU'

export const minimumByU = (fn, array) => maximumMinimum(fn, array, minU)

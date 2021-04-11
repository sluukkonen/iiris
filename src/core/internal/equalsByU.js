import { equalsU } from './equalsU.js'

export const equalsByU = (fn, a, b) => equalsU(fn(a), fn(b))

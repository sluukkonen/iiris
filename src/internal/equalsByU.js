import { equalsU } from './equalsU'

export const equalsByU = (fn, a, b) => equalsU(fn(a), fn(b))

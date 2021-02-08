import { differenceWithU } from './differenceWithU'
import { equalsU } from './equalsU'

export const differenceU = (xs, ys) => differenceWithU(equalsU, xs, ys)

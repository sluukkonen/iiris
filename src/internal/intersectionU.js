import { equalsU } from './equalsU'
import { intersectionWithU } from './intersectionWithU'

export const intersectionU = (xs, ys) => intersectionWithU(equalsU, xs, ys)

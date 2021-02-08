import { equalsU } from './equalsU'
import { unionWithU } from './unionWithU'

export const unionU = (xs, ys) => unionWithU(equalsU, xs, ys)

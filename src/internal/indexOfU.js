import { indexOfBy } from './indexOfBy'
import { equalsU } from './equalsU'

export const indexOfU = (value, array) => indexOfBy(equalsU, value, array)

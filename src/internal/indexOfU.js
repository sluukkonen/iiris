import { equalsU } from './equalsU'
import { indexOfBy } from './indexOfBy'

export const indexOfU = (value, array) => indexOfBy(equalsU, value, array)

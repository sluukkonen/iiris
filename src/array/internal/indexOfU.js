import { equalsU } from '../../internal/equalsU.js'
import { indexOfBy } from './indexOfBy.js'

export const indexOfU = (value, array) => indexOfBy(equalsU, value, array)

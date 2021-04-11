import { equalsU } from '../../core/internal/index.js'
import { indexOfBy } from './indexOfBy.js'

export const indexOfU = (value, array) => indexOfBy(equalsU, value, array)

import { equalsU } from '../../core/internal/equalsU.js'
import { includesBy } from './includesBy.js'

export const includesU = (value, array) => includesBy(equalsU, value, array)

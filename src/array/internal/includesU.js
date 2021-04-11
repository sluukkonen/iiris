import { equalsU } from '../../core/internal/index.js'
import { includesBy } from './includesBy.js'

export const includesU = (value, array) => includesBy(equalsU, value, array)

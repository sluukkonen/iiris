import { equalsU } from './equalsU'
import { includesBy } from './includesBy'

export const includesU = (value, array) => includesBy(equalsU, value, array)

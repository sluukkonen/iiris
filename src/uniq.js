import { uniqWithU } from './internal/uniqWithU'
import { equalsU } from './internal/equalsU'

export const uniq = (array) => uniqWithU(equalsU, array)

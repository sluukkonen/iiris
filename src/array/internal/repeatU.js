import { constant } from '../../constant.js'
import { timesU } from './timesU.js'

export const repeatU = (value, n) => timesU(constant(value), n)

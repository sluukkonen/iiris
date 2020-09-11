import { constant } from '../constant'
import { timesU } from './timesU'

export const repeatU = (value, n) => timesU(constant(value), n)

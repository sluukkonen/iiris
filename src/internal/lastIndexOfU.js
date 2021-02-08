import { equalsU } from './equalsU'
import { lastIndexOfBy } from './lastIndexOfBy'

export const lastIndexOfU = (value, array) =>
  lastIndexOfBy(equalsU, value, array)

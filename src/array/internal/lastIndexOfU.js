import { equalsU } from '../../core/internal/equalsU.js'
import { lastIndexOfBy } from './lastIndexOfBy.js'

export const lastIndexOfU = (value, array) =>
  lastIndexOfBy(equalsU, value, array)

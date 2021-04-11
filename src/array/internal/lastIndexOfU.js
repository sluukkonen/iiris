import { equalsU } from '../../core/internal/index.js'
import { lastIndexOfBy } from './lastIndexOfBy.js'

export const lastIndexOfU = (value, array) =>
  lastIndexOfBy(equalsU, value, array)

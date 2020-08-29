import { modifyU } from './modifyU'
import { constant } from '../constant'

export const setU = (key, value, target) =>
  modifyU(key, constant(value), target)
